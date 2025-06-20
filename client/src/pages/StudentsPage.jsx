import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentPage() {
  const students = [
    {
      name: 'John Smith',
      email: 'john.smith@example.com',
      status: 'Active',
      instructor: 'Dr. Smith',
      enrolled: 120,
      enrollmentDate: '03/01/2024',
    },
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      status: 'Active',
      instructor: 'Prof. Johnson',
      enrolled: 150,
      enrollmentDate: '03/05/2024',
    },
    {
      name: 'Sarah Brown',
      email: 'David.jones@example.com',
      status: 'Active',
      instructor: 'Prof. Brown',
      enrolled: 130,
      enrollmentDate: '03/15/2024',
    },
  ];

  const moreStudents = [
    { name: 'Michael Williams', date: '03/10/2024' },
    { name: 'Emily Miller', date: '03/20/2024' },
    { name: 'James Wilson', date: '03/25/2024' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 hidden md:block">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
        <br />
        <nav className="space-y-4 text-gray-300">
            <Link to="/dashboard" className="block hover:text-white">📊 Dashboard</Link>
            <Link to="/students" className="block hover:text-white">👨‍🎓 Students</Link>
            <Link to="/courses" className="block hover:text-white">📚 Courses</Link>
            <Link to="/settings" className="block hover:text-white">⚙️ Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Students</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            + Add Student
          </button>
        </div>

        {/* Students & Courses Table */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="font-semibold text-lg mb-2">Students</h2>
              {students.map((s, i) => (
                <div key={i} className="mb-2">
                  <strong>{s.name}</strong>
                  <div className="text-sm text-gray-600">{s.email}</div>
                  <div className="text-green-600 text-sm">{s.status}</div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-2">Courses</h2>
              {students.map((s, i) => (
                <div key={i} className="mb-2">
                  <div>{s.instructor}</div>
                  <div className="text-sm text-gray-600">
                    Enrolled Students: {s.enrolled}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enrollment Table */}
        <div className="bg-white shadow rounded-lg p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Name</th>
                <th className="py-2">Enrollment Date</th>
                <th className="py-2">Status</th>
                <th className="py-2">Ervelle</th>
              </tr>
            </thead>
            <tbody>
              {students.concat(moreStudents).map((s, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-2">{s.name}</td>
                  <td className="py-2">{s.enrollmentDate || s.date}</td>
                  <td className="py-2 text-green-600">Active</td>
                  <td className="py-2 text-green-600">Active</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
