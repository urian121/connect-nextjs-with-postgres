'use client';
import { useState } from 'react';

export default function DatabaseTest() {
  const [connectionStatus, setConnectionStatus] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState({ connection: false, users: false });

  const testConnection = async () => {
    setLoading(prev => ({ ...prev, connection: true }));
    try {
      const response = await fetch('/api/test-connection');
      const data = await response.json();
      setConnectionStatus(data);
    } catch (error) {
      setConnectionStatus({ success: false, error: 'Error de red' });
    } finally {
      setLoading(prev => ({ ...prev, connection: false }));
    }
  };

  const loadUsuarios = async () => {
    setLoading(prev => ({ ...prev, users: true }));
    try {
      const response = await fetch('/api/usuarios');
      const data = await response.json();
      if (data.success) setUsuarios(data.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(prev => ({ ...prev, users: false }));
    }
  };

  return (
    <div className="p-3">
      <div className="mb-3">
        <button
          onClick={testConnection}
          disabled={loading.connection}
          className="btn btn-primary me-2"
        >
          {loading.connection ? (
            <span className="spinner-border spinner-border-sm me-1"></span>
          ) : (
            <i className="bi bi-database me-1"></i>
          )}
          Probar Conexión
        </button>

        <button
          onClick={loadUsuarios}
          disabled={loading.users}
          className="btn btn-outline-primary"
        >
          {loading.users ? (
            <span className="spinner-border spinner-border-sm me-1"></span>
          ) : (
            <i className="bi bi-people me-1"></i>
          )}
          Mostrar Usuarios
        </button>
      </div>

      {connectionStatus && (
        <div className={`alert ${connectionStatus.success ? 'alert-success' : 'alert-danger'} mb-3`}>
          {connectionStatus.message || connectionStatus.error}
        </div>
      )}

      {usuarios.length > 0 && (
        <div className="mt-3">
          <h5>Usuarios:</h5>
          <ul className="list-group">
            {usuarios.map(usuario => (
              <li key={usuario.id} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <span>{usuario.nombre || 'Sin nombre'}</span>
                  <small className="text-muted">{usuario.email}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}