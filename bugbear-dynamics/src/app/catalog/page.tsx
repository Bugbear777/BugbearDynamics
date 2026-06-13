import Link from "next/link";
import { vehicles } from "../../data/vehicles";

export default function CatalogPage() {
  return (
    <main>
      <section className="catalog-hero">
        <p className="eyebrow">Vehicle Catalog</p>
        <h1>Bugbear Dynamics LTV Lineup</h1>
        <p>
          Browse the current Bugbear Dynamics vehicle platforms, including rapid
          terrain crawlers, general-purpose LTVs, amphibious vehicles, and
          command units.
        </p>
      </section>

      <section className="catalog-section">
        <div className="catalog-grid">
          {vehicles.map((vehicle) => (
            <Link
              href={`/catalog/${vehicle.id}`}
              className="catalog-card catalog-card-link"
              key={vehicle.id}
            >
              <div className="catalog-card-header">
                <p className="vehicle-type">{vehicle.type}</p>
                <h2>{vehicle.name}</h2>
                <p className="vehicle-role">{vehicle.role}</p>
              </div>

              <p>{vehicle.description}</p>

              <dl className="vehicle-stats">
                <div>
                  <dt>Crew</dt>
                  <dd>{vehicle.crew}</dd>
                </div>
                <div>
                  <dt>Speed</dt>
                  <dd>{vehicle.speed}</dd>
                </div>
                <div>
                  <dt>Weight</dt>
                  <dd>{vehicle.weight}</dd>
                </div>
              </dl>

              <p className="view-details">View Details →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}