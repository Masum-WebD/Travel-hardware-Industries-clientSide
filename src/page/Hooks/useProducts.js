import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  // https://cokpit.onrender.com/product
  useEffect(() => {
    fetch("https://cokpit.onrender.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products];
};

export default useProducts;
