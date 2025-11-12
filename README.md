# 💻 DevConnect – Code Together, Learn Together  

<p align="center">
  <img src="https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TAILWIND_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/DAISY_UI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" />
  <img src="https://img.shields.io/badge/MONGODB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/EXPRESS.JS-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/NODE.JS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/VISUAL_STUDIO_CODE-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" />
  <img src="https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=white" />
</p>

---

## 🏷️ 1. Project Title
**DevConnect – Code Together, Learn Together**

---

## 🧩 2. Description  

**DevConnect** is a remote interview and collaborative coding platform built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
It allows users to conduct **live coding interviews**, **collaborate in real-time**, and **practice coding problems** independently.

The platform integrates:
- Real-time video and chat,
- Interactive code editor,
- Coding problem library,
- Live session management dashboard.

---

## ⚙️ 3. Features  

| Feature | Description |
|----------|--------------|
| 👥 **Real-Time Collaboration** | Conduct live interviews or pair programming with video, code editor, and chat. |
| 💬 **Chat Integration** | Built-in chat feature for communication during sessions. |
| 💻 **Code Editor** | Supports multiple programming languages via the Piston API. |
| 📚 **Practice Problems** | Curated coding problems categorized by difficulty levels. |
| 📊 **Dashboard** | Displays live sessions, past sessions, and user stats. |
| 🔐 **Authentication** | Secure JWT-based authentication for users. |
| 🎨 **Modern UI** | Responsive and minimal interface built with Tailwind CSS and DaisyUI. |
| ⚡ **Real-Time Sync** | Stream API for live data and communication handling. |

---

## 🧠 4. Technologies Used  

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React, Vite, Tailwind CSS, DaisyUI |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose |
| **Real-Time** | Stream API |
| **Code Execution** | Piston API |
| **Styling** | Tailwind CSS, DaisyUI |
| **Version Control** | Git, GitHub |
| **Development Tools** | Visual Studio Code |

---

## ⚙️ 5. Installation  

Follow the steps below to set up and run **DevConnect** locally.

### Prerequisites:
- Node.js (v16+)
- npm or yarn
- MongoDB instance (local or cloud)

---

### Steps  

```bash
# Clone the repository
git clone <repository-url>
cd DevConnect-main

# Backend setup
cd backend
npm install

# Create a .env file with the following variables
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
PISTON_API_URL=https://emkc.org/api/v2/piston

# Start the backend server
npm start

# Frontend setup
cd ../frontend
npm install


# Start the frontend development server
npm run dev
```

---

## 🚀 6. Usage

Once both servers are running:

- Visit **[http://localhost:5173](http://localhost:5173)** to open the app.  
- Register or login as a user.  
- Navigate to:

  - **Dashboard** – View active and past sessions.  
  - **Problems Page** – Solve coding challenges independently.  
  - **Session Page** – Join or host collaborative coding sessions with chat and video.  

- Code can be executed directly using the **Run Code** button.

---

## 🌐 7. API Endpoints  

### 🔹 Authentication  

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login existing user |

---

### 🔹 Sessions  

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/sessions` | Fetch all sessions |
| `POST` | `/api/sessions` | Create a new session |
| `GET` | `/api/sessions/:id` | Get session details |
| `DELETE` | `/api/sessions/:id` | Delete a session |

---

### 🔹 Chat  

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/chat/:sessionId` | Fetch chat messages for a session |
| `POST` | `/api/chat` | Send a message during a session |

---

## 🖼️ 8. Screenshots / Demo  

| Home Page | Dashboard Page | Problems Page | Session Page | 
|------------|------------|----------------|---------------|
| ![Home Page](./assets/HomePage.png) | ![Dashboard](./assets/DashboardPage.png) | ![Problems Page](./assets/ProblemsPage.png) | ![Session Page](./assets/SessionPage.png) | 


🔗 **Live Demo:** [https://devconnect-ee23c.sevalla.app](https://devconnect-ee23c.sevalla.app)

---

## 🤝 9. Contributing  

Contributions are always welcome! 💡  

To contribute:

1. **Fork** the repository.  
2. **Create a new branch:**  
   ```bash
   git checkout -b feature-name

---

## 📫 Contact
For any queries or collaboration ideas, feel free to reach out:

**👩‍💻 Author:** Navyasri Kamble  
📧 **Email:** [navyak1585@gmail.com]  
🌐 **Portfolio:** [[your-portfolio-link.com](https://navyasri-18.github.io/My_Portfolio/)]  
💼 **LinkedIn:** [[linkedin.com/in/navyasrikamble](https://www.linkedin.com/in/navyasrikamble/)](#)

---

## ⭐ Support
If you like this project, consider giving it a ⭐ on [GitHub](#) — it helps others discover it too!
