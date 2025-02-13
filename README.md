# Real-Time Chat App

## 🚀 Overview

This is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, along with **Socket.io** for real-time communication. The user interface is styled using **Tailwind CSS** and **DaisyUI**.

## 🎯 Features

- 🔐 **User Authentication** (Signup/Login with JWT)
- 💬 **Real-time Messaging** using Socket.io
- 🧑‍🤝‍🧑 **One-on-One Chats**
- 🟢 **Online Status Indicator**
- 🔍 **User Search**
- 🎨 **Responsive UI with Tailwind CSS & DaisyUI**
- 🌙 **Dark Mode Support** (via DaisyUI)
- 🖼️ **Profile Picture Upload**

## 🛠️ Tech Stack

### **Frontend**

- **React.js** (Vite for fast builds)
- **Tailwind CSS** & **DaisyUI** for UI design
- **React Router** for navigation
- **React Hot Toast** for notifications

### **Backend**

- **Node.js & Express.js**
- **MongoDB & Mongoose** for database
- **JWT (JSON Web Token)** for authentication
- **Socket.io** for real-time messaging


## 🏗️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/JatinSinghRawat/mern-chat-app.git
cd mern-chat-app
```

### 2️⃣ Install Dependencies

#### Backend

```sh
npm i express dotenv cookie-parser bcryptjs mongoose socket.io jsonwebtoken
```

#### Frontend

```sh
cd frontend
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the **server** directory with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Application

#### Backend (Server)

```sh
cd server
npm run dev
```

#### Frontend (Client)

```sh
cd client
npm run dev
```

### 5️⃣ Open in Browser

```
http://localhost:5173
```

## 🔗 API Endpoints (Backend)

| Method | Endpoint               | Description       |
| ------ | ---------------------- | ----------------- |
| POST   | /api/auth/signup       | User Signup       |
| POST   | /api/auth/login        | User Login        |
| GET    | /api/users             | Get All Users     |
| GET    | /api/chats             | Get User Chats    |
| POST   | /api/chats             | Create New Chat   |
| GET    | /api/messages/\:chatId | Get Chat Messages |
| POST   | /api/messages          | Send Message      |

## 📸 Screenshots

### ✍️Sign-up page

![image](https://github.com/user-attachments/assets/d9448cd0-7a84-46ff-ab04-fe8186811b11)

### ✅Login Page

![image](https://github.com/user-attachments/assets/c5d233e3-625d-4910-b81e-685286577d9d)

### 👋Home Page

![image](https://github.com/user-attachments/assets/6b574ebd-8030-4b37-9c7d-a8928abbd1cb)

### 💬Conversation Look

![image](https://github.com/user-attachments/assets/1523ad40-4daa-44c3-abb4-5d478f2e06b6)





## 💡 Future Enhancements

- ✅ Typing Indicator
- ✅ Message Read Receipts
- ✅ File & Image Sharing
- ✅ Push Notifications
- ✅ Group Chat
- ✅ Delete Chat and messages
- ✅ Invite Friends via mail

## 🤝 Contributing

Pull requests are welcome! If you'd like to contribute, follow these steps:

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Added a new feature'`)
4. Push to your branch (`git push origin feature-name`)
5. Open a Pull Request

## 📄 License

MIT License © 2025 Jatin Singh Rawat

---


