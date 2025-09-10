import FilterSection from "./FilterSection";
import CheckboxGroup from "./CheckboxGroup";
import RangeSlider from "./RangeSlider";
import StarRatingFilter from "./StarRatingFilter";

export default function FilterSidebar({
  filtersConfig,
  selectedFilters,
  onFilterChange,
  onClearFilters,
  showMoreState,
  onShowMoreToggle,
  accordionState,
  onAccordionToggle,
  sliderValue,
  onSliderChange,
}) {
  return (
    <nav
      className="bg-white rounded-xl shadow p-6 sticky top-8 w-full md:w-72"
      aria-label="Filter sidebar"
    >
      {/* Access (not accordion) */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Access</h3>
        <CheckboxGroup
          options={filtersConfig.find((f) => f.key === "Access").options}
          selected={selectedFilters.Access}
          onChange={(val) => onFilterChange("Access", val)}
        />
      </div>

      {/* Start Time (not accordion) */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Start Time</h3>
        <RangeSlider
          minLabel={filtersConfig.find((f) => f.key === "StartTime").min}
          maxLabel={filtersConfig.find((f) => f.key === "StartTime").max}
          value={sliderValue}
          onChange={onSliderChange}
        />
      </div>

      {/* Accordion Sections */}
      <div>
        <div className="mb-2 text-sm font-semibold text-gray-700">
          Refine By
        </div>
        {filtersConfig
          .filter((f) => !["Access", "StartTime"].includes(f.key))
          .map((filter) => (
            <FilterSection
              key={filter.key}
              label={filter.label}
              id={`filter-${filter.key}`}
              isOpen={accordionState[filter.key]}
              onToggle={() => onAccordionToggle(filter.key)}
            >
              {filter.type === "checkbox" && (
                <CheckboxGroup
                  options={filter.options}
                  selected={selectedFilters[filter.key]}
                  onChange={(val) => onFilterChange(filter.key, val)}
                  showMore={filter.showMore}
                  showAll={showMoreState[filter.key]}
                  onShowMore={() => onShowMoreToggle(filter.key)}
                />
              )}
              {filter.type === "rating" && (
                <StarRatingFilter
                  options={filter.options}
                  selected={selectedFilters[filter.key]}
                  onChange={(val) => onFilterChange(filter.key, val)}
                />
              )}
            </FilterSection>
          ))}
      </div>

      {/* Clear Filters Button */}
      <button
        className="w-full bg-blue-900 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-800 transition"
        onClick={onClearFilters}
      >
        Clear Filters
      </button>
    </nav>
  );
}
