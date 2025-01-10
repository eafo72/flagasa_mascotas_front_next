import Link from "next/link";
import Image from 'next/image';
import about_image from "../../images/about/about-vision.jpg";


const About = async () => {
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
                    <li>Quiénes somos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq_section sec_space_small">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div style={{ padding: "30px 0px" }}>
                  <p>
                    Somos una empresa 100% mexicana, líder en la producción de
                    alimento balanceado para animales. Tenemos más de 65 años de
                    experiencia en el mercado iniciando actividades en 1995
                    produciendo alimento para el establo ganadero Santa Mónica
                    .Tres años más tarde se inicia formalmente la
                    comercialización de alimentos balanceados,ampliando la gama
                    de productos al introducir alimentos para aves, cerdos y
                    especialidades.
                  </p>

                  <p>
                    Actualmente operamos en nuestra planta ubicada en la Ciudad
                    de México, produciendo y comercializando alimentos
                    balanceados , ya que contamos con instalaciones y procesos
                    de clase mundial, en los cuales se lleva acabo estrictos
                    controles de calidad.Nuestro equipo de trabajo,compuesto por
                    nutriologos especializados en cada una de las especies ,está
                    altamente calificado y comprometido para satisfacer las
                    necesidades de nuestros clientes;esto nos permite incorporar
                    avances nutricionales más relevantes en la
                    actualidad.Entendemos perfectamente las necesidades del
                    mercado ya que somos una planta de alimentos comercial
                    integrada con granjas de producción de cerdos y pollos.
                  </p>
                  <br/>
                  <br/>
                  <div class="row ">
                    <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                      <Image
                        class="img-stretch"
                        src={about_image}
                        alt={about_image}
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <h2 class="fw-bold pt-3 pb-3">Nuestros Valores</h2>

                      <h4 class="fw-bold">Misión</h4>
                      <p>
                        Fabricar alimentos balanceados de la más alta calidad
                        que sean rentables para Nuestros Clientes.
                      </p>

                      <h4 class="fw-bold">Visión</h4>
                      <p>
                        Contribuir al bienestar de todos los integrantes de la
                        cadena productiva ofreciendo servicios y alimentos
                        seguros, diseñados con los últimos avances en nutrición
                        y tecnología en la elaboración de Alimentos Balanceados.
                      </p>
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

export default About;
