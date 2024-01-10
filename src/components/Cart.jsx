import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { FiTrash2 } from "react-icons/fi";
import { clearCart } from "../Redux/Cartslice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.carts);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * Number(item.price),
    0
  );

  const dispatch = useDispatch();
  const ClearCart = (item) => {
    dispatch(clearCart(item));
  };

  return (
    <>
      <div className="h-full w-full bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">
          Cart Items {totalQty}
        </h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3 ">
            {cartItems.length >= 1 ? (
              <>
                {cartItems.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
              </>
            ) : (
              <h1 className="text-2xl text-center font-semibold">Cart is Empty</h1>
            )}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 ">
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">${totalPrice}</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
            <button className="py-4 px-4 justify-center items-center flex  ">
              <FiTrash2
                className=" hover:fill-red-500 text-xl w-16 h-16 rounded-full"
                onClick={() => ClearCart()}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
