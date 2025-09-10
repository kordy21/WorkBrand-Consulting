function RangeSlider({
  minLabel,
  maxLabel,
  value,
  onChange,
  min = 1,
  max = 12,
}) {
  return (
    <div className="flex flex-col">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="w-full accent-yellow-500"
        aria-label="Start Time"
      />
      <div className="flex justify-between text-xs text-gray-600 mt-1">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

export default RangeSlider;
