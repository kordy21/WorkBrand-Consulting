import React, { useState } from "react";
import FilterSidebar from "../filter/FilterSidebar";
import Premium_Notebook from "../../assets/images/Premium_Notebook.webp";
import Jumia from "../../assets/images/Jumia.webp";
import Calligraphy_Pen_Set from "../../assets/images/Calligraphy_Pen_Set.webp";
import Ink_Masters from "../../assets/images/Ink_Masters.webp";
import Leather_Journal from "../../assets/images/Leather_Journal.webp";
import Artisan_Designs from "../../assets/images/Artisan_Designs.webp";
import Stainless_Water_Bottle from "../../assets/images/Stainless_Water_Bottle.webp";
import CardGrid from "./CardGrid";
import { FunnelIcon } from "@heroicons/react/24/solid";
export default function Store() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    rating: [],
  });
  const [showSidebar, setShowSidebar] = useState(false);

  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleFilterChange = (key, values) => {
    setSelectedFilters((prev) => ({ ...prev, [key]: values }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({ category: [], rating: [] });
    setPriceRange([0, 1000]);
  };

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };
  const productsData = [
    {
      photo: Premium_Notebook,
      title: "Premium Notebook",
      description:
        "A durable, hardcover notebook with lined pages and an embossed logo, perfect ...",
      authorName: "By Jumia Store",
      avatar: Jumia,
      salary: "30 $",
      reviewCount: 15,
      buttonText: "Add To Cart",
      iconbutton: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      ),
    },
    {
      photo: Calligraphy_Pen_Set,
      title: "Calligraphy Pen Set",
      description:
        "A set of specialized calligraphy pens for elegant writing and artistic designs",
      authorName: "By Ink Masters",
      avatar: Ink_Masters,
      salary: "28$",
      reviewCount: 20,
      buttonText: "Add To Cart",
      iconbutton: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      ),
    },
    {
      photo: Leather_Journal,
      title: "Leather Journal",
      description:
        "A luxurious leather-bound journal with blank pages, ideal for sketching and note-taking",
      authorName: "By Artisan Designs",
      avatar: Artisan_Designs,
      salary: "30$",
      reviewCount: 25,
      buttonText: "Add To Cart",
      iconbutton: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      ),
    },
    {
      photo: Stainless_Water_Bottle,
      title: "Stainless Water Bottle",
      description:
        "A sleek water bottle  bottle  with a secure lid, perfect for staying hydrated on the go",
      authorName: "By Outdoor Gear Co.",
      avatar: Stainless_Water_Bottle,
      salary: "15$",
      reviewCount: 5,
      buttonText: "Add To Cart",
      iconbutton: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      ),
    },
    {
      photo: Premium_Notebook,
      title: "Premium Notebook",
      description:
        "A durable, hardcover notebook with lined pages and an embossed logo, perfect ...",
      authorName: "By Jumia Store",
      avatar: Jumia,
      salary: "30 $",
      reviewCount: 15,
      buttonText: "Add To Cart",
      iconbutton: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      ),
    },
    {
      photo: Calligraphy_Pen_Set,
      title: "Calligraphy Pen Set",
      description:
        "A set of specialized calligraphy pens for elegant writing and artistic designs",
      authorName: "By Ink Masters",
      avatar: Ink_Masters,
      salary: "28$",
      reviewCount: 20,
      buttonText: "Add To Cart",
      iconbutton: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      ),
    },
    {
      photo: Leather_Journal,
      title: "Leather Journal",
      description:
        "A luxurious leather-bound journal with blank pages, ideal for sketching and note-taking",
      authorName: "By Artisan Designs",
      avatar: Artisan_Designs,
      salary: "30$",
      reviewCount: 25,
      buttonText: "Add To Cart",
      iconbutton: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      ),
    },
    {
      photo: Stainless_Water_Bottle,
      title: "Stainless Water Bottle",
      description:
        "A sleek water bottle  bottle  with a secure lid, perfect for staying hydrated on the go",
      authorName: "By Outdoor Gear Co.",
      avatar: Stainless_Water_Bottle,
      salary: "15$",
      reviewCount: 5,
      buttonText: "Add To Cart",
      iconbutton: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      ),
    },
    {
      photo: Leather_Journal,
      title: "Leather Journal",
      description:
        "A luxurious leather-bound journal with blank pages, ideal for sketching and note-taking",
      authorName: "By Artisan Designs",
      avatar: Artisan_Designs,
      salary: "30$",
      reviewCount: 25,
      buttonText: "Add To Cart",
      iconbutton: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      ),
    },
  ];

  // const filteredProducts = productsData.filter((item) => {
  //   const categoryMatch =
  //     selectedFilters.category.length === 0 ||
  //     selectedFilters.category.includes(item.category);

  //   const ratingMatch =
  //     selectedFilters.rating.length === 0 ||
  //     selectedFilters.rating.includes(item.rating);

  //   const priceMatch =
  //     item.price >= priceRange[0] && item.price <= priceRange[1];

  //   return categoryMatch && ratingMatch && priceMatch;
  // });

  const filtersConfig = [
    {
      key: "category",
      label: "Category",
      type: "checkbox",
      options: ["Electronics", "Clothes", "Books"],
    },
    {
      key: "rating",
      label: "Rating",
      type: "rating",
      options: [1, 2, 3, 4, 5],
    },
    {
      key: "price",
      label: "Price",
      type: "range",
      min: 0,
      max: 1000,
    },
  ];

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      {/* Filter Mob*/}
      <div className="flex justify-start md:hidden">
        <button
          onClick={() => setShowSidebar(true)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-lg"
        >
          <FunnelIcon className="w-6 h-6 text-black" />
          filter
        </button>
      </div>

      {/* Filter Desktop*/}
      <div className="hidden md:block">
        <FilterSidebar
          filtersConfig={filtersConfig}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          sliderValue={priceRange}
          onSliderChange={handleSliderChange}
        />
      </div>

      {/* Drawer Filter Mob*/}
      {showSidebar && (
        <div className="fixed inset-0 z-50 flex">
          {/* PopUp Filter*/}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setShowSidebar(false)}
          ></div>

          <div
            className={`relative h-[100vh] overflow-scroll bg-transparent w-4/5 max-w-sm shadow-lg transform transition-transform duration-300 ease-in-out ${
              showSidebar ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <FilterSidebar
              filtersConfig={filtersConfig}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              sliderValue={priceRange}
              onSliderChange={handleSliderChange}
            />
          </div>
        </div>
      )}

      {/* Products */}
      <CardGrid data={productsData} />
    </div>
  );
}
