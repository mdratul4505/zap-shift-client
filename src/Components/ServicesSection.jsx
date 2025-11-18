import React from "react";

import liveImg from "../assets/live-tracking.png";
import deliveryImg from "../assets/safe-delivery.png";

const ServicesSection = () => {
  const services = [
    {
      icon: <img src={liveImg} className="w-14 h-14" alt="" />,
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    },
    {
      icon: <img src={deliveryImg} className="w-14 h-14" alt="" />,
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      icon: <img src={deliveryImg} className="w-14 h-14" alt="" />,
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <div className="max-w-6xl my-20 mx-auto p-6 space-y-6">
      {services.map((service, idx) => (
        <div key={idx} className="bg-white shadow-xl hover:bg-primary hover:text-white rounded-2xl  p-6">
          <div className="flex items-center gap-6">
            {service.icon}

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
