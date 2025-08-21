const express = require("express");
const path = require("path");
const { exec } = require("child_process"); 
const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/downloadAudio", (req, res) => {
  let url = req.query.url;
  if (!url) return res.status(400).json({ error: "Missing 'url' parameter" });

  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get("v");

  if (!videoId) return res.status(400).json({ error: "Invalid YouTube URL" });

  url = `https://www.youtube.com/watch?v=${videoId}`;
  const cmd = `yt-dlp.exe -x --write-thumbnail "${url}"`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error("yt-dlp error:", error);
      return res.status(500).json({ error: error.message });
    }
    if (stderr) console.log("yt-dlp stderr:", stderr);

    res.status(200).json({ output: stdout.trim() });
  });
});

app.get("/api/downloadVideo", (req, res) => {
  let url = req.query.url;
  if (!url) return res.status(400).json({ error: "Missing 'url' parameter" });

  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get("v");

  if (!videoId) return res.status(400).json({ error: "Invalid YouTube URL" });

  url = `https://www.youtube.com/watch?v=${videoId}`;
  const cmd = `yt-dlp.exe "${url}"`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
    if (stderr) console.error(stderr);
    res.json({ output: stdout.trim() });
  });
});

app.use(express.static(path.join(__dirname, "build")));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
