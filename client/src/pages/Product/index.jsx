import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [currentImage, setCurrentImage] = useState("img1");
  const [itemCount, setItemCount] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  console.log(data);

  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <div className="flex h-[90vh]">
          <div className="flex flex-col items-center w-[15vw] shadow-md pt-5">
            <img
              className="h-40 w-32 my-3 object-cover"
              src={
                process.env.REACT_APP_UPLOAD_URL +
                data?.attributes?.img1?.data?.attributes?.url
              }
              alt="product"
              onClick={() => setCurrentImage("img1")}
            />
            <img
              className="h-40 w-32 my-5 object-cover"
              src={
                process.env.REACT_APP_UPLOAD_URL +
                data?.attributes?.img2?.data?.attributes?.url
              }
              alt="product"
              onClick={() => setCurrentImage("img2")}
            />
          </div>
          <div className="flex">
            <div className="flex justify-center pt-10 h-full w-[45vw]">
              {/* img */}
              <img
                className="h-[35rem] w-[30rem] object-cover"
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.[currentImage]?.data?.attributes?.url
                }
                alt="product"
              />
            </div>
            <div className="h-[100vh] w-[40vw] py-[2rem] pl-5">
              <h1 className="text-xl font-semibold">
                {data?.attributes?.title}
              </h1>
              <p className="mt-5 text-xl">$ {data?.attributes?.price}</p>
              <p className="w-[30rem] mt-8">{data?.attributes?.desc}</p>
              <div className="flex items-center my-5 ml-2">
                <button
                  className="px-3 rounded-md text-xl cursor-pointer bg-gray-200 hover:bg-gray-300"
                  onClick={() =>
                    setItemCount((prev) => (prev > 0 ? prev - 1 : 0))
                  }
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
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: data.id,
                        title: data.attributes.title,
                        desc: data.attributes.desc,
                        price: data.attributes.price,
                        img1: data.attributes.img1.data.attributes.url,
                        quantity: itemCount,
                      })
                    )
                  }
                  className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-md my-2"
                >
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
      )}
    </div>
  );
};

export default Product;
