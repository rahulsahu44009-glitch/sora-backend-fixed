import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Root check
app.get("/", (req, res) => {
  res.send("Sora Backend Running Successfully!");
});

// 🔥 REQUIRED ROUTE (FRONTEND USES THIS)
app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({
        error: "Prompt missing"
      });
    }

    // ✅ Dummy video for testing
    res.json({
      video_url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    });

  } catch (err) {
    res.status(500).json({
      error: "Server error",
      details: err.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
