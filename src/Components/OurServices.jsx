import React from "react";
import img from "../assets/service.png";

const OurServices = () => {
  return (
    <div className="bg-secondary my-20 py-20 rounded-3xl">
      <div className="text-center space-y-3 py-5 ">
        <h1 className="text-4xl text-white  font-bold">Our Services</h1>
        <p className="text-gray-300">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 p-10">
        {/* card-1 */}
        <div className="card hover:bg-primary bg-base-100  shadow-sm  hover:scale-105 transition">
          <figure className="px-10  pt-10">
            <div className=" h-20 w-20 bg-gradient-to-b from-[#eeedfc] to-transparent flex justify-center items-center mx-auto rounded-full">
                <img className="h-7" src={img} alt="" />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Express & Standard Delivery</h2>
            <p>
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.v
            </p>
          </div>
        </div>
        {/* card-2 */}
        <div className="card hover:bg-primary bg-base-100  shadow-sm  hover:scale-105 transition">
          <figure className="px-10 pt-10">
            <div className=" h-20 w-20 bg-gradient-to-b from-[#eeedfc] to-transparent flex justify-center items-center mx-auto rounded-full">
                <img className="h-7" src={img} alt="" />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Express & Standard Delivery</h2>
            <p>
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.v
            </p>
          </div>
        </div>
        {/* card-3 */}
        <div className="card hover:bg-primary bg-base-100  shadow-sm  hover:scale-105 transition">
          <figure className="px-10 pt-10">
            <div className=" h-20 w-20 bg-gradient-to-b from-[#eeedfc] to-transparent flex justify-center items-center mx-auto rounded-full">
                <img className="h-7" src={img} alt="" />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Express & Standard Delivery</h2>
            <p>
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.v
            </p>
          </div>
        </div>
        {/* card-4 */}
        <div className="card hover:bg-primary bg-base-100  shadow-sm  hover:scale-105 transition">
          <figure className="px-10 pt-10">
            <div className=" h-20 w-20 bg-gradient-to-b from-[#eeedfc] to-transparent flex justify-center items-center mx-auto rounded-full">
                <img className="h-7" src={img} alt="" />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Express & Standard Delivery</h2>
            <p>
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.v
            </p>
          </div>
        </div>
        {/* card-5 */}
        <div className="card hover:bg-primary bg-base-100  shadow-sm  hover:scale-105 transition">
          <figure className="px-10 pt-10">
            <div className=" h-20 w-20 bg-gradient-to-b from-[#eeedfc] to-transparent flex justify-center items-center mx-auto rounded-full">
                <img className="h-7" src={img} alt="" />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Express & Standard Delivery</h2>
            <p>
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.v
            </p>
          </div>
        </div>
        {/* card-6 */}
        <div className="card hover:bg-primary bg-base-100  shadow-sm  hover:scale-105 transition">
          <figure className="px-10 pt-10">
            <div className=" h-20 w-20 bg-gradient-to-b from-[#eeedfc] to-transparent flex justify-center items-center mx-auto rounded-full">
                <img className="h-7" src={img} alt="" />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Express & Standard Delivery</h2>
            <p>
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.v
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
