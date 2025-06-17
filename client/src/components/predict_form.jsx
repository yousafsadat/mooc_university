// pages/PredictForm.jsx
import React, { useState } from "react";

export default function PredictForm() {
  const [formData, setFormData] = useState({
    student_id: "",
    course_id: "",
    assignment_marks: 0,
    quiz_marks: 0,
    attendance: 0,
    course_marks: 0,
    studied_credits: 0,
    remaining_credit_hours: 0,
    age: 0,
    gender_encoded: 0,
    credit_hours: 0,
    course_registered: 0,
    number_of_attempts: 0,
    sum_click: 0,
    total_clicks: 0,
    activity_logs: 0
  });
  const [sampling, setSampling] = useState("none");
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fetchBehaviorData = async () => {
    try {
      const res = await fetch(`http://localhost:8000/student_behavior/${formData.student_id}`);
      const data = await res.json();
      setFormData((prev) => ({ ...prev, ...data }));
    } catch (err) {
      console.error("Behavioral data fetch failed", err);
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`http://localhost:8000/predict_single?sampling=${sampling}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setPrediction(data);
    } catch (err) {
      console.error("Prediction failed", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">🎯 Real-time Prediction Form</h2>

      <div className="grid grid-cols-2 gap-4">
        {Object.entries(formData).map(([key, val]) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{key.replace(/_/g, ' ')}</label>
            <input
              name={key}
              value={val}
              onChange={handleChange}
              type="number"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sampling Technique</label>
          <select
            value={sampling}
            onChange={(e) => setSampling(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="none">None</option>
            <option value="undersample">Random Undersampling</option>
            <option value="smote">SMOTE Oversampling</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <button onClick={fetchBehaviorData} className="bg-blue-600 text-white px-4 py-2 rounded mr-4">Auto-Fetch Behavior</button>
        <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">Submit & Predict</button>
      </div>

      {prediction && (
        <div className="mt-8 bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Prediction Result</h3>
          <p><strong>Class:</strong> {prediction.predicted_class}</p>
          <p><strong>Confidence:</strong> {(prediction.confidence * 100).toFixed(1)}%</p>
          <p><strong>Sampling:</strong> {prediction.sampling_used}</p>
        </div>
      )}
    </div>
  );
}
