import React from "react";
import useProducts from "../Hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const [products] = useProducts();
  return (
    <div className="px-12">
      <h1 className="text-3xl mt-16 font-bold "> Special Products</h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-6">
        {products.slice(19,25).map((p) => (
          <Product key={p._id} product={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
