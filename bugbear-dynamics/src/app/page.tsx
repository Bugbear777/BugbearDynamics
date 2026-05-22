const vehicles = [
  {
    name: "LTV-1 Antlion",
    role: "Rapid terrain crawler",
    description:
      "A fast, mobile light tactical vehicle designed for scouting, pursuit, and rough terrain movement.",
  },
  {
    name: "LTV-2 Scarab",
    role: "General-purpose LTV",
    description:
      "A balanced multipurpose vehicle with heavy armor, modular weapon support, and crew transport capacity.",
  },
  {
    name: "LTV-3 Water Strider",
    role: "Amphibious LTV",
    description:
      "An amphibious platform built for land-to-water operations, patrols, and shoreline mobility.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Light Tactical Vehicle Division</p>
          <h1>Rugged machines for hostile terrain.</h1>
          <p>
            Bugbear Dynamics designs compact, modular, military-inspired
            vehicles built for speed, durability, and battlefield utility.
          </p>
          <div className="hero-actions">
            <a href="#vehicles" className="button primary">View Vehicles</a>
            <a href="#mission" className="button secondary">Our Mission</a>
          </div>
        </div>
      </section>

      <section id="mission" className="section">
        <p className="eyebrow">Mission</p>
        <h2>Built for mobility, protection, and adaptability.</h2>
        <p>
          Our goal is to create a catalog of fictional tactical vehicles that
          feel grounded, visually distinct, and useful across multiple mission
          types, from reconnaissance to command support.
        </p>
      </section>

      <section id="vehicles" className="section dark-section">
        <p className="eyebrow">Vehicle Lineup</p>
        <h2>Featured LTV Platforms</h2>

        <div className="vehicle-grid">
          {vehicles.map((vehicle) => (
            <article className="vehicle-card" key={vehicle.name}>
              <h3>{vehicle.name}</h3>
              <p className="vehicle-role">{vehicle.role}</p>
              <p>{vehicle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="section feature-section">
        <p className="eyebrow">Design Focus</p>
        <h2>Desert-ready tactical engineering.</h2>

        <div className="feature-list">
          <div>
            <h3>Modular</h3>
            <p>Vehicles can be adapted for combat, scouting, logistics, or command use.</p>
          </div>
          <div>
            <h3>Armored</h3>
            <p>Design language emphasizes survivability and battlefield utility.</p>
          </div>
          <div>
            <h3>Fast</h3>
            <p>Each platform is designed around speed, terrain control, and maneuverability.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Ready for deployment.</h2>
        <p>
          This project will expand into a full vehicle catalog with detailed
          pages, specifications, images, and team-built features.
        </p>
      </section>
    </main>
  );
}