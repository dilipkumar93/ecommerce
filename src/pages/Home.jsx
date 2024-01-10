import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import "react-loading-skeleton/dist/skeleton.css";
import CartSkeleton from "../components/CartSkeleton";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <section className="py-14 flex justify-center items-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-sm mx-auto my-8 md:max-w-none">
            {isLoading && <CartSkeleton cards={20} />}
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
