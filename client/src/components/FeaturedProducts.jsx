import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { products, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="py-20 px-20">
      <div>
        <h1 className="text-2xl font-bold">{type} products</h1>
      </div>
      <div className="mt-20 mx-auto max-w-[70rem] grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {error ? "Something went wrong!" : (loading
          ? "loading"
          : products?.map((product) => (
              <Card key={product.id} product={product} />
            )))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
