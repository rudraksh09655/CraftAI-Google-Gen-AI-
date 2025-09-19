import os
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
import vertexai
from vertexai.preview.generative_models import GenerativeModel
import time
from dotenv import load_dotenv # Import the new library
load_dotenv()
# --- HACKATHON CONTROL PANEL ---
# Set this to True to use mock data while your account is verifying.
# Once verified, change this to False to use the live Google Cloud AI.
IS_MOCK_MODE = True

app = Flask(__name__)
# Allow the React frontend to communicate with this backend
CORS(app)

# --- Google Cloud AI Initialization ---

PROJECT_ID = os.getenv("GCP_PROJECT_ID")
LOCATION = os.getenv("GCP_LOCATION")

# --- Sanity Check Debug Prints ---
print("--- CRAFTAI BACKEND SERVER IS STARTING ---")
print(f"✅ Using Project ID: {PROJECT_ID}")
print(f"✅ Using Location: {LOCATION}")
print(f"✅ Mock Mode: {IS_MOCK_MODE}")
print("------------------------------------------")

gemini_model = None
# Only attempt to connect to Google Cloud if we are NOT in mock mode
if not IS_MOCK_MODE:
    try:
        vertexai.init(project=PROJECT_ID, location=LOCATION)
        gemini_model = GenerativeModel("gemini-pro")
        print("✅ Vertex AI and Gemini Model initialized successfully.")
    except Exception as e:
        print(f"🚨 CRITICAL ERROR: Could not initialize Vertex AI: {e}")
        print(
            "   Please check your authentication (gcloud auth application-default login) and ensure the Vertex AI API is enabled.")


@app.route('/generate', methods=['POST'])
def generate_content():
    if IS_MOCK_MODE:
        print("--- Running in Mock Mode ---")
        # This is a high-quality mock response that mimics the real AI's output
        mock_response = {
            "product_story": "This is a simulated AI story for your beautiful craft. In a live demo, this text would be a captivating narrative, weaving together the rich history of the materials and the artisan's personal touch to create a description that sells.",
            "social_post": "✨ Presenting a one-of-a-kind handcrafted masterpiece! Each detail tells a story of tradition and passion. The perfect addition to any home. #handmade #artisan #indiancraft #supportlocal",
            "market_insights": "Based on current e-commerce trends, your craft has strong appeal within the 'Sustainable Home Decor' and 'Mindful Gifting' markets. Highlighting its eco-friendly materials and the story behind its creation will attract customers willing to pay a premium for authentic, meaningful products."
        }
        time.sleep(2)  # Simulate the time it takes for the real AI to process
        print("✅ Mock response sent successfully.")
        return jsonify(mock_response)

    # This part of the code will only run if IS_MOCK_MODE is False
    if not gemini_model:
        return jsonify({"error": "AI Model not initialized. Check backend server logs for errors."}), 500

    try:
        data = request.get_json()
        craft_name = data.get('name')
        craft_details = data.get('details')

        print(f"AI prompt sent to {LOCATION}. Awaiting response...")

        # This is the powerful, all-in-one prompt for the live AI
        prompt = f"""
        You are an expert e-commerce copywriter and marketing strategist specializing in Indian handicrafts. Your tone is evocative, warm, and professional.
        For the following craft:
        Craft Name: "{craft_name}"
        Key Details: "{craft_details}"

        Generate three distinct pieces of content:
        1. A compelling, evocative product story (around 100 words).
        2. A short, engaging Instagram post with relevant, popular hashtags.
        3. A brief analysis of market insights (1-2 sentences), connecting the craft to current e-commerce trends.

        Return the response as a single, valid JSON object with three keys: "product_story", "social_post", and "market_insights".
        """

        response = gemini_model.generate_content(prompt)

        # Clean the response to ensure it's valid JSON
        clean_response_text = response.text.replace("```json", "").replace("```", "").strip()

        print("✅ Live AI response received.")
        # Load the string into a JSON object to send to the frontend
        response_json = json.loads(clean_response_text)

        return jsonify(response_json)

    except Exception as e:
        print(f"🚨 Error during live generation: {e}")
        return jsonify({"error": "An error occurred during AI generation. Please check the backend logs."}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)

