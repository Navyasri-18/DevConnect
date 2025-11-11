# 🔗 DevConnect

**DevConnect** is a comprehensive, open-source social networking platform built specifically for the developer community. Inspired by the need for focused collaboration, this application provides a dedicated space for developers to connect, share knowledge, find project collaborators, and explore career opportunities.

---

## 🌐 Live Demo

👉 **[Visit DevConnect Live](https://navyasri-18.github.io/DevConnect)**  
*(If unavailable, please check the setup section to run locally.)*

---

## 🖼️ Screenshots

### 🏠 Home Page
![Home Page Screenshot](assets/screenshots/HomePage.png)

### 💬 Dashboard Page
![Chat Screenshot](assets/screenshots/DashboardPage.png)

### 👩‍💻 Problems Page
![Profile Screenshot](assets/screenshots/ProblemsPage.png)

### 👩‍💻 Session Page
![Profile Screenshot](assets/screenshots/SessionPage.png)


---

## ✨ Features

DevConnect is a full-stack application offering a rich set of functionalities tailored for professional networking and community interaction:

| Feature | Description |
| :--- | :--- |
| **Secure Authentication** | User registration and login secured using **JWT (JSON Web Tokens)** for safe and persistent sessions. |
| **Detailed Profiles** | Create and customize in-depth profiles to showcase skills, interests, professional experience, and social links. |
| **Personalized Matchmaking** | Algorithms and filters to connect with developers based on complementary skills, interests, and preferences (Swipe & Match functionality). |
| **Real-time Messaging** | Instant, two-way communication with matches and connections using **Socket.io** for a seamless chat experience. |
| **Connection Management** | Send, accept, and manage connection requests and view your network of fellow developers. |
| **Blogging/Posting** | A community feed to write, share, and interact with technical blog posts, project updates, and coding insights. |
| **Job Board (Optional)** | A dedicated section to browse job listings and stay updated on hiring opportunities. |
| **User Experience** | Seamless **Dark Mode** support for comfortable coding late at night. |

---

## 🛠️ Tech Stack

DevConnect is a **MERN Stack** application built with modern technologies for scalability, performance, and real-time capabilities.

### Frontend (Client)
* **Framework:** ReactJS (with Hooks)
* **State Management:** Redux Toolkit
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **API Client:** Axios

### Backend (Server)
* **Runtime:** Node.js
* **Web Framework:** Express.js
* **Database:** MongoDB (managed with Mongoose ODM)
* **Authentication:** JWT
* **Real-time:** Socket.io
* **Caching/Sessions:** Redis (Optional)

---

## 🚀 Installation & Setup

Follow these steps to get a local copy of DevConnect up and running for development.

### Prerequisites
You must have the following installed:
* Node.js
* MongoDB
* Git

### 1. Clone the Repository
```bash
git clone https://github.com/Navyasri-18/DevConnect.git
cd DevConnect
```

### 2. Configure Environment Variables
Create a `.env` file in the `server/` directory:

```
MONGO_URI="mongodb+srv://<username>:<password>@cluster.mongodb.net/DevConnectDB"
JWT_SECRET="YOUR_SECRET_KEY"
PORT=5000
```

### 3. Setup Backend
```bash
cd server
npm install
npm run dev
```

### 4. Setup Frontend
```bash
cd ../client
npm install
npm run dev
```

---

## 💻 Usage
1. Navigate to the client URL (`http://localhost:5173`).
2. Register and log in.
3. Create your developer profile.
4. Connect, chat, and collaborate!

---

## 🤝 Contribution
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

