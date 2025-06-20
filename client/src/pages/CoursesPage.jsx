import React from "react";
import CoursesTable from "../components/coursesTable";

export default function CoursesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📚 All Courses</h1>
      <CoursesTable />
    </div>
  );
}
