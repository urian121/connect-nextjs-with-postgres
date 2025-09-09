import { NextResponse } from 'next/server';
import pool from '../../lib/db';

export async function GET() {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query(
      'SELECT id, nombre, email, fecha_creacion FROM usuarios ORDER BY id'
    );
    return NextResponse.json({
      success: true,
      data: result.rows,
      total: result.rowCount
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  } finally {
    if (client) client.release();
  }
}