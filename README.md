# Notes App

A full-stack Notes Management application built with the MERN Stack, featuring secure JWT authentication, complete CRUD operations, responsive UI, and seamless REST API integration.

---

## 🚀 Features

- 🔐 User Registration & Login
- 🍪 JWT Authentication using Cookies
- 📝 Create Notes
- ✏️ Edit Notes
- 🗑️ Delete Notes
- 📋 View All Notes
- 📱 Responsive User Interface
- ⚡ Loading States
- ✅ Form Validation
- ❌ Error Handling
- 🔄 Real-time UI Updates after CRUD Operations

---

## 📸 Screenshots

### Authentication

| Register | Login |
|----------|-------|
| ![Register](./screenshots/register.png) | ![Login](./screenshots/login.png) |

### Notes Dashboard

| Notes Dashboard | Edit Note |
|-----------------|-----------|
| ![Dashboard](./screenshots/dashboard.png) | ![Edit](./screenshots/edit-note.png) |

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- JWT
- Cookie Parser

### Database
- MongoDB
- Mongoose

---

## 📂 Folder Structure

```
Notes-App/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   ├── server.js
│   └── package.json
```

---

## 🌐 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register User |
| POST | `/auth/login` | Login User |

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/notes` | Get All Notes |
| POST | `/notes` | Create Note |
| PATCH | `/notes/:id` | Update Note |
| DELETE | `/notes/:id` | Delete Note |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/mern-notes-app.git
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## ✨ Key Features

- Full Stack MERN Architecture
- JWT Authentication
- Cookie-based Authentication
- Complete CRUD Functionality
- RESTful APIs
- Responsive Design
- React Hooks
- Axios Integration
- MongoDB Database
- Loading & Error Handling

---

## 📚 What I Learned

- Building full-stack MERN applications
- JWT Authentication
- Cookie-based Authentication
- React Hooks & State Management
- REST API Development
- MongoDB & Mongoose
- Axios API Integration
- CRUD Operations
- Error Handling
- Responsive UI Design

---

## 🔮 Future Improvements

- Password Hashing (bcrypt)
- Protected Routes
- Search Notes
- Categories & Tags
- Rich Text Editor
- Dark Mode
- Image Upload
- Pagination

---

## 👨‍💻 Author

**Harsh**

- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-profile
