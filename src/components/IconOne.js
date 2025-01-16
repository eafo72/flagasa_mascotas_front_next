"use client";

import { motion } from "framer-motion";

export const IconOne = () => {
  return (
    <>
      <motion.div
        className="icon"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
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
