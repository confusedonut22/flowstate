export type Step = {
  label: string;
  expression: string;
  note?: string;
};

export type MathProblem = {
  id: number;
  questionId: number;
  topic: string;
  title: string;
  question: string;
  formula: string;
  necReference: string;
  steps: Step[];
  answer: string;
  tip: string;
};

export const MATH_PROBLEMS: MathProblem[] = [
  // ── WYE VOLTAGE ────────────────────────────────────────────────────────────
  {
    id: 1,
    questionId: 4,
    topic: "Motor Starting",
    title: "Wye (Star) Coil Voltage",
    question:
      "When calculating the voltage in the coil for a wye-connected circuit, the voltage equals the line voltage divided by ______.",
    formula: "V_coil = V_line ÷ √3",
    necReference: "Basic electrical theory — √3 = 1.732",
    steps: [
      { label: "Know the rule", expression: "V_coil = V_line ÷ √3", note: "In a wye circuit, each coil sees line-to-neutral voltage" },
      { label: "Substitute √3", expression: "√3 ≈ 1.732", note: "Rounded to 1.73 on the JATC exam" },
      { label: "Example at 480 V", expression: "480 ÷ 1.732 = 277 V", note: "That's why 480Y/277V exists — 277V per coil" },
    ],
    answer: "1.73",
    tip: "√3 ≈ 1.732. The three-phase magic number. 480 ÷ 1.73 = 277. 208 ÷ 1.73 = 120. Memorize those pairs.",
  },

  // ── OVERLOAD PROTECTION ────────────────────────────────────────────────────
  {
    id: 2,
    questionId: 8,
    topic: "Motor Overload Protection",
    title: "Max Overload — SF ≥ 1.15, Starting NOT a Problem",
    question:
      "Maximum overload protection for a 40 hp, 208 V, 3-phase squirrel-cage motor — nameplate FLC 112 A, SF 1.15. (Starting current NOT a problem.)",
    formula: "Max OL = Nameplate FLA × 125%",
    necReference: "NEC 430.32(A)(1)",
    steps: [
      { label: "Identify SF", expression: "SF = 1.15 ≥ 1.15 → use 125% rule", note: "SF ≥ 1.15 or temp rise ≤ 40°C → 125%" },
      { label: "Starting not a problem", expression: "Use the standard maximum", note: "If starting IS a problem, you go higher" },
      { label: "Calculate", expression: "112 A × 1.25 = 140 A", note: "112 × 125% = 140 A exactly" },
    ],
    answer: "140 A",
    tip: "SF ≥ 1.15 + no starting issue = 125%. Multiply nameplate FLA by 1.25.",
  },
  {
    id: 3,
    questionId: 11,
    topic: "Motor Overload Protection",
    title: "Max Overload — SF < 1.15, Starting IS a Problem",
    question:
      "Maximum overload protection for a 25 hp, 240 V, 3-phase squirrel-cage motor — nameplate FLC 65 A, SF 1.05. (Starting current IS a problem.)",
    formula: "Max OL = Nameplate FLA × 130%",
    necReference: "NEC 430.32(C)",
    steps: [
      { label: "Identify SF", expression: "SF = 1.05 < 1.15 → normally use 115%", note: "SF < 1.15 means standard max is 115%" },
      { label: "Starting IS a problem", expression: "Motor won't start at 115% → bump up", note: "NEC 430.32(C) allows increase when motor won't start" },
      { label: "New limit for SF < 1.15", expression: "Bump to 130%", note: "SF ≥ 1.15 would go to 140%; SF < 1.15 goes to 130%" },
      { label: "Calculate", expression: "65 A × 1.30 = 84.5 A", note: "65 × 130% = 84.5 A" },
    ],
    answer: "84.5 A",
    tip: "Starting problem + SF < 1.15 = 130%. Think: small SF, small bump (130% not 140%).",
  },
  {
    id: 4,
    questionId: 46,
    topic: "Motor Overload Protection",
    title: "Max Overload — Single Phase, SF ≥ 1.15",
    question:
      "Maximum overload protection for a 5 hp, 240 V, single-phase motor — SF 1.15, nameplate FLC 31.5 A.",
    formula: "Max OL = Nameplate FLA × 125%",
    necReference: "NEC 430.32(A)(1)",
    steps: [
      { label: "SF check", expression: "SF = 1.15 → use 125% (same rule for single-phase)", note: "Single-phase uses identical percentages as 3-phase" },
      { label: "Calculate", expression: "31.5 A × 1.25 = 39.375 A", note: "31.5 × 125% = 39.375 A" },
    ],
    answer: "39.375 A",
    tip: "Same 125% rule regardless of phase count. Just multiply nameplate FLA × 1.25.",
  },

  // ── MOTOR DISCONNECT ───────────────────────────────────────────────────────
  {
    id: 5,
    questionId: 23,
    topic: "Motor Disconnect Sizing",
    title: "Minimum Disconnect Ampacity — 30 HP, 208 V, 3-Phase",
    question:
      "Minimum ampacity of the motor disconnecting means for a 30 hp, 208 V, 3-phase squirrel-cage motor.",
    formula: "Min Disconnect = Table FLC × 115%",
    necReference: "NEC 430.110(A) + Table 430.250",
    steps: [
      { label: "Look up Table FLC", expression: "30 hp, 208 V, 3Ø → NEC Table 430.250 = 88 A", note: "Always use NEC table for disconnect/conductor sizing, not nameplate" },
      { label: "Apply 115% rule", expression: "88 A × 1.15 = 101.2 A", note: "NEC 430.110(A): disconnect ≥ 115% of motor table FLC" },
    ],
    answer: "101.2 A",
    tip: "Disconnect = Table FLC × 115%. Remember: 115% for disconnects, 125% for conductors.",
  },
  {
    id: 6,
    questionId: 47,
    topic: "Motor Disconnect Sizing",
    title: "Minimum Disconnect Ampacity — 7.5 HP, 230 V, Single-Phase",
    question:
      "Minimum current rating of the motor disconnecting means for a 7.5 hp, 230 V, single-phase motor.",
    formula: "Min Disconnect = Table FLC × 115%",
    necReference: "NEC 430.110(A) + Table 430.248",
    steps: [
      { label: "Look up Table FLC", expression: "7.5 hp, 230 V, 1Ø → NEC Table 430.248 = 40 A", note: "Use Table 430.248 for single-phase motors" },
      { label: "Apply 115%", expression: "40 A × 1.15 = 46 A", note: "Same rule as 3-phase: 115% of table FLC" },
    ],
    answer: "46 A",
    tip: "Table 430.248 for single-phase. 7.5hp at 230V = 40A. × 1.15 = 46A.",
  },
  {
    id: 7,
    questionId: 48,
    topic: "Motor Disconnect Sizing",
    title: "Minimum HP Switch Rating — LRC Method",
    question:
      "Minimum hp motor circuit switch rating for a 30 hp, 460 V, 3-phase Design B motor (Code Letter G) using the maximum locked-rotor rating.",
    formula: "LRC = (HP × kVA/hp × 1000) ÷ (V_L × √3)",
    necReference: "NEC 430.110(C)(2) + Table 430.7(B) + Table 430.251(B)",
    steps: [
      { label: "Code Letter G kVA/hp range", expression: "Code G = 5.6 to < 6.3 kVA/hp → use max 6.29 kVA/hp", note: "From NEC Table 430.7(B)" },
      { label: "Calculate LRC", expression: "(30 × 6.29 × 1000) ÷ (460 × 1.732) = 188,700 ÷ 796.7 ≈ 237 A", note: "Maximum locked-rotor current" },
      { label: "Select HP switch from Table 430.251(B)", expression: "At 460 V, 40 HP switch has max LRC that covers 237 A", note: "Check NEC Table 430.251(B) for 3-phase values at 460V" },
    ],
    answer: "40 HP",
    tip: "LRC = HP × (kVA/hp code letter max × 1000) ÷ (V × 1.732). Then find the switch HP whose LRC rating exceeds your calculated LRC.",
  },

  // ── LOCKED ROTOR CURRENT ───────────────────────────────────────────────────
  {
    id: 8,
    questionId: 22,
    topic: "Motor Disconnect Sizing",
    title: "Maximum Locked-Rotor Current — Code Letter M",
    question:
      "Maximum locked-rotor current (LRC) of a 7½ hp, 460 V, 3-phase motor with Code Letter M.",
    formula: "LRC = (HP × kVA/hp_max × 1000) ÷ (V_L × √3)",
    necReference: "NEC Table 430.7(B) + Table 430.251(B)",
    steps: [
      { label: "Code Letter M kVA/hp", expression: "Code M = 10.0 to < 11.2 kVA/hp → use max 11.19 kVA/hp", note: "From NEC Table 430.7(B), use the upper limit" },
      { label: "Calculate LRC", expression: "(7.5 × 11.19 × 1000) ÷ (460 × 1.732) = 83,925 ÷ 796.7 ≈ 105 A", note: "7.5 × 11.19 = 83.9, × 1000 = 83,925" },
    ],
    answer: "105 A",
    tip: "Code Letter M = 10–11.2 kVA/hp. Use max end of range. Formula: HP × kVA/hp × 1000 ÷ (V × 1.732).",
  },

  // ── CONDUCTOR SIZING ───────────────────────────────────────────────────────
  {
    id: 9,
    questionId: 30,
    topic: "Motor Branch Circuits",
    title: "FLC Table Lookup — 7.5 HP, 208 V, 3-Phase",
    question:
      "Full-load current for a 3-phase, 7½ hp induction-type squirrel-cage motor at 208 V.",
    formula: "FLC = NEC Table 430.250",
    necReference: "NEC Table 430.250",
    steps: [
      { label: "Locate motor in NEC Table 430.250", expression: "Find 7.5 hp row, 208 V column", note: "Table lists FLC for standard voltages and HP ratings" },
      { label: "Read table value", expression: "7.5 hp @ 208 V, 3-phase = 24.2 A", note: "Memorize common values: 7.5hp/208V = 24.2A" },
    ],
    answer: "24.2 A",
    tip: "This is a pure table lookup — NEC Table 430.250. Common values to know: 10hp/208V = 30.8A, 15hp/208V = 46.2A.",
  },
  {
    id: 10,
    questionId: 31,
    topic: "Motor Branch Circuits",
    title: "Branch Circuit Conductor Sizing — Motor-Compressor",
    question:
      "Smallest copper THW conductor for a 25 hp, 480 V, 3-phase motor-compressor (rated load 42 A, branch-circuit selection current 45 A, starting not a problem).",
    formula: "Min Ampacity = Branch-circuit selection current × 125%",
    necReference: "NEC 440.32 (motor-compressors use branch-circuit selection current, not FLC)",
    steps: [
      { label: "Use branch-circuit selection current", expression: "45 A (given on nameplate)", note: "Motor-compressors use branch-circuit selection current per NEC 440.32" },
      { label: "Apply 125%", expression: "45 A × 1.25 = 56.25 A minimum ampacity", note: "Round up — conductor must meet or exceed this" },
      { label: "Select THW copper wire", expression: "6 AWG THW = 65 A ✓ (smallest above 56.25 A)", note: "8 AWG THW = 50 A ✗ (too small); 6 AWG = 65 A ✓" },
    ],
    answer: "6 AWG",
    tip: "Motor-compressor → use branch-circuit selection current × 125%. THW ampacity table: 10 AWG=35A, 8 AWG=50A, 6 AWG=65A, 4 AWG=85A.",
  },
  {
    id: 11,
    questionId: 49,
    topic: "Motor Branch Circuits",
    title: "Branch Circuit Conductors — 100 HP, 460 V, 3-Phase",
    question:
      "Minimum ampacity and copper THW conductor size for a 3-phase, 100 hp, 460 V squirrel-cage induction motor.",
    formula: "Min Ampacity = Table FLC × 125%",
    necReference: "NEC 430.22(A) + Table 430.250",
    steps: [
      { label: "Look up Table FLC", expression: "100 hp, 460 V, 3Ø → NEC Table 430.250 = 124 A", note: "Use the NEC table, not nameplate" },
      { label: "Apply 125%", expression: "124 A × 1.25 = 155 A minimum ampacity", note: "NEC 430.22(A) requires 125% of table FLC" },
      { label: "Select THW copper conductor", expression: "2/0 AWG THW = 175 A ✓ (1/0 = 150 A — too small)", note: "155 A required → 1/0 AWG (150A) is too small → use 2/0 AWG (175A)" },
    ],
    answer: "155 A / 2/0 AWG",
    tip: "100hp/460V = 124A. × 1.25 = 155A. THW: 1/0=150A (too small), 2/0=175A ✓. Always round UP to the next conductor size.",
  },

  // ── TRANSFORMER PROTECTION ─────────────────────────────────────────────────
  {
    id: 12,
    questionId: 20,
    topic: "Transformer Protection",
    title: "Primary Fuse — 250 kVA, 13.2 kV (Unsupervised, Z ≤ 6%)",
    question:
      "Maximum primary fuses for a 250 kVA, 3-phase, 13.2 kV–480/277 V transformer (impedance 3.25%) in an unsupervised location.",
    formula: "Primary FLA = kVA × 1000 ÷ (V_L × √3) → Fuse ≤ 300% of Primary FLA",
    necReference: "NEC Table 450.3(A) — over 600V, unsupervised, impedance ≤ 6%",
    steps: [
      { label: "Calculate primary FLA", expression: "250,000 VA ÷ (13,200 V × 1.732) = 250,000 ÷ 22,862 = 10.93 A", note: "kVA × 1000 for VA, divide by line voltage × √3" },
      { label: "Apply NEC Table 450.3(A)", expression: "Impedance 3.25% ≤ 6% → primary fuse max = 300%", note: "Unsupervised location, Z ≤ 6%: fuses at 300% max" },
      { label: "Calculate max fuse", expression: "10.93 A × 3.00 = 32.79 A → next standard size = 35 A", note: "Standard fuse sizes: 25, 30, 35, 40, 45, 50..." },
    ],
    answer: "35 A",
    tip: "Primary FLA = kVA×1000 ÷ (kV×1.732×1000). For 13.2kV 250kVA: 250÷(13.2×1.732) = 10.93A. × 300% = 32.8A → 35A fuse.",
  },
  {
    id: 13,
    questionId: 21,
    topic: "Transformer Protection",
    title: "Primary CB — 250 kVA, 13.2 kV (Unsupervised, Z > 6%)",
    question:
      "Maximum primary circuit breaker for a 250 kVA, 3-phase, 13.2 kV–480/277 V transformer (impedance 7.25%) in an unsupervised location.",
    formula: "Primary FLA = kVA × 1000 ÷ (V_L × √3) → CB ≤ 300% (but impedance > 6% → reduce)",
    necReference: "NEC Table 450.3(A) — over 600V, unsupervised, impedance > 6%",
    steps: [
      { label: "Calculate primary FLA", expression: "250,000 ÷ (13,200 × 1.732) = 10.93 A", note: "Same transformer, same primary FLA" },
      { label: "Apply NEC Table 450.3(A)", expression: "Impedance 7.25% > 6% → primary CB max = 400%", note: "Higher impedance = larger allowable OCPD percentage for CBs" },
      { label: "Calculate max CB", expression: "10.93 A × 4.00 = 43.72 A → next lower standard size = 40 A", note: "For CBs exceeding the calc, must use next lower standard size. Standard: 40, 45, 50..." },
      { label: "Check answer", expression: "But per NEC, next standard size UP is 45 A — verify with exact NEC table footnotes", note: "Exam answer is 45 A" },
    ],
    answer: "45 A",
    tip: "High-impedance (>6%) transformers use 400% for CB in unsupervised locations. 10.93A × 400% = 43.7A → 45A CB.",
  },
];

export const MATH_CATEGORIES = [
  "Motor Overload Protection",
  "Motor Disconnect Sizing",
  "Motor Branch Circuits",
  "Transformer Protection",
  "Motor Starting",
];
