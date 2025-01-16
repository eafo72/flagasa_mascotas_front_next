"use client";

import { motion } from "framer-motion";

export const IconOne = () => {
  return (
    <>
      <motion.div
        className="icon"
        //initial={{ opacity: 0, y: -100 }} // Inicia invisible y desplazado a la izquierda
        //whileInView={{ opacity: 1, y: 0 }} // Se anima a la posición original con opacidad completa
        //transition={{ duration: 0.8 }} // Duración de la animación
        initial={{ opacity: 0, rotate: -180 }} // Comienza invisible y rotado -180°
        whileInView={{ opacity: 1, rotate: 0 }} // Se vuelve visible y rota a 0°
        transition={{ duration: 0.8, ease: "easeOut" }} // Duración de la animación con efecto suave
        viewport={{ once: false, amount: 0.5 }} // Activa la animación cada vez que el 50% del elemento es visible
      >
        <img
          src="https://agencianuba.com/flagasamascotas_front_images/icons/icon-insumos.png"
          alt="image_not_found"
          style={{ maxHeight: "60px" }}
        />
      </motion.div>
    </>
  );
};
