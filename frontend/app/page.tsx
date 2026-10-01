export default function Home() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
      <p style={{ color: "#666" }}>AGENTJOB AI</p>
      <h1 style={{ fontSize: 52, marginBottom: 12 }}>Ton copilote intelligent pour l'emploi.</h1>
      <p style={{ fontSize: 20, color: "#555", maxWidth: 700 }}>
        Collecte, analyse et matching d'offres d'emploi avec des agents IA.
      </p>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 48 }}>
        {[
          ["Offres", "0", "Offres collectées"],
          ["Analyses", "0", "Offres analysées"],
          ["Matching", "—", "Compatibilité moyenne"],
        ].map(([label, value, desc]) => (
          <article key={label} style={{ background: "white", padding: 24, borderRadius: 16 }}>
            <div style={{ color: "#777" }}>{label}</div>
            <strong style={{ display: "block", fontSize: 36, margin: "10px 0" }}>{value}</strong>
            <span style={{ color: "#777" }}>{desc}</span>
          </article>
        ))}
      </section>
    </main>
  );
}
