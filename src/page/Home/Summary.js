import {
  faArrowUp,
  faCalendarCheck,
  faClipboard,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Summary = () => {
  return (
    <div className="mt-16 mx-12">
      <h1 className="font-bold text-3xl">Our company summary</h1>
      <div className=" grid gap-4">
        <div className="stats stats-vertical lg:stats-horizontal  shadow mt-10">
          <div className="stat ml-5 place-items-center">
            <div className="stat-title text-xl text-black">Order completed</div>
            <FontAwesomeIcon
              className="w-20 h-10"
              icon={faCalendarCheck}
            ></FontAwesomeIcon>
            <div className="stat-value">31K</div>
            <div className="stat-desc">From January 1st to present</div>
          </div>

          <div className="stat ml-5 place-items-center">
            <div className="stat-title text-xl text-black">Regular Sell</div>
            <FontAwesomeIcon
              className="w-20 h-10"
              icon={faTruck}
            ></FontAwesomeIcon>
            <div className="stat-value text-rose-700">4,200</div>
            <div className="stat-desc text-rose-700 font-bold">↗︎ 40 (2%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title text-xl text-black">
              Sales increase every day
            </div>
            <FontAwesomeIcon
              className="w-20 h-10"
              icon={faArrowUp}
            ></FontAwesomeIcon>
            <div className="stat-value">1,680</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
