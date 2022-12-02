import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between w-full h-[20rem] bg-slate-50 px-24 py-8">
      {/* top */}
      <div className="flex justify-between ">
        <div className="flex flex-col mr-10">
          <h1 className="text-md font-bold mb-2">Catergories</h1>
          <span className="text-gray-500 hover:underline cursor-pointer">
            Men
          </span>
          <span className="text-gray-500 hover:underline cursor-pointer">
            Women
          </span>
          <span className="text-gray-500 hover:underline cursor-pointer">
            Shoes
          </span>
          <span className="text-gray-500 hover:underline cursor-pointer">
            Suits
          </span>
          <span className="text-gray-500 hover:underline cursor-pointer">
            Accessories
          </span>
        </div>
        <div className="flex flex-col mr-10">
          <h1 className="text-md font-bold mb-2">Links</h1>
          <span className="text-gray-500 hover:underline cursor-pointer">
            FAQ
          </span>
          <span className="text-gray-500 hover:underline cursor-pointer">
            Pages
          </span>
          <span className="text-gray-500 hover:underline cursor-pointer">
            Stores
          </span>
          <span className="text-gray-500 hover:underline cursor-pointer">
            Contact
          </span>
        </div>
        <div className="max-w-[20rem]">
          <h1 className="text-md font-bold mb-2">About</h1>
          <span className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            nesciunt beatae eos nam, rem deleniti accusantium, dolorum
            reprehenderit voluptatem in temporibus labore minima odio ratione
            quas, sed quos. Incidunt, ipsum.
          </span>
        </div>
        <div className="max-w-[20rem]">
          <h1 className="text-md font-bold mb-2">Policy</h1>
          <span className="text-sm text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            architecto? Quos eligendi magnam molestiae a, odio qui dicta
            doloremque quis.
          </span>
        </div>
      </div>

      {/* bottom */}
      <div className="flex justify-between">
        <div>
          <span className="font-bold mr-10">G Fashion</span>
          <span className="text-sm text-gray-500">
            © Copyright 2023, All Rights Reserved
          </span>
        </div>
        <div className="flex">
          <img className="w-8 mx-2" src="/assets/upi.png" alt="mastercard" />
          <img className="w-8 mx-2" src="/assets/visa.png" alt="mastercard" />
          <img
            className="w-8 mx-2"
            src="/assets/mastercard.png"
            alt="mastercard"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
