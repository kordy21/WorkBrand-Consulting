import React from "react";
import InsightCard from "./InsightCard";

const InsightsGrid = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <InsightCard
          key={index}
          image={card?.image}
          title={card?.title}
          description={card?.description}
          link={card?.link}
        />
      ))}
    </div>
  );
};

export default InsightsGrid;
