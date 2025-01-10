import Link from "next/link";

import clienteAxios from "../../config/axios";

const Aviso = async () => {
  const getAviso = async () => {
    try {
      const res = await clienteAxios.get(
        `/empresa/single/658c57daea3c61d484acf6fb`
      );
      //console.log(res.data)
      return res.data.single.aviso;
    } catch (error) {
      console.log(error);
    }
  };

  const avisoDeP = await getAviso();

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
                      <Link className="home_btn" href="/">
                        Inicio
                      </Link>
                    </li>
                    <li>Aviso de privacidad</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq_section sec_space_small">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div style={{ padding: "30px 0px" }}>
                  <p>
                    <span style="color:#4e5f70">Aviso de Privacidad </span>
                  </p>

                  <p>&nbsp;</p>

                  <p style="margin-left:0cm; margin-right:0cm; text-align:justify">
                    <span style="font-size:12pt">
                      <span style="background-color:white">
                        <span style="font-size:10.0pt">
                          <span style="color:#6e6e6e">
                            En cumplimiento a lo establecido por&nbsp; la Ley
                            Federal de Protecci&oacute;n de Datos Personales en
                            Posesi&oacute;n de Particulares y a los Art. 15 Y
                            16,&nbsp;
                          </span>
                        </span>
                        <strong>
                          <span style="font-size:10.0pt">
                            <span style="color:black">
                              F&Aacute;BRICA Y LABORATORIOS DE ALIMENTOS PARA
                              GANADER&Iacute;A Y AVICULTURA S.A. DE C.V.
                            </span>
                          </span>
                        </strong>
                        &nbsp;
                        <span style="font-size:10.0pt">
                          <span style="color:#6e6e6e">
                            con domicilio en Poniente 146 #900, Industrial
                            Vallejo, Azcapotzalco, Ciudad de M&eacute;xico,
                            Distrito Federal C.P. 02300, extiende y hace de su
                            conocimiento el presente Aviso de Privacidad de
                            Datos Personales.
                          </span>
                        </span>
                      </span>
                    </span>
                  </p>

                  <p style="margin-left:0cm; margin-right:0cm; text-align:justify">
                    <span style="font-size:12pt">
                      <span style="background-color:white">
                        <span style="font-size:10.0pt">
                          <span style="color:#6e6e6e">
                            Los Datos Personales y Datos Sensibles
                            proporcionados a&nbsp;
                          </span>
                        </span>
                        <strong>
                          <span style="font-size:10.0pt">
                            <span style="color:black">
                              F&Aacute;BRICA Y LABORATORIOS DE ALIMENTOS PARA
                              GANADER&Iacute;A Y AVICULTURA S.A. DE C.V.
                            </span>
                          </span>
                        </strong>
                        &nbsp;{" "}
                        <span style="font-size:10.0pt">
                          <span style="color:#6e6e6e">
                            tendr&aacute;n relaci&oacute;n directa con la
                            relaci&oacute;n que usted tiene en su
                            car&aacute;cter de consumidor, as&iacute; como
                            ser&aacute;n utilizados para identificarle,
                            ubicarle, comunicarle, contactarle y enviarle
                            informaci&oacute;n y/o mercanc&iacute;a.
                          </span>
                        </span>
                      </span>
                    </span>
                  </p>

                  <p style="margin-left:0cm; margin-right:0cm; text-align:justify">
                    <span style="font-size:12pt">
                      <span style="background-color:white">
                        <span style="font-size:10.0pt">
                          <span style="color:#6e6e6e">
                            Una vez que usted entregue a
                          </span>
                        </span>
                        &nbsp;
                        <strong>
                          <span style="font-size:10.0pt">
                            <span style="color:black">
                              F&Aacute;BRICA Y LABORATORIOS DE ALIMENTOS PARA
                              GANADER&Iacute;A Y AVICULTURA S.A. DE C.V.
                            </span>
                          </span>
                        </strong>
                        <span style="font-size:10.0pt">
                          <span style="color:#6e6e6e">
                            &nbsp;sus datos personales o datos sensibles, le
                            manifestamos que estos ser&aacute;n conservados,
                            cuyo acceso estar&aacute; limitado solamente a las
                            personas f&iacute;sicas y/o morales con las que WN
                            EL NOGAL S.C. DE R.L. DE C.V. tenga alguna
                            relaci&oacute;n jur&iacute;dica. Se contar&aacute;
                            con la medida de seguridad que se considere adecuada
                            para proteger el uso de sus Datos Personales.
                            Podr&aacute; ser efectuado por&nbsp;
                          </span>
                        </span>
                        <strong>
                          <span style="font-size:10.0pt">
                            <span style="color:black">
                              F&Aacute;BRICA Y LABORATORIOS DE ALIMENTOS PARA
                              GANADER&Iacute;A Y AVICULTURA S.A. DE C.V
                            </span>
                          </span>
                        </strong>
                        <strong>
                          <span style="font-size:10.0pt">
                            <span style="color:#125e16">.</span>
                          </span>
                        </strong>
                        <span style="font-size:10.0pt">
                          <span style="color:#6e6e6e">
                            &nbsp;de conformidad con los presentes
                            t&eacute;rminos y condiciones, hasta en tanto usted
                            manifieste su oposici&oacute;n mediante alguno de
                            los medios que indica la Ley.
                          </span>
                        </span>
                      </span>
                    </span>
                  </p>

                  <p style="margin-left:0cm; margin-right:0cm; text-align:justify">
                    <span style="font-size:12pt">
                      <span style="background-color:white">
                        <span style="font-size:10.0pt">
                          <span style="color:#6e6e6e">
                            Usted tendr&aacute; en todo momento el acceso a sus
                            Datos Personales y/o Datos Sensibles, ya sea para
                            solicitar su rectificaci&oacute;n,
                            cancelaci&oacute;n u oposici&oacute;n de conformidad
                            con lo dispuesto en la Ley, en forma escrita,
                            electr&oacute;nica o telef&oacute;nica, dirigiendo
                            su mensaje a&nbsp;
                          </span>
                        </span>
                        <strong>
                          <span style="font-size:10.0pt">
                            <span style="color:black">
                              F&Aacute;BRICA Y LABORATORIOS DE ALIMENTOS PARA
                              GANADER&Iacute;A Y AVICULTURA S.A. DE C.V.
                            </span>
                          </span>
                        </strong>
                        &nbsp;
                        <span style="font-size:10.0pt">
                          <span style="color:#6e6e6e">
                            en Poniente 146 #900, Industrial Vallejo,
                            Azcapotzalco, Ciudad de M&eacute;xico, Distrito
                            Federal C.P. 02300, o en la direcci&oacute;n
                            electr&oacute;nica:&nbsp;ventas@flagas.com, o a los
                            tel&eacute;fonos 50-10-87-00 y 01-800288-35-42 de
                            Lunes a Viernes de 8:30 a 18:00 horas,, en
                            d&iacute;as h&aacute;biles, seg&uacute;n
                            corresponda.
                          </span>
                        </span>
                      </span>
                    </span>
                  </p>

                  <p style="margin-left:0cm; margin-right:0cm; text-align:justify">
                    <span style="font-size:12pt">
                      <span style="background-color:white">
                        <span style="font-size:10.0pt">
                          <span style="color:#6e6e6e">
                            Usted tendr&aacute; derecho a que&nbsp;
                          </span>
                        </span>
                        <strong>
                          <span style="font-size:10.0pt">
                            <span style="color:black">
                              F&Aacute;BRICA Y LABORATORIOS DE ALIMENTOS PARA
                              GANADER&Iacute;A Y AVICULTURA S.A. DE C.V.
                            </span>
                          </span>
                        </strong>{" "}
                        <span style="font-size:10.0pt">
                          <span style="color:#6e6e6e">
                            le informe sobre cualquier transferencia que llegare
                            a efectuar a cualquier tercero, y para ello
                            ser&aacute; notificada tal acci&oacute;n ya sea de
                            forma escrita, telef&oacute;nica,
                            electr&oacute;nica, visual o cualquier otro que la
                            tecnolog&iacute;a permita ahora o en el futuro.
                            Usted tendr&aacute; derecho a oponerse a ello
                            siguiendo el proceso mencionado anteriormente.
                          </span>
                        </span>
                      </span>
                    </span>
                  </p>

                  <p style="margin-left:0cm; margin-right:0cm; text-align:justify">
                    <span style="font-size:12pt">
                      <span style="background-color:white">
                        <span style="font-size:10.0pt">
                          <span style="color:#6e6e6e">
                            En caso de que&nbsp;
                          </span>
                        </span>
                        <strong>
                          <span style="font-size:10.0pt">
                            <span style="color:black">
                              F&Aacute;BRICA Y LABORATORIOS DE ALIMENTOS PARA
                              GANADER&Iacute;A Y AVICULTURA S.A. DE C.V.
                            </span>
                          </span>
                        </strong>{" "}
                        <span style="font-size:10.0pt">
                          <span style="color:#6e6e6e">
                            requiera realizar alguna modificaci&oacute;n en su
                            Aviso de Privacidad y uso de sus Datos Personales,
                            se contactar&aacute; con usted ya sea en forma
                            escrita, telef&oacute;nica, electr&oacute;nica,
                            visual o cualquier otro que la tecnolog&iacute;a
                            permita ahora o en el futuro y le explicar&aacute;
                            los nuevos usos que pretenda darle a dicha
                            informaci&oacute;n a fin de recabar su
                            autorizaci&oacute;n.{" "}
                          </span>
                        </span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Aviso;
