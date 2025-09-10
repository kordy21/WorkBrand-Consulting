import React from "react";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

const ReviewCard = ({ title, userImage, userName, userComment, rating }) => {
  return (
    <div className="px-4 py-6 bg-white border border-gray-200 shadow-md rounded-2xl">
      <h3 className="mb-4 text-lg font-semibold text-custom-primary">
        {title}
      </h3>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={userImage}
            alt={userName}
            className="object-cover w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-800">{userName}</p>
            <p className="text-sm text-gray-500">{userComment}</p>
          </div>
        </div>

        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) =>
            star <= rating ? (
              <StarSolid key={star} className="w-5 h-5 text-custom-primary" />
            ) : (
              <StarOutline key={star} className="w-5 h-5 text-gray-300" />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
