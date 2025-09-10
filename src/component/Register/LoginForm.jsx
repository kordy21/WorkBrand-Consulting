import React, { useState } from "react";
import GoogleIcon from "../sharedComponents/GoogleIcon";
import InputField from "../sharedComponents/InputField";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const LoginForm = ({
  title,
  subtitle,
  emailPlaceholder,
  passwordPlaceholder,
  rememberMeText,
  forgotPasswordText,
  signInText,
  googleSignInText,
  additionalText,
  additionalLinkText,
  additionalLinkHref,
  imageSrc,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col p-6 bg-white shadow-md rounded-2xl md:flex-row md:p-0">
      {/* Left Image */}
      <div className="flex items-center justify-center mb-6 md:w-1/2 md:mb-0">
        <img
          src={imageSrc}
          className="w-full md:h-full md:rounded-s-2xl md:rounded-none rounded-xl h-[325px] object-cover"
          alt="Illustration"
        />
      </div>

      {/* Form */}
      <div className="flex flex-col justify-center md:my-6 md:gap-6 md:mx-12 md:w-1/2">
        <div>
          <h2 className="text-2xl font-bold text-center md:text-3xl md:text-start">
            {title}
          </h2>
          <p className="my-2 text-lg text-center text-gray-700 md:text-xl md:text-start">
            {subtitle}
          </p>
        </div>

        <form className="flex flex-col gap-4">
          {/* Email Field */}
          <InputField
            type="email"
            placeholder={emailPlaceholder}
            icon={EnvelopeIcon}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Field */}
          <InputField
            type="password"
            placeholder={passwordPlaceholder}
            icon={LockClosedIcon}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="appearance-none w-4 h-4 border border-gray-300 rounded-sm checked:bg-custom-primary checked:border-[#8B4513] relative
                  before:content-['✓'] before:absolute before:text-white before:top-[-2px] before:left-[3px] before:opacity-0 checked:before:opacity-100"
              />
              {rememberMeText}
            </label>
            <a
              href="/forget-password"
              className="text-custom-primary hover:underline"
            >
              {forgotPasswordText}
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-3 text-lg font-semibold text-white transition bg-custom-gradient-orange rounded-2xl hover:opacity-90"
          >
            {signInText}
          </button>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            className="flex items-center justify-center w-full gap-2 px-4 py-3 border border-custom-primary text-custom-primary rounded-2xl hover:bg-custom-primary hover:text-white"
          >
            <GoogleIcon />
            <span className="flex-grow text-center">{googleSignInText}</span>
            <span className="w-5"></span>
          </button>

          {additionalText && (
            <p className="mt-2 text-sm text-center">
              {additionalText}{" "}
              <a
                href={additionalLinkHref}
                className="text-custom-primary hover:underline"
              >
                {additionalLinkText}
              </a>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
