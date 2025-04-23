import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

// Enable CORS so frontend (on a different port) can access
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.get("/", (req, res) => {
    res.send("Welcome to the backend!");
  });  

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
