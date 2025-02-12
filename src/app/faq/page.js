import Link from "next/link";

import clienteAxios from "../../config/axios";


const Faq = async () => {
  const getFaqs = async () => {
    try {
      const res = await fetch('https://flagasa-mascotas-back.onrender.com/faq/obtener', { cache: 'no-store' });
      const data = await res.json();
      return data['faqs'];
    } catch (error) {
      console.log(error);
    }
  };

  const faqs = await getFaqs();

  return (
    <>
      <main style={{minHeight:"70vh"}}>
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
                    <li>FAQ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq_section" style={{paddingTop:"20px", minHeight:"50vh"}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h2 class="fw-bold pt-3 pb-3 text-center">Preguntas Frecuentes</h2>

                <div className="accordion_primary" id="accordion_primary">
                  {faqs &&
                    faqs.map((item, index) => (
                      <div key={index} className="accordion-item">
                        <button
                          className="collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#accordion_primary_${index}`}
                          aria-expanded="false"
                          aria-controls={`accordion_primary_${index}`}
                        >
                          {item.pregunta}
                        </button>
                        <div
                          id={`accordion_primary_${index}`}
                          className="collapse"
                          data-bs-parent={`#accordion_primary_${index}`}
                        >
                          <div className="accordion-body">
                            <p>{item.respuesta}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Faq;
