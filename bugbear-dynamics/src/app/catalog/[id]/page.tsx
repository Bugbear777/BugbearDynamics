import Link from "next/link";
import { notFound } from "next/navigation";
import { vehicles } from "../../../data/vehicles";
import VehicleVariantTabs from "@/src/components/VehicleVariantTabs";

type VehicleDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function VehicleDetailPage({
  params,
}: VehicleDetailPageProps) {
  const { id } = await params;

  const vehicle = vehicles.find((item) => item.id === id);

  if (!vehicle) {
    notFound();
  }

  return (
    <main>
      <section className="detail-hero">
        <Link href="/catalog" className="back-link">
          ← Back to Catalog
        </Link>

        <p className="eyebrow">{vehicle.type}</p>
        <h1>{vehicle.name}</h1>
        <p>{vehicle.description}</p>
      </section>

      <section className="detail-section">
        <VehicleVariantTabs variants={vehicle.variants} />
      </section>
    </main>
  );
}