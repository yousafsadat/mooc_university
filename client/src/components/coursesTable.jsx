// src/components/CoursesTable.jsx
import React from "react";

const courses = [
  {
    name: "Introduction to Computer Science",
    instructor: "Dr. Smith",
    students: 120,
    status: "Active",
  },
  {
    name: "Data Structures and Algorithms",
    instructor: "Prof. Johnson",
    students: 150,
    status: "Active",
  },
  {
    name: "Database Management Systems",
    instructor: "Dr. Williams",
    students: 100,
    status: "Active",
  },
  {
    name: "Web Development",
    instructor: "Prof. Brown",
    students: 130,
    status: "Active",
  },
];

export default function CoursesTable() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Courses</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm font-medium">
          + Add Course
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-gray-600 text-sm">
              <th className="px-4 py-2">Course</th>
              <th className="px-4 py-2">Instructor</th>
              <th className="px-4 py-2">Enrolled Students</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, idx) => (
              <tr key={idx} className="bg-gray-50 rounded-lg">
                <td className="px-4 py-2">{course.name}</td>
                <td className="px-4 py-2">{course.instructor}</td>
                <td className="px-4 py-2">{course.students}</td>
                <td className="px-4 py-2">
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {course.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
