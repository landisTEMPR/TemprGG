import newsData from "../../data/news.json";
import { Link } from "react-router-dom";

export default function NewsPreview() {
  const latest = newsData.slice(0, 3);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "20px",
      }}
    >
      {latest.map((item) => (
        <Link
          key={item.id}
          to={`/news/${item.id}`}
          style={{
            textDecoration: "none",
            color: "inherit",
            background: "#111",
            padding: "16px",
            borderRadius: "10px",
            border: "1px solid #222",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "12px",
            }}
          />

          <h3 style={{ fontSize: "1.1rem", marginBottom: "6px" }}>
            {item.title}
          </h3>

          <p style={{ opacity: 0.8, fontSize: "0.9rem" }}>{item.excerpt}</p>
        </Link>
      ))}
    </div>
  );
}
