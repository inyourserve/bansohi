"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Mail, 
  User, 
  Building, 
  MessageSquare, 
  Calendar,
  Trash2,
  RefreshCw
} from "lucide-react";

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  company: string | null;
  subject: string;
  message: string;
  created_at: string;
  updated_at: string;
}

interface ConsultationSubmission {
  id: number;
  name: string;
  email: string;
  company: string | null;
  project_type: string;
  budget: string | null;
  timeline: string | null;
  description: string;
  file_name: string | null;
  file_url: string | null;
  created_at: string;
  updated_at: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'contact' | 'consultation'>('contact');
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [consultationSubmissions, setConsultationSubmissions] = useState<ConsultationSubmission[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<number | null>(null);

  const fetchSubmissions = useCallback(async (page = 1) => {
    try {
      setLoading(true);
      setError(null);
      
      const endpoint = activeTab === 'contact' ? '/api/admin/contact-submissions' : '/api/consultation';
      const response = await fetch(`${endpoint}?page=${page}&limit=20`);
      const result = await response.json();

      if (response.ok) {
        if (activeTab === 'contact') {
          setContactSubmissions(result.data.submissions);
          setPagination(result.data.pagination);
        } else {
          setConsultationSubmissions(result.submissions);
          // For consultation, we'll create a simple pagination object
          setPagination({
            page: 1,
            limit: 20,
            total: result.submissions.length,
            totalPages: 1
          });
        }
      } else {
        setError(result.error || 'Failed to fetch submissions');
      }
    } catch (err) {
      setError('Network error occurred');
      console.error('Error fetching submissions:', err);
    } finally {
      setLoading(false);
    }
  }, [activeTab]);

  const deleteSubmission = async (id: number) => {
    try {
      setDeleting(id);
      
      const endpoint = activeTab === 'contact' ? '/api/admin/contact-submissions' : `/api/consultation/${id}`;
      const response = await fetch(endpoint, {
        method: 'DELETE'
      });
      
      const result = await response.json();

      if (response.ok) {
        // Remove the deleted submission from the appropriate list
        if (activeTab === 'contact') {
          setContactSubmissions(prev => prev.filter(sub => sub.id !== id));
        } else {
          setConsultationSubmissions(prev => prev.filter(sub => sub.id !== id));
        }
        // Update pagination total
        if (pagination) {
          setPagination(prev => prev ? { ...prev, total: prev.total - 1 } : null);
        }
      } else {
        alert(result.error || 'Failed to delete submission');
      }
    } catch (err) {
      alert('Network error occurred');
      console.error('Error deleting submission:', err);
    } finally {
      setDeleting(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  useEffect(() => {
    fetchSubmissions();
  }, [activeTab, fetchSubmissions]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Form Submissions</h1>
          <p className="text-muted-foreground">
            Manage and view all form submissions from your website.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-border">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('contact')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'contact'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                }`}
              >
                Contact Forms
              </button>
              <button
                onClick={() => setActiveTab('consultation')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'consultation'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                }`}
              >
                Consultation Requests
              </button>
            </nav>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <Card className="p-6 mb-6 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
            <p className="text-red-600 dark:text-red-400">{error}</p>
            <Button 
              onClick={() => fetchSubmissions()} 
              variant="outline" 
              className="mt-4"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </Card>
        )}

        {/* Stats */}
        {pagination && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="p-6">
              <div className="flex items-center">
                <MessageSquare className="w-8 h-8 text-primary mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Submissions</p>
                  <p className="text-2xl font-bold text-foreground">{pagination.total}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-primary mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">This Page</p>
                  <p className="text-2xl font-bold text-foreground">{(activeTab === 'contact' ? contactSubmissions : consultationSubmissions).length}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center">
                <RefreshCw className="w-8 h-8 text-primary mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Pages</p>
                  <p className="text-2xl font-bold text-foreground">{pagination.totalPages}</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Submissions List */}
        {(activeTab === 'contact' ? contactSubmissions : consultationSubmissions).length === 0 ? (
          <Card className="p-12 text-center">
            <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No submissions yet</h3>
            <p className="text-muted-foreground">
              Contact form submissions will appear here once users start submitting them.
            </p>
          </Card>
        ) : (
          <div className="space-y-6">
            {(activeTab === 'contact' ? contactSubmissions : consultationSubmissions).map((submission) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{submission.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Mail className="w-4 h-4 mr-1" />
                          {submission.email}
                        </div>
                        {submission.company && (
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Building className="w-4 h-4 mr-1" />
                            {submission.company}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        {formatDate(submission.created_at)}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteSubmission(submission.id)}
                        disabled={deleting === submission.id}
                        className="mt-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        {deleting === submission.id ? (
                          <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  {activeTab === 'contact' ? (
                    <>
                      <div className="mb-4">
                        <h4 className="font-medium text-foreground mb-2">Subject:</h4>
                        <p className="text-muted-foreground">{(submission as ContactSubmission).subject}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Message:</h4>
                        <p className="text-muted-foreground whitespace-pre-wrap">{(submission as ContactSubmission).message}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mb-4">
                        <h4 className="font-medium text-foreground mb-2">Project Type:</h4>
                        <p className="text-muted-foreground">{(submission as ConsultationSubmission).project_type}</p>
                      </div>
                      
                      {(submission as ConsultationSubmission).budget && (
                        <div className="mb-4">
                          <h4 className="font-medium text-foreground mb-2">Budget:</h4>
                          <p className="text-muted-foreground">{(submission as ConsultationSubmission).budget}</p>
                        </div>
                      )}
                      
                      {(submission as ConsultationSubmission).timeline && (
                        <div className="mb-4">
                          <h4 className="font-medium text-foreground mb-2">Timeline:</h4>
                          <p className="text-muted-foreground">{(submission as ConsultationSubmission).timeline}</p>
                        </div>
                      )}
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-foreground mb-2">Description:</h4>
                        <p className="text-muted-foreground whitespace-pre-wrap">{(submission as ConsultationSubmission).description}</p>
                      </div>
                      
                      {(submission as ConsultationSubmission).file_name && (
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Attached File:</h4>
                          <a 
                            href={(submission as ConsultationSubmission).file_url || '#'} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 underline"
                          >
                            {(submission as ConsultationSubmission).file_name}
                          </a>
                        </div>
                      )}
                    </>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {pagination && pagination.totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              onClick={() => fetchSubmissions(pagination.page - 1)}
              disabled={pagination.page === 1}
            >
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {pagination.page} of {pagination.totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => fetchSubmissions(pagination.page + 1)}
              disabled={pagination.page === pagination.totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
