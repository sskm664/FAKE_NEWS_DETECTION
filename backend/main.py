from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

MODEL_PATH = os.path.join("models", "svm_model.pkl")
VECTORIZOR_PATH = os.path.join("models", "vectorizer.pkl")

model= joblib.load(MODEL_PATH)
vectorizer = joblib.load(VECTORIZOR_PATH)

class NewsInput(BaseModel):
    text: str

@app.post("/predict")
async def predict(news_input: NewsInput):
    text = news_input.text
    vectorized_text = vectorizer.transform([text])
    
    
    probabilities = model.predict_proba(vectorized_text)[0]
    
    return {
        "real": round(probabilities[1], 2),  
        "fake": round(probabilities[0], 2), 
    }

@app.get("/")
def read_root():
    return {"message": "Welcome to the Fake News Detection API!"}