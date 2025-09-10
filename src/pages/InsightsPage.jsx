import React from "react";
import Header from "../component/layers/HeaderLayout/HeaderLayout";
import HeroSection from "../component/sharedComponents/HeroSection";
import Footer from "../component/sharedComponents/Footer";
import insght from "../assets/images/insight.webp";
import MainTitle from "../component/sharedComponents/MainTittle";
import Future from "../assets/images/Future of E-commerce .webp";
import Network from "../assets/images/How to Network.webp";
import price from "../assets/images/Sustainable Business.webp";
import Marketing from "../assets/images/MarketingBudget .webp";
import UnderStand from "../assets/images/Understanding.webp";
import iMPORTANT from "../assets/images/ImportanceofUser.webp";
import Essitiat from "../assets/images/EssentialStep.webp";
import physical from "../assets/images/PhysicalOffice.webp";
import Online from "../assets/images/OnlinePresence.webp";
import InsightsGrid from "../component/Insight/InsightsGrid";

const InsightsPage = () => {
  const cardsData = [
    {
      image: Future,
      title: "The Future Of E-Commerce: Trends To Watch In 2024",
      description:
        "Discover Emerging Trends That Will Shape The Online Shopping Experience.",
      link: "/insights-single",
    },
    {
      image: Network,
      title: "How To Network Effectively In A Digital Age",
      description:
        "Maintain More Connections With These Strategic Networking Tips.",
      link: "/insights-single",
    },
    {
      image: price,
      title: "Sustainable Business Practices For Startups",
      description:
        "Learn How To Build An Eco-Friendly Business From The Ground Up.",
      link: "/insights-single#",
    },
    {
      image: Marketing,
      title: "Marketing on a Budget: Strategies for Startups",
      description:
        "Creative ways to promote your business without breaking the bank.",
      link: "/insights-single",
    },
    {
      image: UnderStand,
      title: "Understanding Your Target Audience: A Deep Dive",
      description:
        "Learn techniques to better understand and reach your customers.",
      link: "/insights-single",
    },
    {
      image: iMPORTANT,
      title: "The Importance of User Experience in Product Design",
      description: "Why prioritizing UX can make or break your startup.",
      link: "/insights-single",
    },
    {
      image: Essitiat,
      title: "5 Essential Steps to Launch Your Startup in Egypt",
      description:
        "Navigate the business landscape with confidence using our comprehensive guide.",
      link: "/insights-single",
    },
    {
      image: physical,
      title: "Virtual vs Physical Office: What Works Best?",
      description:
        "Compare the benefits and find the perfect solution for your business needs.",
      link: "/insights-single",
    },
    {
      image: Online,
      title: "Building Your Online Presence in 2025",
      description:
        "Essential digital strategies every entrepreneur should know.",
      link: "/insights-single",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-custom-gradient-bg">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="w-full">
        <HeroSection
          backgroundImage={insght}
          title="Insights"
          description="Read expert tips, market trends, and real success stories to help you launch and grow your business the smart way."
        />
      </div>

      {/* Business Insights Section */}
      <div className="px-4 my-12 max-container">
        <MainTitle
          title="Business "
          subdescription="Insights"
          description="Expert advice and insights to help you grow your business"
        />

        <InsightsGrid cards={cardsData} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InsightsPage;
