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

const getCategories = async () => {
  try {
    const res = await clienteAxios.get(`/categoria/obtener`);
    //console.log(res.data.categorias)
    return res.data.categorias;
  } catch (error) {
    console.log(error);
  }
};

const getCategoriesSix = async () => {
  try {
    const res = await clienteAxios.get(`/categoria/obtenerSeis`);
    //console.log(res.data.categorias)
    return res.data.categorias;
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async () => {
  try {
    const res = await clienteAxios.get(`/producto/obtener`);
    //console.log(res.data.productos)
    return res.data.productos;
  } catch (error) {
    console.log(error);
  }
};

const Page = async () => {
  const categories = await getCategories();
  const categoriesSix = await getCategoriesSix();
  const products = await getProducts();

  return (
    <>
      <ImportSlickJS />
      <div className=".body">
        <main>
          {/* Carrusel */}
          <section className="slider_section main_slider_4">
            <div className="main_slider" data-slick='{"dots": false}'>
              {/*slide 1*/}
              <div className="slider_item space_rl_large">
                <div className="slider_image">
                  <div className="image_wrap">
                    <img
                      src="https://agencianuba.com/flagasamascotas_front_images/banners/formula-premium.jpg"
                      alt="image_not_found"
                      unoptimized={true}
                    />
                  </div>
                </div>
                <div className="slider_content">
                  <h3
                    className="item_title"
                    data-animation="slideInDown"
                    data-delay=".3s"
                  >
                    Nutrición balanceada con proteína de salmón.
                  </h3>
                  <p data-animation="slideInLeft" data-delay=".5s">
                    Mejora el desarrollo cognitivo y reduce alergias.
                  </p>
                  <Link
                    className="btn btn_primary btn_rounded btn-view"
                    href="/shop_details/Premium/Flaga-Can-Adulto-20kg/006"
                    data-animation="fadeInUp2"
                    data-delay=".7s"
                  >
                    Ver más
                  </Link>
                </div>
                <span className="item_type">NUTRICIÓN MASCOTAS</span>
              </div>

              {/*slide 2*/}
              <div className="slider_item space_rl_large">
                <div className="slider_image">
                  <div className="image_wrap">
                    <img
                      src="https://agencianuba.com/flagasamascotas_front_images/banners/formula-premim-ktyto.jpg"
                      alt="image_not_found"
                      unoptimized={true}
                    />
                  </div>
                </div>
                <div className="slider_content">
                  <h3
                    className="item_title"
                    data-animation="slideInDown"
                    data-delay=".3s"
                  >
                    Alimento para gato super premium
                  </h3>
                  <p data-animation="slideInLeft" data-delay=".5s">
                    con proteínas de salmón y carne.
                  </p>
                  <Link
                    className="btn btn_primary btn_rounded btn-view"
                    href="/shop_details/Premium/Ktyto-10Kg/0020"
                    data-animation="fadeInUp2"
                    data-delay=".7s"
                  >
                    Ver más
                  </Link>
                </div>
                <span className="item_type">NUTRICIÓN MASCOTAS</span>
              </div>

              {/*slide 3*/}
              <div className="slider_item space_rl_large">
                <div className="slider_image">
                  <div className="image_wrap">
                    <img
                      src="https://agencianuba.com/flagasamascotas_front_images/banners/formula-superpremium.jpg"
                      alt="image_not_found"
                      unoptimized={true}
                    />
                  </div>
                </div>
                <div className="slider_content">
                  <h3
                    className="item_title"
                    data-animation="slideInDown"
                    data-delay=".3s"
                  >
                    Fórmula para perro super premium.
                  </h3>
                  <p data-animation="slideInLeft" data-delay=".5s">
                    Proteínas de carne como primer ingrediente.
                  </p>
                  <Link
                    className="btn btn_primary btn_rounded btn-view"
                    href="/shop_details/Premium/Bark-Adulto-todos-los-tama%C3%B1os-20Kg/0030"
                    data-animation="fadeInUp2"
                    data-delay=".7s"
                  >
                    Ver más
                  </Link>
                </div>
                <span className="item_type">NUTRICIÓN MASCOTAS</span>
              </div>

              {/*slide 4*/}
              <div className="slider_item space_rl_large">
                <div className="slider_image">
                  <div className="image_wrap">
                    <img
                      src="https://agencianuba.com/flagasamascotas_front_images/banners/formula-mantenimiento.jpg"
                      alt="image_not_found"
                      unoptimized={true}
                    />
                  </div>
                </div>
                <div className="slider_content">
                  <h3
                    className="item_title"
                    data-animation="slideInDown"
                    data-delay=".3s"
                  >
                    El Centinela®
                  </h3>
                  <p data-animation="slideInLeft" data-delay=".5s">
                    Alimento para razas pequeñas.
                  </p>
                  <Link
                    className="btn btn_primary btn_rounded btn-view"
                    href="/shop_details/Premium/Bark-Adulto-todos-los-tama%C3%B1os-20Kg/0030"
                    data-animation="fadeInUp2"
                    data-delay=".7s"
                  >
                    Ver más
                  </Link>
                </div>
                <span className="item_type">NUTRICIÓN MASCOTAS</span>
              </div>

              {/*slide 5*/}
              <div className="slider_item space_rl_large">
                <div className="slider_image">
                  <div className="image_wrap">
                    <img
                      src="https://agencianuba.com/flagasamascotas_front_images/banners/formula-regular.jpg"
                      alt="image_not_found"
                      unoptimized={true}
                    />
                  </div>
                </div>
                <div className="slider_content">
                  <h3
                    className="item_title"
                    data-animation="slideInDown"
                    data-delay=".3s"
                  >
                    PetCan® y PetCat®
                  </h3>
                  <p data-animation="slideInLeft" data-delay=".5s">
                    Fórmula regular.
                  </p>
                  <Link
                    className="btn btn_primary btn_rounded btn-view"
                    href="/shop_details/Premium/Bark-Adulto-todos-los-tama%C3%B1os-20Kg/0030"
                    data-animation="fadeInUp2"
                    data-delay=".7s"
                  >
                    Ver más
                  </Link>
                </div>
                <span className="item_type">NUTRICIÓN MASCOTAS</span>
              </div>
            </div>

            <div
              className="ms_nav_thumbnails"
              data-slick='{"slidesToShow": 2, "vertical": false}'
            >
              {/*thumbnail 1*/}
              <div className="thumbnail_item">
                <img
                  src="https://agencianuba.com/flagasamascotas_front_images/banners/formula-premium.jpg"
                  alt="image_not_found"
                  unoptimized={true}
                />
              </div>

              {/*thumbnail 2*/}
              <div className="thumbnail_item">
                <img
                  src="https://agencianuba.com/flagasamascotas_front_images/banners/formula-premim-ktyto.jpg"
                  alt="image_not_found"
                  unoptimized={true}
                />
              </div>

              {/*thumbnail 3*/}
              <div className="thumbnail_item">
                <img
                  src="https://agencianuba.com/flagasamascotas_front_images/banners/formula-superpremium.jpg"
                  alt="image_not_found"
                  unoptimized={true}
                />
              </div>

              {/*thumbnail 4*/}
              <div className="thumbnail_item">
                <img
                  src="https://agencianuba.com/flagasamascotas_front_images/banners/formula-mantenimiento.jpg"
                  alt="image_not_found"
                  unoptimized={true}
                />
              </div>

              {/*thumbnail 5*/}
              <div className="thumbnail_item">
                <img
                  src="https://agencianuba.com/flagasamascotas_front_images/banners/formula-regular.jpg"
                  alt="image_not_found"
                  unoptimized={true}
                />
              </div>

              

            </div>

            <div className="carousel_nav">
              <button type="button" className="main_left_arrow">
                <i className="far fa-arrow-left"></i>
              </button>
              <button type="button" className="main_right_arrow">
                <i className="far fa-arrow-right"></i>
              </button>
            </div>
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
                  {/*Active*/}
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

                  {/*los demas*/}
                  {categoriesSix &&
                    categoriesSix
                      .filter(
                        (element) =>
                          element.nombre !== categoriesSix[0]["nombre"]
                      )
                      .map((item) => (
                        <li key={item._id}>
                          <button
                            class="btn"
                            data-bs-toggle="tab"
                            data-bs-target={`#${item.nombre
                              .split(" ")
                              .join("_")}_tab`}
                            type="button"
                            role="tab"
                            aria-controls={`#${item.nombre
                              .split(" ")
                              .join("_")}_tab`}
                            aria-selected="false"
                          >
                            {item.nombre}
                          </button>
                        </li>
                      ))}
                </ul>
              </div>

              {/*Contenido de cada tab*/}
              <div className="tab-content">
                {/*Active*/}
                <div
                  className="tab-pane fade show active"
                  id={`${
                    categories && categories[0]["nombre"].split(" ").join("_")
                  }_tab`}
                  role="tabpanel"
                >
                  <div className="row">
                    {/*Producto*/}
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
                    {/*fin producto*/}
                  </div>
                </div>

                {/*los demas*/}
                {categories &&
                  categories
                    .filter(
                      (element) => element.nombre !== categories[0]["nombre"]
                    )
                    .map((item1) => (
                      <div
                        key={item1._id}
                        className="tab-pane fade"
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
                    <h2 className="item_title">
                      Libera el potencial de tu mascota
                    </h2>

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
                  categories.map((item1, index) => {
                    return index < 3 ? (
                      <div
                        key={index}
                        className="col col-lg-4 col-md-4 col-sm-4"
                      >
                        <div className="shop_layout_4">
                          <div className="shop_image_wrap">
                            <div className="tab-content">
                              <Link
                                className="shop_image"
                                href={`/categories/Todas/${item1.nombreSlugged}`}
                              >
                                <img
                                  src={`${item1.imagen}?v=${Date.now()}`}
                                  alt={`${item1.imagen}`}
                                  unoptimized={true}
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
