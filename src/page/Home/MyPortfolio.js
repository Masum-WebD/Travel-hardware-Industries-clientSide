import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyPortfolio = () => {
  const myPortfolio = {
    name: "Md Masum Rana",
    email: "masummx3@gmail.com",
    Education:
      "BBA honours 3rd year national University. Gangni digree college ,Gangni, Meherpur.",
    skills:
      "I am now learning web development. Everything I have learned so far HTML,CSS,Bootstrap,tailwind css, javaScript, reactJs and basic nodeJs, javaScript , reactJs and node js not comfortable. I known react and javaScript 50% and nodejs something. ",
  };

  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center">My Portfolio</h2>
          <div className="form-control">
            <label className="input-group mb-2">
              <span>Name</span>
              <input
                disabled
                type="text"
                value={myPortfolio.name}
                placeholder="Type Name"
                className="input input-bordered"
              />
            </label>
            <label className="input-group mb-2">
              <span>Email</span>
              <input
                disabled
                type="text"
                value={myPortfolio.email}
                placeholder="Type Email"
                className="input input-bordered"
              />
            </label>
            <label className="input-group mb-2">
              <span>Education</span>
              <textarea
                type="text"
                value={myPortfolio.Education}
                placeholder="Your Education details"
                className="input input-bordered h-32"
              />
            </label>
            <label className="input-group mb-2">
              <span>Developer skills</span>
              <textarea
                type="text"
                value={myPortfolio.skills}
                placeholder="Your Education details"
                className="input input-bordered h-32"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
