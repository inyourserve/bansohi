import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// Database connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    if (!id) {
      return NextResponse.json(
        { error: 'Missing submission ID' },
        { status: 400 }
      );
    }

    const query = 'DELETE FROM consultation_submissions WHERE id = $1';
    const result = await pool.query(query, [id]);

    if (result.rowCount === 0) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Consultation submission deleted successfully'
    });

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
