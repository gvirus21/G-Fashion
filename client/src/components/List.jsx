import React from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

const List = ({ subCats, maxPrice, sort, categoryId }) => {
  const { products, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId}`
  );

  //filters not working
  console.log(error);

  return (
    <div className="mx-auto max-w-[70rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {error
        ? "Something went wrong"
        : loading
        ? "loading"
        : products?.map((product) => (
            <Card product={product} key={products.id} />
          ))}
    </div>
  );
};

export default List;
