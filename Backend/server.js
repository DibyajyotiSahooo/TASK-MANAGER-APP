import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";

dotenv.config();

const app = express();
connectDB();

// Middleware
app.use(express.json());

import taskRoutes from "./routes/task.js";

app.use("/api/tasks", taskRoutes);


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
