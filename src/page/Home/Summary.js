import { faArrowUp, faCalendarCheck, faClipboard, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Summary = () => {
  return (
    <div className="mt-10">
    <h1 className="font-bold text-3xl text-rose-700">Our company summary</h1>
    <div className=''>
    <div class="stats stats-vertical lg:stats-horizontal  shadow mt-10">
      <div class="stat ml-5 place-items-center">
        <div class="stat-title text-xl text-black">Order completed</div>
        <FontAwesomeIcon className="w-20 h-10" icon={faCalendarCheck}></FontAwesomeIcon>
        <div class="stat-value">31K</div>
        <div class="stat-desc">From January 1st to present</div>
      </div>

      <div class="stat ml-5 place-items-center">
        <div class="stat-title text-xl text-black">Regular Sell</div>
        <FontAwesomeIcon className="w-20 h-10" icon={faTruck}></FontAwesomeIcon>
        <div class="stat-value text-rose-700">4,200</div>
        <div class="stat-desc text-rose-700 font-bold">↗︎ 40 (2%)</div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title text-xl text-black">Sales increase every day</div>
        <FontAwesomeIcon className="w-20 h-10" icon={faArrowUp}></FontAwesomeIcon>
        <div class="stat-value">1,680</div>
        <div class="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Summary;
