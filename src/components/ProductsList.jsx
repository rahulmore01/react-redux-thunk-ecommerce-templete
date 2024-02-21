import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductPage from "./ProductPage.jsx";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const [productList, setProductList] = useState([]);

  console.log("productList=>", productList);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const productData = response.data;
        setProductList(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-screen h-full flex justify-center items-center bg-gray-200 gap-8 pt-10 flex-wrap">
      {productList.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <ProductPage
            productName={product.title}
            productImage={product.image}
            productCategory={product.category}
            productDescription={product.description}
            productPrice={product.price}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
