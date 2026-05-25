var SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto 28px auto", position: "relative" }}>
      <svg
        style={{ position: "absolute", left: 14, top: 13, width: 20, height: 20, color: "#9ca3af" }}
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="search by name country or role..."
        style={{
          width: "100%",
          padding: "12px 44px",
          fontSize: 15,
          border: "2px solid #e5e7eb",
          borderRadius: 12,
          outline: "none",
          boxSizing: "border-box",
          transition: "border 0.2s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#4ade80")}
        onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
      />
      {searchTerm && (
        <button
          onClick={() => onSearchChange("")}
          style={{
            position: "absolute", right: 10, top: 10,
            width: 28, height: 28,
            background: "#e5e7eb",
            border: "none", borderRadius: "50%",
            cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#6b7280", fontSize: 16,
            lineHeight: 1,
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;
