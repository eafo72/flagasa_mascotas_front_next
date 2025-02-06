import axios from "axios"

export const clienteAxios = axios.create({
 baseURL: "https://flagasa-mascotas-back.onrender.com",
 headers: {
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    "Pragma": "no-cache",
    "Expires": "0"
  }
})

export const invalidateVercelCache = async () => {
  try {
    const response = await axios.post("https://api.vercel.com/v1/invalidate", {
      projectId: "prj_r5qHjuFUalyh94eD0xGr1uEOZoDd", // Reemplaza con tu ID de proyecto
      paths: ["/categoria/obtener"] // La ruta de tu API que quieres invalidar
    }, {
      headers: {
        Authorization: `Bearer SP2CzqPzxg9G2qZYbLWY2veN`, // Reemplaza con tu token de acceso
        "Content-Type": "application/json"
      }
    });
    console.log("Cache invalidado con éxito:", response.data);
  } catch (error) {
    console.error("Error invalidando caché:", error);
  }
};

