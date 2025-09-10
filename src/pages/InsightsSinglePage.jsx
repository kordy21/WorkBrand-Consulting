import React from "react";
import insight from "../assets/images/insight_single.jpg";
import friction from "../assets/images/friction.jpg";
import augment from "../assets/images/augmnet.jpg";
import Sustainability from "../assets/images/sustianability.jpg";
import social from "../assets/images/social.jpg";
import voice from "../assets/images/voice.jpg";
import hyper from "../assets/images/hyper.jpg";
import Header from "../component/layers/HeaderLayout/HeaderLayout";
import Footer from "../component/sharedComponents/Footer";
import InsightsSection from "../component/home/InsightsSwction";
const insights = [
  {
    id: 1,
    title: "Hyper-Personalization",
    description:
      "E-commerce is becoming smarter. Brands now use AI and big data to deliver shopping experiences tailored to each user’s behavior, preferences, and needs. Personalized product recommendations, dynamic content, and targeted offers are no longer optional—they’re expected.",
    img: hyper,
  },
  {
    id: 2,
    title: "Voice & Visual Search",
    description:
      "In 2024, users are increasingly searching for products using voice assistants or images. Whether it’s asking Alexa to find the best wireless headphones or uploading a photo to find a similar dress, retailers that adopt these tools will gain a major advantage.",
    img: voice,
  },
  {
    id: 3,
    title: "Social Commerce Growth",
    description:
      "Social platforms like Instagram, TikTok, and YouTube are no longer just for scrolling—they’re stores. With in-app checkouts, shoppable videos, and live shopping events, social media is becoming one of the strongest sales channels.",
    img: social,
  },
  {
    id: 4,
    title: "Sustainability Matters",
    description:
      "More customers are choosing to support brands that are environmentally responsible. From eco-friendly packaging to carbon-neutral shipping, transparency and sustainability are becoming selling points.",
    img: Sustainability,
  },
  {
    id: 5,
    title: "Augmented Reality (AR) Shopping",
    description:
      "AR is giving online shopping a physical feel. Whether it’s trying on glasses virtually or placing a sofa in your living room through your phone, AR is improving customer confidence and reducing returns.",
    img: augment,
  },
  {
    id: 6,
    title: "Frictionless Payments",
    description:
      "One-click checkouts, digital wallets, and Buy Now, Pay Later options are dominating the payment space. Speed, convenience, and trust are key to reducing cart abandonment.",
    img: friction,
  },
];

const InsightsSinglePage = () => {
  return (
    <div className="w-full bg-white">
      <Header relative={true} />
      <div className="max-container px-4 py-12 w-full">
        <img
          src={insight}
          alt="E-commerce Trends"
          className="w-full h-[200px] sm:h-[500px] object-cover rounded-md"
        />
      </div>

      <div className="max-container ">
        <section className="space-y-12">
          <div className="text-start px-4">
            <h2 className="text-custom-primary text-2xl md:text-3xl font-semibold mb-4">
              The Future Of E-Commerce: Trends To Watch In 2024
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              Discover Emerging Trends That Will Shape The Online Shopping
              Experience.
            </p>
          </div>

          <div className="grid gap-16 px-4 md:px-0">
            {insights.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-1/2 px-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {item.id}. {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="w-full md:w-1/2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[250px] object-cover rounded-md shadow-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <InsightsSection any="no" />
      <Footer />
    </div>
  );
};

export default InsightsSinglePage;
