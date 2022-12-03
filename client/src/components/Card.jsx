import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { id, title, img1, img2, oldPrice, price } = product;

  return (
    <Link to={`/product/${id}`}>
      <div className="h-[25rem] w-[16rem] bg-white shadow-xl rounded-xl">
        <div className="overflow-hidden h-[18rem] w-[16rem]">
          <img
            className="h-[18rem] w-[16rem] object-cover rounded-t-xl hover:hidden"
            src={img1}
            alt="img"
          />
          <img
            className="h-[18rem] w-[16rem] object-cover rounded-t-xl"
            src={img2}
            alt="img"
          />
        </div>
        <div className="px-3 mt-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="flex justify-start mt-2">
            <p>Price: </p>
            <span className="ml-2">${price}</span>{" "}
            <span className="ml-2 text-gray-500 line-through">${oldPrice}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
