export default {
    images: {
      domains: ["flagasamascotas.com"], // Reemplaza con el dominio correcto
    },
    async headers() {
      return [
        {
          source: "/_next/image(.*)",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=0, must-revalidate",
            },
          ],
        },
      ];
    },
  };