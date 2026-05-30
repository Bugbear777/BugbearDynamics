export type Vehicle = {
  id: string;
  name: string;
  role: string;
  type: string;
  crew: string;
  speed: string;
  weight: string;
  description: string;
};

export const vehicles: Vehicle[] = [
  {
    id: "ltv-1-antlion",
    name: "LTV-1 Antlion",
    role: "Rapid Terrain Crawler",
    type: "Light Tactical Vehicle",
    crew: "2",
    speed: "Approx. 134 mph",
    weight: "453.9 kg",
    description:
      "A fast and agile terrain crawler designed for scouting, pursuit, and rough terrain movement.",
  },
  {
    id: "ltv-2-scarab",
    name: "LTV-2 Scarab",
    role: "General-Purpose LTV",
    type: "Light Tactical Vehicle",
    crew: "6",
    speed: "Approx. 132 mph",
    weight: "668.6 kg",
    description:
      "A durable multipurpose vehicle with strong armor, modular weapon support, and crew transport capability.",
  },
  {
    id: "ltv-3-water-strider",
    name: "LTV-3 Water Strider",
    role: "Amphibious LTV",
    type: "Amphibious Light Tactical Vehicle",
    crew: "TBD",
    speed: "Approx. 100 mph land / 50 mph water",
    weight: "371 kg",
    description:
      "An amphibious platform designed for land-to-water operations, shoreline movement, and patrol missions.",
  },
  {
    id: "ltv-4-cicada",
    name: "LTV-4 Cicada",
    role: "Mobile Command Post",
    type: "Command LTV",
    crew: "TBD",
    speed: "TBD",
    weight: "607.1 kg",
    description:
      "A mobile command vehicle intended to support coordination, communications, and battlefield control.",
  },
];