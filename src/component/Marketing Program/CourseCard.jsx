import React from "react";

function CourseCard({ image, title, description }) {
  return (
    <div className=" rounded-2xl overflow-hidden border border-1 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-center transform scale-100 hover:scale-150 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function CoursesGrid({ courses }) {
  return (
    <div className=" py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
}
