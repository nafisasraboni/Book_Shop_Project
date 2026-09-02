# 📚 Book Shop Management System

A modern full-stack book store application featuring an interactive catalog, admin management capabilities, and secure Google Authentication using Firebase.

🔗 **Live Site:** https://sraboni.dev
*(Note: Replace with your specific live deployment URL if different)*

---

## 📌 Project Overview

The Book Shop Project provides a full-featured e-commerce platform for browsing, managing, and ordering books. Originally conceptualized as a basic management tool, it is built with a modern React + Vite frontend and integrated with Firebase Authentication to handle smooth Google sign-in and role-based admin access.

---

## ✨ Key Features

- 🔐 **Firebase Authentication:** Secure Google Sign-In integration.
- 👑 **Admin Access Control:** Role-based UI access managed via environment variables for designated admin accounts.
- 📚 **Interactive Catalog:** Responsive user interface to view and manage books.
- ⚡ **Vite-Powered Performance:** Fast development server and optimized production build output.
- 📱 **Responsive Design:** Optimized layout for seamless navigation across all device sizes.

---

## 🛠️ Main Technologies Used

- **Frontend:** React.js, JavaScript (ES6+)
- **Build Tool:** Vite
- **Authentication:** Firebase Auth (Google Sign-In)
- **Styling:** Custom CSS
- **Deployment Platform:** Firebase / Cloudflare Pages

---

## 📦 Dependencies & Setup Requirements

- `react`
- `firebase`
- Environment Variables (`.env`) for Firebase configuration and Admin setup

---

## 📂 Project Structure

```
Book_Shop_Project/
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── styles.css
    ├── index.html
    ├── package.json
    ├── .env.example
    └── vite.config.js
```
---

## ⚙️ How to Run Locally

1. **Clone the repository:**
   git clone https://github.com/nafisasraboni/Book_Shop_Project.git

2. **Navigate to the frontend directory:**
   cd Book_Shop_Project/frontend

3. **Configure Environment Variables:**
   Copy `.env.example` to `.env` and fill in your Firebase Web App credentials:
   VITE_ADMIN_EMAILS=youradmin@gmail.com

4. **Install dependencies:**
   npm install

5. **Start the local development server:**
   npm run dev

6. **Build for Production:**
   npm run build
   *(Production files are generated inside the `frontend/dist` directory)*

---

## 📖 What I Learned

- Building single-page applications using React and Vite.
- Integrating Firebase Authentication with Google Popup flow.
- Managing environmental variables and domain authorizations in cloud platforms.
- Implementing role-based client-side routing for admin and standard users.

---

## 🔗 Live & Relevant Links

- **Live Site:** https://sraboni.dev
- **GitHub Repository:** https://github.com/nafisasraboni/Book_Shop_Project
- **Author Profile:** https://github.com/nafisasraboni
