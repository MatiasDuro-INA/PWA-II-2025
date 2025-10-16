// RandomPeople.jsx
import React from "react";

const NAT_NAMES_ES = {
  AU: "Australia",
  BR: "Brasil",
  CA: "Canadá",
  CH: "Suiza",
  DE: "Alemania",
  DK: "Dinamarca",
  ES: "España",
  FI: "Finlandia",
  FR: "Francia",
  GB: "Reino Unido",
  IE: "Irlanda",
  IR: "Irán",
  NO: "Noruega",
  NL: "Países Bajos",
  NZ: "Nueva Zelanda",
  TR: "Turquía",
  US: "Estados Unidos",
};

const toDisplayGender = (g) => (g === "male" ? "Masculino" : "Femenino");

export default function RandomPeople({
  count = 6,
  nat,
  gender = "any",
  seed,
  className,
}) {
  const [people, setPeople] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const controller = new AbortController();

    const fetchPeople = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        params.set("results", String(Math.min(Math.max(count, 1), 6)));
        if (seed) params.set("seed", seed);
        if (nat) params.set("nat", nat);
        if (gender !== "any") params.set("gender", gender);
        params.set("inc", "name,email,picture,nat,gender");

        const url = `https://randomuser.me/api/?${params.toString()}`;
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setPeople(data.results ?? []);
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message || "Error al cargar");
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
    return () => controller.abort();
  }, [count, nat, gender, seed]);

  return (
    <div style={styles.wrapper} className={className}>
      <header style={styles.header}>
        <h2 style={styles.title}>Personas aleatorias</h2>
        <span style={styles.meta}>
          Mostrando hasta {Math.min(Math.max(count, 1), 6)}
        </span>
      </header>

      {loading && (
        <div style={styles.grid}>
          {Array.from({ length: Math.min(Math.max(count, 1), 6) }).map((_, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.avatarSkeleton} />
              <div style={styles.textSkeleton} />
              <div style={styles.textSkeletonSm} />
              <div style={styles.textSkeletonSm} />
              <div style={styles.textSkeletonSm} />
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <div style={styles.errorBox}>
          <p>Ocurrió un error: {error}</p>
          <button style={styles.button} onClick={() => window.location.reload()}>
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && (
        <div style={styles.grid}>
          {people.map((p, idx) => {
            const natName = NAT_NAMES_ES[p.nat] || p.nat;
            const fullName = `${p.name.first} ${p.name.last}`;
            return (
              <article key={idx} style={styles.card} aria-label={fullName}>
                <img
                  src={p.picture.medium}
                  alt={`Foto de ${fullName}`}
                  style={styles.avatar}
                  loading="lazy"
                />
                <h3 style={styles.name}>{fullName}</h3>
                <p style={styles.line}>
                  <strong>Nacionalidad:</strong> {natName} ({p.nat})
                </p>
                <p style={styles.line}>
                  <strong>Género:</strong> {toDisplayGender(p.gender)}
                </p>
                <p style={styles.line}>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${p.email}`} style={styles.link}>
                    {p.email}
                  </a>
                </p>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: { maxWidth: 1100, margin: "0 auto", padding: 16 },
  header: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: { margin: 0, fontSize: 20 },
  meta: { fontSize: 12, opacity: 0.7 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: 16,
  },
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 14,
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    background: "white",
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    margin: "0 auto 8px",
    border: "1px solid #eee",
  },
  name: { textAlign: "center", margin: "6px 0 10px", fontSize: 16 },
  line: { margin: "6px 0", fontSize: 14 },
  link: { textDecoration: "none", color: "#2563eb" },
  errorBox: {
    border: "1px solid #fecaca",
    background: "#fff1f2",
    color: "#991b1b",
    padding: 12,
    borderRadius: 8,
  },
  button: {
    marginTop: 8,
    padding: "8px 12px",
    borderRadius: 8,
    border: "1px solid #e5e7eb",
    cursor: "pointer",
    background: "white",
  },
  avatarSkeleton: {
    width: 84,
    height: 84,
    borderRadius: "50%",
    margin: "0 auto 8px",
    background:
      "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 37%, #f3f4f6 63%)",
    backgroundSize: "400% 100%",
    animation: "pulse 1.4s ease infinite",
  },
  textSkeleton: {
    height: 14,
    margin: "8px 0",
    borderRadius: 6,
    background:
      "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 37%, #f3f4f6 63%)",
    backgroundSize: "400% 100%",
    animation: "pulse 1.4s ease infinite",
  },
  textSkeletonSm: {
    height: 12,
    width: "80%",
    margin: "6px 0",
    borderRadius: 6,
    background:
      "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 37%, #f3f4f6 63%)",
    backgroundSize: "400% 100%",
    animation: "pulse 1.4s ease infinite",
  },
};

// Nota: agregá esta animación en tu CSS global si querés el efecto skeleton:
// @keyframes pulse { 0% { background-position: 100% 0 } 100% { background-position: 0 0 } }
