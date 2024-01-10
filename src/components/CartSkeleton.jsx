import React from "react";
import Skeleton from "react-loading-skeleton";

const CartSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div
        className="flex w-full h-full p-2 border border-solid border-gray-700 rounded-[5px]"
        key={i}
      >
        <div className="flex-1">
          <Skeleton circle width={80} height={50} />
        </div>
        <div className="flex-1 flex-col ">
          <Skeleton count={1} />
          <Skeleton count={1} width={50} />
          <Skeleton count={1} width={100} />
        </div>
      </div>
    ));
};

export default CartSkeleton;
