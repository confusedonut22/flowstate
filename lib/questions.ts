export type Question = {
  id: number;
  topic: string;
  question: string;
  choices?: string[];
  answer: string;
};

export const TOPICS = [
  "Motor Starting",
  "Solid-State Devices & Motor Control",
  "Motor Overload Protection",
  "Solid-State Relays",
  "Class I Hazardous Locations",
  "Transformer Protection",
  "Motor Disconnect Sizing",
  "Motor Control Centers",
  "Motor Branch Circuits",
  "Class II Hazardous Locations",
  "DC Motors & Generators",
  "Class III & Intrinsically Safe Systems",
  "Photoelectric & Proximity Sensors",
  "ESD & General",
  "Lighting Sources & Lighting Systems",
  "Programmable Logic Controllers",
  "Grounding & Bonding for Communications",
  "Understanding Analog Signals",
  "Special Occupancies & Conditions",
  "Grounding at Separate Buildings",
] as const;

export const questions: Question[] = [
  // ─── Motor Starting ───────────────────────────────────────────────────────
  {
    id: 1,
    topic: "Motor Starting",
    question:
      "Motors that are started at reduced voltage must be switched to line voltage in order to reach ______.",
    choices: ["full speed", "full torque", "locked-rotor", "overload"],
    answer: "full speed",
  },
  {
    id: 2,
    topic: "Motor Starting",
    question:
      "Starting large horsepower motors can result in significant ______ on the distribution system that can damage other electrical equipment.",
    choices: [
      "leading power factor",
      "voltage drops",
      "voltage spikes",
      "voltage swells",
    ],
    answer: "voltage drops",
  },
  {
    id: 3,
    topic: "Motor Starting",
    question:
      "In a(n) ______ transition, the motor is temporarily disconnected from the voltage source as it is switched from reduced-voltage starting to full-voltage running.",
    choices: [
      "accelerated",
      "closed circuit",
      "full voltage",
      "open circuit",
    ],
    answer: "open circuit",
  },
  {
    id: 4,
    topic: "Motor Starting",
    question:
      "When calculating the voltage in the coil for a wye-connected circuit, the voltage equals the line voltage divided by ______.",
    choices: ["0.37", "0.58", "1.73", "3.00"],
    answer: "1.73",
  },

  // ─── Solid-State Devices & Motor Control ─────────────────────────────────
  {
    id: 5,
    topic: "Solid-State Devices & Motor Control",
    question:
      "Which function of the microprocessor in a smart control device provides a valuable tool for troubleshooting?",
    choices: [
      "Communications",
      "Configuration",
      "Monitoring of variables",
      "Self-diagnosis",
    ],
    answer: "Self-diagnosis",
  },
  {
    id: 6,
    topic: "Solid-State Devices & Motor Control",
    question:
      "A device used to minimize the effects of field device power on the controller or motor drive system power is called a(n) ______.",
    choices: [
      "DC sinking module",
      "Opto-isolator",
      "Schmidt trigger",
      "Signal converter",
    ],
    answer: "Opto-isolator",
  },
  {
    id: 7,
    topic: "Solid-State Devices & Motor Control",
    question:
      "The ESD warning symbol on control device packaging indicates: ______.",
    choices: [
      "CAUTION – ESD Sensitive Components",
      "CAUTION – Hot Surface",
      "CAUTION – Moving Machinery",
      "CAUTION – Small Parts Enclosed",
    ],
    answer: "CAUTION – ESD Sensitive Components",
  },
  {
    id: 8,
    topic: "Solid-State Devices & Motor Control",
    question:
      "Determine the maximum overload protection (overload relays, starting current NOT a problem) for a 40 hp, 208 V, 3-phase squirrel-cage motor — nameplate FLC 112 A, SF 1.15.",
    choices: ["145 amps", "140 amps", "130 amps", "125 amps"],
    answer: "140 amps",
  },

  // ─── Motor Overload Protection ────────────────────────────────────────────
  {
    id: 9,
    topic: "Motor Overload Protection",
    question:
      "To calculate the proper size of a separate motor overload protection device for a continuous-duty motor, the ______ current of the motor is used.",
    choices: ["nameplate", "overload", "short-circuit", "table value"],
    answer: "nameplate",
  },
  {
    id: 10,
    topic: "Motor Overload Protection",
    question:
      "It is the intent of the NEC that overload protection protect a motor from damaging ______ current.",
    choices: [
      "ground-fault",
      "phase to phase",
      "phase to ground",
      "overload",
    ],
    answer: "overload",
  },
  {
    id: 11,
    topic: "Motor Overload Protection",
    question:
      "Maximum overload protection (starting current IS a problem) for a 25 hp, 240 V, 3-phase squirrel-cage motor — nameplate FLC 65 A, SF 1.05.",
    choices: ["75 amps", "81.25 amps", "84.5 amps", "91 amps"],
    answer: "84.5 amps",
  },

  // ─── Solid-State Relays ───────────────────────────────────────────────────
  {
    id: 12,
    topic: "Solid-State Relays",
    question: "A non-programmable solid-state relay has ______.",
    choices: [
      "a coil",
      "bellows",
      "double break contacts",
      "no moving parts",
    ],
    answer: "no moving parts",
  },
  {
    id: 13,
    topic: "Solid-State Relays",
    question:
      "Which is NOT a common switching method for solid-state relays?",
    choices: ["Instant on", "Peak", "Slim line", "Zero switching"],
    answer: "Slim line",
  },
  {
    id: 14,
    topic: "Solid-State Relays",
    question: "Which is an advantage of a solid-state relay over an electromechanical relay?",
    choices: [
      "Low initial cost",
      "No leakage current through open contacts",
      "Resistant to voltage spikes",
      "Very fast switching capability",
    ],
    answer: "Very fast switching capability",
  },

  // ─── Class I Hazardous Locations ──────────────────────────────────────────
  {
    id: 15,
    topic: "Class I Hazardous Locations",
    question:
      "Which wiring method is NOT permitted in a Class I, Division 1 location?",
    choices: [
      "MC cable",
      "Non-metallic sheathed cable",
      "PVC",
      "Rigid metal conduit",
    ],
    answer: "Non-metallic sheathed cable",
  },
  {
    id: 16,
    topic: "Class I Hazardous Locations",
    question:
      "Which NEC requirements apply to electrical wiring and equipment in hazardous locations?",
    choices: [
      "Chapters 1–4",
      "Chapter 5",
      "Chapters 5–8",
      "All other articles of the NEC as modified by specific rules in Articles 500–504",
    ],
    answer:
      "All other articles of the NEC as modified by specific rules in Articles 500–504",
  },
  {
    id: 17,
    topic: "Class I Hazardous Locations",
    question: "Explosion-proof equipment is designed to ______.",
    choices: [
      "Withstand an explosion outside the enclosure without sustaining extensive damage",
      "Contain an explosion inside the enclosure and extinguish the flames",
      "Operate in all environments, including water",
      "Prevent gases from entering and prevent explosions inside",
    ],
    answer:
      "Contain an explosion inside the enclosure and extinguish the flames",
  },
  {
    id: 18,
    topic: "Class I Hazardous Locations",
    question:
      "For a transformer ≤1,000 V with a secondary current of 3 A, the secondary OCPD may be sized up to ______ of transformer-rated current when both primary and secondary protection is provided.",
    choices: ["125%", "300%", "250%", "167%"],
    answer: "167%",
  },

  // ─── Transformer Protection ───────────────────────────────────────────────
  {
    id: 19,
    topic: "Transformer Protection",
    question:
      "For transformers ≤1,000 V with coordinated thermal overload protection, primary OCPD can be set at ______ rated current (impedance ≤6%).",
    choices: ["4 times", "6 times", "125% of", "250% of"],
    answer: "6 times",
  },
  {
    id: 20,
    topic: "Transformer Protection",
    question:
      "Maximum primary fuses for a 250 kVA, 3-phase, 13.2 kV–480/277 V transformer (impedance 3.25%) in an unsupervised location.",
    choices: ["30 amperes", "35 amperes", "80 amperes", "200 amperes"],
    answer: "35 amperes",
  },
  {
    id: 21,
    topic: "Transformer Protection",
    question:
      "Maximum primary circuit breaker for a 250 kVA, 3-phase, 13.2 kV–480/277 V transformer (impedance 7.25%) in an unsupervised location.",
    choices: ["30 amperes", "40 amperes", "45 amperes", "70 amperes"],
    answer: "45 amperes",
  },

  // ─── Motor Disconnect Sizing ──────────────────────────────────────────────
  {
    id: 22,
    topic: "Motor Disconnect Sizing",
    question:
      "Maximum locked-rotor current (LRC) of a 7½ hp, 460 V, 3-phase motor with Code Letter M.",
    choices: ["105 amps", "112 amps", "116 amps", "125 amps"],
    answer: "105 amps",
  },
  {
    id: 23,
    topic: "Motor Disconnect Sizing",
    question:
      "Minimum ampacity of the motor disconnecting means for a 30 hp, 208 V, 3-phase squirrel-cage motor.",
    choices: ["80.0 amps", "88.0 amps", "92.0 amps", "101.2 amps"],
    answer: "101.2 amps",
  },
  {
    id: 24,
    topic: "Motor Disconnect Sizing",
    question:
      "The disconnecting means for motor circuits rated ≤1,000 V shall have an ampere rating of at least ______ of the motor full-load current.",
    choices: ["110%", "115%", "125%", "150%"],
    answer: "115%",
  },
  {
    id: 25,
    topic: "Motor Disconnect Sizing",
    question:
      "When installing, operating, or maintaining a MCC, an electrician uses the ______ manuals.",
    choices: ["office", "oldest", "contractor's", "manufacturer's"],
    answer: "manufacturer's",
  },

  // ─── Motor Control Centers ────────────────────────────────────────────────
  {
    id: 26,
    topic: "Motor Control Centers",
    question:
      "With the MCC unit door open and the operating handle in the ON position, interlocks ______ removal of the unit.",
    choices: ["slow", "prevent", "allow", "All of the above"],
    answer: "prevent",
  },
  {
    id: 27,
    topic: "Motor Control Centers",
    question: "MCC bus bar is usually made of ______.",
    choices: ["copper", "steel", "brass", "aluminum"],
    answer: "copper",
  },
  {
    id: 28,
    topic: "Motor Control Centers",
    question: "MCC classes are ______ and ______.",
    choices: ["2, 4", "1, 4", "5, 6", "1, 2"],
    answer: "1, 2",
  },
  {
    id: 29,
    topic: "Motor Control Centers",
    question:
      "The MCC term ______ (sometimes called a bucket) refers to a control or plug-in assembly.",
    choices: ["breaker", "unit", "fuse", "None of the above"],
    answer: "unit",
  },

  // ─── Motor Branch Circuits ────────────────────────────────────────────────
  {
    id: 30,
    topic: "Motor Branch Circuits",
    question:
      "Full-load current for a 3-phase, 7½ hp induction-type squirrel-cage motor at 208 V.",
    choices: ["24.2 A", "22.0 A", "25.3 A", "30.2 A"],
    answer: "24.2 A",
  },
  {
    id: 31,
    topic: "Motor Branch Circuits",
    question:
      "Smallest copper THW conductor for one 25 hp, 480 V, 3-phase motor-compressor (rated load 42 A, branch-circuit selection current 45 A, starting not a problem).",
    choices: ["2 AWG", "4 AWG", "6 AWG", "8 AWG"],
    answer: "6 AWG",
  },
  {
    id: 32,
    topic: "Motor Branch Circuits",
    question:
      "The motor nameplate ______ rating is used to provide separate motor overload protection.",
    choices: [
      "branch circuit short circuit",
      "short-circuit",
      "full-load current",
      "voltage",
    ],
    answer: "full-load current",
  },
  {
    id: 33,
    topic: "Motor Branch Circuits",
    question:
      "Conductors supplying a single motor in a continuous-duty application shall have an ampacity of not less than ______ of the motor full-load current rating.",
    choices: ["125%", "62.5%", "72%", "50%"],
    answer: "125%",
  },

  // ─── Class II Hazardous Locations ─────────────────────────────────────────
  {
    id: 34,
    topic: "Class II Hazardous Locations",
    question:
      "Dry-type transformers in Class II, Division 2 locations shall have winding/terminal connections in tight metal housings and operate at not over ______ nominal.",
    choices: ["250 volts", "300 volts", "600 volts", "1,000 volts"],
    answer: "600 volts",
  },
  {
    id: 35,
    topic: "Class II Hazardous Locations",
    question:
      "The temperature marking for Class II locations shall be less than the ______ of the specific dust encountered.",
    choices: [
      "auto-ignition temperature",
      "flash-point",
      "ignition temperature",
      "none of the above",
    ],
    answer: "ignition temperature",
  },
  {
    id: 36,
    topic: "Class II Hazardous Locations",
    question:
      "Flexible cord ______ is permitted in Class II, Division 1 locations when terminated with listed dust-tight cord connectors.",
    choices: [
      "listed as dusttight",
      "listed for extra-hard usage",
      "listed for hard usage",
      "None of the above",
    ],
    answer: "listed for extra-hard usage",
  },

  // ─── DC Motors & Generators ───────────────────────────────────────────────
  {
    id: 37,
    topic: "DC Motors & Generators",
    question:
      "The interpoles added between main poles of a DC motor are connected in series with the ______ windings.",
    choices: ["armature", "field", "shunt", "stabilizing field"],
    answer: "armature",
  },
  {
    id: 38,
    topic: "DC Motors & Generators",
    question:
      "DC ______ motors are used mostly for applications requiring constant speed under load and high starting torque.",
    choices: ["capacitor", "compound", "series", "shunt"],
    answer: "compound",
  },
  {
    id: 39,
    topic: "DC Motors & Generators",
    question:
      "A DC ______ operates on the principle that voltage is induced in a coil when the coil is rotated in a magnetic field.",
    choices: ["alternator", "commutator", "motor", "generator"],
    answer: "generator",
  },
  {
    id: 40,
    topic: "DC Motors & Generators",
    question:
      "A ______ motor is a DC motor that has field wiring connected in both series and parallel with the armature.",
    choices: ["capacitor", "compound", "series", "shunt"],
    answer: "compound",
  },
  {
    id: 41,
    topic: "DC Motors & Generators",
    question: "______ DC motors have the highest starting torque.",
    choices: ["Compound", "Series", "Shunt", "Split-Phase"],
    answer: "Series",
  },

  // ─── Class III & Intrinsically Safe Systems ───────────────────────────────
  {
    id: 42,
    topic: "Class III & Intrinsically Safe Systems",
    question:
      "Separate nonincendive field wiring circuits in Class III, Division 1 locations shall be installed in which of the following?",
    choices: [
      "I and II",
      "I, II, and III",
      "I and III",
      "II and III",
    ],
    answer: "I and III",
  },
  {
    id: 43,
    topic: "Class III & Intrinsically Safe Systems",
    question:
      "Intrinsically safe circuit conductors may share raceways with non-intrinsically safe circuits when all non-IS conductors are in ______ metal-sheathed or metal-clad cables capable of carrying fault current to ground.",
    choices: ["approved", "grounded", "listed", "suitable"],
    answer: "grounded",
  },

  // ─── Motor Overload Calculations ──────────────────────────────────────────
  {
    id: 44,
    topic: "Motor Overload Protection",
    question:
      "Minimum overload protection (starting current NOT a problem) for a 40 hp, 208 V, 3-phase squirrel-cage motor — nameplate FLC 82 A, SF 1.15.",
    choices: ["75 A", "84.5 A", "94.3 A", "102.5 A"],
    answer: "84.5 A",
  },
  {
    id: 45,
    topic: "Motor Overload Protection",
    question:
      "Maximum overload protection (starting current IS a problem) for a 25 hp, 240 V, 3-phase motor — 63 A, SF 1.05.",
    choices: ["72.45 A", "78.75 A", "81.9 A", "140 A"],
    answer: "140 A",
  },
  {
    id: 46,
    topic: "Motor Overload Protection",
    question:
      "Maximum overload protection for a 5 hp, 240 V, single-phase motor — SF 1.15, nameplate FLC 31.5 A.",
    choices: ["31.5 A", "36.225 A", "39.375 A", "40.95 A"],
    answer: "39.375 A",
  },

  // ─── Motor Disconnect Calculations ───────────────────────────────────────
  {
    id: 47,
    topic: "Motor Disconnect Sizing",
    question:
      "Minimum current rating of the motor disconnecting means for a 7.5 hp, 230 V, single-phase motor.",
    choices: ["40 A", "44 A", "46 A", "50 A"],
    answer: "46 A",
  },
  {
    id: 48,
    topic: "Motor Disconnect Sizing",
    question:
      "Minimum hp motor circuit switch rating for a 30 hp, 460 V, 3-phase Design B motor (Code Letter G) using the maximum locked-rotor rating.",
    choices: ["25 hp", "30 hp", "40 hp", "50 hp"],
    answer: "40 hp",
  },

  // ─── Motor Branch Circuit Conductors ──────────────────────────────────────
  {
    id: 49,
    topic: "Motor Branch Circuits",
    question:
      "Minimum ampacity and copper THW conductor size for a 3-phase, 100 hp, 460 V squirrel-cage induction motor.",
    choices: ["124 A / 1/0 AWG", "155 A / 1/0 AWG", "155 A / 2/0 AWG", "175 A / 3/0 AWG"],
    answer: "155 A / 2/0 AWG",
  },

  // ─── Photoelectric & Proximity Sensors ───────────────────────────────────
  {
    id: 50,
    topic: "Photoelectric & Proximity Sensors",
    question:
      "A photoelectric sensor output setting that triggers when the receiver receives sufficient light from the light source is called ______.",
    choices: ["beam operate", "dark operate", "direct operate", "light operate"],
    answer: "light operate",
  },
  {
    id: 51,
    topic: "Photoelectric & Proximity Sensors",
    question:
      "A photoelectric sensor output that changes state when light levels on the receiver drop is called ______.",
    choices: ["beam interrupt", "dark operate", "light operate", "proximity mode"],
    answer: "dark operate",
  },
  {
    id: 52,
    topic: "Photoelectric & Proximity Sensors",
    question:
      "Which is NOT one of the four parameters commonly used to describe photoelectric device operation?",
    choices: ["output type", "response", "sensing mode", "sensing range"],
    answer: "response",
  },
  {
    id: 53,
    topic: "Photoelectric & Proximity Sensors",
    question:
      "Which photoelectric scanning method is more reliable for long-range sensing?",
    choices: ["diffuse scan", "direct scan", "proximity scan", "retroreflective scan"],
    answer: "direct scan",
  },
  {
    id: 54,
    topic: "Photoelectric & Proximity Sensors",
    question:
      "Which photoelectric scanning method should NOT be used when the product surface is shiny or reflective?",
    choices: ["diffuse scan", "direct scan", "retroreflective scan", "ultrasonic scan"],
    answer: "retroreflective scan",
  },
  {
    id: 55,
    topic: "Photoelectric & Proximity Sensors",
    question:
      "Proximity sensors are solid-state devices that can be capacitive, inductive, or ______.",
    choices: ["magnetic", "optical", "thermal", "ultrasonic"],
    answer: "ultrasonic",
  },
  {
    id: 56,
    topic: "Photoelectric & Proximity Sensors",
    question:
      "Which method is most commonly used to provide electrical isolation between the input and output sections of a solid-state relay?",
    choices: ["capacitive coupling", "galvanic separation", "magnetic isolation", "optical coupling"],
    answer: "optical coupling",
  },

  // ─── Class II Hazardous Locations (additional) ────────────────────────────
  {
    id: 57,
    topic: "Class II Hazardous Locations",
    question:
      "Each luminaire in a Class II, Division 1 location shall be ______ and clearly marked for the maximum lamp wattage.",
    choices: [
      "dusttight and hermetically sealed",
      "explosion-proof rated",
      "identified for the location and clearly marked",
      "listed for Class II use only",
    ],
    answer: "identified for the location and clearly marked",
  },
  {
    id: 58,
    topic: "Class II Hazardous Locations",
    question:
      "In Class II, Division 2 locations, motor-generator maximum full-load external temperature shall comply with ______ for normal operation in free air.",
    choices: ["500.8(B)(1)", "500.8(C)(2)", "502.6(A)", "502.10(A)(1)"],
    answer: "500.8(C)(2)",
  },
  {
    id: 59,
    topic: "Class II Hazardous Locations",
    question:
      "Boxes and fittings in Class II, Division 1 locations shall have threaded bosses for conduit/cable terminations and shall be ______.",
    choices: ["dusttight", "explosion-proof", "hermetically sealed", "weatherproof"],
    answer: "dusttight",
  },
  {
    id: 60,
    topic: "Class II Hazardous Locations",
    question: "Which wiring method is NOT permitted in Class II, Division 1 locations?",
    choices: [
      "intermediate metal conduit",
      "MI cable",
      "non-metallic sheathed cable",
      "rigid metal conduit",
    ],
    answer: "non-metallic sheathed cable",
  },

  // ─── Class I Hazardous Locations (additional) ────────────────────────────
  {
    id: 61,
    topic: "Class I Hazardous Locations",
    question:
      "Type PLTC or PLTC-ER cable used for Class 2 and Class 3 circuits including cable tray systems are permitted in ______ locations.",
    choices: ["Class I, Division 1", "Class I, Division 2", "Class II, Division 2", "Class III, Division 1"],
    answer: "Class I, Division 2",
  },
  {
    id: 62,
    topic: "Class I Hazardous Locations",
    question:
      "A sealing fitting in conduit runs leaving a Class I, Division 2 location shall be permitted to be installed ______.",
    choices: [
      "on either side of the boundary within 10 ft",
      "on the safe side only within 10 ft",
      "within 18 inches of the enclosure on either side",
      "within 18 inches on the hazardous side only",
    ],
    answer: "on either side of the boundary within 10 ft",
  },

  // ─── Class III & ESD ──────────────────────────────────────────────────────
  {
    id: 63,
    topic: "Class III & Intrinsically Safe Systems",
    question:
      "Type PVC, RTRC, and HDPE conduit encased in concrete shall have a minimum envelope thickness of ______ and ≥24 in. of cover.",
    choices: ["1 inch", "2 inches", "3 inches", "4 inches"],
    answer: "2 inches",
  },
  {
    id: 64,
    topic: "Class III & Intrinsically Safe Systems",
    question:
      "In Class III locations, ______ shall be of the grounding type, designed to minimize accumulation/entry of fibers, and shall prevent escape of sparks or molten particles.",
    choices: [
      "luminaires and fixtures",
      "motors and generators",
      "receptacles and attachment plugs",
      "switches and circuit breakers",
    ],
    answer: "receptacles and attachment plugs",
  },
  {
    id: 65,
    topic: "ESD & General",
    question: "An electrostatic discharge (ESD) event is the rapid flow of electrons between two bodies of ______.",
    choices: ["equal potential", "opposite polarity", "static resistance", "unequal charge"],
    answer: "unequal charge",
  },

  // ─── Lighting Sources & Lighting Systems ──────────────────────────────────
  {
    id: 66,
    topic: "Lighting Sources & Lighting Systems",
    question: "Which type of lighting control system uses microprocessor-based sensors and controls rather than a microprocessor-based control panel?",
    choices: ["Automatic lighting control systems", "Centralized lighting control system", "Digital lighting control system", "Distributed lighting control system"],
    answer: "Distributed lighting control system",
  },
  {
    id: 67,
    topic: "Lighting Sources & Lighting Systems",
    question: "Which of the following technologies is NOT used by occupancy sensors to detect the presence of people in a space?",
    choices: ["Microwave", "Passive infrared", "Ultrasonic", "Ultraviolet"],
    answer: "Ultraviolet",
  },
  {
    id: 68,
    topic: "Lighting Sources & Lighting Systems",
    question: "A phototransistor is used to sense the presence of ______.",
    choices: ["heat", "light", "persons", "temperature"],
    answer: "light",
  },
  {
    id: 69,
    topic: "Lighting Sources & Lighting Systems",
    question: "A lighting control scheme that switches or dims groups of lamps together to a mixture of predetermined levels is called ______.",
    choices: ["house lighting", "scene lighting", "stage lighting", "theatre lighting"],
    answer: "scene lighting",
  },
  {
    id: 70,
    topic: "Lighting Sources & Lighting Systems",
    question: "Which type of lamp has the longest rated life span?",
    choices: ["Fluorescent", "Halogen", "High-pressure sodium", "Light emitting diode (LED)"],
    answer: "Light emitting diode (LED)",
  },
  {
    id: 71,
    topic: "Lighting Sources & Lighting Systems",
    question: "In the closed loop lighting control method, the light level sensor views an area of the room that represents the ______.",
    choices: [
      "borrowed light level from all sources of natural light",
      "overall lighting level from all sources of light",
      "indirect level from all sources of artificial light",
      "direct light level from all sources of artificial light",
    ],
    answer: "overall lighting level from all sources of light",
  },
  {
    id: 72,
    topic: "Lighting Sources & Lighting Systems",
    question: "Automatic lighting control that uses a light level sensor to turn lamps on around dusk and turn them off at dawn is called ______.",
    choices: ["astronomic control", "phototransistor control", "photoresistor control", "photo control"],
    answer: "photo control",
  },
  {
    id: 73,
    topic: "Lighting Sources & Lighting Systems",
    question: "Distributed lighting control systems are most commonly controlled by ______.",
    choices: ["automated sensors only", "local control devices", "manual switches only", "remote control devices"],
    answer: "local control devices",
  },
  {
    id: 74,
    topic: "Lighting Sources & Lighting Systems",
    question: "Which of the following selections best describes the most common type of indoor commercial lighting installation?",
    choices: ["Direct lighting", "Down lighting", "Indirect lighting", "Up lighting"],
    answer: "Direct lighting",
  },
  {
    id: 75,
    topic: "Lighting Sources & Lighting Systems",
    question: "Approximately ______ percent of total energy produced by a lamp is visible.",
    choices: ["10 to 65", "10 to 50", "10 to 35", "10 to 20"],
    answer: "10 to 50",
  },
  {
    id: 76,
    topic: "Lighting Sources & Lighting Systems",
    question: "What type of occupancy sensor technology uses the heat energy of people to activate?",
    choices: ["Microwave", "Passive infrared", "Ultrasonic", "Ultraviolet"],
    answer: "Passive infrared",
  },
  {
    id: 77,
    topic: "Lighting Sources & Lighting Systems",
    question: "Which of the following is not an occupancy sensor technology used with building automation systems?",
    choices: ["Microwave", "Passive infrared", "Ultrasonic", "Ultraviolet"],
    answer: "Ultraviolet",
  },
  {
    id: 78,
    topic: "Lighting Sources & Lighting Systems",
    question: "In the closed loop lighting control method, the light level sensor views an area of the room that represents the ______.",
    choices: [
      "light level from all sources of natural light",
      "overall lighting level from all sources of light",
      "the indirect light level from all sources of artificial light",
      "the direct light level from all sources of artificial light",
    ],
    answer: "overall lighting level from all sources of light",
  },

  // ─── Programmable Logic Controllers ───────────────────────────────────────
  {
    id: 79,
    topic: "Programmable Logic Controllers",
    question: "Which of the following components is generally present in a personal computer, but not present in a programmable logic controller?",
    choices: ["expansion slots", "memory", "microprocessor", "removable storage media"],
    answer: "removable storage media",
  },
  {
    id: 80,
    topic: "Programmable Logic Controllers",
    question: "Which type of programmable logic controller programming language is most like control diagrams used in traditional magnetic motor control?",
    choices: ["Functional Block Diagrams", "Ladder Logic", "Sequential Function Charts", "Structured Text"],
    answer: "Ladder Logic",
  },
  {
    id: 81,
    topic: "Programmable Logic Controllers",
    question: "Which of the following choices describes all of the types of components necessary for a PLC system to operate correctly?",
    choices: [
      "chassis, power supply, processor, programming device",
      "chassis, processor, programming device, I/O modules",
      "power supply, chassis, processor, I/O modules",
      "power supply, chassis, programming device, I/O modules",
    ],
    answer: "power supply, chassis, processor, I/O modules",
  },
  {
    id: 82,
    topic: "Programmable Logic Controllers",
    question: "When the connection to the DC Common terminal on the input section of a MicroLogix PLC is negative and the individual switched inputs are from a positive DC source, the inputs are said to be ______.",
    choices: ["hot", "neutral", "sinking", "sourcing"],
    answer: "sinking",
  },

  // ─── Grounding & Bonding for Communications ───────────────────────────────
  {
    id: 83,
    topic: "Grounding & Bonding for Communications",
    question: "Communications system or communication equipment grounding is accomplished by establishing a connection to ground through which of the following?",
    choices: ["A bonding wedge", "A grounding electrode", "A main bonding jumper", "A system bonding jumper"],
    answer: "A grounding electrode",
  },
  {
    id: 84,
    topic: "Grounding & Bonding for Communications",
    question: "Grounding electrode conductors used for optical fiber and communications systems covered in Articles 770 and 800 must meet which of the following requirements?",
    choices: [
      "They must be listed",
      "They must be copper or other corrosion resistant material",
      "They must be insulated, covered or bare",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    id: 85,
    topic: "Grounding & Bonding for Communications",
    question: "The bonding conductor or grounding electrode conductor for a communications system shall not be smaller than ______ AWG copper or other corrosion resistant material.",
    choices: ["16", "14", "12", "10"],
    answer: "14",
  },
  {
    id: 86,
    topic: "Grounding & Bonding for Communications",
    question: "Grounding communications systems and equipment provides operational grounding and protective grounding functions by establishing a connection to ______.",
    choices: ["a subpanel", "ground (the earth)", "surge protection", "the power supply"],
    answer: "ground (the earth)",
  },
  {
    id: 87,
    topic: "Grounding & Bonding for Communications",
    question: "Which of the following terms is not defined in the National Electrical Code?",
    choices: [
      "Equipment bonding jumper",
      "Equipment grounding conductor",
      "Grounding conductor",
      "Grounding electrode conductor",
    ],
    answer: "Grounding conductor",
  },

  // ─── Understanding Analog Signals ─────────────────────────────────────────
  {
    id: 88,
    topic: "Understanding Analog Signals",
    question: "Which of the following is not typically used as an analog control signal for motor control?",
    choices: ["AC volts", "DC mA", "DC volts", "PSI"],
    answer: "AC volts",
  },
  {
    id: 89,
    topic: "Understanding Analog Signals",
    question: "What type of signal converter would be used to convert a control signal produced by a 4-20 mA transducer into the correct signal for a pneumatic valve?",
    choices: ["Current-to-Pressure", "Current-to-Voltage", "Voltage-to-Current", "Voltage-to-Pressure"],
    answer: "Current-to-Pressure",
  },

  // ─── Special Occupancies & Conditions ─────────────────────────────────────
  {
    id: 90,
    topic: "Special Occupancies & Conditions",
    question: "The bonding conductor for an equipotential plane in an agricultural building must be connected to wire mesh or other conductive elements by pressure connectors or clamps made of which of the following material?",
    choices: ["Brass", "Copper or copper alloy", "Other equally substantial approved means", "Any of the above"],
    answer: "Any of the above",
  },
  {
    id: 91,
    topic: "Special Occupancies & Conditions",
    question: "Where flexible metal conduit (FMC) or liquidtight flexible metal conduit (LFMC) is installed in a hazardous class II location, which of the following bonding methods must be installed?",
    choices: [
      "A bonding bushing and jumper installed at the fittings at both ends of the conduit",
      "A wire-type bonding jumper installed according to 250.102",
      "Bonding locknuts installed on the fittings at both ends of the conduit",
      "The fittings must be terminated in threaded hubs at both ends of the conduit",
    ],
    answer: "A wire-type bonding jumper installed according to 250.102",
  },
  {
    id: 92,
    topic: "Special Occupancies & Conditions",
    question: "A disconnecting means installed in an agricultural building at the distribution point for the purposes of isolation, system maintenance, emergency disconnection, or connection of optional standby systems best defines which of the following?",
    choices: [
      "Main feeder disconnecting means",
      "Service disconnecting means",
      "Site-isolation device",
      "Standby power disconnecting means",
    ],
    answer: "Site-isolation device",
  },

  // ─── Grounding at Separate Buildings ──────────────────────────────────────
  {
    id: 93,
    topic: "Grounding at Separate Buildings",
    question: "Where a separate building or structure is supplied by a feeder, all grounding electrodes ______ must be bonded together to form the grounding electrode system.",
    choices: ["available", "on the entire property", "present at the building or structure", "listed in 250.52(A)"],
    answer: "present at the building or structure",
  },
  {
    id: 94,
    topic: "Grounding at Separate Buildings",
    question: "What is the minimum size copper equipment grounding conductor (wire type) required for an 80 amp feeder supplying a detached garage for a dwelling unit (the feeder is installed in PVC conduit)?",
    choices: ["10 AWG", "8 AWG", "6 AWG", "4 AWG"],
    answer: "8 AWG",
  },
  {
    id: 95,
    topic: "Grounding at Separate Buildings",
    question: "In order for the grounded conductor to be used for grounding at a separate building or structure supplied by an existing feeder, there can be no ______ between the feeder source and destination at the building or structure served.",
    choices: ["circuit conductors", "grounding electrodes", "ground (Earth) paths", "common electrically continuous metallic paths"],
    answer: "common electrically continuous metallic paths",
  },
  {
    id: 96,
    topic: "Grounding at Separate Buildings",
    question: "Where no grounding electrodes exist at a building or structure supplied by a feeder, one or more of the grounding electrodes specified in 250.52(A)(4) through (8) shall be installed and used, including all but which of the following?",
    choices: [
      "A ground ring encircling the building or structure",
      "Ground rods or pipe electrodes",
      "Metal underground gas piping",
      "10 or more feet of metal underground water piping",
    ],
    answer: "Metal underground gas piping",
  },
  {
    id: 97,
    topic: "Grounding at Separate Buildings",
    question: "What is the minimum size copper bonding jumper required for a metal water piping system in a building or structure supplied by a 400 amp feeder that includes 600kcmil circuit conductors?",
    choices: ["6 AWG", "4 AWG", "2 AWG", "1/0 AWG"],
    answer: "1/0 AWG",
  },

  // ─── Flashcard-only (questions to be added) ───────────────────────────────
  {
    id: 98,
    topic: "Special Occupancies & Conditions",
    question: "(Question to be added)",
    answer: "Site isolation device",
  },
  {
    id: 99,
    topic: "Grounding & Bonding for Communications",
    question: "(Question to be added)",
    answer: "All of the above",
  },
  {
    id: 100,
    topic: "Special Occupancies & Conditions",
    question: "(Question to be added)",
    answer: "Any of the above",
  },
  {
    id: 101,
    topic: "Grounding at Separate Buildings",
    question: "(Question to be added)",
    answer: "8 AWG",
  },
  {
    id: 102,
    topic: "Programmable Logic Controllers",
    question: "(Question to be added)",
    answer: "65,000",
  },
  {
    id: 103,
    topic: "Programmable Logic Controllers",
    question: "(Question to be added)",
    answer: "Ladder logic",
  },
  {
    id: 104,
    topic: "Programmable Logic Controllers",
    question: "(Question to be added)",
    answer: "6-24 volts AC",
  },
  {
    id: 105,
    topic: "Programmable Logic Controllers",
    question: "(Question to be added)",
    answer: "Generator",
  },
  {
    id: 106,
    topic: "Programmable Logic Controllers",
    question: "(Question to be added)",
    answer: "Tag out",
  },
  {
    id: 107,
    topic: "Programmable Logic Controllers",
    question: "(Question to be added)",
    answer: "Loads",
  },
  {
    id: 108,
    topic: "Programmable Logic Controllers",
    question: "(Question to be added)",
    answer: "Controller",
  },
  {
    id: 109,
    topic: "Lighting Sources & Lighting Systems",
    question: "(Question to be added)",
    answer: "Local control device",
  },
  {
    id: 110,
    topic: "Programmable Logic Controllers",
    question: "(Question to be added)",
    answer: "5 volts or less",
  },
  {
    id: 111,
    topic: "Understanding Analog Signals",
    question: "(Question to be added)",
    answer: "Current-to-pressure",
  },
  {
    id: 112,
    topic: "Programmable Logic Controllers",
    question: "(Question to be added)",
    answer: "Short circuit current rating",
  },
  {
    id: 113,
    topic: "Understanding Analog Signals",
    question: "(Question to be added)",
    answer: "AC volts",
  },
  {
    id: 114,
    topic: "Programmable Logic Controllers",
    question: "(Question to be added)",
    answer: "Induction",
  },
  {
    id: 115,
    topic: "Programmable Logic Controllers",
    question: "(Question to be added)",
    answer: "Sinking",
  },
  {
    id: 116,
    topic: "Lighting Sources & Lighting Systems",
    question: "(Question to be added)",
    answer: "Ultraviolet",
  },
  {
    id: 117,
    topic: "Lighting Sources & Lighting Systems",
    question: "(Question to be added)",
    answer: "Lighting & HVAC",
  },
  {
    id: 118,
    topic: "Grounding at Separate Buildings",
    question: "(Question to be added)",
    answer: "Less than",
  },
  {
    id: 119,
    topic: "Grounding at Separate Buildings",
    question: "(Question to be added)",
    answer: "Continuous metallic paths",
  },
  {
    id: 120,
    topic: "Programmable Logic Controllers",
    question: "(Question to be added)",
    answer: "68 degrees Celsius",
  },
  {
    id: 121,
    topic: "Special Occupancies & Conditions",
    question: "(Question to be added)",
    answer: "Ends with 250.102",
  },
  {
    id: 122,
    topic: "Grounding & Bonding for Communications",
    question: "(Question to be added)",
    answer: "14 AWG",
  },
  {
    id: 123,
    topic: "Lighting Sources & Lighting Systems",
    question: "(Question to be added)",
    answer: "Dawn lighting",
  },
  {
    id: 124,
    topic: "Understanding Analog Signals",
    question: "(Question to be added)",
    answer: "Analog",
  },
  {
    id: 125,
    topic: "Understanding Analog Signals",
    question: "(Question to be added)",
    answer: "Transient voltage",
  },
  {
    id: 126,
    topic: "Understanding Analog Signals",
    question: "(Question to be added)",
    answer: "Voltage sag",
  },
  {
    id: 127,
    topic: "Grounding & Bonding for Communications",
    question: "(Question to be added)",
    answer: "Grounding electrode",
  },
  {
    id: 128,
    topic: "Grounding & Bonding for Communications",
    question: "(Question to be added)",
    answer: "Solid, covered, or bare — no less than 8 AWG",
  },
  {
    id: 129,
    topic: "Grounding & Bonding for Communications",
    question: "(Question to be added)",
    answer: "250.166",
  },
  {
    id: 130,
    topic: "Lighting Sources & Lighting Systems",
    question: "(Question to be added)",
    answer: "Efficiency",
  },
  {
    id: 131,
    topic: "Programmable Logic Controllers",
    question: "(Question to be added)",
    answer: "Field service",
  },
  {
    id: 132,
    topic: "Programmable Logic Controllers",
    question: "(Question to be added)",
    answer: "Polarity",
  },
  {
    id: 133,
    topic: "Programmable Logic Controllers",
    question: "(Question to be added)",
    answer: "Frame size",
  },
  {
    id: 134,
    topic: "Grounding at Separate Buildings",
    question: "(Question to be added)",
    answer: "Established path to ground",
  },
  {
    id: 135,
    topic: "Lighting Sources & Lighting Systems",
    question: "(Question to be added)",
    answer: "Ultrasonic",
  },
];

export function getQuestionsByTopic(topic: string): Question[] {
  return questions.filter((q) => q.topic === topic);
}

export function getMultipleChoiceQuestions(): Question[] {
  return questions.filter((q) => q.choices !== undefined);
}

export function getFlashcardQuestions(): Question[] {
  return questions;
}
