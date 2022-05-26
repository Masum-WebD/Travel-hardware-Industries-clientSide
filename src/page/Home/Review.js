import React, { useEffect, useState } from "react";

const Review = ({ review }) => {
  const {img, name, comment } = review;

  return (
    <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
    <div class="avatar">
  <div class="w-24 rounded-full">
    <img src="https://api.lorem.space/image/face?hash=92310" alt=""/>
  </div>
</div>
      <div>
        <h1 class="text-5xl font-bold">Box Office News!</h1>
        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  );
};

export default Review;
