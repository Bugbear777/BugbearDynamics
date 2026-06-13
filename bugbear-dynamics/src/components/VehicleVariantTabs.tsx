"use client";

import { useState } from "react";
import type { VehicleVariant } from "@/src/data/vehicles";

type VehicleVariantTabsProps = {
  variants: VehicleVariant[];
};

export default function VehicleVariantTabs({ variants }: VehicleVariantTabsProps) {
  const [activeVariantId, setActiveVariantId] = useState(variants[0]?.id ?? "");

  const activeVariant =
    variants.find((variant) => variant.id === activeVariantId) ?? variants[0];

  if (!activeVariant) {
    return null;
  }

  return (
    <div className="variant-tabs">
      <div className="variant-tab-list" role="tablist" aria-label="Vehicle variants">
        {variants.map((variant) => (
          <button
            key={variant.id}
            type="button"
            className={
              variant.id === activeVariant.id
                ? "variant-tab active"
                : "variant-tab"
            }
            onClick={() => setActiveVariantId(variant.id)}
          >
            {variant.name}
          </button>
        ))}
      </div>

      <article className="variant-panel">
        <p className="vehicle-type">{activeVariant.role}</p>
        <h2>{activeVariant.name}</h2>
        <p>{activeVariant.description}</p>

        <dl className="vehicle-stats detail-stats">
          <div>
            <dt>Power Cores</dt>
            <dd>{activeVariant.powerCores}</dd>
          </div>
          <div>
            <dt>Weapons</dt>
            <dd>{activeVariant.weapons}</dd>
          </div>
          <div>
            <dt>Armor</dt>
            <dd>{activeVariant.armor}</dd>
          </div>
          <div>
            <dt>Crew</dt>
            <dd>{activeVariant.crew}</dd>
          </div>
          <div>
            <dt>Speed</dt>
            <dd>{activeVariant.speed}</dd>
          </div>
          <div>
            <dt>Weight</dt>
            <dd>{activeVariant.weight}</dd>
          </div>
        </dl>
      </article>
    </div>
  );
}