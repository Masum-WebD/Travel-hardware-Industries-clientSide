import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  // https://trevel-hardware.herokuapp.com/product
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products];
};

export default useProducts;
