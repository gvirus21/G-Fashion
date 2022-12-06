import React from "react";
import { Link } from "react-router-dom";


const Card = ({ product }) => {


  return (
    <Link to={`/product/${product?.id}`}>
      <div className="h-[25rem] w-[16rem] bg-white shadow-xl rounded-xl">
        <div className="overflow-hidden h-[18rem] w-[16rem]">
          <img
            className="h-[18rem] w-[16rem] object-cover rounded-t-xl hover:hidden"
            src={process.env.REACT_APP_UPLOAD_URL+ product.attributes.img1.data.attributes.url}
            alt="img"
          />
          <img
            className="h-[18rem] w-[16rem] object-cover rounded-t-xl"
            src={process.env.REACT_APP_UPLOAD_URL+ product.attributes.img2.data.attributes.url}
            alt="img"
          />
        </div>
        <div className="px-3 mt-4">
          <h2 className="text-xl font-semibold">{product?.title}</h2>
          <div className="flex justify-start mt-2">
            <p>Price: </p>
            <span className="ml-2">${product?.attributes.price}</span>{" "}
            <span className="ml-2 text-gray-500 line-through">
              ${product?.oldPrice || product?.attributes.price + 9}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
