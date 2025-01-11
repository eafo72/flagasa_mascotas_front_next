import Link from "next/link";
import Image from "next/image";

import img_infraestructura from "../../images/resellers/infraestructura.png";
import img_potencial from "../../images/resellers/potencial.png";
import img_solvencia from "../../images/resellers/solvencia.png";
import img_vision from "../../images/resellers/vision.png";

const Resellers = async () => {
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
              <div className="col-lg-10">
                <div style={{ padding: "30px 0px" }}>
                  <div class="pt-3 pb-3 text-center">
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
      </main>
    </>
  );
};

export default Resellers;
