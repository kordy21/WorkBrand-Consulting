const MainTittle = ({ title, subdescription, description, align, color }) => {
  return (
    <div>
      <h1
        className={`text-3xl font-bold md:text-5xl pb-2 ${
          color === "no"
            ? "text-white"
            : "bg-custom-blue bg-clip-text text-transparent"
        } ${align === "start" ? "text-start" : "text-center"}`}
      >
        {title}{" "}
        {subdescription && (
          <span
            className={`mb-2 text-3xl font-bold md:text-5xl ${
              color === "no" ? "text-white" : "text-black"
            }`}
          >
            {subdescription}
          </span>
        )}
      </h1>

      {description && (
        <p
          className={`text-base font-bold md:text-base pb-2 ${
            color === "no"
              ? "text-white"
              : "bg-custom-blue bg-clip-text text-transparent"
          } ${align === "start" ? "text-start" : "text-center"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default MainTittle;
