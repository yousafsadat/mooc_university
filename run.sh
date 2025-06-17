#!/bin/bash

# Activate virtual environment if exists
if [ -d "venv" ]; then
  source venv/bin/activate
fi

# Run FastAPI server with Uvicorn
echo "🚀 Starting FastAPI server on http://localhost:8000"
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
