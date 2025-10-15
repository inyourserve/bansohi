import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// Database connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    // Get total count
    const countQuery = 'SELECT COUNT(*) FROM contact_submissions';
    const countResult = await pool.query(countQuery);
    const total = parseInt(countResult.rows[0].count);

    // Get submissions with pagination
    const query = `
      SELECT id, name, email, company, subject, message, created_at, updated_at
      FROM contact_submissions
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
    `;
    
    const result = await pool.query(query, [limit, offset]);
    
    return NextResponse.json({
      success: true,
      data: {
        submissions: result.rows,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit)
        }
      }
    });

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing submission ID' },
        { status: 400 }
      );
    }

    const query = 'DELETE FROM contact_submissions WHERE id = $1';
    const result = await pool.query(query, [id]);

    if (result.rowCount === 0) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Submission deleted successfully'
    });

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
