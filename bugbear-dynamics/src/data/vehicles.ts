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
      "A fast and agile terrain crawler designed for scouting, pursuit, and rapid response across rough terrain.",
    variants: [
      {
        id: "ltv-1-base",
        name: "Base Frame",
        role: "Rapid Terrain Crawler",
        powerCores: "18",
        weapons: "Mission dependent",
        armor: "Light",
        crew: "4",
        speed: "Approx. 134 mph",
        weight: "453.9 kg",
        description:
          "The base Antlion frame prioritizes speed, agility, and terrain control. It is designed to move quickly through rough environments while carrying a small crew.",
      },
      {
        id: "ltv-1a-scout",
        name: "LTV-1A Scout",
        role: "Forward Reconnaissance Variant",
        powerCores: "18+",
        weapons: "Light defensive weapons",
        armor: "Light",
        crew: "2-4",
        speed: "Approx. 134 mph",
        weight: "Varies by equipment",
        description:
          "The Scout variant strips the Antlion down for observation and forward movement. It is best used to locate enemy positions, identify terrain hazards, and report back before heavier vehicles arrive.",
      },
      {
        id: "ltv-1b-raider",
        name: "LTV-1B Raider",
        role: "Hit-and-Run Variant",
        powerCores: "18+",
        weapons: "Light offensive loadout",
        armor: "Light to medium",
        crew: "4",
        speed: "Reduced depending on loadout",
        weight: "Varies by armor and weapons",
        description:
          "The Raider variant gives the Antlion a more aggressive purpose. It is intended for ambushes, harassment attacks, and fast disengagement rather than prolonged fighting.",
      },
    ],
  },
  {
    id: "ltv-2-scarab",
    name: "LTV-2 Scarab",
    role: "General All-Purpose LTV",
    type: "Light Tactical Vehicle",
    crew: "6",
    speed: "Approx. 132 mph",
    weight: "668.6 kg",
    description:
      "A durable all-purpose vehicle with strong armor, modular weapon support, and enough crew capacity to serve in several battlefield roles.",
    variants: [
      {
        id: "ltv-2-base",
        name: "Base Frame",
        role: "General-Purpose LTV",
        powerCores: "18",
        weapons: "Mission dependent",
        armor: "Heavy for an LTV",
        crew: "6",
        speed: "Approx. 132 mph",
        weight: "668.6 kg",
        description:
          "The base Scarab is the standard Bugbear Dynamics multipurpose LTV. It balances protection, speed, passenger capacity, and modularity.",
      },
      {
        id: "ltv-2a-assault",
        name: "LTV-2A Assault",
        role: "Direct Combat Variant",
        powerCores: "18+",
        weapons: "Primary offensive mount with optional secondary systems",
        armor: "Heavy",
        crew: "4-6",
        speed: "Reduced depending on weapon package",
        weight: "Varies by loadout",
        description:
          "The Assault variant is configured for direct combat. It sacrifices some flexibility for stronger offensive presence and battlefield durability.",
      },
      {
        id: "ltv-2b-transport",
        name: "LTV-2B Transport",
        role: "Protected Crew Transport Variant",
        powerCores: "18",
        weapons: "Defensive weaponry",
        armor: "Heavy",
        crew: "6",
        speed: "Approx. 132 mph",
        weight: "Varies by armor package",
        description:
          "The Transport variant emphasizes crew protection and movement. It is useful for moving personnel through dangerous areas while retaining defensive capability.",
      },
      {
        id: "ltv-2c-support",
        name: "LTV-2C Support",
        role: "Field Support Variant",
        powerCores: "18+",
        weapons: "Utility or defensive systems",
        armor: "Medium to heavy",
        crew: "4-6",
        speed: "Reduced depending on equipment",
        weight: "Varies by equipment",
        description:
          "The Support variant turns the Scarab into a flexible utility platform for escort duty, battlefield assistance, and mission-specific equipment packages.",
      },
    ],
  },
  {
    id: "ltv-3-water-strider",
    name: "LTV-3 Water Strider",
    role: "Amphibious LTV Craft",
    type: "Amphibious Light Tactical Vehicle",
    crew: "TBD",
    speed: "Approx. 100 mph land / 50 mph water",
    weight: "371 kg",
    description:
      "An amphibious vehicle designed for shoreline patrol, river crossings, and land-to-water tactical movement.",
    variants: [
      {
        id: "ltv-3-base",
        name: "Base Frame",
        role: "Amphibious LTV Craft",
        powerCores: "11",
        weapons: "Mission dependent",
        armor: "Light",
        crew: "TBD",
        speed: "Approx. 100 mph land / 50 mph water",
        weight: "371 kg",
        description:
          "The base Water Strider is designed to operate on both land and water. Its strength is flexible movement across rivers, lakes, marshes, and coastal zones.",
      },
      {
        id: "ltv-3a-patrol",
        name: "LTV-3A Patrol",
        role: "Shoreline Patrol Variant",
        powerCores: "11+",
        weapons: "Light defensive weapons",
        armor: "Light",
        crew: "TBD",
        speed: "Approx. 100 mph land / 50 mph water",
        weight: "Varies by patrol package",
        description:
          "The Patrol variant is intended for watching waterways, escorting river traffic, and guarding coastal approaches.",
      },
      {
        id: "ltv-3b-landing",
        name: "LTV-3B Landing",
        role: "Amphibious Insertion Variant",
        powerCores: "11+",
        weapons: "Light suppressive weapons",
        armor: "Light to medium",
        crew: "TBD",
        speed: "Reduced depending on load",
        weight: "Varies by cargo and armor",
        description:
          "The Landing variant supports troop or equipment insertion from water onto land. It is designed for fast approach, beaching, and withdrawal.",
      },
    ],
  },
  {
    id: "ltv-4-cicada",
    name: "LTV-4 Cicada",
    role: "Mobile Command Post",
    type: "Command Light Tactical Vehicle",
    crew: "Command crew",
    speed: "TBD",
    weight: "607.1 kg",
    description:
      "A mobile command vehicle designed to coordinate field operations, communications, and tactical decision-making.",
    variants: [
      {
        id: "ltv-4-base",
        name: "Base Frame",
        role: "Mobile Command Post",
        powerCores: "18",
        weapons: "Defensive only",
        armor: "Medium",
        crew: "Command crew",
        speed: "TBD",
        weight: "607.1 kg",
        description:
          "The base Cicada is built around communications and command operations rather than direct combat. It serves as a mobile coordination platform for field units.",
      },
      {
        id: "ltv-4a-command",
        name: "LTV-4A Command",
        role: "Battlefield Command Variant",
        powerCores: "18+",
        weapons: "Defensive weaponry",
        armor: "Medium",
        crew: "Command crew",
        speed: "TBD",
        weight: "Varies by communications package",
        description:
          "The Command variant expands the Cicada's battlefield control role with additional communications, planning, and coordination equipment.",
      },
      {
        id: "ltv-4b-relay",
        name: "LTV-4B Relay",
        role: "Communications Relay Variant",
        powerCores: "18+",
        weapons: "Minimal defensive weapons",
        armor: "Medium",
        crew: "Small technical crew",
        speed: "TBD",
        weight: "Varies by relay equipment",
        description:
          "The Relay variant acts as a signal extension platform, helping maintain communications between separated units or across difficult terrain.",
      },
    ],
  },
  {
    id: "ltv-5-moth",
    name: "LTV-5 Moth",
    role: "Stealth Recon",
    type: "Reconnaissance Light Tactical Vehicle",
    crew: "Carrier crew with drone support",
    speed: "TBD",
    weight: "TBD",
    description:
      "A stealth reconnaissance platform built around a compact scout drone and a carrier vehicle that remains behind cover.",
    variants: [
      {
        id: "ltv-5-base",
        name: "Base Frame",
        role: "Stealth Recon Platform",
        powerCores: "18 total system / 8 drone cores",
        weapons: "Minimal or none",
        armor: "Light",
        crew: "Carrier crew with drone support",
        speed: "TBD",
        weight: "TBD",
        description:
          "The base Moth system uses a small, maneuverable drone for scouting while the carrier vehicle stays farther from danger. The drone is fast and compact but not silent.",
      },
      {
        id: "ltv-5a-observer",
        name: "LTV-5A Observer",
        role: "Long-Range Recon Variant",
        powerCores: "18 total system / 8 drone cores",
        weapons: "None or light defensive weapons",
        armor: "Light",
        crew: "Recon crew",
        speed: "TBD",
        weight: "Varies by sensor package",
        description:
          "The Observer variant focuses on battlefield awareness. It is meant to identify enemy movements, scout terrain, and provide information without direct engagement.",
      },
      {
        id: "ltv-5b-spotter",
        name: "LTV-5B Spotter",
        role: "Target Marking Variant",
        powerCores: "18 total system / 8 drone cores",
        weapons: "Minimal",
        armor: "Light",
        crew: "Recon crew",
        speed: "TBD",
        weight: "Varies by equipment",
        description:
          "The Spotter variant supports artillery, aircraft, or heavier vehicles by locating and marking targets from a safer distance.",
      },
    ],
  },
  {
    id: "ltv-6-dung-beetle",
    name: "LTV-6 Dung Beetle",
    role: "Logistical Transport",
    type: "Logistics Light Tactical Vehicle",
    crew: "Transport crew",
    speed: "Approx. 80-100 mph depending on configuration",
    weight: "TBD",
    description:
      "A six-wheeled logistical vehicle designed to move supplies, equipment, and mission cargo across difficult terrain.",
    variants: [
      {
        id: "ltv-6-base",
        name: "Base Frame",
        role: "Logistical Transport",
        powerCores: "TBD",
        weapons: "None or light defensive weapons",
        armor: "Light to medium",
        crew: "Transport crew",
        speed: "Approx. 80-100 mph depending on configuration",
        weight: "TBD",
        description:
          "The base Dung Beetle is a practical transport frame. It is designed around cargo movement rather than combat.",
      },
      {
        id: "ltv-6a-cargo",
        name: "LTV-6A Cargo",
        role: "Supply Transport Variant",
        powerCores: "TBD",
        weapons: "None or light defensive weapons",
        armor: "Light",
        crew: "Transport crew",
        speed: "Approx. 80-100 mph depending on cargo load",
        weight: "Varies by cargo",
        description:
          "The Cargo variant is optimized for carrying supplies, ammunition, repair materials, and other logistical resources.",
      },
      {
        id: "ltv-6b-recovery",
        name: "LTV-6B Recovery",
        role: "Vehicle Recovery Variant",
        powerCores: "TBD",
        weapons: "Light defensive weapons",
        armor: "Medium",
        crew: "Recovery crew",
        speed: "Reduced depending on equipment",
        weight: "Varies by recovery package",
        description:
          "The Recovery variant assists damaged or disabled vehicles. It can support field retrieval, towing, and emergency repair operations.",
      },
    ],
  },
  {
    id: "ltv-7-dragonfly",
    name: "LTV-7 Dragonfly",
    role: "AA LTV",
    type: "Anti-Air Light Tactical Vehicle",
    crew: "AA crew",
    speed: "TBD",
    weight: "TBD",
    description:
      "An anti-air platform designed to protect ground units from aircraft, drones, and fast-moving aerial threats.",
    variants: [
      {
        id: "ltv-7-base",
        name: "Base Frame",
        role: "Anti-Air LTV",
        powerCores: "18 before weapons",
        weapons: "Mission dependent anti-air package",
        armor: "Medium",
        crew: "AA crew",
        speed: "TBD",
        weight: "TBD",
        description:
          "The base Dragonfly provides the frame for mobile anti-air defense. It is intended to follow ground formations and protect them from aerial threats.",
      },
      {
        id: "ltv-7a-flak",
        name: "LTV-7A Flak",
        role: "Flak Defense Variant",
        powerCores: "22 total",
        weapons: "Four flak cannons on a 360-degree swivel",
        armor: "Medium",
        crew: "AA crew",
        speed: "Reduced depending on turret package",
        weight: "Varies by weapon package",
        description:
          "The Flak variant uses four small flak cannons to engage aircraft and drones. It is best against targets that enter its engagement zone and remain vulnerable to sustained fire.",
      },
      {
        id: "ltv-7b-interceptor",
        name: "LTV-7B Interceptor",
        role: "Rocket Anti-Air Variant",
        powerCores: "Approx. 24 total depending on final package",
        weapons: "Four flak cannons and two vertical anti-air rockets",
        armor: "Medium",
        crew: "AA crew",
        speed: "Reduced depending on rocket package",
        weight: "Varies by weapon package",
        description:
          "The Interceptor variant combines flak weapons with vertical rockets. The rockets provide high damage and auto-aim capability, but they are less reliable against very fast aircraft.",
      },
    ],
  },
  {
    id: "ltv-8-termite",
    name: "LTV-8 Termite",
    role: "Lightweight Engineer LTV",
    type: "Engineer Light Tactical Vehicle",
    crew: "Engineer crew",
    speed: "TBD",
    weight: "TBD",
    description:
      "A lightweight engineer vehicle designed for clearing hazards, recovering vehicles, and creating temporary battlefield cover.",
    variants: [
      {
        id: "ltv-8-base",
        name: "Base Frame",
        role: "Lightweight Engineer LTV",
        powerCores: "TBD",
        weapons: "Engineer equipment",
        armor: "Light",
        crew: "Engineer crew",
        speed: "TBD",
        weight: "TBD",
        description:
          "The base Termite provides a compact engineering platform for battlefield utility tasks rather than direct combat.",
      },
      {
        id: "ltv-8a-breacher",
        name: "LTV-8A Breacher",
        role: "Mine and Obstacle Clearing Variant",
        powerCores: "Base power plus 1 equipment core",
        weapons: "Snowball dispenser mine-clearing system",
        armor: "Light",
        crew: "Engineer crew",
        speed: "TBD",
        weight: "Varies by equipment",
        description:
          "The Breacher variant uses a dispenser system to trigger or clear mines and other hazards ahead of friendly movement.",
      },
      {
        id: "ltv-8b-recovery",
        name: "LTV-8B Recovery",
        role: "Light Recovery Variant",
        powerCores: "Base power plus 1 equipment core",
        weapons: "Tractor beam recovery system",
        armor: "Light",
        crew: "Engineer crew",
        speed: "TBD",
        weight: "Varies by recovery package",
        description:
          "The Recovery variant helps reposition, retrieve, or stabilize damaged vehicles and equipment in the field.",
      },
      {
        id: "ltv-8c-cover",
        name: "LTV-8C Cover Builder",
        role: "Field Fortification Variant",
        powerCores: "Base power plus 2 equipment cores",
        weapons: "Concrete dispenser system",
        armor: "Light",
        crew: "Engineer crew",
        speed: "TBD",
        weight: "Varies by concrete system",
        description:
          "The Cover Builder variant deploys temporary concrete barriers to create cover, block movement, or strengthen a defensive position.",
      },
    ],
  },
];