const players = require("../../data/players.json");

export default function handler(req, res) {
  res.status(200).json(players);
}
