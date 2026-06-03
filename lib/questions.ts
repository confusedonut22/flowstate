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
];

export function getQuestionsByTopic(topic: string): Question[] {
  return questions.filter((q) => q.topic === topic);
}

export function getMultipleChoiceQuestions(): Question[] {
  // All 65 questions have choices
  return questions;
}

export function getFlashcardQuestions(): Question[] {
  return questions;
}
