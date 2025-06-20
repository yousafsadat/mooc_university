# MOOC Dropout Prediction Platform

A web-based machine learning application for predicting student performance in MOOCs. Built with Node.js and FastAPI (backend) and React (frontend) using Vite bundler. Features include behavioral data fetching, prediction via ML model, and course progress visualization.

---

## 📁 Project Structure

This project is organized into a full-stack architecture combining machine learning, data processing, and a modern web frontend:

```
├── backend/
│   ├── app.py                   # FastAPI/Flask backend for serving predictions
│   ├── prediction_script.py     # Script handling ML prediction logic
│   ├── student_model_v2.pth     # Trained PyTorch model
│   └── preprocessor.pkl         # Pre-fitted preprocessor (e.g., Scaler, Encoder)
│
├── client/                      # React frontend built with Vite
│   ├── public/
│   │   └── vite.svg             # Public assets for the web app
│   │
│   ├── src/
│   │   ├── assets/              # Static image files used in UI
│   │   │   ├── ai.jpg
│   │   │   ├── finance.jpg
│   │   │   ├── ml.jpg
│   │   │   └── react.svg
│   │   │
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Courses.jsx
│   │   │   ├── coursesTable.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── predict_form.jsx
│   │   │
│   │   ├── pages/               # Top-level pages for routing
│   │   │   ├── CoursesPage.jsx
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── predict.jsx
│   │   │   ├── SettingsPage.jsx
│   │   │   └── StudentsPage.jsx
│   │   │
│   │   ├── App.jsx              # Main App component
│   │   ├── main.jsx             # App entry point
│   │   ├── App.css              # Global styles
│   │   └── index.css            # CSS reset/base styles
│   │
│   ├── index.html               # HTML template used by Vite
│   ├── eslint.config.js         # Linting configuration
│   ├── .gitignore
│   ├── package.json             # Frontend dependencies and scripts
│   └── package-lock.json
│
├── data/                        # Sample data for testing or training
│   ├── mongodb_complete_sample.json
│   ├── mongodb_prediction_ready_docs.json
│   ├── mongodb_sample_data.json
│
├── requirements.txt             # Python backend dependencies
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

This project predicts student dropout risk in MOOCs using machine learning. It features:

* A PyTorch-based ML model
* A FastAPI backend
* A React + Vite frontend
* Integration with sample data or MongoDB
* Real-time input, prediction, and PDF report generation

---

## 🛠 Prerequisites

Before you begin, make sure you have the following installed:

### ✅ System Requirements:

* Python 3.8+
* Node.js (v16+ recommended)
* npm
* Git

Optional but recommended:

* MongoDB (for full data integration)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mooc_university.git
cd mooc_university
```

---

## 🔧 Backend Setup (FastAPI + ML)

### 2. Set Up the Python Environment

```bash
cd backend
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r ../requirements.txt
```

### 4. Run the FastAPI Server

```bash
uvicorn app:app --reload
```

The backend will be available at: `http://127.0.0.1:8000`

---

## 🌐 Frontend Setup (React + Vite)

### 5. Set Up the Frontend

```bash
cd ../client
npm install
```

### 6. Run the React App

```bash
npm run dev
```

The frontend will launch at: `http://localhost:5173` (Vite default)

---

## 🧪 Using the Platform

Once both backend and frontend are running:

1. Visit `http://localhost:5173`
2. Navigate to the **Predict** page from the Navbar.
3. Enter student feature data manually *or* use **Auto-Fetch** to pull existing records (requires MongoDB or local JSON).
4. Click **Predict** to view:

   * Predicted dropout label
   * Probability score
5. Click **Generate Report** to download a PDF summary of results.

---

## 🧰 Data & Files

* Ensure the following files exist in the `backend/` directory:

  * `student_model_v2.pth` – the PyTorch model file
  * `preprocessor.pkl` – pre-fitted transformer used during training
* Sample MongoDB JSON files are located in the `data/` directory

---

## 🗄 MongoDB (Optional)

If you want to use a real MongoDB connection:

1. Start MongoDB locally or connect via MongoDB Atlas
2. Update the connection URI inside `app.py` or `.env` (if applicable)
3. Use the "Auto-Fetch" button in the UI to pull real student records

---

## 📄 API Endpoints (Backend)

Here are some sample endpoints exposed by FastAPI:

* `POST /predict`

  * Payload: student feature data
  * Returns: prediction label + probability

* `GET /students/{id}`

  * Fetches data for a student by ID (mock or MongoDB)

---

## 🐳 Docker (Optional)

If you want to containerize the app, add a `Dockerfile` and `docker-compose.yml`:
Let me know and I’ll generate those for you.

---

## 🧹 Cleanup

To stop the app:

```bash
# Stop frontend
Ctrl + C (in terminal running `npm run dev`)

# Stop backend
Ctrl + C (in terminal running `uvicorn app:app`)
```

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).
