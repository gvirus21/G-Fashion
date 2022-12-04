import React from "react";
import Slider from "../../components/Slider";
import FeaturedProducts from "../../components/FeaturedProducts";
import Categories from "../../components/Categories";
const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="Featured" />
      <Categories />
      <FeaturedProducts type="Trending" />
    </div>
  );
};

export default Home;
