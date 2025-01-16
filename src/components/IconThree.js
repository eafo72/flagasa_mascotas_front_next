"use client";

import { motion } from "framer-motion";

export const IconThree = () => {
  return (
    <>
      <motion.div
        className="icon"
        initial={{ opacity: 0, x: -100 }} // Inicia invisible y desplazado a la izquierda
        whileInView={{ opacity: 1, x: 0 }} // Se anima a la posición original con opacidad completa
        transition={{ duration: 0.8 }} // Duración de la animación
        //viewport={{ once: false, amount: 0.5 }} // Activa la animación cada vez que el 50% del elemento es visible
        viewport={{ once: true }} // Activa la animación cada vez que el 50% del elemento es visible
      >
        <img
          src="https://agencianuba.com/flagasamascotas_front_images/icons/icon-sabor.png"
          alt="image_not_found"
          style={{ maxHeight: "60px" }}
        />
      </motion.div>
    </>
  );
};
