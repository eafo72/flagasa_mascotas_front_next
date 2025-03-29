import Link from "next/link";
import Image from "next/image";

import mision_image from "../../images/about/icon-misión-vision.png";

import { AboutComponent } from "./AboutComponent";

const About = async () => {
  const getData = async () => {
    try {
      const res = await fetch(
        `https://flagasa-mascotas-back.onrender.com/nosotros/single/67e71c202f583fead9334f55`,
        { cache: "no-store" }
      );
      const data = await res.json();

      return data["single"];
    } catch (error) {
      console.log(error);
    }
  };

  const about = await getData();

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
                      <a className="home_btn" href="/">
                        Inicio
                      </a>
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
                  <div className="row ">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                      <img
                        src={`${about.banner}`}
                        alt={`${about.banner}`}
                        className="img-stretch pb-5"
                      />
                    </div>
                  </div>

                  <AboutComponent about={about}></AboutComponent>

                  <br />
                  <br />
                  <div className="row ">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                      <img
                        src={`${about.imagen}`}
                        alt={`${about.imagen}`}
                        className="img-stretch"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <h2 className="fw-bold text-center pt-5 pb-5">
                        NUESTROS VALORES
                      </h2>

                      <div className="row align-items-center">
                        <div className="col-3">
                          <Image
                            className="img-stretch"
                            src={mision_image}
                            alt={mision_image}
                          />
                        </div>
                        <div className="col-9">
                          <h4 className="fw-bold">Misión</h4>
                          <p>{about && about.mision}</p>
                        </div>
                      </div>

                      <div className="row align-items-center">
                        <div className="col-3">
                          <Image
                            className="img-stretch"
                            src={mision_image}
                            alt={mision_image}
                          />
                        </div>
                        <div className="col-9">
                          <h4 className="fw-bold">Visión</h4>
                          <p>{about && about.vision}</p>
                        </div>
                      </div>
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
