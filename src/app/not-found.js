import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-lg mt-4">Lo sentimos, la página que buscas no existe.</p>
      <Link href="/">
        <a className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Volver al inicio
        </a>
      </Link>
    </div>
  );
}