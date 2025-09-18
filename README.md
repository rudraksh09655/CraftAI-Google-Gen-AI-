# 🎨 CraftAI: The AI Co-pilot for Indian Artisans
CraftAI is an empowerment engine for Indian artisans. It's an AI co-pilot that bridges the gap between traditional craftsmanship and the modern digital market. Our platform provides a simple workspace where artisans can upload a photo, add a few details, and instantly generate a complete digital marketing kit—including compelling product stories, social media posts, and market insights. We give every artisan the power of a professional marketing team.

A submission for the Gen AI Exchange Hackathon.

# Quick Links
### Live Prototype Link: [ADD YOUR DEPLOYED FRONTEND URL HERE]

### Demo Video: [ADD YOUR YOUTUBE/GOOGLE DRIVE DEMO VIDEO URL HERE]

# 📖 Table of Contents
1. The Problem

2. Our Solution: CraftAI

3. Core Features

4. Live Demo & Screenshots

5. Tech Stack & Architecture

6. Getting Started: How to Run Locally

7. Deployment

8. Future Roadmap

9. The Team

## 1. The Problem
Indian artisans, rich in cultural heritage and traditional skills, often face significant challenges in the modern digital marketplace. A lack of digital marketing expertise, limited resources, and the difficulty of bridging traditional craftsmanship with contemporary consumer trends severely restrict their market reach and profitability. This creates a disconnect that threatens the sustainability of these vital art forms.

## 2. Our Solution: CraftAI
CraftAI is the bridge that closes the gap between traditional craftsmanship and the modern digital market. It is not another marketplace; it's an empowerment engine—a new class of tool that acts as a personal AI co-pilot for Indian artisans.

Our platform provides a simple, intuitive workspace where an artisan can upload a photo of their craft and Describe it in a few simple words.

Click one button to generate a complete digital marketing kit.

Instantly, CraftAI uses Google's generative AI to become their personal storyteller, marketing assistant, and design consultant. We tackle the root problem of digital skill gaps, giving every artisan the power of a professional marketing team.

## 3. Core Features
CraftAI provides a suite of generative AI-powered tools to turn a simple craft into a compelling digital brand.

### ✨ The Story Weaver
Generates compelling, evocative product descriptions that blend cultural context, craft history, and the artisan's personal anecdotes. This transforms a simple item into a story that sells.

### 📈 The Market Muse
Creates platform-specific social media content (e.g., Instagram captions) complete with relevant, trending hashtags to promote products and engage with a wider audience.

### 💡 The Trend Bridge
Provides actionable market insights, connecting the artisan's craft to current e-commerce trends (e.g., "Sustainable Home Decor," "Minimalist Aesthetics") to help them position their products effectively.

### 🖼️ The Digital Studio (Prototyped)
Visually demonstrates how an artisan's simple smartphone photo can be enhanced with professional, AI-generated lifestyle backgrounds, creating a powerful "before-and-after" effect.

## 4. Live Demo & Screenshots
Our application features a clean, intuitive, and fully responsive user interface designed to be accessible to artisans of all technical skill levels.

#### The Artisan Workspace - The heart of CraftAI
[ADD SCREENSHOT OF YOUR WORKSPACE.TSX PAGE HERE]

#### Simple Onboarding for Artisans
[ADD SCREENSHOT OF YOUR JOINASARTISAN.TSX PAGE HERE]

## 5. Tech Stack & Architecture
Our solution is built on a modern, scalable, and secure technology stack, with Google Cloud's generative AI at its core.

### Technology Stack
#### Cloud & AI: Google Cloud Platform, Vertex AI, Gemini Pro Model

#### Backend: Python, Flask

#### Frontend: React, TypeScript, Vite, Tailwind CSS

#### Deployment: Google Cloud Run, Docker

#### Development Tools: VS Code, PyCharm, Git

### Architecture Diagram
Our serverless architecture is designed to be highly cost-effective, ensuring that costs only scale as the platform's usage grows.
[ADD YOUR ARCHITECTURE DIAGRAM IMAGE HERE]

## 6. Getting Started: How to Run Locally
To run this project on your local machine, you will need two terminals.

### Backend Setup
#### 1. Navigate to the backend folder
cd backend

#### 2. Create and activate a virtual environment
python -m venv venv
#### On Mac/Linux:
source venv/bin/activate
#### On Windows:
 .\\venv\\Scripts\\activate

#### 3. Install dependencies
pip install -r requirements.txt

#### 4. Authenticate with Google Cloud
gcloud auth application-default login

#### 5. Run the server (it will run on http://localhost:5000)
python app.py

### Frontend Setup
#### 1. Navigate to the frontend folder
cd artisan-ai-mentor

#### 2. Install dependencies
npm install

#### 3. Run the development server (it will run on http://localhost:8080 or similar)
npm run dev