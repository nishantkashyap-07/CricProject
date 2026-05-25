import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import PlayerCard from "../components/PlayerCard";
import PlayerModal from "../components/PlayerModal";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/players")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function filterPlayers() {
    var filtered = players;
    if (role !== "All") {
      filtered = filtered.filter((p) => p.role === role);
    }
    if (search.trim() !== "") {
      var q = search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.country.toLowerCase().includes(q) ||
          p.role.toLowerCase().includes(q)
      );
    }
    return filtered;
  }

  var results = filterPlayers();
  console.log(results.length);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%)' }}>
      
      <style>{`
        .spinny {
          width: 40px; height: 40px;
          border: 4px solid #e5e7eb;
          border-top: 4px solid #16a34a;
          border-radius: 50%;
          animation: spinn 0.8s linear infinite;
          margin: 0 auto;
        }
        @keyframes spinn {
          to { transform: rotate(360deg); }
        }
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 16px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 style={{ fontSize: 40, fontWeight: 800, color: '#1f2937', margin: 0 }}>
            🏏 Cricketer Search
          </h1>
          <p style={{ color: '#6b7280', marginTop: 6, fontSize: 15 }}>
            find ur favorite cricketers from around the world
          </p>
        </div>

        <SearchBar searchTerm={search} onSearchChange={setSearch} />

        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {['All', 'Batsman', 'Bowler', 'All-rounder', 'Wicketkeeper Batsman'].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              style={{
                padding: '6px 18px',
                borderRadius: 999,
                border: '1px solid #d1d5db',
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer',
                background: role === r ? '#16a34a' : '#fff',
                color: role === r ? '#fff' : '#374151',
              }}
            >
              {r}
            </button>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: 13, color: '#9ca3af', marginBottom: 20 }}>
          {results.length} player{results.length !== 1 ? 's' : ''} found
        </p>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 80 }}>
            <div className="spinny" />
          </div>
        ) : results.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 64, color: '#9ca3af' }}>
            <p style={{ fontSize: 22, margin: 0 }}>🤷 no players found</p>
            <p style={{ fontSize: 14 }}>try a different search or filter</p>
          </div>
        ) : (
          <div className="card-grid">
            {results.map((player) => (
              <PlayerCard key={player.id} player={player} onClick={setSelected} />
            ))}
          </div>
        )}
      </div>

      <PlayerModal player={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
