"use client";

import { motion } from "framer-motion";

export const HomeTitleTwo = () => {
  return (
    <>
      <motion.div
       initial={{ scale: 0.3, opacity: 0, y: -50 }} // Empieza pequeño, invisible y arriba
       whileInView={{ scale: 1, opacity: 1, y: 0 }} // Se agranda y baja cuando entra en pantalla
       transition={{
         type: "spring", // Usa animación tipo resorte para el rebote
         stiffness: 300, // Controla la fuerza del resorte
         damping: 10, // Controla la cantidad de rebote
       }}
       viewport={{ once: false, amount: 0.5 }} // Se ejecuta cada vez que entra al 50% en pantalla
     
      >
       
       <h2 className="small_title">Fórmulas especializadas</h2>

      </motion.div>
    </>
  );
};
