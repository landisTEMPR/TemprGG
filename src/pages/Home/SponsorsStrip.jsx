export default function SponsorsStrip() {
  const sponsors = [
    { name: "Sponsor A", logo: "/placeholder-logo.png" },
    { name: "Sponsor B", logo: "/placeholder-logo.png" },
    { name: "Sponsor C", logo: "/placeholder-logo.png" },
  ];

  return (
    <div
      style={{
        padding: "30px 0",
        opacity: 0.7,
        display: "flex",
        gap: "40px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {sponsors.map((s, i) => (
        <img
          key={i}
          src={s.logo}
          alt={s.name}
          style={{ height: "40px", objectFit: "contain" }}
        />
      ))}
    </div>
  );
}
