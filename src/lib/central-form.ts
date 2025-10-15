// Central form submission utility for all projects

interface FormSubmissionData {
  [key: string]: any;
}

interface FileUpload {
  fileName: string;
  filePath: string;
  fileSize: number;
  mimeType: string;
}

interface CentralFormSubmission {
  projectName: string;
  formType: string;
  submissionData: FormSubmissionData;
  files?: FileUpload[];
}

export async function submitToCentralForm({
  projectName,
  formType,
  submissionData,
  files = []
}: CentralFormSubmission) {
  try {
    const response = await fetch('https://your-central-admin-domain.com/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectName,
        formType,
        submissionData,
        files
      }),
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        data: result
      };
    } else {
      return {
        success: false,
        error: result.error || 'Failed to submit form'
      };
    }
  } catch (error) {
    console.error('Central form submission error:', error);
    return {
      success: false,
      error: 'Network error occurred'
    };
  }
}

// Project-specific form submission functions
export async function submitContactForm(formData: FormSubmissionData) {
  return submitToCentralForm({
    projectName: 'bansohi',
    formType: 'contact',
    submissionData: formData
  });
}

export async function submitConsultationForm(formData: FormSubmissionData, files: FileUpload[] = []) {
  return submitToCentralForm({
    projectName: 'bansohi',
    formType: 'consultation',
    submissionData: formData,
    files
  });
}
