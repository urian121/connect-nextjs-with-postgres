import { NextResponse } from 'next/server';
import pool from '../../lib/db';

export async function GET() {
  try {
    // Usando el pool directamente para la consulta
    const result = await pool.query('SELECT NOW() as current_time');
    
    return NextResponse.json({
      success: true,
      message: 'Conexión exitosa a PostgreSQL',
      timestamp: result.rows[0].current_time,
      database: result.rows[0].current_time ? 'Conexión activa' : 'Sin datos'
    });
  } catch (error) {
    console.error('Error de conexión:', error);
    
    // Información adicional para depuración
    const errorInfo = {
      message: error.message,
      code: error.code,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    };
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al conectar con la base de datos',
        details: errorInfo
      },
      { status: 500 }
    );
  }
}