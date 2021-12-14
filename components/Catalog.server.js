import React from "react";
import Image from "next/image";

const Catalog = ({ products }) => {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.image.filename}>
            <Image src={blok.image.filename} alt={blok.image.alt} />
            <p>{product.price}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Catalog;
