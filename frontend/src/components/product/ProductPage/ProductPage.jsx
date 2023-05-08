import React, { useEffect, useState } from "react";
import {
  getProductByIdHarcoded,
  getProductById,
} from "../../../utils/apiProducts";
import { useQuery, useMutation } from "react-query";
import styles from "./productPage.module.css";
import Slider from "../Slider/Slider";
import ProductBar from "../ProductBar/ProductBar";
import BeatLoader from "react-spinners/BeatLoader";
import GridLoader from "react-spinners/GridLoader";
import RiseLoader from "react-spinners/RiseLoader";
import Spinner from "../../Spinner/Spinner";
import Keywords from "../Keywords/Keywords";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

    const mockImages = [
        'https://picsum.photos/id/1/700/500',
        'https://picsum.photos/id/2/700/500',
        'https://picsum.photos/id/3/700/500',
    ]  
    


    const [isExpanded, setIsExpanded] = useState (false)
    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

  //para coger el id de la url
  const params = useParams();
  const { data, isLoading } = useQuery(
    ["product", params.productid],
    getProductById
  );

  return (
    <>
      {isLoading && (
        <div>
          <Spinner />
        </div>
      )}

        {!isLoading && (
          <div className={styles.productPage}>
            <div className={styles.container}>
              <div className={styles.upperBar}>
                <button className={styles.like}><span className='icon-heart1'></span></button>
                <button className={styles.chat}>CHAT</button>            
              </div>
              { data && <Slider images={mockImages} data={data}/>}
              <div className={styles.details}>
                <div className={styles.priceContainer}>
                  <h1 className={styles.price}>{data && data.price}</h1>
                  <h2>EUR</h2>
                </div>
                <div className={styles.category}>
                  <span className='icon-display'></span>
                  <h3>{data && data.category}</h3>
                </div>
              </div>

              <h2>{data && data.title}</h2>
              { data && <Keywords data={data}/>}
              <div className={styles.line}></div>

              <div className={styles.expandable}>
                <h3>DESCRIPCIÓN DEL PRODUCTO</h3>
                <button onClick={handleExpandClick} className={
                !isExpanded ? styles.arrow : styles.active}><span className="icon-circle-down"></span></button>
              </div>
              {isExpanded ? '' : ''}
              {isExpanded && (
              <p>{data && data.description}</p>
              )}

              <div className={styles.media}>
                <p>Comparte este producto con tus amigos</p>
                <div className={styles.mediaIcons}>
                  <span className="icon-facebook2"></span>
                  <span className="icon-twitter"></span>
                  <span className="icon-whatsapp"></span>
                  <span className="icon-mail2"></span>
                </div>  
              </div>
              {data && <ProductBar data={data}/>}
            </div>
          </div>
        )}  
    </>
  );
};

export default ProductPage;
