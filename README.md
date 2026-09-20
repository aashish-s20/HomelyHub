🏠 HomelyHub

HomelyHub is a full-stac igk property booking platform developed using the MERN stack. It allows users to explore properties, view property details, manage bookings, and interact with AI-powered features designed to improve the overall experience.

The project was developed as part of my WSA MERN Stack Internship at Emertxe Information Technologies.

🚀 Live Demo

Frontend: https://homelyhubip.netlify.app

Backend API: https://homelyhub-8fav.onrender.com

---

✨ Features

- 🔐 User authentication and authorization
- 🏠 Property listing and property details
- 🔎 Browse and explore available properties
- 📅 Property booking management
- 💳 Booking/payment workflow
- 👤 User account management
- 🤖 AI-powered property description generation
- ✈️ AI Trip Planner
- 📡 REST API integration
- 📱 Responsive user interface
- ⚡ State management using Redux Toolkit
- 🔄 API communication using Axios

---

🛠️ Tech Stack

Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Redux Toolkit
- Axios

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

AI

- Groq API

Deployment

- Netlify – Frontend
- Render – Backend
- MongoDB Atlas – Database

Development Tools

- Git
- GitHub
- VS Code
- Postman

---

📂 Project Structure

HomelyHub/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── ...
│
├── .gitignore
└── README.md

---

🔑 Core Functionalities

Authentication

Users can securely register and log in using JWT-based authentication.

Property Management

Users can browse available properties and view detailed information about individual listings.

Booking Management

The application provides a booking workflow where users can manage their property reservations.

AI Features

HomelyHub integrates AI capabilities using the Groq API, including:

- AI Trip Planner
- AI-powered property description generation

API Integration

The frontend communicates with the backend through REST APIs using Axios.

---

🔄 Application Flow

User
 │
 ▼
React Frontend
 │
 │ Axios / REST API
 ▼
Node.js + Express.js
 │
 ├── Authentication
 ├── Property Management
 ├── Booking Management
 └── AI Services
 │
 ▼
MongoDB

---

⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/aashish-s20/HomelyHub.git
cd HomelyHub

2. Install frontend dependencies

cd frontend
npm install

3. Install backend dependencies

cd ../backend
npm install

4. Configure environment variables

Create a ".env" file inside the backend directory.

Example:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key

For the frontend, configure the deployed/backend API URL according to your environment.

Do not commit ".env" files or API keys to GitHub.

5. Start the backend

npm run dev

6. Start the frontend

cd ../frontend
npm run dev

The application can then be accessed through the local development URL shown by Vite.

---

🌐 Deployment

The project is deployed using:

- Frontend: Netlify
- Backend: Render
- Database: MongoDB Atlas

The production frontend communicates with the deployed backend through REST APIs.

---

🔒 Security

- JWT-based authentication
- Environment variables for sensitive configuration
- API keys excluded from source control
- CORS configuration for production deployment

---

📚 What I Learned

Through this project, I gained practical experience with:

- Building full-stack applications using the MERN stack
- Developing REST APIs with Node.js and Express.js
- Working with MongoDB and Mongoose
- Implementing JWT authentication
- Managing application state using Redux Toolkit
- Integrating third-party APIs
- Integrating AI functionality using Groq
- Debugging frontend and backend issues
- Using Git and GitHub for version control
- Deploying frontend and backend applications
- Connecting a production frontend with a deployed backend

---

👨‍💻 Author

Aashish S

BE – Computer Science & Engineering

Garden City University

Connect with me

- LinkedIn: www.linkedin.com/in/aashish-s20
- GitHub: https://github.com/aashish-s20

---

📄 License

This project was developed for educational and internship purposes.
