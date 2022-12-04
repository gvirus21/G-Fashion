import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List";

const Products = () => {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="flex h-[130vh] relative">
      {/* left */}
      <div className="w-[20vw] h-[50vh] min-w-[18rem] pl-8 pt-10 sticky top-0">
        <div>
          <h1 className="text-lg font-semibold my-5">Product Categories</h1>
          <div className="pl-4">
            <input type="checkbox" id="1" value={1} />
            <label className="ml-2" htmlFor="1">
              T-Shirts
            </label>
          </div>
          <div className="pl-4">
            <input type="checkbox" id="2" value={2} />
            <label className="ml-2" htmlFor="2">
              Skirts
            </label>
          </div>
          <div className="pl-4">
            <input type="checkbox" id="3" value={3} />
            <label className="ml-2" htmlFor="3">
              Shirts
            </label>
          </div>
          <div className="pl-4">
            <input type="checkbox" id="4" value={4} />
            <label className="ml-2" htmlFor="4">
              Shoes
            </label>
          </div>
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
              onChange={() => setSort("dsc")}
            />
            <label className="ml-2" htmlFor="dsc">
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
          <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
        </div>
      </div>
    </div>
  );
};

export default Products;
