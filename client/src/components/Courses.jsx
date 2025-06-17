// src/components/Courses.jsx
import React from 'react';
import mlImg from '../assets/ml.jpg';
import aiImg from '../assets/ai.jpg';
import financeImg from '../assets/finance.jpg';

const courses = [
  {
    title: "Machine Learning",
    progress: 60,
    status: "Active",
    img: mlImg
  },
  {
    title: "AI for Beginners",
    progress: 100,
    status: "Completed",
    img: aiImg
  },
  {
    title: "Intro to Finance",
    progress: 30,
    status: "Dropped",
    img: financeImg
  }
];

export default function Courses() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {courses.map((course, i) => (
        <div key={i} className="bg-white rounded-xl shadow p-4">
          <img src={course.img} alt={course.title} className="h-40 w-full object-cover rounded" />
          <h3 className="mt-2 text-lg font-semibold">{course.title}</h3>
          <p className="text-sm text-gray-500">{course.status}</p>
          <div className="mt-2 w-full bg-gray-200 h-2 rounded">
            <div className={`h-2 rounded ${
              course.status === 'Active' ? 'bg-green-500'
              : course.status === 'Completed' ? 'bg-gray-700'
              : 'bg-red-500'}`} style={{ width: `${course.progress}%` }} />
          </div>
          <p className="text-xs text-gray-600 mt-1">{course.progress}% complete</p>
        </div>
      ))}
    </div>
  );
}
