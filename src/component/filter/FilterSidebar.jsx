import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function FilterSidebar() {
  // State to track open/close sections
  const [openSections, setOpenSections] = useState({
    access: true,
    price: true,
    categories: true,
    company: true,
    language: true,
    rating: true,
  });

  // Show more toggle
  const [showMoreStates, setShowMoreStates] = useState({
    categories: false,
    company: false,
  });

  const [priceRange, setPriceRange] = useState(22);
  const [selectedFilters, setSelectedFilters] = useState({
    access: [],
    categories: [],
    company: [],
    language: [],
    rating: [],
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleShowMore = (key) => {
    setShowMoreStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFilterChange = (section, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [section]: prev[section].includes(value)
        ? prev[section].filter((item) => item !== value)
        : [...prev[section], value],
    }));
  };

  const clearAllFilters = () => {
    setOpenSections({
      access: false,
      price: false,
      categories: false,
      company: false,
      language: false,
      rating: false,
    });
  };

  // Filter data
  const categories = [
    "Mobile & Laptop",
    "Chairs",
    "TV & Radios",
    "Kitchen Appliances",
  ];
  const companies = ["Company 1", "Company 2", "Company 3", "Company 4"];
  const languages = ["Arabic", "English"];
  const ratings = [5, 4, 3, 2, 1];

  // Star counts for each rating
  const starCounts = {
    5: "5 STAR",
    4: "4 STAR",
    3: "3 STAR",
    2: "2 STAR",
    1: "1 STAR",
  };

  const StarIcon = ({ filled }) => (
    <svg
      className={`w-3 h-3 ${filled ? "text-yellow-400" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <div className="w-64 bg-white border border-gray-200 rounded-lg">
      {/* Access Section */}
      <div className="border-b border-gray-200">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleSection("access")}
        >
          <h3 className="font-medium text-gray-900">Access</h3>
          {openSections.access ? (
            <ChevronDownIcon className="w-6" />
          ) : (
            <ChevronRightIcon className="w-6" />
          )}
        </div>
        {openSections.access && (
          <div className="px-4 pb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                checked={selectedFilters.access.includes("Member Benefits")}
                onChange={() => handleFilterChange("access", "Member Benefits")}
              />
              <span className="ml-2 text-sm text-gray-700">
                Member Benefits
              </span>
            </label>
          </div>
        )}
      </div>

      {/* Price Section */}
      <div className="border-b border-gray-200">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleSection("price")}
        >
          <h3 className="font-medium text-gray-900">Price</h3>
          {openSections.price ? (
            <ChevronDownIcon className="w-6" />
          ) : (
            <ChevronRightIcon className="w-6" />
          )}
        </div>
        {openSections.price && (
          <div className="px-4 pb-4">
            <div className="relative">
              <input
                type="range"
                min="22"
                max="200"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #fbbf24 0%, #fbbf24 ${
                    ((priceRange - 22) / (200 - 22)) * 100
                  }%, #e5e7eb ${
                    ((priceRange - 22) / (200 - 22)) * 100
                  }%, #e5e7eb 100%)`,
                }}
              />
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>22 $</span>
                <span>200 $</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Categories Section */}
      <div className="border-b border-gray-200">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleSection("categories")}
        >
          <h3 className="font-medium text-gray-900">Categories</h3>
          {openSections.categories ? (
            <ChevronDownIcon className="w-6" />
          ) : (
            <ChevronRightIcon className="w-6" />
          )}
        </div>
        {openSections.categories && (
          <div className="px-4 pb-4">
            {categories
              .slice(0, showMoreStates.categories ? categories.length : 3)
              .map((category) => (
                <label key={category} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={selectedFilters.categories.includes(category)}
                    onChange={() => handleFilterChange("categories", category)}
                  />
                  <span className="ml-2 text-sm text-gray-700">{category}</span>
                </label>
              ))}
            <button
              className="mt-1 text-sm text-yellow-600 hover:text-yellow-700"
              onClick={() => toggleShowMore("categories")}
            >
              {showMoreStates.categories ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>

      {/* Company Section */}
      <div className="border-b border-gray-200">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleSection("company")}
        >
          <h3 className="font-medium text-gray-900">Company</h3>
          {openSections.company ? (
            <ChevronDownIcon className="w-6" />
          ) : (
            <ChevronRightIcon className="w-6" />
          )}
        </div>
        {openSections.company && (
          <div className="px-4 pb-4">
            {companies
              .slice(0, showMoreStates.company ? companies.length : 3)
              .map((company) => (
                <label key={company} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={selectedFilters.company.includes(company)}
                    onChange={() => handleFilterChange("company", company)}
                  />
                  <span className="ml-2 text-sm text-gray-700">{company}</span>
                </label>
              ))}
            <button
              className="mt-1 text-sm text-yellow-600 hover:text-yellow-700"
              onClick={() => toggleShowMore("company")}
            >
              {showMoreStates.company ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>

      {/* Refine By Section */}
      <div className="border-b border-gray-200">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-900">Refine By</h3>
          </div>
          <button
            className="mt-1 text-sm text-blue-600 hover:text-blue-700"
            onClick={clearAllFilters}
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Language Section */}
      <div className="border-b border-gray-200">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleSection("language")}
        >
          <h3 className="font-medium text-gray-900">Language</h3>
          {openSections.language ? (
            <ChevronDownIcon className="w-6" />
          ) : (
            <ChevronRightIcon className="w-6" />
          )}
        </div>
        {openSections.language && (
          <div className="px-4 pb-4">
            {languages.map((language) => (
              <label key={language} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  checked={selectedFilters.language.includes(language)}
                  onChange={() => handleFilterChange("language", language)}
                />
                <span className="ml-2 text-sm text-gray-700">{language}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Section */}
      <div>
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleSection("rating")}
        >
          <h3 className="font-medium text-gray-900">Rating</h3>
          {openSections.rating ? (
            <ChevronDownIcon className="w-6" />
          ) : (
            <ChevronRightIcon className="w-6" />
          )}
        </div>
        {openSections.rating && (
          <div className="px-4 pb-4">
            {ratings.map((rating) => (
              <label key={rating} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                  checked={selectedFilters.rating.includes(rating)}
                  onChange={() => handleFilterChange("rating", rating)}
                />
                <div className="flex items-center ml-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} filled={star <= rating} />
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-gray-500">
                    {starCounts[rating]}
                  </span>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
