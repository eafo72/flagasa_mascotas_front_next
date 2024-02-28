'use client'
import { useEffect } from "react";

export default function ImportSlickJS() {
  useEffect(() => {
    require("../js/home");
    }, []);
  return null;
}