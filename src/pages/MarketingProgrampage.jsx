import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import HeroSection from "../component/sharedComponents/HeroSection";
import marketing from '../assets/images/marketingpafe.webp';
export default function MarketingProgram() {
  return (
    <section>
      <HeaderLayout />
      <HeroSection
        backgroundImage={marketing}
        title="Marketing & Digital Marketing Program "
        buttonText="Book your training"
        description="An engaging environment to learn, discuss, and grow."
      />{" "}
    </section>
  );
}
