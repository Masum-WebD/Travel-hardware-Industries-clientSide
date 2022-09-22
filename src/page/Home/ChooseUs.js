import { faPiggyBank, faSackDollar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiCommercialAirplane} from "react-icons/gi";
import React from "react";

const ChooseUs = () => {
  return (
    <div className="bg-primary mt-16 ">
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-8 mx-12">
        <div className="flex text-white p-7">
        <FontAwesomeIcon className="my-auto" icon={faSackDollar} />
        <p className="front-bold px-2">14-DAY MONEY BACK</p>
        </div>
        <div className="flex text-white p-7">
          <GiCommercialAirplane className="my-auto"/>
        {/* <FontAwesomeIcon className="my-auto" icon={faSackDollar} /> */}
        <p className="front-bold px-2">FAST FREE SHIPMENT</p>
        </div>
        <div className="flex text-white p-7">
        <FontAwesomeIcon className="my-auto" icon={faPiggyBank} />
        <p className="front-bold px-2">MONEY BACK GUARENTEE</p>
        </div>
        <div className="flex text-white p-7">
        <FontAwesomeIcon className="my-auto" icon={faThumbsUp} />
        <p className="front-bold px-2">SAVE 20% WHEN YOU</p>
        </div>
        </div>
    </div>
  );
};

export default ChooseUs;
