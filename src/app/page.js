'use client';
import DatabaseTest from './components/DatabaseTest';

export default function Home() {
  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center bg-light p-3">
      <div className="text-center">
        <h1 className="h4 mb-4 fs-1 fw-bold">Conexión Next.js con PostgreSQL</h1>
        <DatabaseTest />
      </div>
    </main>
  );
}