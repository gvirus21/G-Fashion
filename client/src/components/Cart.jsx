import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  console.log("prod:", products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });

    return total.toFixed(2);
  };

  return (
    <div className="flex flex-col justify-between min-h-[18rem] w-[32rem] absolute top-16 right-16 bg-white shadow-lg rounded-md z-50">
      {products.toString() === [].toString() ? (
        <div className="grid place-items-center h-full">
          <h1 className="text-black text-2xl text-center w-[20rem]">
            Cart is Empty, please add some items :)
          </h1>
        </div>
      ) : (
        products.map((product) => {
          return (
            <div id={product.id}>
              <div className="flex justify-between px-8 py-5">
                <img
                  className="h-32 w-20 object-cover"
                  src={process.env.REACT_APP_UPLOAD_URL + product.img1}
                />
                <div>
                  <h1 className="font-semibold">{product.title}</h1>
                  <p className="w-[18rem] mt-2 overflow-hidden">
                    {product.desc?.substring(0, 100)}
                  </p>
                  <p className="mt-3 font-semibold">
                    Quantity: {product.quantity}
                  </p>
                  <p className="mt-3 font-semibold">
                    Price: ${product.quantity * product.price}
                  </p>
                </div>
                <div className="flex items-center">
                  <IconContext.Provider value={{ color: "red", size: "30px" }}>
                    <AiOutlineDelete
                      onClick={() => dispatch(removeItem(product.id))}
                    />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          );
        })
      )}
      <div className="flex flex-col items-center my-5">
        <div className="flex justify-between w-full px-8 pb-5">
          <h1 className="font-semibold text-xl">Subtotal :</h1>
          <h1>{totalPrice()}</h1>
        </div>
        <button className="px-10 py-1 rounded-md bg-blue-600 text-white ">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
