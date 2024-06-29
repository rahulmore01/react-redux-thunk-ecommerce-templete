import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProductPage = ({
  productId,
  productName,
  productImage,
  productCategory,
  productDescription,
  productPrice,
  productRating,
}) => {

  return (
    <div>
      <div className="bg-white p-4 shadow-xl h-auto w-[240px] ">

        <ul className=" flex flex-col justify-center items-center text-left gap-4  flex-wrap ">
          <div className="w-auto h-[170px]">
            <img
              className="h-full w-full  "
              src={productImage}
              alt="product image"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <li className="font-bold"> {productName}</li>
            <div className="flex justify-between items-center">
              <li> {productCategory}</li>
              <li className="font-bold text-gray-400"> {productPrice}</li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
