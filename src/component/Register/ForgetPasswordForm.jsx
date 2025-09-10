import React from "react";
import InputField from "../sharedComponents/InputField";

const ForgetPasswordForm = ({
  title,
  subtitle,
  emailPlaceholder,
  signInText,
  imageSrc,
  Iconmail,
  Iconlock,
}) => {
  return (
    <div className="flex flex-col p-6 bg-white shadow-md rounded-2xl md:flex-row md:p-0">
      {/* Left Image */}
      <div className="flex items-center justify-center w-full mb-6 md:w-1/2 md:mb-0">
        <img
          src={imageSrc}
          alt="Illustration"
          className="w-full md:h-full md:rounded-s-2xl md:rounded-none rounded-xl h-[325px] object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="flex flex-col justify-center md:my-6 md:gap-6 md:mx-12 md:w-1/2">
        <div className="justify-center md:justify-start">
          <span className="inline-block rounded-full">{Iconlock}</span>
          <h2 className="flex items-center gap-2 text-2xl font-bold md:text-3xl text-custom-black">
            {title}
          </h2>
          <p className="mt-3 text-custom-black">{subtitle}</p>
        </div>

        <form className="flex flex-col gap-5 mt-6">
          <InputField
            type="email"
            placeholder={emailPlaceholder}
            Icon={Iconmail}
          />

          <button
            type="submit"
            className="py-3 text-white transition rounded-lg bg-custom-gradient-orange hover:opacity-90"
          >
            {signInText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
