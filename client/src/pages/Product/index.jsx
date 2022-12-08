import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const images = [
  "https://images.pexels.com/photos/9252069/pexels-photo-9252069.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/12725050/pexels-photo-12725050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const Product = () => {
  const id = useParams().id;
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [itemCount, setItemCount] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="flex h-[90vh]">
      <div className="flex flex-col items-center w-[15vw] shadow-md pt-5">
        <img
          className="h-40 w-32 my-3 object-cover"
          src={data?.attributes?.img1?.data?.attributes?.url}
          alt="product"
          onClick={() => setCurrentImage(images[0])}
        />
        <img
          className="h-40 w-32 my-5 object-cover"
          src={images[1]}
          alt="product"
          onClick={() => setCurrentImage(images[1])}
        />
      </div>
      <div className="flex">
        <div className="flex justify-center pt-10 h-full w-[45vw]">
          {/* img */}
          <img
            className="h-[35rem] w-[30rem] bg-red-400 object-cover"
            src={currentImage}
            alt="product"
          />
        </div>
        <div className="h-[100vh] w-[40vw] py-[2rem] pl-5">
          <h1 className="text-xl font-semibold">Long Sleeve Graphic T-shirt</h1>
          <p className="mt-5 text-xl">$ 19.9</p>
          <p className="w-[30rem] mt-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
            nostrum recusandae alias quaerat dolorem accusamus dolore officiis
            atque saepe laborum ratione, est a quisquam ex distinctio natus
            eligendi suscipit aliquid?
          </p>
          <div className="flex items-center my-5 ml-2">
            <button
              className="px-3 rounded-md text-xl cursor-pointer bg-gray-200 hover:bg-gray-300"
              onClick={() => setItemCount((prev) => (prev > 0 ? prev - 1 : 0))}
            >
              -
            </button>
            <p className="mx-4">{itemCount}</p>
            <button
              className="px-3 rounded-md text-xl cursor-pointer bg-gray-200 hover:bg-gray-300"
              onClick={() => setItemCount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <div className="flex flex-col w-96">
            <button className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-md my-2">
              Add to cart
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 cursor-pointer text-white px-5 py-2 rounded-md my-1">
              Buy Now
            </button>
          </div>

          <div className="mt-12">
            <p>Vendor: Polo</p>
            <p>Product Type: T-shirt</p>
            <p>Tag: T-shirt, Women, Top</p>
          </div>

          <div className="flex flex-col justify-between h-20 mt-20">
            <p className="text-xl text-gray-400">ADDITIONAL INFORMATION</p>
            <p className="text-xl text-gray-400">FAQ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
