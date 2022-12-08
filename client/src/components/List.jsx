import React from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

const List = ({ subCats, maxPrice, sort, categoryId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId}`
  );

  //filters not working
  //need to update the filters
  console.log("error: ", error);

  return (
    <div className="mx-auto max-w-[70rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {error
        ? "Something went wrong"
        : loading
        ? "loading"
        : data?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
    </div>
  );
};

export default List;
