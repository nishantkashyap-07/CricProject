const players = require("../../backend/data/players.json");

export default function handler(req, res) {
  const query = req.query.q?.toLowerCase() || "";
  if (!query) return res.status(200).json(players);
  const results = players.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.country.toLowerCase().includes(query) ||
      p.role.toLowerCase().includes(query)
  );
  res.status(200).json(results);
}
