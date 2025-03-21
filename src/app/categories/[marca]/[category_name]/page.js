import Link from "next/link";

import clienteAxios from "../../../../config/axios";

import { CategorySelector } from "./categorySelector";
import { BrandSelector } from "./brandSelector";
import { ProductPreviewCard } from "../../../../components/productPreviewCard";

const AllCategories = async ({ params }) => {
  const getCategories = async () => {
    try {
      const res = await fetch(
        "https://flagasa-mascotas-back.onrender.com/categoria/obtener",
        { cache: "no-store" }
      );
      const data = await res.json();
      return data["categorias"];
    } catch (error) {
      console.log(error);
    }
  };

  const getBrands = async () => {
    try {
      const res = await fetch(
        "https://flagasa-mascotas-back.onrender.com/marca/obtener",
        { cache: "no-store" }
      );
      const data = await res.json();
      return data["marcas"];
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const res = await fetch(
        "https://flagasa-mascotas-back.onrender.com/producto/obtener",
        { cache: "no-store" }
      );
      const data = await res.json();
      return data["productos"];
    } catch (error) {
      console.log(error);
    }
  };

  const categories = await getCategories();

  const categoriesOrder = [
    "MANTENIMIENTO",
    "REGULAR",
    "PREMIUM",
    "SÚPER PREMIUM",
  ];

  // Ordenar las categorías antes de mapearlas
  categories.sort((a, b) => {
    let indexA = categoriesOrder.indexOf(a.nombre);
    let indexB = categoriesOrder.indexOf(b.nombre);
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });

  const allCategories = [];

  let categoryName;

  for (let i = 0; i < categories.length; i++) {
    allCategories.push({
      value: categories[i]["nombreSlugged"],
      label: categories[i]["nombre"],
    });
    if (categories[i]["nombreSlugged"] == params.category_name) {
      categoryName = categories[i]["nombre"];
    }
  }

  const brands = await getBrands();
  const allBrands = [];
  allBrands.push({ value: "Todas", label: "Todas" });
  for (let i = 0; i < brands.length; i++) {
    allBrands.push({ value: brands[i]["nombre"], label: brands[i]["nombre"] });
  }

  const products = await getProducts();

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
                      <a className="home_btn" href="/">
                        Inicio
                      </a>
                    </li>
                    <li>Fórmulas especializadas</li>
                    <li>{categoryName}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="product_section sec_space_small">
          <div className="container width_desktop">
            <div className="filter_input_group">
              <form action="#">
                <ul className="items_col ul_li">
                  <li class="categories_control">
                    <div className="select_option clearfix">
                      <CategorySelector
                        brand_name={params.marca.replace("-", " ")}
                        category_name={categoryName}
                        category_slugged_name={params.category_name}
                        allCategories={allCategories}
                      />
                    </div>
                  </li>

                  {/*
                  <li>
                    <h4 className="item_title text-uppercase">Marca</h4>
                    <div className="select_option clearfix">
                      <BrandSelector
                        brand_name={params.marca.replace("-", " ")}
                        category_name={params.category_name.replace("-", " ")}
                        allBrands={allBrands}
                      />
                    </div>
                  </li>
                  */}
                </ul>
              </form>
            </div>

            {/*Controles OCULTOS*/}
            <div className="col col-lg-6 col-md-12 d-none">
              <ul
                className="product_tabnav_4 nav ul_li_right"
                role="tablist"
                id="MyTabs"
              >
                {categories &&
                  categories.map((item) => {
                    return item.nombreSlugged === params.category_name ? (
                      <li key={item._id}>
                        <button
                          id={`${item.nombre.split(" ").join("_")}_btn`}
                          className="active"
                          data-bs-toggle="tab"
                          data-bs-target={`#${item.nombre
                            .split(" ")
                            .join("_")}_tab`}
                          type="button"
                          role="tab"
                          aria-controls={`#${item.nombre
                            .split(" ")
                            .join("_")}_tab`}
                          aria-selected="true"
                        >
                          {item.nombre}
                        </button>
                      </li>
                    ) : (
                      <li key={item._id}>
                        <button
                          id={`${item.nombre.split(" ").join("_")}_btn`}
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
                    );
                  })}
              </ul>
            </div>

            {/*Contenido de cada tab*/}
            <div className="tab-content">
              {categories &&
                categories.map((item1) => {
                  return item1.nombreSlugged === params.category_name ? (
                    <div
                      key={item1._id}
                      className="tab-pane fade show active"
                      id={`${item1.nombre.split(" ").join("_")}_tab`}
                      role="tabpanel"
                    >
                      <div className="row shop_five_col">
                        {/*Producto*/}
                        {products &&
                          products
                            .filter((element) =>
                              params.marca.replace("-", " ") != "Todas"
                                ? element.categoria === item1.nombre &&
                                  element.marca ===
                                    params.marca.replace("-", " ")
                                : element.categoria === item1.nombre
                            )
                            .sort((a, b) => a.orden - b.orden) // Ordena de menor a mayor según el campo "orden" 
                            .map((item) => (
                              <div key={item._id} className="col">
                                <ProductPreviewCard item={item} />
                              </div>
                            ))}
                        {/*fin producto*/}
                      </div>
                    </div>
                  ) : (
                    <div
                      key={item1._id}
                      className="tab-pane fade"
                      id={`${item1.nombre.split(" ").join("_")}_tab`}
                      role="tabpanel"
                    >
                      <div className="row shop_five_col">
                        {/*Producto*/}
                        {products &&
                          products
                            .filter((element) =>
                              params.marca.replace("-", " ") != "Todas"
                                ? element.categoria === item1.nombre &&
                                  element.marca ===
                                    params.marca.replace("-", " ")
                                : element.categoria === item1.nombre
                            )
                            .sort((a, b) => a.orden - b.orden) // Ordena de menor a mayor según el campo "orden" 
                            .map((item) => (
                              <div key={item._id} className="col">
                                <ProductPreviewCard item={item} />
                              </div>
                            ))}
                        {/*fin producto*/}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AllCategories;
