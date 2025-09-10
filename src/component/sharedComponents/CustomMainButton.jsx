import React from "react";
import PropTypes from "prop-types";

const CustomMainButton = ({
  onClick,
  text,
  IconStart,
  IconEnd,
  image,
  fullWidth,
  TripleArrow,
  disabled=false,
  hoverColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-3 px-4 py-2 text-sm text-white hover:text-black rounded-md lg:px-4 lg:py-1 sm:text-base group overflow-hidden
    ${
      fullWidth
        ? "w-full h-[50px] mx-auto px-5"
        : `hover:text-${!hoverColor && "black"} duration-300`
    }
    ${
      disabled
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-custom-gradient-orange text-white hover:bg-orange-700"
    }
  `}
      disabled={disabled}
    >
      <span className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 bg-custom-gradient-blue group-hover:opacity-0"></span>
      {fullWidth || hoverColor ? (
        <>
          <span className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 bg-white group-hover:opacity-100"></span>
        </>
      ) : (
        <>
          <span className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 bg-custom-gradient-white group-hover:opacity-100"></span>
        </>
      )}
      {IconStart && (
        <IconStart
          className={`relative z-10 w-5 h-5 duration-300 ${
            fullWidth ? "text-white hover:text-black" : "group-hover:text-black"
          }`}
        />
      )}
      <span className="relative z-10 ">{text}</span>
      {IconEnd && (
        <IconEnd
          className={`relative z-10 w-5 h-5 duration-300 ${
            fullWidth ? "text-white" : "group-hover:text-black"
          }`}
        />
      )}
      {TripleArrow && <span className="relative z-10">{TripleArrow}</span>}
      {image && (
        <img
          src={image}
          alt="Button icon"
          className="relative z-10 w-2.5 h-2.5 ml-2"
        />
      )}
    </button>
  );
};

CustomMainButton.propTypes = {
  text: PropTypes.node.isRequired,
  image: PropTypes.string,
  onClick: PropTypes.func,
};

CustomMainButton.defaultProps = {
  image: null,
  onClick: () => {},
};

export default CustomMainButton;
