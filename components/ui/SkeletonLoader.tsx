import React from "react";

function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-2  my-10">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-2 justify-between bg-gray-200 rounded-md py-5"
        >
          <div className="bg-gray-300 h-4 w-40 rounded"></div>
          <div className="flex items-center gap-2">
            <div className="bg-gray-300 h-4 w-6 rounded"></div>
            <div className="bg-gray-300 h-4 w-12 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonLoader;
