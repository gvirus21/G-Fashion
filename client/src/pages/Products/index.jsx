import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${categoryId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="flex h-[130vh] relative">
      {/* left */}
      <div className="w-[20vw] h-[50vh] min-w-[18rem] pl-8 pt-10 sticky top-0">
        <div>
          <h1 className="text-lg font-semibold my-5">Product Categories</h1>
          {data?.map((item) => (
            <div key={item.id} className="pl-4">
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={(e) => handleChange(e)}
              />
              <label className="ml-2" htmlFor={item.id}>
                {item.attributes.title}
              </label>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-lg font-semibold my-5">Filter by Price</h1>
          <div className="flex items-center">
            <span>0</span>
            <input
              className="mx-2"
              onChange={(e) => setMaxPrice(e.target.value)}
              type="range"
              min={0}
              max={1000}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold my-5">Sort by</h1>
          <div>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setSort("asc")}
            />
            <label className="ml-2" htmlFor="asc">
              Price (Lowest first)
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="dsc"
              value="dsc"
              name="price"
              onChange={() => setSort("desc")}
            />
            <label className="ml-2" htmlFor="desc">
              Price (Highest first)
            </label>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col pl-10">
        <div className="h-[30rem] w-[70rem] pt-5">
          <img
            src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-20">
          <List
            categoryId={categoryId}
            maxPrice={maxPrice}
            sort={sort}
            subCats={selectedSubCats}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
