import React from "react";
import Card from "../components/Card";

const products = [
  {
    id: 1,
    title: "Nike Orange sneakers",
    img1: "https://images.pexels.com/photos/9252069/pexels-photo-9252069.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/12725050/pexels-photo-12725050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    oldPrice: 18,
    price: 15,
  },
  {
    id: 2,
    title: "Lino Blue bagpack",
    img1: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/10801850/pexels-photo-10801850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    oldPrice: 16,
    price: 10,
  },
  {
    id: 3,
    title: "Groop Yellow hoodie",
    img1: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/6322735/pexels-photo-6322735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    oldPrice: 35,
    price: 29,
  },
  {
    id: 4,
    title: "Jenkis Gray denim",
    img1: "https://images.pexels.com/photos/2853534/pexels-photo-2853534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/4306567/pexels-photo-4306567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    oldPrice: 47,
    price: 39,
  },
];

const FeaturedProducts = ({ type }) => {
  return (
    <div className="py-20 px-20">
      <div>
        <h1 className="text-2xl font-bold">{type} products</h1>
      </div>
      <div className="mt-20 mx-auto max-w-[70rem] flex justify-between">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
