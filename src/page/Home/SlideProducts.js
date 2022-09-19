import React, { useEffect, useState } from "react";
// import Carousel from "react-elastic-carousel";
import Slider from "react-slick";
import SlideProduct from "./SlideProduct";

const SlideProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/slideProduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
 const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="mt-5 mx-12" >
      <Slider {...settings} >        
        {products.map((p) => <SlideProduct kay={p._id} product={p}></SlideProduct>)}
      </Slider >
    </div>
  );
};

export default SlideProducts;
