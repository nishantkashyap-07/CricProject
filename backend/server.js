const express = require("express");
const cors = require("cors");
const players = require("./data/players.json");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/players", (req, res) => {
  res.json(players);
});

app.get("/api/search", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  if (!query) return res.json(players);
  const results = players.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.country.toLowerCase().includes(query) ||
      p.role.toLowerCase().includes(query)
  );
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
