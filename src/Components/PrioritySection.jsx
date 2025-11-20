import React from "react";
import merchantbg from "../assets/be-a-merchant-bg.png";
import img from "../assets/location-merchant.png";

const PrioritySection = () => {
  return (
    <div className="bg-secondary rounded-3xl">
      <div>
        <img src={merchantbg} alt="" />
      </div>
      <div className="flex max-w-6xl mx-auto">
        <div className=" items-center mb-20">
          <h1 className="text-4xl font-bold text-white">
            Merchant and Customer Satisfaction <br /> is Our First Priority
          </h1>
          <p className="text-gray-400 my-2">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="mt-5">
            <button className="btn rounded-full font-bold bg-primary">
              Become a Merchant
            </button>
            <button className="btn rounded-full ml-5 border bg-white text-primary font-bold border-primary">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PrioritySection;
