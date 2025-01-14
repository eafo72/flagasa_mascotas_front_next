"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import Link from "next/link";

import Image from "next/image";
import logo_footer from "../images/logo/logo-small-footer.png";

import { usePathname } from "next/navigation";

import { useCartStore } from "../store/cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const NavbarOptions = ({ categories }) => {
  const { cart } = useCartStore(); //debe de ir aqui arriba por ser un hook y evitar errores

  const pathname = usePathname();

  function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="menu_wrap" key={pathname}>
        <nav className="main_menu navbar navbar-expand-lg">
          <button
            id="btn_hamburger"
            onClick={() => {
              openNav();
            }}
            className="mobile_menu_btn navbar-toggler"
            type="button"
          >
            <span className="navbar-toggler-icon">
              <i className="fal fa-bars"></i>
            </span>
          </button>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.75,
            }}
            className="main_menu_inner collapse navbar-collapse"
            id="main_menu_dropdown"
          >
            <ul className="main_menu_list ul_li">
              {pathname === "/" ? (
                <li className="active dropdown">
                  <button
                    className="nav-link"
                    onClick={() => {
                      window.location.href = "/"; // Redirige a la página de inicio
                    }}
                  >
                    Inicio
                  </button>
                </li>
              ) : (
                <li className="dropdown">
                  <button
                    className="nav-link"
                    onClick={() => {
                      window.location.href = "/"; // Redirige a la página de inicio
                    }}
                  >
                    Inicio
                  </button>
                </li>
              )}

              {pathname.startsWith("/categories") ? (
                <li className="active dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    id="categories_submenu"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Fórmulas especializadas
                  </a>
                  <div
                    className="megamenu dropdown-menu"
                    aria-labelledby="categories_submenu"
                  >
                    <div className="container">
                      <ul className="homepage_list ul_li">
                        {categories &&
                          categories.map((item, index) => (
                            <li key={index}>
                              <a
                                href={`/categories/Todas/${item.nombreSlugged}`}
                              >
                                <span
                                  className="item_image"
                                  style={{ backgroundColor: "transparent" }}
                                >
                                  <img
                                    src={item.imagen}
                                    style={{ height: "60px" }}
                                    alt={item.imagen}
                                    className="img-fluid"
                                  />
                                </span>
                                <span className="item_title">
                                  {item.nombre}
                                </span>
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ) : (
                <li className="dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    id="categories_submenu"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Fórmulas especializadas
                  </a>
                  <div
                    className="megamenu dropdown-menu"
                    aria-labelledby="categories_submenu"
                  >
                    <div className="container">
                      <ul className="homepage_list ul_li">
                        {categories &&
                          categories.map((item, index) => (
                            <li key={index}>
                              <a
                                href={`/categories/Todas/${item.nombreSlugged}`}
                              >
                                <span
                                  className="item_image"
                                  style={{ backgroundColor: "transparent" }}
                                >
                                  <img
                                    src={item.imagen}
                                    style={{ height: "60px" }}
                                    alt={item.imagen}
                                    className="img-fluid"
                                  />
                                </span>
                                <span className="item_title">
                                  {item.nombre}
                                </span>
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </li>
              )}

              {pathname === "/about" ? (
                <li className="active dropdown">
                  <Link className="nav-link" href="/about">
                    ¿Quiénes somos?
                  </Link>
                </li>
              ) : (
                <li className="dropdown">
                  <Link className="nav-link" href="/about">
                    ¿Quiénes somos?
                  </Link>
                </li>
              )}

              {pathname === "/resellers" ? (
                <li className="active dropdown">
                  <Link className="nav-link" href="/resellers">
                    Distribuidores
                  </Link>
                </li>
              ) : (
                <li className="dropdown">
                  <Link className="nav-link" href="/resellers">
                    Distribuidores
                  </Link>
                </li>
              )}

              {pathname === "/faq" ? (
                <li className="active dropdown">
                  <Link className="nav-link" href="/faq">
                    FAQ
                  </Link>
                </li>
              ) : (
                <li className="dropdown">
                  <Link className="nav-link" href="/faq">
                    FAQ
                  </Link>
                </li>
              )}

              {pathname === "/contact" ? (
                <li className="active dropdown">
                  <Link className="nav-link" href="/contact">
                    Contacto
                  </Link>
                </li>
              ) : (
                <li className="dropdown">
                  <Link className="nav-link" href="/contact">
                    Contacto
                  </Link>
                </li>
              )}
            </ul>
          </motion.div>
        </nav>

        <ul className="header_icons_group ul_li icons_position_normal">
          {/*
                <li>
                  <button type="button" className="main_search_btn" data-bs-toggle="collapse" data-bs-target="#main_search_collapse" aria-expanded="false" aria-controls="main_search_collapse">
                    <i className="search_icon far fa-search"></i>
                    <i className="search_close fal fa-times"></i>
                  </button>
                </li>
                */}
          {/*
        <li>
          <Link className="cart_btn" href="/cart" onClick={() => {closeNav()}} style={{marginRight:"20px"}}>
            <i className="far fa-shopping-bag"></i>
            <small className="cart_counter">{cart.length}</small>
          </Link>
        </li>
        */}
        </ul>
      </div>

      {/*--------------------------------------------------------SIDENAV ----------------------------------------------*/}

      <div id="mySidenav" className="sidenav">
        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <button
            className="closebtn"
            onClick={() => {
              closeNav();
            }}
          >
            <i className="fal fa-times"></i>
          </button>

          <div align="center" class="pb-3">
            <Image
              style={{ height: "100px", width: "100px" }}
              src={logo_footer}
              alt={logo_footer}
            />
          </div>

          
          <button
            class={`sidenav_menu_item ${pathname === "/" ? "text-color-green" : ""}`}
            onClick={() => {
              closeNav(); // Llama a la función para cerrar el menú
              window.location.href = "/"; // Redirige a la página de inicio
            }}
          >
            Inicio
          </button>
          

          <div className="accordion-item">
            <button
              class={`collapsed sidenav_menu_item separator d-flex justify-content-between align-items-center ${pathname.startsWith("/categories") ? "text-color-green" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#accordion_primary`}
              aria-expanded={isExpanded}
              aria-controls={`accordion_primary`}
              onClick={toggleMenu}
            >
              Fórmulas especializadas
              <span className="text-primary toggle-icon">
                {isExpanded ? "-" : "+"}
              </span>{" "}
              {/* Ícono o indicador */}
            </button>
            <div
              id={`accordion_primary`}
              className="collapse"
              data-bs-parent={`#accordion_primary`}
            >
              <div className="accordion-body">
                {categories &&
                  categories.map((item, index) => (
                    <Link
                      style={{ borderTop: "1px solid #a2a2a2" }}
                      href={`/categories/Todas/${item.nombreSlugged}`}
                      onClick={() => {
                        closeNav();
                      }}
                      key={index}
                      className="submenu"
                    >
                      {item.nombre}
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          <Link
            class={`sidenav_menu_item separator ${pathname === "/about" ? "text-color-green" : ""}`}
            href="/about"
            onClick={() => {
              closeNav();
            }}
          >
            ¿Quiénes somos?
          </Link>

          <Link
            class={`sidenav_menu_item separator ${pathname === "/resellers" ? "text-color-green" : ""}`}
            href="/resellers"
            onClick={() => {
              closeNav();
            }}
          >
            Distribuidores
          </Link>

          <Link
            class={`sidenav_menu_item separator ${pathname === "/faq" ? "text-color-green" : ""}`}
            href="/faq"
            onClick={() => {
              closeNav();
            }}
          >
            FAQ
          </Link>

          <Link
            class={`sidenav_menu_item separator ${pathname === "/contact" ? "text-color-green" : ""}`}
            href="/contact"
            onClick={() => {
              closeNav();
            }}
          >
            Contacto
          </Link>
        </div>
      </div>
    </>
  );
};
