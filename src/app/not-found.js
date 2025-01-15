import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-4">Página no encontrada</h2>
      <p className="lead">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>

      <button
        className="btn btn-primary btn-rounded btn-view mt-3"
        onClick={() => {
          window.location.href = "/"; // Redirige a la página de inicio
        }}
      >
        Volver al inicio
      </button>
    </div>
  );
}
