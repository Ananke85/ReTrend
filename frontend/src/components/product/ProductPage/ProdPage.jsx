import React from "react";
import styles from "./productPage.module.css";
import HousePage from "./HousePage";
import ElsePage from "./ElsePage";
import VehiclePage from "./VehiclePage";
import Spinner from "../../Spinner/Spinner";
import { useQuery } from "react-query";
import { getProductById } from "../../../utils/apiProducts";
import { useParams } from "react-router-dom";

const ProdPage = () => {
 
  const params = useParams();
  // console.log("el params", params)
  const { data, isLoading } = useQuery(["product", params.productid], getProductById)
  const id = params.productid
  // console.log("el paramsid", id)
  // console.log("en la pagina de producto", data)

  if (!data || !data.category) {
    return null; // Render nothing if data or category is undefined
  }
  const cat= data?.category
  // console.log("la  categoría del producto", data.category)

  let componentToRender;

  if (cat === "Inmobiliaria") {
    componentToRender = <HousePage id={id}/>;
  } else if (cat === "Motos" || "Coches") {
    componentToRender = <VehiclePage id={id}/>;
  } else {
    componentToRender = <ElsePage id={id}/>;
  }

  return (
    <>
      {isLoading && (
        <div>
          <Spinner />
        </div>
      )}
      {!isLoading && id && componentToRender}
    </>
  );
};

export default ProdPage;