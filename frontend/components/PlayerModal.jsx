var PlayerModal = ({ player, onClose }) => {
  if (!player) return null;

  // set header gradient based on role
  var grad;
  if (player.role === "Batsman") {
    grad = "linear-gradient(135deg, #ffedd5, #fffbeb)";
  } else if (player.role === "Bowler") {
    grad = "linear-gradient(135deg, #dbeafe, #f0f9ff)";
  } else if (player.role === "All-rounder") {
    grad = "linear-gradient(135deg, #f3e8ff, #fdf4ff)";
  } else if (player.role === "Wicketkeeper Batsman") {
    grad = "linear-gradient(135deg, #fef3c7, #fef9c3)";
  } else if (player.role === "Wicketkeeper") {
    grad = "linear-gradient(135deg, #fef3c7, #fef9c3)";
  } else {
    grad = "linear-gradient(135deg, #f0fdf4, #f3f4f6)";
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        background: "rgba(0,0,0,0.4)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 16,
          maxWidth: 480,
          width: "100%",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: 200,
            background: grad,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            position: "relative",
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
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              width: 32,
              height: 32,
              background: "rgba(255,255,255,0.85)",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: 18,
              color: "#374151",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: "20px 24px 24px" }}>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#1f2937",
              margin: "0 0 2px 0",
            }}
          >
            {player.name}
          </h2>
          <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 14px 0" }}>
            #{player.id} · {player.country}
          </p>

          <span
            style={{
              display: "inline-block",
              padding: "4px 14px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              background: "#dcfce7",
              color: "#166534",
              marginBottom: 16,
            }}
          >
            {player.role}
          </span>

          <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: 16 }}>
            <p style={{ color: "#4b5563", lineHeight: 1.7, margin: 0, fontSize: 14 }}>
              {player.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
