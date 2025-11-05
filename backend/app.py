from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
from datetime import datetime
import numpy as np

# Optional: tensorflow import commented — if you add a model, uncomment and load it.
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing import image
# from PIL import Image

app = Flask(__name__, static_folder="static")
CORS(app)

UPLOAD_FOLDER = os.path.join("static", "uploads")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# If you have a model, set MODEL_PATH and load it here:
# MODEL_PATH = "model/plant_model.h5"
# model = load_model(MODEL_PATH)
# CLASS_NAMES = [...]

@app.route("/")
def home():
    return "🌱 AgriCare AI Backend Running!"

@app.route("/api/analyze", methods=["POST"])
def analyze():
    if "image" not in request.files:
        return jsonify({"error":"No image uploaded"}), 400
    img = request.files["image"]
    if img.filename == "":
        return jsonify({"error":"Empty filename"}), 400

    filename = datetime.now().strftime("%Y%m%d%H%M%S_") + img.filename
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    img.save(filepath)

    # Dummy/result placeholder logic (replace with model prediction if available)
    result = {
        "plant": "Unknown - use model for exact species",
        "status": "Unhealthy",
        "problem": "Possible nutrient deficiency / pest damage",
        "causes": [
            "Uneven watering",
            "Possible pest or fungal infection",
            "Nutrient imbalance"
        ],
        "solutions": [
            "Check irrigation and soil nutrients",
            "Inspect for pests and apply safe treatment",
            "Maintain proper spacing and airflow"
        ],
        "confidence": "N/A",
        "image_url": f"http://127.0.0.1:5000/static/uploads/{filename}"
    }
    return jsonify(result)

# Serve uploaded images
@app.route('/static/uploads/<path:filename>')
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True)
