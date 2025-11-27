import { Link } from "react-router-dom";
import heroImg from "../../imgs/hero-placeholder.jpg"; // Optional placeholder image

export default function Hero() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "420px",
        background: `url(${heroImg}) center/cover no-repeat`,
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "40px",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "20px" }}>
          TEMPR.GG
        </h1>

        <p style={{ fontSize: "1.25rem", maxWidth: "520px", marginBottom: "30px" }}>
          Competitive esports. Elite creators. High-level content.
        </p>

        <Link
          to="/teams"
          style={{
            background: "#ffffff",
            color: "#000",
            padding: "12px 22px",
            borderRadius: "6px",
            fontWeight: 600,
            display: "inline-block",
            width: "fit-content",
          }}
        >
          View Teams
        </Link>
      </div>
    </div>
  );
}
