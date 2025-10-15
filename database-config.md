# Database Configuration

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL=postgresql://neondb_owner:npg_QBy8Td4mXetw@ep-curly-darkness-ad6rc0qp-pooler.c-2.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require

# Neon Project Details
NEON_PROJECT_ID=shiny-brook-79995037
NEON_BRANCH_ID=br-fragrant-dawn-adns5b3a
```

## Database Schema

The contact form uses the following table structure:

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

## API Endpoints

- `POST /api/contact` - Submit a contact form
- `GET /api/contact` - Retrieve contact submissions (for admin use)
