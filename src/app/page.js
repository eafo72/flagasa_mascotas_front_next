import clienteAxios from "../config/axios";

import Link from "next/link";

import { BtnCategoria } from "../components/btnCategoria";

import { ProductPreviewCard } from "../components/productPreviewCard";

import { CategoryItemMain } from "../components/CategoryItemMain";

import { CategoryItemSmall } from "../components/CategoryItemSmall";

import ImportSlickJS from "./importSlickJs";

import { IconOne } from "../components/IconOne";
import { IconTwo } from "../components/IconTwo";
import { IconThree } from "../components/IconThree";
import { DogImage } from "../components/DogImage";

import { HomeTitleOne } from "../components/HomeTitleOne";
import { HomeTitleTwo } from "../components/HomeTitleTwo";
import { HomeTitleThree } from "../components/HomeTitleThree";
import { HomeTitleFour } from "../components/HomeTitleFour";

const getCarrusel = async () => {
  try {
    const res = await fetch('https://flagasa-mascotas-back.onrender.com/carrusel/obtener', { cache: 'no-store' });
    const data = await res.json();
    return data['carrusel'];
  } catch (error) {
    console.log(error);
  }
};

const getCategories = async () => {
  try {
    const res = await fetch('https://flagasa-mascotas-back.onrender.com/categoria/obtener', { cache: 'no-store' });
    const data = await res.json();
    return data['categorias'];
  } catch (error) {
    console.log(error);
  }
};

const getCategoriesSix = async () => {
  try {
    const res = await fetch('https://flagasa-mascotas-back.onrender.com/categoria/obtenerSeis', { cache: 'no-store' });
    const data = await res.json();
    return data['categorias'];
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async () => {
  try {
    const res = await fetch('https://flagasa-mascotas-back.onrender.com/producto/obtener', { cache: 'no-store' });
    const data = await res.json();
    return data['productos'];
  } catch (error) {
    console.log(error);
  }
};


const categoriesOrder = ["MANTENIMIENTO", "REGULAR", "PREMIUM", "SÚPER PREMIUM"];

const Page = async () => {
  const carrusel = await getCarrusel();
  const categories = await getCategories();
  const categoriesSix = await getCategoriesSix();
  const products = await getProducts();

  return (
    <>
      <ImportSlickJS />
      <div className=".body">
        <main>

          {/* Carrusel */}
          <section className="slider_section main_slider_9 custom_slider">
            <div className="main_slider" data-slick='{"arrows": false}'>
              {carrusel &&
                carrusel
                /*.filter(
                  (element) =>
                    element._id === "67a69c69db7d5dd23a6c7c86"
                )*/
                .map((iteM) => (
                  <div
                    className="slider_item"
                    style={{
                      backgroundImage:`url(${iteM.imagen})`,
                      backgroundPosition:"right",
                      
                    }}
                  >
                    <div className="container width_desktop">
                      <div className="row">
                        <div className="col col-md-6">
                          <div className="slider_content">
                            <h3
                              className="small_title"
                              data-animation="slideInDown"
                              data-delay=".2s"
                            >
                              {iteM.titulo}
                            </h3>
                            <h4
                              className="big_title text-color-black"
                              data-animation="slideInLeft"
                              data-delay=".4s"
                            >
                              {iteM.subtitulo}
                            </h4>
                            <Link
                              className="btn btn_rounded btn-view"
                              href={iteM.enlace}
                              data-animation="fadeInUp2"
                              data-delay=".7s"
                            >
                              Ver más
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="ms_nav_thumbnails d-none"></div>
          </section>

          {/* Productos */}
          <section className="product_section sec_space_custom">
            <div className="space_rl_large">
              <div className="section_title_4 text-center">
                <HomeTitleOne></HomeTitleOne>
                <span className="big_title">NUESTRAS</span>
              </div>
              {/*Controles*/}
              <div className="col ">
                <ul
                  className="product_tabnav_4 nav ul_li_center"
                  role="tablist"
                >
                  {/*Active
                  <li>
                    <button
                      className="btn active"
                      data-bs-toggle="tab"
                      data-bs-target={`#${
                        categoriesSix &&
                        categoriesSix[0]["nombre"].split(" ").join("_")
                      }_tab`}
                      type="button"
                      role="tab"
                      aria-controls={`#${
                        categoriesSix &&
                        categoriesSix[0]["nombre"].split(" ").join("_")
                      }_tab`}
                      aria-selected="true"
                    >
                      {categoriesSix && categoriesSix[0]["nombre"]}
                    </button>
                  </li>
                  */}

                  {/*los demas*/}
                  {categoriesSix &&
                    categoriesSix
                      /*.filter(
                        (element) =>
                          element.nombre !== categoriesSix[0]["nombre"]
                      )
                      */  
                      .map((item) => (
                        <li key={item._id}>
                          <button
                            className={`btn ${item.nombre == 'PREMIUM'? 'active' : ''}`}
                            data-bs-toggle="tab"
                            data-bs-target={`#${item.nombre
                              .split(" ")
                              .join("_")}_tab`}
                            type="button"
                            role="tab"
                            aria-controls={`#${item.nombre
                              .split(" ")
                              .join("_")}_tab`}
                            aria-selected={`${item.nombre == 'PREMIUM'? 'true' : 'false'}`}
                          >
                            {item.nombre}
                          </button>
                        </li>
                      ))}
                </ul>
              </div>

              {/*Contenido de cada tab*/}
              <div className="tab-content">


                {/*Active
                <div
                  className="tab-pane fade show active"
                  id={`${
                    categories && categories[0]["nombre"].split(" ").join("_")
                  }_tab`}
                  role="tabpanel"
                >
                  <div className="row">
                    
                    {products &&
                      categories &&
                      products
                        .filter(
                          (element) =>
                            element.categoria === categories[0]["nombre"]
                        )
                        .map((item, index) => {
                          return index < 8 ? (
                            <div
                              key={item._id}
                              className="col-lg-3 col-md-4 col-sm-6 col-6"
                            >
                              <ProductPreviewCard item={item} />
                            </div>
                          ) : (
                            <></>
                          );
                        })}
                    
                  </div>
                </div>
                */}

                {/*los demas*/}
                {categories &&
                  categories
                    /*.filter(
                      (element) => element.nombre !== categories[0]["nombre"]
                    )*/
                    .map((item1) => (
                      <div 
                        key={item1._id}
                        className={`tab-pane fade ${item1.nombre == 'PREMIUM'? 'show active' : ''}`}
                        id={`${item1.nombre.split(" ").join("_")}_tab`}
                        role="tabpanel"
                      >
                        <div className="row">
                          {/*Producto*/}

                          {products &&
                            products
                            
                              .filter(
                                (element) => element.categoria === item1.nombre
                              )
                                
                              .map((item, index) => {
                                return index < 8 ? (
                                  <div
                                    key={item._id}
                                    className="col-lg-3 col-md-4 col-sm-6 col-6"
                                  >
                                    <ProductPreviewCard item={item} />
                                  </div>
                                ) : (
                                  <></>
                                );
                              })}
                          {/*fin producto*/}
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </section>

          {/* ultima seccion */}
          <section
            className="fullwidth_feature_1 sec_space_small"
            style={{ paddingTop: "70px", paddingBottom: "30px" }}
          >
            <div className="space_rl_large">
              <div className="row align-items-center justify-content-center">
                <div className="col col-lg-6 col-md-8">
                  <div className="item_image">
                    <DogImage></DogImage>
                  </div>
                </div>
                <div className="col col-lg-6 col-md-8">
                  <div className="item_content">
                    <HomeTitleFour></HomeTitleFour>

                    <ul className="info_list ul_li_block">
                      <li>
                        <IconOne></IconOne>
                        <div className="content">
                          <h3>Insumos de primera</h3>
                          <span>Tenemos certificaciones que lo avalan.</span>
                        </div>
                      </li>
                      <li>
                        <IconTwo></IconTwo>
                        <div className="content">
                          <h3>Creado por especialistas</h3>
                          <span>Nutriólogos y Veterinarios apasionados.</span>
                        </div>
                      </li>
                      <li>
                        <IconThree></IconThree>
                        <div className="content">
                          <h3>Sabor y nutrición</h3>
                          <span>
                            Porque sabemos lo que les gusta y necesitan.
                          </span>
                        </div>
                      </li>
                    </ul>
                    {/*
                    <Link className="btn btn_primary btn_rounded" href="shop.html">
                      Ver más
                    </Link>
                    */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Categorias*/}
          <section className="product_section sec_space_xlarge">
            <div className="space_rl_large">
              <div className="section_title_4 text-center">
                <HomeTitleTwo></HomeTitleTwo>
                <span className="big_title">FLAGASA</span>
              </div>

              <div className="row">
                {categories &&
                  categories
                  .sort((a, b) => {
                    let indexA = ordenDeseado.indexOf(a.nombre);
                    let indexB = ordenDeseado.indexOf(b.nombre);
                    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
                  })
                  .map((item1, index) => {
                    return index < 4 ? (
                      <div
                        key={index}
                        className="col col-lg-3 col-md-3 col-sm-3"
                      >
                        <div className="shop_layout_4">
                          <div className="shop_image_wrap">
                            <div className="tab-content">
                              <Link
                                className="shop_image text-center"
                                href={`/categories/Todas/${item1.nombreSlugged}`}
                              >
                                <img
                                  src={`${item1.imagen}?v=${Date.now()}`}
                                  alt={`${item1.imagen}`}
                                  unoptimized={'true'}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="shop_content">
                            <h3
                              className="item_title"
                              style={{ textAlign: "center" }}
                            >
                              <Link
                                href={`/categories/Todas/${item1.nombreSlugged}`}
                              >
                                {item1.nombre}
                              </Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    );
                  })}
              </div>

              {/*}    
              <div className="row" style={{ backgroundColor: "#EAEAEA", marginTop:"70px" }}>
                <div className="col-section col-md-6">
                  <div className="banner_item banner_item2" style={{justifyContent:"center"}}>
                    <img
                      src="https://agencianuba.com/flagasamascotas_front_images/banners/mini-michi-flipped.jpg"
                      alt="image_not_found"
                    />
                    <div className="banner_content">
                      <h3 className="item_title" style={{color:"white"}}>
                        <span>Consiente a</span>
                        tu michi
                      </h3>
                      <p style={{color:"white"}}>Dale alimento de<br/>calidad al mejor precio</p>
                    </div>
                  </div>
                </div>

                <div className="col-section col-md-6">
                  <div className="banner_item banner_item2" style={{justifyContent:"center"}}>
                    <img
                      src="https://agencianuba.com/flagasamascotas_front_images/banners/mini-peque.jpg"
                      alt="image_not_found"
                    />
                    <div className="banner_content">
                      <h3 className="item_title" style={{color:"white"}}>
                        <span>Alimento para</span>
                        los peques
                      </h3>
                      <p style={{color:"white"}} >y su sano desarrollo</p>
                    </div>
                  </div>
                </div>
              </div>
              {*/}
            </div>
          </section>

          {/* Valores */}
          <section
            className="product_section sec_space_xlarge"
            style={{ backgroundColor: "#25BC6C" }}
          >
            <div className="space_rl_large">
              <div className="section_title_4 text-center">
                <HomeTitleThree></HomeTitleThree>
                <span className="big_title">NUESTROS</span>
              </div>

              <div className="row">
                {/* VALOR 1 */}
                <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                  <div className="shop_layout_4">
                    <div className="shop_image_wrap">
                      <div align="center">
                        <img
                          src="https://agencianuba.com/flagasamascotas_front_images/icons/icon-new-pasion.png"
                          alt="image_not_found"
                        />
                      </div>
                    </div>
                    <div className="shop_content">
                      <h3 className="item_title">Pasión</h3>
                    </div>
                  </div>
                </div>

                {/* VALOR 2 */}
                <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                  <div className="shop_layout_4">
                    <div className="shop_image_wrap">
                      <div align="center">
                        <img
                          src="https://agencianuba.com/flagasamascotas_front_images/icons/icon-new-compromiso.png"
                          alt="image_not_found"
                        />
                      </div>
                    </div>
                    <div className="shop_content">
                      <h3 className="item_title">Compromiso</h3>
                    </div>
                  </div>
                </div>

                {/* VALOR 3 */}
                <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                  <div className="shop_layout_4">
                    <div className="shop_image_wrap">
                      <div align="center">
                        <img
                          src="https://agencianuba.com/flagasamascotas_front_images/icons/icon-new-calidad.png"
                          alt="image_not_found"
                        />
                      </div>
                    </div>
                    <div className="shop_content">
                      <h3 className="item_title">Calidad</h3>
                    </div>
                  </div>
                </div>

                {/* VALOR 4 */}
                <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                  <div className="shop_layout_4">
                    <div className="shop_image_wrap">
                      <div align="center">
                        <img
                          src="https://agencianuba.com/flagasamascotas_front_images/icons/icon-new-responsabilidad.png"
                          alt="image_not_found"
                        />
                      </div>
                    </div>
                    <div className="shop_content">
                      <h3 className="item_title">Responsabilidad</h3>
                    </div>
                  </div>
                </div>

                {/* VALOR 5 */}
                <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                  <div className="shop_layout_4">
                    <div className="shop_image_wrap">
                      <div align="center">
                        <img
                          src="https://agencianuba.com/flagasamascotas_front_images/icons/icon-new-nutricion.png"
                          alt="image_not_found"
                        />
                      </div>
                    </div>
                    <div className="shop_content">
                      <h3 className="item_title">Nutrición</h3>
                    </div>
                  </div>
                </div>

                {/* VALOR 6 */}
                <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                  <div className="shop_layout_4">
                    <div className="shop_image_wrap">
                      <div align="center">
                        <img
                          src="https://agencianuba.com/flagasamascotas_front_images/icons/icon-new-respaldo.png"
                          alt="image_not_found"
                        />
                      </div>
                    </div>
                    <div className="shop_content">
                      <h3 className="item_title">Respaldo</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;
