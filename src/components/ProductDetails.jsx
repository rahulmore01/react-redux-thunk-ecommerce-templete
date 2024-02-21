import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductPage from './ProductPage.jsx'
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  console.log("product=>", product);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        const productData = response.data;
        
        setProduct(productData);
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [productId]);

  return (
    <div className="w-screen h-full flex justify-center items-start bg-gray-200 gap-8 pt-10 flex-wrap">
      {product ? (
        <ProductPage key={product.id} productName={product.title} 
        productImage={product.image}
        productCategory={product.category}
        productDescription={product.description}
        productPrice={product.price}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductsDetails;
