import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const TripleArrowIcon = ({ color, hoverColor }) => {
  return (
    <div className="relative flex items-center justify-center">
      <ChevronRightIcon
        className={`w-4 h-4 text-${color} group-hover:text-${hoverColor} duration-300`}
      />
      <ChevronRightIcon
        className={`w-4 h-4 text-${color} ms-[-8px] group-hover:text-${hoverColor} duration-300`}
      />
      <ChevronRightIcon
        className={`w-4 h-4 text-${color} ms-[-8px] group-hover:text-${hoverColor} duration-300`}
      />
    </div>
  );
};

export default TripleArrowIcon;
