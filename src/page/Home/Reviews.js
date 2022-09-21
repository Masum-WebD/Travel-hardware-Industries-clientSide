import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://cokpit.onrender.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mx-12 mt-16 bg-[#F6F5F8]">
      <Slider {...settings} className="text-black">
        {reviews.map((review) => (
          <div className="hero bg-base-200" key={review._id}>
            <div className="hero-content">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={review.img} alt="" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold">{review.name}</h1>
                <p className="py-6">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
