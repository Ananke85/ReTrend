import React from "react";
import CategoryItem from "../categoryItem/index";
import styles from "./styles.module.css";

const categories = [
  {
    id: 1,
    name: "Coches",
    logo: "../storage/coche.png",
  },
  {
    id: 2,
    name: "Motos",
    logo: "/frontend/public/storage/moto.png",
  },
  {
    id: 3,
    name: "TV",
    logo: "https://www.flaticon.es/iconos-gratis/retro",
    // logo: "/frontend/public/storage/monitor-de-tv.png",
  },
  {
    id: 4,
    name: "Muebles",
    logo: "/frontend/public/storage/mueble.png",
  },
  {
    id: 5,
    name: "Ordenadores",
    logo: "/frontend/public/storage/escritorio.png",
  },
];

//children para añadirle despues otras cosas dentro de la clase
const ListCategory = () => {
  // console.log("LISTCATEGORIES:" + categories);

  return (
    <div classname={styles.container}>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default ListCategory;
