import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import CartSkeleton from "../components/CartSkeleton";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(data);
    setIsLoading(false);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-1 justify-center items-center mb-8">
              <img
                src={product.image}
                className="max-w-[170px] w-[450px] lg:max-w-sm hover:scale-110 duration-300  hover:shadow-md rounded-md hover:shadow-black transition"
              />
            </div>
            {isLoading && <CartSkeleton />}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[15px] sm:text-[22px] font-medium mb-12 max-w-[450px] mx-auto lg:max-h-0">
                {product.title}
              </h1>
              <div className="text-xl text-red-500 font-medium mb-6">
                <span>${product.price}</span>
              </div>
              <p className="mb-8 font-semibold">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
