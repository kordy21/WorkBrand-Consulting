import React from "react";
// import Card from "../home/ProductCard"; 
import ProductCard from "../home/ProductCard";

export default function CardGrid({ data }) {
  return (
    <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <>
          <ProductCard
            {...item}
            // onButtonClick={() => navigate("/coming-soon")}
          />
        </>
      ))}
    </div>
  );
}
