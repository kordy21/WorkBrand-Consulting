import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import Footer from "../component/sharedComponents/Footer";
import BusinessHubHero from "../component/Portal/PortalHero";
import WhoIsHereSection from "../component/Portal/WhoIsHereSection";
import FindConnectionSection from "../component/Portal/FindConnectionSection";

const PortalPage = () => {
  return (
    <section className="bg-custom-gradient-bg">
      <HeaderLayout />
      <BusinessHubHero />
      <WhoIsHereSection />
      <FindConnectionSection />
      <Footer />
    </section>
  );
};

export default PortalPage;
