<<<<<<< HEAD
# mooc_university
 A web-based machine learning application for predicting student performance in MOOCs. Built with Node.js and FastAPI (backend) and React (frontend) using Vite bundler. Features include behavioral data fetching, prediction via ML model, and course progress visualization. 
# MOOC Dropout Prediction Platform

This platform predicts student dropout risk in online courses using machine learning. It includes:
- A PyTorch-based prediction model
- A React frontend for real-time input and PDF report generation
- Integration with behavioral/clickstream data
- Sampling options like SMOTE and undersampling

## 📁 Project Structure

```
├── backend/
│   ├── prediction_script.py
│   ├── student_model_v2.pth
│   ├── preprocessor.pkl
│   └── app.py (Flask/FastAPI backend)
├── frontend/
│   ├── predict_form.jsx
│   ├── student_report_generator_ui.jsx
│   ├── index.js
│   └── App.jsx
├── data/
│   ├── mongodb_complete_sample.json
│   ├── mongodb_prediction_ready_docs.json
│   ├── mongodb_sample_data.json
├── requirements.txt
└── README.md
```

## 🚀 How to Run

### 1. Backend Setup
```bash
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install -r ../requirements.txt
python app.py  # or: uvicorn app:app --reload
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```

### 3. Use the Platform
- Enter student features manually or use Auto-Fetch
- Predict dropout status
- Generate and download a detailed report

## ⚠️ Notes
- Ensure `student_model_v2.pth` and `preprocessor.pkl` are present and valid
- The model expects preprocessed data. Do not remove `preprocessor.pkl`
- Make sure MongoDB or mock JSON files are in place if used for data source

## 📄 License
MIT License
=======
# MOOC Prediction Platform

This project provides a full-stack machine learning-based MOOC platform including:
- React frontend
- FastAPI backend
- PyTorch student predictor model
- MongoDB database
- Docker-compose setup
>>>>>>> 4ec4dd9 (Initial commit - ML MOOC Prediction App with FastAPI & React)
