from fastapi import APIRouter, Query
from pydantic import BaseModel
import pandas as pd
import torch
from models.predictor import load_model, predict

predict_router = APIRouter()

class PredictInput(BaseModel):
    student_id: str
    course_id: str
    assignment_marks: float
    quiz_marks: float
    attendance: float
    course_marks: float
    studied_credits: float
    remaining_credit_hours: float
    age: int
    gender_encoded: int
    credit_hours: float
    course_registered: int
    number_of_attempts: int
    sum_click: int
    total_clicks: int
    activity_logs: int

@predict_router.post("/predict")
def predict_student(data: PredictInput):
    df = pd.DataFrame([data.dict()])
    model, preprocessor = load_model()
    X = preprocessor.transform(df)
    prediction, confidence = predict(model, X)
    return {"predicted_class": prediction[0], "confidence": float(confidence[0])}
