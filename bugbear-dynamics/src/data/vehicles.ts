export type VehicleVariant = {
  id: string;
  name: string;
  role: string;
  powerCores: string;
  weapons: string;
  armor: string;
  crew: string;
  speed: string;
  weight: string;
  description: string;
};

export type Vehicle = {
  id: string;
  name: string;
  role: string;
  type: string;
  crew: string;
  speed: string;
  weight: string;
  description: string;
  variants: VehicleVariant[];
};

export const vehicles: Vehicle[] = [
  {
    id: "ltv-1-antlion",
    name: "LTV-1 Antlion",
    role: "Rapid Terrain Crawler",
    type: "Light Tactical Vehicle",
    crew: "4",
    speed: "Approx. 134 mph",
    weight: "453.9 kg",
    description:
      "A fast and agile terrain crawler designed for scouting, pursuit, and rough terrain movement.",
    variants: [
      {
        id: "base",
        name: "Base Frame",
        role: "Rapid Terrain Crawler",
        powerCores: "18",
        weapons: "Mission dependent",
        armor: "Light",
        crew: "4",
        speed: "Approx. 134 mph",
        weight: "453.9 kg",
        description:
          "The base Antlion frame emphasizes speed, agility, and terrain control. It is best suited for reconnaissance, pursuit, and rapid response missions.",
      },
      {
        id: "ltv-1a-scout",
        name: "LTV-1A Scout",
        role: "Reconnaissance Variant",
        powerCores: "18+",
        weapons: "Light defensive weaponry",
        armor: "Light",
        crew: "2–4",
        speed: "Approx. 134 mph",
        weight: "Varies by equipment",
        description:
          "A scout-focused Antlion variant that prioritizes speed, visibility, and forward observation over heavy weapons.",
      },
      {
        id: "ltv-1b-raider",
        name: "LTV-1B Raider",
        role: "Hit-and-Run Variant",
        powerCores: "18+",
        weapons: "Light offensive loadout",
        armor: "Light to medium",
        crew: "4",
        speed: "Varies by loadout",
        weight: "Varies by armor package",
        description:
          "A more aggressive Antlion configuration intended for quick strikes, ambushes, and rapid disengagement.",
      },
    ],
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
    variants: [
      {
        id: "base",
        name: "Base Frame",
        role: "General-Purpose LTV",
        powerCores: "18",
        weapons: "Mission dependent",
        armor: "Heavy for an LTV",
        crew: "6",
        speed: "Approx. 132 mph",
        weight: "668.6 kg",
        description:
          "The base Scarab frame is the standard multipurpose Bugbear Dynamics vehicle, balancing armor, speed, crew capacity, and modular weapon options.",
      },
      {
        id: "ltv-2a-assault",
        name: "LTV-2A Assault",
        role: "Direct Combat Variant",
        powerCores: "18+",
        weapons: "Primary offensive mount",
        armor: "Heavy",
        crew: "4–6",
        speed: "Reduced depending on weapons",
        weight: "Varies by loadout",
        description:
          "An assault-oriented Scarab variant equipped for direct combat and heavier battlefield presence.",
      },
      {
        id: "ltv-2b-transport",
        name: "LTV-2B Transport",
        role: "Troop Transport Variant",
        powerCores: "18",
        weapons: "Defensive weaponry",
        armor: "Heavy",
        crew: "6",
        speed: "Approx. 132 mph",
        weight: "Varies by armor package",
        description:
          "A transport-focused Scarab variant that emphasizes crew protection and battlefield movement.",
      },
    ],
  },
];