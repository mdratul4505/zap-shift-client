import { Quote } from 'lucide-react';
import React from 'react';

const RevewsCard = ({reviwe}) => {
    const {review , user_photoURL ,userName} = reviwe
    return (
        <div className="max-w-sm shadow-xl bg-white  rounded-xl p-6">
      {/* Quote Icon */}
      <div className=" mb-3">
        <Quote className="h-8 w-8" />
      </div>

      {/* Review Text */}
      <p className=" text-sm  mb-4">
        {review}
      </p>

      <div className="border-t border-dashed mb-4"></div>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <img
          src={user_photoURL}
          alt="User"
          className="h-12 w-12 rounded-full object-cover border-2 border-teal-700"
        />

        <div>
          <h3 className="font-semibold text-gray-900">{userName}</h3>
          <p className="text-xs text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
    );
};

export default RevewsCard;