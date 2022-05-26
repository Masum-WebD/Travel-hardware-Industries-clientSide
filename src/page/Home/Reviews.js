import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className='mx-12'>
        <h1 class='text-3xl mt-10 font-bold text-rose-700'>Customer Review</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-6">
        {reviews.map((review) => (
          <div class="hero bg-base-200">
            <div class="hero-content">
              <div class="avatar">
                <div class="w-24 rounded-full">
                  <img src={review.img} alt="" />
                </div>
              </div>
              <div>
                <h1 class="text-xl font-bold">{review.name}</h1>
                <p class="py-6">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
