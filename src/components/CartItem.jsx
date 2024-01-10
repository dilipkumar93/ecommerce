import React from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementProduct,
  incrementProduct,
  removeCart,
} from "../Redux/Cartslice";
import { ToastContainer } from "react-toastify";

const CartItem = ({ item }) => {
  const { id, title, price, image, qty } = item;
  const dispatch = useDispatch();

  const RemoveCart = (item) => {
    dispatch(removeCart(item));
  };

  const IncrementProduct = (id) => {
    dispatch(incrementProduct(id));
  };

  const DecrementProduct = (id) => {
    dispatch(decrementProduct(id));
  };

  return (
    <>
      <div className="justify-between items-center mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start ">
        <div className="w-full min-h-[150px]">
          <Link to={`/product/${id}`}>
            <img
              src={image}
              alt="product-image"
              className="rounded-lg sm:w-24"
            />
          </Link>
        </div>
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0 ">
            <Link to={`/product/${id}`}>
              <h2 className="font-bold text-gray-900 ">{title}</h2>
            </Link>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <button
                className="flex justify-center items-center cursor-pointer"
                onClick={() =>
                  qty >= 1 ? DecrementProduct(item) : qty == RemoveCart(item)
                }
              >
                <IoMdRemove />
              </button>
              <span className="flex justify-center items-center h-full px-2">
                {qty}
              </span>
              <button
                className="flex justify-center items-center"
                onClick={() => IncrementProduct(item)}
              >
                <IoMdAdd />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <span>${price}</span>
              <button
                className="hover:text-red-500 text-2xl"
                onClick={() => RemoveCart(item)}
              >
                <IoMdClose />
              </button>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-left"
          autoClose={5000}
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

export default CartItem;
