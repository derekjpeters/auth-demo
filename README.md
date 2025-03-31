# Intro to Authentication (Node.js + Express)

This is a basic Web API project that demonstrates how to implement user authentication using Node.js, Express, and bcryptjs.

## 📁 File Structure

```
auth-demo/
├── data/
│   └── users.js             # Temporary in-memory user storage
├── middleware/
│   └── restrict.js          # (Optional) Middleware to protect routes
├── routes/
│   └── authRouter.js        # Handles register, login logic
├── utils/
│   └── hashHelpers.js       # Bcrypt helpers for hashing and verifying
├── index.js                 # Entry point
└── .env                     # Environment variables (optional)
```

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/auth-demo.git
cd auth-demo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
npm run server
```

Your server will start on `http://localhost:4000`.

## 🧪 Test the Endpoints (with Postman or Thunder Client)

### Register a User

- **POST** `http://localhost:4000/api/auth/register`
```json
{
  "username": "derek",
  "password": "supersecret"
}
```

### Log in

- **POST** `http://localhost:4000/api/auth/login`
```json
{
  "username": "derek",
  "password": "supersecret"
}
```

## 🔐 Tech Used

- Express
- bcryptjs
- cors
- nodemon (dev)

## 📚 Concepts Covered

- Authentication vs. Authorization
- Password hashing with bcrypt
- Password comparison for login
- Basic API route setup

---

> This project uses an in-memory database (`users.js`). Data is reset every time the server restarts. For persistence, connect to a real database like SQLite or PostgreSQL.
