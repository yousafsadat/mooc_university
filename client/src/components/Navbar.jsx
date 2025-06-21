import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-800">
        <Link to="/">MOOC for University</Link>
      </div>

      {/* Search bar */}
      <div className="flex-grow max-w-md mx-4">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 text-sm font-medium text-gray-700 hidden md:flex">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/" className="hover:text-blue-600">Courses</Link>
        {/* <Link to="/predict" className="hover:text-blue-600">Prediction</Link> */}
        <Link to="#" className="hover:text-blue-600">Certificate</Link>
        <Link to="#" className="hover:text-blue-600">Contact Us</Link>
        <Link to="#" className="hover:text-blue-600 font-semibold">Log in</Link>
      </div>
    </nav>
  );
}
