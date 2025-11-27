export default function Section({ title, children, style }) {
  return (
    <section style={{ padding: "40px 0", ...style }}>
      {title && (
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", fontWeight: 700 }}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
