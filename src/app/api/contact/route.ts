import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// Database connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Insert into database
    const query = `
      INSERT INTO contact_submissions (name, email, company, subject, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, created_at
    `;
    
    const values = [name, email, company || null, subject, message];
    const result = await pool.query(query, values);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        id: result.rows[0].id,
        created_at: result.rows[0].created_at
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const query = `
      SELECT id, name, email, company, subject, message, created_at
      FROM contact_submissions
      ORDER BY created_at DESC
      LIMIT 50
    `;
    
    const result = await pool.query(query);
    
    return NextResponse.json(
      { 
        success: true, 
        submissions: result.rows 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
