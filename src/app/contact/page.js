import Link from "next/link";

import { ContactForm } from "./contact_form";

const Contact = async () => {
  return (
    <>
      <main>
        <section className="breadcrumb_section">
          <div className="container">
            <div className="row">
              <div className="col col-lg-6">
                <div className="breadcrumb_content">
                  <ul className="breadcrumb_nav ul_li_center">
                    <li>
                      <button
                        className="home_btn"
                        onClick={() => {
                          window.location.href = "/"; // Redirige a la página de inicio
                        }}
                      >
                      Inicio
                      </button>
                    </li>
                    <li>Contacto</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact_section sec_space_small p-4">
          <div className="container">
            <div className="contact3_wrap">
              <div className="row clearfix pt-3">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.3803745719706!2d-98.83743072402096!3d19.90836962531372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1bd27d8ea0d07%3A0xe650029c3a12c14!2sFlagasa%20mascotas%20-%20PLATAH!5e0!3m2!1ses!2smx!4v1738795675384!5m2!1ses!2smx"
                  style={{ width: "100%", height: "450px", border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="row">
                <div className="col">
                  <div className="contact_form3">
                    <ContactForm />
                  </div>
                </div>
                <div className="col">
                  <div className="contact_form3">
                    <div className="info_list">
                      <h4>Nuestra ubicación</h4>
                      <ul className="ul_li_block">
                        <li>
                          Lotes 3B y 4, Manzana 3 del Fraccionamiento Industrial
                          PLATAH,
                        </li>

                        <li>
                          Municipio Villa de Tezontepec, Hidalgo. C.P. 43894
                        </li>
                      </ul>
                    </div>
                    <div className="info_list">
                      <h4>Contáctanos</h4>
                      <ul className="ul_li_block">
                        <li>contacto@flagasa.com</li>
                      </ul>
                    </div>
                    <div className="social_wrap">
                      <h4>Síguenos en:</h4>
                      <ul className="social_border ul_li">
                        <li>
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        {/*
                        <li><a href="#!"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#!"><i className="fab fa-skype"></i></a></li>
                        <li><a href="#!"><i className="fas fa-envelope"></i></a></li>
                        <li><a href="#!"><i className="fab fa-whatsapp"></i></a></li>
                        */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
