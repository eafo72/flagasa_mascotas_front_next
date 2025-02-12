import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-4">Página no encontrada</h2>
      <p className="lead">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      
      <a href="/" className="btn btn-primary mt-3">Volver al inicio</a>

    </div>
  );
}