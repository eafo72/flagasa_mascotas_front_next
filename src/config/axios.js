import axios from "axios"

const clienteAxios = axios.create({
 baseURL: "https://flagasa-mascotas-back.onrender.com",
 headers: {
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    "Pragma": "no-cache",
    "Expires": "0"
  }
})

const invalidateVercelCache = async () => {
  try {
    const response = await axios.post("https://api.vercel.com/v1/invalidate", {
      projectId: "prj_r5qHjuFUalyh94eD0xGr1uEOZoDd", // Reemplaza con tu ID de proyecto
      paths: ["/categoria/obtener"] // La ruta de tu API que quieres invalidar
    }, {
      headers: {
        Authorization: `Bearer OLxpUkXFKWYPAZyHKRiA4CzY`, // Reemplaza con tu token de acceso
        "Content-Type": "application/json"
      }
    });
    console.log("Cache invalidado con éxito:", response.data);
  } catch (error) {
    console.error("Error invalidando caché:", error);
  }
};

export default clienteAxios;
export { invalidateVercelCache };
