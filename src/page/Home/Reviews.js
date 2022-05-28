import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://trevel-hardware.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="mx-12">
      <h1 className="text-3xl mt-10 font-bold text-rose-700">
        Customer Review
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-6">
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
      </div>
    </div>
  );
};

export default Reviews;
