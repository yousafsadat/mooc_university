from fastapi import FastAPI
from routes.predict import predict_router

app = FastAPI(title="MOOC Prediction API")
app.include_router(predict_router, prefix="/api")
