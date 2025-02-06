"use client";

import { motion } from "framer-motion";

export const HomeTitleOne = () => {
  return (
    <>
      <motion.div
       initial={{ scale: 0.3, opacity: 0, y: -50 }} // Empieza pequeño, invisible y arriba
       animate={{ scale: 1, opacity: 1, y: 0 }} // Termina en su tamaño normal y posición original
       transition={{
         type: "spring", // Usa animación tipo resorte para el rebote
         stiffness: 300, // Controla la fuerza del resorte
         damping: 10, // Controla la cantidad de rebote
       }}
      >
       
       <h2 className="small_title">Fórmulas</h2>

      </motion.div>
    </>
  );
};
