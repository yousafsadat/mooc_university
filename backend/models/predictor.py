import joblib
import torch

def load_model():
    model = torch.load("models/model.pth")
    preprocessor = joblib.load("models/preprocessor.pkl")
    return model, preprocessor

def predict(model, X):
    model.eval()
    with torch.no_grad():
        logits = model(torch.tensor(X, dtype=torch.float32))
        probs = torch.nn.functional.softmax(logits, dim=1)
        predicted_class = probs.argmax(dim=1).numpy()
        confidence = probs.max(dim=1).values.numpy()
    return predicted_class, confidence
