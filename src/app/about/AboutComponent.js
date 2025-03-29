'use client';

import { useState, useEffect } from 'react';

export const AboutComponent = ({ about }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return null; // No renderiza nada en el servidor
    }
  
    return (
      <p dangerouslySetInnerHTML={{ __html: about?.texto || '' }} />
    );
};


