import React, { useState } from "react";
import styles from "./productPage.module.css";
import { useQuery } from "react-query";
import Slider from "../Slider/Slider";
import Keywords from "../Keywords/Keywords";
import ProductBar from "../ProductBar/ProductBar";
import { getProductById } from "../../../utils/apiProducts";
import { Link } from "react-router-dom";

const VehiclePage = ({ id }) => {
  const mockImages = [
    "https://picsum.photos/id/1/700/500",
    "https://picsum.photos/id/2/700/500",
    "https://picsum.photos/id/3/700/500",
  ];

  // console.log("el id del vehiculo", id)

  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const { data, isLoading } = useQuery(["product", id], getProductById);
  const category = data.categories;

  //Cuando todos los productos tengan asociado categories (title, logo...)
  //junto con el div que tiene el Link
  // const title = data?.categories[0].title
  // console.log("el titulo de la categoria", title)

  return (
    <>
      <div className={styles.productPage}>
        <div className={styles.container}>
          <div className={styles.upperBar}>
            <button className={styles.like}>
              <span className="icon-heart1"></span>
            </button>
            <button className={styles.chat}>CHAT</button>
          </div>
          {data && <Slider images={mockImages} data={data} />}

          <div className={styles.details}>
            <div className={styles.priceContainer}>
              <h1 className={styles.price}>
                {data &&
                  data.price?.toLocaleString("es-ES", {
                    useGrouping: true,
                  })}{" "}
              </h1>
              <h2>EUR</h2>
            </div>
            {/* <div className={styles.category}>
              <Link to={"/category/" + title} key={category._id} target={_blank}>
                {data.categories &&
                  category.map((cat) => <span className={cat.logo} />)}
                <h3>{data && data.category}</h3>
              </Link>
            </div> */}
            <div className={styles.category}>
              {data.categories &&
                category.map((cat) => <span className={cat.logo} />)}
              <h3>{data && data.category}</h3>
            </div>
          </div>

          <h2>{data && data.title}</h2>
          {data && <Keywords data={data} />}

          {data.brand || data.model || data.year || data.doors || data.seats ? (
            <div className={styles.detailType}>
              {data.brand && <p className={styles.detail}>{data.brand}</p>}
              {data.model && <p className={styles.detail}>{data.model}</p>}
              {data.year && <p className={styles.detail}>{data.year}</p>}
              {data.doors && (
                <p className={styles.detail}>{data.doors} puertas</p>
              )}
              {data.seats && (
                <p className={styles.detail}>{data.seats} plazas</p>
              )}
            </div>
          ) : null}
          {data.km || data.engine || data.shift ? (
            <div className={styles.detailType2}>
              {data.km && (
                <p className={styles.detail}>
                  {data.km.toLocaleString("es-ES", { useGrouping: true })} Km
                </p>
              )}
              {data.engine && <p className={styles.detail}>{data.engine}</p>}
              {data.shift && <p className={styles.detail}>{data.shift}</p>}
            </div>
          ) : null}

          <div className={styles.line}></div>
          <div className={styles.expandable}>
            <h3>DESCRIPCIÓN DEL PRODUCTO</h3>
            <button
              onClick={handleExpandClick}
              className={!isExpanded ? styles.arrow : styles.active}
            >
              <span className="icon-circle-down"></span>
            </button>
          </div>
          {isExpanded ? "" : ""}
          {isExpanded && (
            <p className={styles.textExpanded}>{data && data.description}</p>
          )}
          <div className={styles.linksContainer}>
            <div className={styles.links}>
              <span className="icon-credit-card1"></span>
              <h5>Calcula tu préstamo</h5>
              <Link to="https://www.creditea.es/" target="_blank">
                <img src="C:\Users\anank\Documents\Ananke85\wallapop\frontend\src\assets\carfax.png"></img>
              </Link>
            </div>
            <div className={styles.links}>
              <span className="icon-file-text2"></span>
              <h5>Historial del vehículo</h5>
              <Link to="https://shorturl.at/qxG89" target="_blank">
                <img src="C:\Users\anank\Documents\Ananke85\wallapop\frontend\src\assets\carfax.png"></img>
              </Link>
            </div>
            <div className={styles.links}>
              <span className="icon-coin-euro"></span>
              <h5>Calcula tu seguro</h5>
              <Link to="https://www.mapfre.es/particulares/" target="_blank">
                <img src="C:\Users\anank\Documents\Ananke85\wallapop\frontend\src\assets\carfax.png"></img>
              </Link>
            </div>
          </div>

          <div className={styles.media}>
            <p>Comparte este producto con tus amigos</p>
            <div className={styles.mediaIcons}>
              <span className="icon-facebook2"></span>
              <span className="icon-twitter"></span>
              <span className="icon-whatsapp"></span>
              <span className="icon-mail2"></span>
            </div>
          </div>
          {data && <ProductBar data={data} />}
        </div>
      </div>
    </>
  );
};

export default VehiclePage;