import { Truck } from "lucide-react";
import React from "react";

const HowToWork = () => {
  return (
    <div>
        <div>
            <h1 className="text-4xl font-bold text-secondary">How It Works</h1>
        </div>
      <div className="flex gap-5 my-10">
        {/* card-1 */}
      <div className="card card-border rounded-xl shadow-xl  bg-white py-5 ">
        <div className="px-5 space-y-2">
            <div className="">
                <Truck />
            </div>
          <h2 className="card-title">Booking Pick & Drop</h2>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time, every time.
          </p>
          
        </div>
      </div>
      {/* card-2 */}
      <div className="card card-border rounded-xl shadow-xl  bg-white py-5 ">
        <div className="px-5 space-y-2">
            <div className="">
                <Truck />
            </div>
          <h2 className="card-title">Booking Pick & Drop</h2>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time, every time.
          </p>
          
        </div>
      </div>
      {/*card-3  */}
      <div className="card card-border rounded-xl shadow-xl  bg-white py-5 ">
        <div className="px-5 space-y-2">
            <div className="">
                <Truck />
            </div>
          <h2 className="card-title">Booking Pick & Drop</h2>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time, every time.
          </p>
          
        </div>
      </div>
      {/* card-4 */}
      <div className="card card-border rounded-xl shadow-xl  bg-white py-5 ">
        <div className="px-5 space-y-2">
            <div className="">
                <Truck />
            </div>
          <h2 className="card-title">Booking Pick & Drop</h2>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time, every time.
          </p>
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default HowToWork;
