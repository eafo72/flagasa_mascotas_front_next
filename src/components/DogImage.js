"use client";

import { motion } from "framer-motion";

export const DogImage = () => {
  return (
    <>
      <motion.div
        initial={{ y: 0 }} // Empieza en su posición inicial
        animate={{
          y: ["0px", "-30px", "0px"], // Movimiento de rebote: sube y baja
        }}
        transition={{
          duration: 1.6, // Duración de un ciclo
          ease: "easeInOut", // Tipo de animación para el rebote
          repeat: Infinity, // Repite infinitamente
          repeatType: "loop", // Loops para el movimiento continuo
        }}
      >
        <img
          src="https://agencianuba.com/flagasamascotas_front_images/banners/img-beneficios.png"
          alt="image_not_found"
        />
      </motion.div>
    </>
  );
};
