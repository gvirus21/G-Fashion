import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IconContext } from "react-icons";

const Cart = () => {
  return (
    <div className="flex flex-col justify-between h-[18rem] w-[32rem] absolute top-16 right-16 bg-white shadow-lg rounded-md z-50">
      <div className="flex justify-between px-8 py-5">
        <img
          className="h-32 w-20 object-cover"
          src="https://images.pexels.com/photos/9252069/pexels-photo-9252069.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div>
          <h1 className="font-semibold">Nike Orange Shoes</h1>
          <p className="w-[18rem] mt-2 overflow-hidden">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <p className="mt-3 font-semibold">Quantity: 1</p>
        </div>
        <div className="flex items-center">
          <IconContext.Provider value={{ color: "red", size: "30px" }}>
            <AiOutlineDelete />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex flex-col items-center my-5">
        <div className="flex justify-between w-full px-8 pb-5">
            <h1 className="font-semibold text-xl">Subtotal :</h1>
            <h1>$19.9</h1>
        </div>
        <button className="px-10 py-1 rounded-md bg-blue-600 text-white ">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
