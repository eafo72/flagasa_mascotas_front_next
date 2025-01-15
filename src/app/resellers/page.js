"use client";

import { useState } from "react";

import clienteAxios from "../../config/axios";

import { toast } from "sonner";

import Link from "next/link";
import Image from "next/image";

import img_infraestructura from "../../images/resellers/infraestructura.png";
import img_potencial from "../../images/resellers/potencial.png";
import img_solvencia from "../../images/resellers/solvencia.png";
import img_vision from "../../images/resellers/vision.png";

const Resellers = async () => {
  const [nombre1, setNombre1] = useState();
  const [telefono1, setTelefono1] = useState();
  const [correo1, setCorreo1] = useState();
  const [mensaje1, setMensaje1] = useState();

  const mostrarMensaje = (mensaje1) => {
    toast.error(mensaje1);
  };

  const mostrarAviso = (mensaje1) => {
    toast.success(mensaje1);
  };

  async function goSendMail(event) {
    event.preventDefault();

    if (nombre1 === "" || nombre1 === undefined) {
      mostrarMensaje("Debes escribir tu nombre");
    } else if (telefono1 === "" || telefono1 === undefined) {
      mostrarMensaje("Debes escribir tu teléfono");
    } else if (correo1 === "" || correo1 === undefined) {
      mostrarMensaje("Debes escribir tu correo");
    } else if (mensaje1 === "" || mensaje1 === undefined) {
      mostrarMensaje("Debes escribir un mensaje");
    } else {
      const sendMail = async (dataForm) => {
        try {
          await clienteAxios.post("/usuario/contacto", dataForm);

          mostrarAviso(
            "Gracias, hemos recibido tu mensaje, pronto estarémos en contacto."
          );

          setNombre1(null);
          setTelefono1(null);
          setCorreo1(null);
          setMensaje1(null);

          document.getElementById("nombre1").value = "";
          document.getElementById("telefono1").value = "";
          document.getElementById("correo1").value = "";
          document.getElementById("mensaje1").value = "";
        } catch (error) {
          console.log(error);
          mostrarMensaje(error.response.data.msg);
        }
      };

      sendMail({
        nombre1,
        telefono1,
        correo1,
        mensaje1,
      });
    }
  }
  return (
    <>
      <main style={{ minHeight: "70vh" }}>
        <section className="breadcrumb_section">
          <div className="container">
            <div className="row">
              <div className="col col-lg-6">
                <div className="breadcrumb_content">
                  <ul className="breadcrumb_nav ul_li_center">
                    <li>
                      <Link className="home_btn" href="/">
                        Inicio
                      </Link>
                    </li>
                    <li>Distribuidores</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq_section sec_space_small">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div style={{ padding: "30px 0px" }}>
                  <div class="pb-5 text-center">
                    <h2 class="fw-bold pt-3 pb-3">Distribución Centinela</h2>

                    <p>
                      Buscamos distribuidores locales y regionales de nuestro
                      producto estrella: CENTINELA.
                    </p>
                  </div>
                  <div class="row">
                    <div class="col-12 col-md-3 text-center">
                      <Image
                        class="img-fluid"
                        src={img_infraestructura}
                        alt={img_infraestructura}
                      />
                      <h4>Infraestructura</h4>
                      <br />
                      <p>
                        Capacidad de compra, almacenamiento y distribución de al
                        menos 4 toneladas de producto al mes, correo electrónico
                        y/o teléfono.
                      </p>
                    </div>
                    <div class="col-12 col-md-3 text-center">
                      <Image
                        class="img-fluid"
                        src={img_vision}
                        alt={img_vision}
                      />
                      <h4>Visión de crecimiento</h4>
                      <br />
                      <p>
                        Buscamos distribuidores con una visión de negocio de
                        largo plazo para desarrollar mercados locales y
                        regionales de venta.
                      </p>
                    </div>
                    <div class="col-12 col-md-3 text-center">
                      <Image
                        class="img-fluid"
                        src={img_solvencia}
                        alt={img_solvencia}
                      />
                      <h4>Solvencia económica</h4>
                      <br />
                      <p>
                        Contar con el capital económico necesario para la
                        demanda del mercado en la zona.
                      </p>
                    </div>
                    <div class="col-12 col-md-3 text-center">
                      <Image
                        class="img-fluid"
                        src={img_potencial}
                        alt={img_potencial}
                      />
                      <h4>Mercado local o regional</h4>
                      <br />
                      <p>
                        Buscamos distribuidores locales o regionales que
                        conozcan el potencial de mercado de la zona acordada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <form onSubmit={(e) => goSendMail(e)}>
                <h2>Solicita información</h2>
                <div className="form_item">
                  <h3 className="input_title">Nombre</h3>
                  <input
                    onChange={(e) => setNombre1(e.target.value)}
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    id="nombre1"
                  />
                </div>
                <div className="form_item">
                  <h3 className="input_title">Teléfono</h3>
                  <input
                    onChange={(e) => setTelefono1(e.target.value)}
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    id="telefono1"
                  />
                </div>
                <div className="form_item">
                  <h3 className="input_title">Correo</h3>
                  <input
                    onChange={(e) => setCorreo1(e.target.value)}
                    type="email"
                    name="correo"
                    placeholder="Correo"
                    id="correo1"
                  />
                </div>
                <div className="form_item">
                  <h3 className="input_title">Mensaje</h3>
                  <textarea
                    onChange={(e) => setMensaje1(e.target.value)}
                    name="mensaje"
                    placeholder="Escribe tu mensaje"
                    id="mensaje1"
                  ></textarea>
                </div>
                <button className="btn btn_primary btn_rounded" type="submit">
                  Enviar
                </button>
              </form>
              <br/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Resellers;
