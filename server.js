import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// ✅ Base route
app.get("/", (req, res) => {
  res.send("🚀 Server is running and connected to MongoDB!");
});

// ✅ Example endpoint
app.get("/api/students", (req, res) => {
  res.json([
    { name: "Sayeesh", branch: "CSE" },
    { name: "Rohan", branch: "ISE" },
  ]);
});

// ✅ Only ONE declaration of PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
