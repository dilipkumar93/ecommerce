import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../Redux/Cartslice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ product }) => {
  const { id, title, price, image } = product;
  const dispatch = useDispatch();

  return (
    <>
      <div className="border border-[#e4e4e4] h-[320px] mb-8 relative">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="mx-auto flex justify-center items-center w-[200px]">
            <Link to={`/product/${id}`}>
              <img
                src={image}
                className="max-h-[180px] hover:scale-110 duration-300"
              />
            </Link>
          </div>
          <div className="text-sm mb-3 absolute -bottom-1 text-gray-700 font-bold mx-auto">
            <Link to={`/product/${id}`}>
              <span>{title}</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <span>${price}</span>
          <button
            onClick={() =>
              dispatch(addToCart({ id, title, price, image, qty: 1 })) &
              toast.success(`${title} is added`)
            }
            className="p-1 my-2 rounded-xl cursor-pointer duration-300  text-gray-900 hover:text-white hover:bg-gradient-to-t from-green-500 to-green-900"
          >
            ADD TO CART
          </button>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};

export default Product;
