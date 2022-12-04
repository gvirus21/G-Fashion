import React from "react";

const Categories = () => {
  return (
    <div className="h-[35rem] px-[5rem] flex flex-col justify-between">
      <h1 className="text-2xl font-bold">Catergories</h1>
      <div className="h-[28rem] flex overflow-hidden">
        <div className="w-2/6 h-full flex flex-col">
          <div className="h-3/6 relative">
            <div className="grid place-items-center h-full w-full bg-black opacity-0 hover:opacity-70 transition-all duration-1000 absolute top-0 cursor-pointer">
              <h2 className=" text-2xl text-white">Kids</h2>
            </div>
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="kids"
            />
          </div>
          <div className="h-3/6 mt-2 relative">
            <div className="grid place-items-center h-full w-full bg-black opacity-0 hover:opacity-70 transition-all duration-1000 absolute top-0 cursor-pointer">
              <h2 className=" text-2xl text-white">Formals</h2>
            </div>
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Formals"
            />
          </div>
        </div>
        <div className="w-1/6 h-full mx-2 relative">
          <div className="grid place-items-center h-full w-full bg-black opacity-0 hover:opacity-70 transition-all duration-1000 absolute top-0 cursor-pointer">
            <h2 className=" text-2xl text-white">Mens</h2>
          </div>
          <img
            className="h-full w-full object-cover"
            src="https://images.pexels.com/photos/2998657/pexels-photo-2998657.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Mens"
          />
        </div>

        <div className="w-3/6">
          <div className="h-3/6 flex">
            <div className="w-3/6 h-full mr-2 relative">
              <div className="grid place-items-center h-full w-full bg-black opacity-0 hover:opacity-70 transition-all duration-1000 absolute top-0 cursor-pointer">
                <h2 className=" text-2xl text-white">Casuals</h2>
              </div>
              <img
                className="h-full w-full object-cover"
                src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="casuals"
              />
            </div>
            <div className="w-3/6 h-full relative">
              <div className="grid place-items-center h-full w-full bg-black opacity-0 hover:opacity-70 transition-all duration-1000 absolute top-0 cursor-pointer">
                <h2 className=" text-2xl text-white">Denims</h2>
              </div>
              <img
                className="h-full w-full object-cover"
                src="https://images.pexels.com/photos/875722/pexels-photo-875722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Denims"
              />
            </div>
          </div>
          <div className="w-full h-3/6 mt-2 relative">
            <div className="grid place-items-center h-full w-full bg-black opacity-0 hover:opacity-70 transition-all duration-1000 absolute top-0 cursor-pointer">
              <h2 className=" text-2xl text-white">Women</h2>
            </div>
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Women"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
