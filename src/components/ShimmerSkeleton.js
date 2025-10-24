import React from 'react';

export function ShimmerSkeleton({ count = 5 }) {
  return (
    <ul className="space-y-2 animate-pulse">
      {Array.from({ length: count }).map((_, idx) => (
        <li
          key={idx}
          className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-700 h-10 w-full flex items-center"
        >
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        </li>
      ))}
    </ul>
  );
}
