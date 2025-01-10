import Link from "next/link";


const About = async () => {
 

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
              <div className="col-lg-8">
                <div style={{padding:"30px 0px"}}>
                  




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
