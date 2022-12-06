import React from "react";
import Slider from "../../components/Slider";
import FeaturedProducts from "../../components/FeaturedProducts";
import Categories from "../../components/Categories";
const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="Trending" />
      <Categories />
      <FeaturedProducts type="Featured" />
    </div>
  );
};

export default Home;
