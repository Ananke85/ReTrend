import React from "react";
import EditElse from "../../../EditProducts/EditElse";
import { useQuery } from "react-query";
import { getProductById } from "../../../../utils/apiProducts";
import EditJob from "../../../EditProducts/EditJob";
import EditVehicle from "../../../EditProducts/EditVehicle";
import EditHouse from "../../../EditProducts/EditHouse";

const ModalContent = ({ id }) => {
  const { data } = useQuery(["product", id], getProductById);

  if (!data || !data.category) {
    return null; // Render nothing if data or category is undefined
  }
  const cat = data?.category;

  let componentToRender;

  switch (cat) {
    case "Inmobiliaria":
      componentToRender = <EditHouse id={id} />;
      break;
    case "Motos":
    case "Coches":
      componentToRender = <EditVehicle id={id} />;
      break;
    case "Servicios":
    case "Empleo":
      componentToRender = <EditJob id={id} />;
      break;
    default:
      componentToRender = <EditElse id={id} />;
      break;
  }

  return (
    <>
      <h3>Información de tu producto / servicio</h3>
      {id && componentToRender}
    </>
  );
};

export default ModalContent;
