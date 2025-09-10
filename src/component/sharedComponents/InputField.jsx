import React, { useState } from "react";
import {
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const InputField = ({ type = "text", placeholder }) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  const getIcon = () => {
    switch (type) {
      case "text":
        return <UserIcon className="w-5 h-5 text-gray-400" />;
      case "email":
        return <EnvelopeIcon className="w-5 h-5 text-gray-400" />;
      case "password":
        return <LockClosedIcon className="w-5 h-5 text-gray-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full">
      <span className="absolute -translate-y-1/2 left-3 top-1/2">
        {getIcon()}
      </span>

      <input
        type={isPassword ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full py-3 border  rounded-2xl focus:outline-none focus:ring focus:ring-white focus:border-custom-primary pl-10 border-lg`}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute -translate-y-1/2 right-3 top-1/2 text-gray-400"
        >
          {showPassword ? (
            <EyeIcon className="w-5 h-5" />
          ) : (
            <EyeSlashIcon className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
};

export default InputField;
