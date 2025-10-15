# Forms Setup Guide

## Overview

All forms in the bansohi project have been successfully set up with a Neon PostgreSQL database backend. The forms now store submissions in a database and provide a comprehensive admin interface to view and manage all submissions.

## What's Been Implemented

### 1. Database Setup
- ✅ Created Neon PostgreSQL database project: `shiny-brook-79995037`
- ✅ Created `contact_submissions` table with proper schema
- ✅ Created `consultation_submissions` table with proper schema
- ✅ Added indexes for performance optimization
- ✅ Added automatic timestamp triggers

### 2. API Routes
- ✅ `POST /api/contact` - Submit contact form
- ✅ `GET /api/contact` - Retrieve contact submissions
- ✅ `GET /api/admin/contact-submissions` - Admin endpoint with pagination
- ✅ `DELETE /api/admin/contact-submissions` - Delete contact submissions
- ✅ `POST /api/consultation` - Submit consultation form
- ✅ `GET /api/consultation` - Retrieve consultation submissions
- ✅ `DELETE /api/consultation/[id]` - Delete consultation submissions
- ✅ `POST /api/upload` - Handle file uploads for consultation forms

### 3. Frontend Updates
- ✅ Updated contact form to use real API instead of simulation
- ✅ Updated consultation form to use real API with file upload support
- ✅ Added proper error handling and loading states for both forms
- ✅ Created comprehensive admin page at `/admin` with tabbed interface
- ✅ Added file upload functionality with validation

### 4. Dependencies
- ✅ Added `pg` and `@types/pg` for PostgreSQL connectivity

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the project root with:

```env
DATABASE_URL=postgresql://neondb_owner:npg_QBy8Td4mXetw@ep-curly-darkness-ad6rc0qp-pooler.c-2.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require
NEON_PROJECT_ID=shiny-brook-79995037
NEON_BRANCH_ID=br-fragrant-dawn-adns5b3a
```

### 2. Database Schema

The forms use these table structures:

**Contact Form:**
```sql
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

**Consultation Form:**
```sql
CREATE TABLE consultation_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  project_type VARCHAR(100) NOT NULL,
  budget VARCHAR(50),
  timeline VARCHAR(50),
  description TEXT NOT NULL,
  file_name VARCHAR(255),
  file_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Running the Application

```bash
# Install dependencies (if not already done)
npm install

# Start the development server
npm run dev
```

## Features

### Contact Form (`/contact`)
- Real-time form validation
- Database storage of submissions
- Success/error feedback
- Responsive design

### Consultation Form (`/consultation`)
- Comprehensive project details form
- File upload support (PDF, DOC, DOCX, TXT, MD)
- Project type, budget, and timeline selection
- Database storage with file references
- Success/error feedback
- Responsive design

### Admin Panel (`/admin`)
- Tabbed interface for different form types
- View all contact and consultation submissions
- Pagination support for contact forms
- Delete submissions
- Real-time stats
- File download links for consultation attachments
- Responsive design

## API Endpoints

### Submit Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "subject": "Project Inquiry",
  "message": "I'm interested in your services..."
}
```

### Submit Consultation Form
```http
POST /api/consultation
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "projectType": "mobile-app",
  "budget": "5k-15k",
  "timeline": "3-6months",
  "description": "I need a mobile app for my business...",
  "fileName": "requirements.pdf",
  "fileUrl": "/uploads/1234567890_requirements.pdf"
}
```

### Upload File
```http
POST /api/upload
Content-Type: multipart/form-data

file: [binary file data]
```

### Get Contact Submissions (Admin)
```http
GET /api/admin/contact-submissions?page=1&limit=20
```

### Get Consultation Submissions (Admin)
```http
GET /api/consultation
```

### Delete Contact Submission (Admin)
```http
DELETE /api/admin/contact-submissions?id=123
```

### Delete Consultation Submission (Admin)
```http
DELETE /api/consultation/123
```

## Database Connection Details

- **Project ID**: `shiny-brook-79995037`
- **Branch ID**: `br-fragrant-dawn-adns5b3a`
- **Database**: `neondb`
- **Region**: US East 1 (AWS)

## Testing

The database has been tested with sample records. You can verify the setup by:

1. Visiting `/contact` and submitting the contact form
2. Visiting `/consultation` and submitting the consultation form (with optional file upload)
3. Visiting `/admin` to view both types of submissions
4. Testing file uploads and downloads
5. Checking the database directly via Neon console

## Security Notes

- The admin panel is currently accessible to anyone. Consider adding authentication for production use.
- Database credentials are stored in environment variables.
- Input validation is implemented on both frontend and backend.

## Next Steps

1. Add authentication to the admin panel
2. Add email notifications for new submissions
3. Add export functionality for submissions
4. Add search and filtering capabilities
5. Add rate limiting to prevent spam
6. Add file cleanup for deleted submissions
7. Add form analytics and reporting
8. Add email templates for different form types

## Troubleshooting

### Database Connection Issues
- Verify the `DATABASE_URL` environment variable is correct
- Check that the Neon project is active
- Ensure the connection string includes SSL parameters

### Form Submission Issues
- Check browser console for JavaScript errors
- Verify API routes are accessible
- Check server logs for database errors

### Admin Panel Issues
- Ensure you're accessing `/admin` (not `/admin/`)
- Check that the API endpoints are responding
- Verify database permissions
