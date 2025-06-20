// src/pages/DashboardPage.jsx
import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";


const studentData = [
    { id: "S1021", course: "Intro to Python", progress: "40%", gpa: 3.8, advice: "Add more quiz attempts" },
    { id: "S1042", course: "AI", progress: "43%", gpa: 3.2, advice: "Review recent risks" },
    { id: "S1017", course: "Deep Learning", progress: "36%", gpa: 4.0, advice: "At Risk" },
    { id: "S1095", course: "Data Science 101", progress: "32%", gpa: 3.8, advice: "Increase forum more:on" },
    { id: "S1009", course: "Cloud Computing", progress: "31%", gpa: 2.1, advice: "Spend more time on assignments" },
    { id: "S1062", course: "Data Science 101", progress: "40%", gpa: 3.9, advice: "On Track" },
    { id: "S1063", course: "Data Science 101", progress: "31%", gpa: 3.3, advice: "Moderate Risk" },
];

const chartData = [
    { name: "Intro to Python", value: 530 },
    { name: "AI", value: 470 },
    { name: "Deep Learning", value: 390 },
    { name: "Data Science 101", value: 310 },
    { name: "Cloud Computing", value: 220 },
    { name: "Intro to ML", value: 180 },
];

export default function DashboardPage() {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-800 text-white p-4">
                <h2 className="text-xl font-bold mb-8">MOOC University</h2>
                <nav className="space-y-4 text-gray-300">
                    <Link to="/dashboard" className="block hover:text-white">📊 Dashboard</Link>
                    <Link to="/students" className="block hover:text-white">👨‍🎓 Students</Link>
                    <Link to="/courses" className="block hover:text-white">📚 Courses</Link>
                    <Link to="/settings" className="block hover:text-white">⚙️ Settings</Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
                <h1 className="text-2xl font-bold mb-6">MOIC University Dashboard</h1>

                {/* Top Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <StatCard label="STUDENTS" value="1,250" />
                    <StatCard label="AT RISK" value="150" textColor="text-orange-500" />
                    <StatCard label="AVERAGE GPA" value="3.2" />
                    <StatCard label="DROPOUT RATE" value="12.0%" />
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-4 shadow">
                        <h3 className="text-lg font-semibold mb-4">STUDENT PERFORMANCE</h3>
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left border-b">
                                    <th>Student</th>
                                    <th>Course</th>
                                    <th>Progress</th>
                                    <th>GPA</th>
                                    <th>AI Advice</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentData.map((s) => (
                                    <tr key={s.id} className="border-b">
                                        <td>{s.id}</td>
                                        <td>{s.course}</td>
                                        <td>{s.progress}</td>
                                        <td>{s.gpa}</td>
                                        <td>
                                            <AdviceBadge advice={s.advice} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow">
                        <h3 className="text-lg font-semibold mb-4">COURSE ANALYTICS</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={chartData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#3b82f6" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </main>
        </div>
    );
}

function StatCard({ label, value, textColor = "text-gray-800" }) {
    return (
        <div className="bg-white rounded-xl shadow p-4 text-center">
            <p className="text-sm text-gray-500">{label}</p>
            <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
        </div>
    );
}

function AdviceBadge({ advice }) {
    const base = "text-xs px-2 py-1 rounded font-medium";
    if (advice === "At Risk") return <span className={`${base} bg-red-100 text-red-600`}>At Risk</span>;
    if (advice === "On Track") return <span className={`${base} bg-yellow-100 text-yellow-600`}>On Track</span>;
    if (advice === "Moderate Risk") return <span className={`${base} bg-green-100 text-green-600`}>Moderate Risk</span>;
    return <span className="text-xs">{advice}</span>;
}
