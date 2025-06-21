# MOOC Dropout Prediction Platform

A web-based machine learning application for predicting student performance in MOOCs. Built with Node.js and FastAPI (backend) and React (frontend) using Vite bundler. Features include behavioral data fetching, prediction via ML model, and course progress visualization.

---

## 📁 Project Structure

```
├── backend/
│   ├── app.py                   # FastAPI backend for serving predictions
│   ├── prediction_script.py     # Handles ML prediction logic
│   ├── student_model_v2.pth     # Trained PyTorch model
│   └── preprocessor.pkl         # Pre-fitted preprocessing pipeline
│
├── server/                      # Node.js backend for authentication
│   ├── controllers/
│   │   └── authController.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── server.js                # Node.js server entry
│   ├── package.json
│   └── package-lock.json
│
├── client/                      # React frontend using Vite
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/              # Static UI images
│   │   ├── components/          # Reusable components (Navbar, Form, etc.)
│   │   ├── pages/               # Pages for routing (Home, Dashboard, etc.)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── index.html
│   ├── eslint.config.js
│   ├── package.json
│   └── package-lock.json
│
├── data/                        # Sample student data
│   ├── mongodb_complete_sample.json
│   ├── mongodb_prediction_ready_docs.json
│   └── mongodb_sample_data.json
│
├── requirements.txt             # Python dependencies for backend
└── README.md
```

---

## 🚀 Getting Started

A full-stack platform to predict dropout risk in MOOCs using ML + React.

### Prerequisites

- Python 3.8+
- Node.js v16+
- npm
- Git
- MongoDB (optional)

---

## 🔧 Backend Setup (FastAPI + PyTorch)

```bash
cd backend
python -m venv venv
# Activate environment:
# Windows:
.\venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r ../requirements.txt

# Run server
uvicorn app:app --reload
```

The backend will run at `http://127.0.0.1:8000`.

---

## 🛡️ Auth Server Setup (Node.js Express)

```bash
cd ../server
npm install
```

### Add a `.env` file with:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mooc_auth_db
JWT_SECRET=your_secret_key
```

### Run the server

```bash
node server.js
```

The server runs at `http://localhost:5000`.

---

## 🌐 Frontend Setup (React + Vite)

```bash
cd ../client
npm install
npm run dev
```

Frontend available at: `http://localhost:5173`

---

## 🧪 Usage

1. Start backend (`uvicorn app:app`)
2. Start auth server (`node server.js`)
3. Start frontend (`npm run dev`)
4. Visit `http://localhost:5173`
5. Log in/register, go to "Predict" page
6. Enter or auto-fetch data
7. View prediction & generate PDF

---

## 📄 API Endpoints

### Backend (FastAPI)

- `POST /predict`: Get prediction result
- `GET /students/{id}`: Fetch individual student record

### Server (Auth API)

- `POST /login`: User login
- `POST /register`: User registration

---

## 📦 Data Notes

- Place `student_model_v2.pth` and `preprocessor.pkl` in `backend/`
- MongoDB setup is optional; JSON data in `/data/` can be used for offline testing

---

## 🐳 Docker (Optional)

Want Docker setup? Let us know — we can generate `Dockerfile` and `docker-compose.yml` for you.

---

## 🧹 Cleanup

```bash
# Stop services with Ctrl+C from each terminal
```

---

## 🪪 License

MIT License. Free to use and modify.
