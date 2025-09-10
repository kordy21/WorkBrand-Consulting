function StarRatingFilter({ options, selected, onChange }) {
  return (
    <ul>
      {options.map((stars) => (
        <li key={stars} className="flex items-center gap-2 mb-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox accent-yellow-500"
              checked={selected.includes(stars)}
              onChange={() => onChange(stars)}
              aria-label={`${stars} star${stars !== 1 ? "s" : ""}`}
            />
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < stars ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <polygon points="9.9,1.1 7.6,6.6 1.6,7.6 6,11.7 4.8,17.6 9.9,14.6 15,17.6 13.8,11.7 18.2,7.6 12.2,6.6 " />
                </svg>
              ))}
            </span>
            <span className="ml-2 text-xs text-gray-500">{stars} STAR</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default StarRatingFilter;
