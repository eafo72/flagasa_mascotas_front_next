import axios from "axios"

const clienteAxios = axios.create({
 baseURL: "https://flagasa-mascotas-back.onrender.com",
 headers: {
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    "Pragma": "no-cache",
    "Expires": "0"
  }
})

export default clienteAxios