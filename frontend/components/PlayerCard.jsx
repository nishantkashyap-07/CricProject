var PlayerCard = ({ player, onClick }) => {
  // set badge color based on role

  var badgeBg, badgeText;
  if (player.role === "Batsman") {
    badgeBg = "#ffedd5";
    badgeText = "#c2410c";
  } else if (player.role === "Bowler") {
    badgeBg = "#dbeafe";
    badgeText = "#1d4ed8";
  } else if (player.role === "All-rounder") {
    badgeBg = "#f3e8ff";
    badgeText = "#7e22ce";
  } else if (player.role === "Wicketkeeper Batsman") {
    badgeBg = "#fef3c7";
    badgeText = "#b45309";
  } else if (player.role === "Wicketkeeper") {
    badgeBg = "#fef3c7";
    badgeText = "#b45309";
  } else {
    // fallback
    badgeBg = "#f3f4f6";
    badgeText = "#374151";
  }

  return (
    <div
      onClick={() => onClick(player)}
      style={{
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
        cursor: "pointer",
        overflow: "hidden",
        transition: "all 0.15s",
        border: "1px solid #f3f4f6",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.12)";
        e.currentTarget.style.borderColor = "#86efac";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.12)";
        e.currentTarget.style.borderColor = "#f3f4f6";
      }}
    >
      <div
        style={{
          height: 170,
          background: "linear-gradient(135deg, #f0fdf4, #f3f4f6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
        }}
      >
        <img
          src={player.image}
          alt={player.name}
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>
      <div style={{ padding: "12px 14px 14px" }}>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#1f2937",
            margin: "0 0 6px 0",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {player.name}
        </h3>
        <span
          style={{
            display: "inline-block",
            padding: "2px 10px",
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 600,
            background: badgeBg,
            color: badgeText,
            marginBottom: 6,
          }}
        >
          {player.role}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
          <svg width={12} height={12} fill="#22c55e" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span style={{ fontSize: 12, color: "#6b7280" }}>{player.country}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
