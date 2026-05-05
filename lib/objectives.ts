export type Objective = {
  id: string;
  title: string;
  explanation: string;
};

export type Lesson = {
  id: string;
  topic: string;
  session: string;
  icon: string;
  description: string;
  objectives: Objective[];
};

export const LESSONS: Lesson[] = [
  {
    id: "motor-starting",
    topic: "Motor Starting",
    session: "Session 7",
    icon: "⚡",
    description: "How motors are started safely and the methods used to limit inrush current.",
    objectives: [
      {
        id: "ms-1",
        title: "Explain why reduced-voltage starting is used for large motors",
        explanation:
          "Large motors draw 6–10× their full-load current at startup (locked-rotor current). This inrush creates voltage sags on the distribution system that can damage sensitive equipment, trip breakers, and cause light flicker. Reduced-voltage starting limits the inrush by applying a fraction of full voltage until the motor accelerates, then transitions to full voltage. Common methods include autotransformer starters, wye-delta starters, soft starters, and variable-frequency drives (VFDs).",
      },
      {
        id: "ms-2",
        title: "Describe the autotransformer starting method",
        explanation:
          "An autotransformer starter uses a tapped autotransformer (typically 50%, 65%, or 80% taps) to reduce the voltage applied to the motor during starting. The motor starts at the reduced voltage tap, then a transition switch connects the motor directly to full line voltage once it has accelerated. This method reduces starting current approximately as the square of the voltage ratio — a 65% tap reduces inrush to about 42% of across-the-line current.",
      },
      {
        id: "ms-3",
        title: "Describe the wye-delta starting method",
        explanation:
          "In wye-delta (star-delta) starting, the motor windings are initially connected in wye (star) configuration during starting, which reduces the voltage across each winding to 1/√3 (58%) of line voltage. Once up to speed, contactors switch the windings to delta configuration for normal operation. This reduces starting current and torque to 1/3 of across-the-line values. The motor must be designed for delta operation at line voltage.",
      },
      {
        id: "ms-4",
        title: "Understand the role of a soft starter and VFD",
        explanation:
          "A soft starter uses SCRs (silicon controlled rectifiers) to gradually ramp up the voltage to the motor over a programmable time, reducing mechanical shock and inrush current. A VFD (variable-frequency drive) controls both voltage and frequency simultaneously, allowing smooth speed control from zero to full speed while maintaining a constant V/Hz ratio. VFDs also allow precise speed control during operation, not just starting.",
      },
    ],
  },
  {
    id: "solid-state-motor-control",
    topic: "Solid-State Devices & Motor Control",
    session: "Session 7",
    icon: "🔌",
    description: "Semiconductor devices used in modern motor control circuits.",
    objectives: [
      {
        id: "ssmc-1",
        title: "Identify key solid-state devices used in motor control",
        explanation:
          "The primary solid-state devices in motor control are: SCRs (Silicon Controlled Rectifiers) — one-way current devices that switch on with a gate pulse and turn off when current drops to zero; TRIACs — bidirectional SCRs that conduct in both directions, used in AC phase-control circuits; transistors (BJT, MOSFET, IGBT) — used in VFDs and PWM chopper circuits to switch high currents at high frequency. IGBTs are the most common switching device in modern VFDs.",
      },
      {
        id: "ssmc-2",
        title: "Explain how an SCR controls power",
        explanation:
          "An SCR is triggered into conduction by a small gate signal and remains on until current through it falls below the holding current level (typically at a zero-crossing in AC circuits). By delaying the gate trigger signal relative to the AC voltage zero-crossing (phase-angle firing), the SCR controls what portion of each half-cycle is delivered to the load. A trigger at 90° delivers 50% of the cycle; at 0° delivers the full half-cycle. Two SCRs back-to-back (or a TRIAC) control full AC waveforms.",
      },
      {
        id: "ssmc-3",
        title: "Describe how a VFD generates variable-frequency AC",
        explanation:
          "A VFD has three stages: (1) Rectifier — converts incoming AC to DC using a diode bridge; (2) DC Bus — filters and stores the DC energy in capacitors; (3) Inverter — uses IGBTs switching at high frequency (PWM) to synthesize a variable-frequency, variable-voltage AC output. By varying the output frequency and voltage proportionally (constant V/Hz), the motor speed is controlled from near-zero to above rated speed. Modern VFDs also provide torque control and energy regeneration.",
      },
      {
        id: "ssmc-4",
        title: "Understand isolation and signal interface requirements",
        explanation:
          "Solid-state motor control circuits mix high-power and low-voltage control signals. Optical isolation (optocouplers) is used to electrically isolate the control signal from the power circuit, protecting PLCs and control wiring from voltage spikes and ground faults. Control signals are typically 4–20 mA analog or 0–10 V DC for speed reference inputs. Input/output (I/O) cards in PLCs must be matched to the VFD's analog or digital interface specifications.",
      },
    ],
  },
  {
    id: "motor-overload-protection",
    topic: "Motor Overload Protection",
    session: "Session 7",
    icon: "🛡️",
    description: "NEC requirements for protecting motors from sustained overload conditions.",
    objectives: [
      {
        id: "mop-1",
        title: "Distinguish between overload and short-circuit protection",
        explanation:
          "Overload protection (NEC Article 430 Part III) protects the motor windings from sustained overcurrent that generates heat — typically 115–125% of full-load current lasting minutes to hours. Short-circuit and ground-fault protection (NEC Article 430 Part IV) protects the branch-circuit conductors from fault currents that can be thousands of amperes. These are separate devices: overload relays are sized to the motor FLA, while branch-circuit fuses or breakers are sized much larger to allow motor starting.",
      },
      {
        id: "mop-2",
        title: "Size overload protection per NEC 430.32",
        explanation:
          "Per NEC 430.32, overload devices for motors with a service factor of 1.15 or greater, or temperature rise of 40°C or less, are set at no more than 125% of motor FLA. For all other motors, the setting is 115% of FLA. If the selected value won't allow the motor to start, you may increase to 140% (SF ≥ 1.15) or 130% (all others). For motors 1 HP or less on a general-purpose branch circuit, overload protection may be provided by the branch-circuit device.",
      },
      {
        id: "mop-3",
        title: "Identify types of overload relays",
        explanation:
          "The three main types are: (1) Melting-alloy (eutectic) — uses a solder-filled ratchet mechanism that melts under heat and trips a spring mechanism; must be replaced after tripping; (2) Bimetallic — uses two metals with different expansion rates to deflect a trip bar; self-resetting or manual reset; (3) Electronic — uses current transformers and microprocessors to model thermal accumulation in the motor; provides phase-loss protection, ground-fault detection, and motor protection curves.",
      },
      {
        id: "mop-4",
        title: "Understand the impact of motor service factor on overload sizing",
        explanation:
          "Service factor (SF) indicates how much beyond rated load a motor can handle continuously. An SF of 1.15 means the motor can run at 115% of nameplate horsepower without damage. Because SF ≥ 1.15 motors have more thermal margin, NEC allows the overload device to be set higher (125% vs 115% for SF = 1.0 motors). The nameplate always lists the FLA, SF, and temperature rise — all three determine the correct overload setting.",
      },
    ],
  },
  {
    id: "solid-state-relays",
    topic: "Solid-State Relays",
    session: "Session 7",
    icon: "🔄",
    description: "How solid-state relays work and where they are used instead of mechanical relays.",
    objectives: [
      {
        id: "ssr-1",
        title: "Explain the construction and operation of a solid-state relay",
        explanation:
          "A solid-state relay (SSR) uses optical isolation to sense a low-voltage DC control signal (typically 3–32 VDC) and switches a high-power AC load using SCRs or TRIACs internally — with no moving parts. The input LED illuminates a photosensitive transistor or triac driver, which fires the output SCR/TRIAC. Zero-crossing SSRs switch on only when the AC waveform crosses zero volts, minimizing EMI and load stress. Instant-on SSRs fire immediately on trigger regardless of AC phase.",
      },
      {
        id: "ssr-2",
        title: "Compare SSRs to electromechanical relays",
        explanation:
          "SSRs have no moving contacts, so they don't arc or wear out mechanically — making them ideal for high-cycle applications. They switch silently and produce no EMI from contact bounce. However, SSRs have a small voltage drop (1–1.5 V) across the output when on, generating heat that requires heat sinking for loads above a few amps. They can also fail in the on-state (shorted SCR), whereas mechanical relays typically fail open. SSRs are preferred in dusty, vibration-prone, or high-cycle environments.",
      },
      {
        id: "ssr-3",
        title: "Select the correct SSR for an application",
        explanation:
          "Key specifications when selecting an SSR: (1) Input voltage range — must match the control signal (3–32 VDC is common); (2) Output voltage rating — must exceed the line voltage with margin (e.g., 480 VAC → use 600 V rated SSR); (3) Output current rating — must be derated based on ambient temperature and heat sinking; (4) Load type — resistive loads are straightforward; inductive loads require snubber circuits or SSRs rated for inductive loads; (5) Zero-cross vs. instant-on — choose based on EMI sensitivity.",
      },
      {
        id: "ssr-4",
        title: "Understand heat dissipation requirements for SSRs",
        explanation:
          "SSRs dissipate approximately 1–1.5 W per amp of load current due to the forward voltage drop of the internal SCR/TRIAC. At 25 A, this is 25–37.5 W of heat — enough to damage the SSR if not properly managed. Most SSRs must be mounted on aluminum heat sinks with thermal compound. Derating curves in the datasheet show allowable current vs. ambient temperature. Forced-air cooling extends the current range significantly. Always consult the manufacturer's derating curve, not just the nameplate current rating.",
      },
    ],
  },
  {
    id: "class-i-hazardous",
    topic: "Class I Hazardous Locations",
    session: "Session 8a",
    icon: "🔥",
    description: "NEC Article 501 requirements for locations with flammable gases or vapors.",
    objectives: [
      {
        id: "c1h-1",
        title: "Define Class I hazardous locations and their divisions",
        explanation:
          "Class I locations (NEC Article 501) contain flammable gases or vapors in quantities sufficient to produce explosive or ignitable mixtures. Division 1 — ignitable concentrations exist under normal operating conditions, or exist frequently due to maintenance/leaks, or where a breakdown of equipment could simultaneously release ignitable concentrations and cause electrical failure. Division 2 — flammable liquids/gases are handled in closed containers/systems and would only be released by accidental rupture; not normally present in ignitable concentrations.",
      },
      {
        id: "c1h-2",
        title: "Identify Class I gas groups and their significance",
        explanation:
          "Class I gases are grouped by their explosion pressure and flame propagation characteristics: Group A — acetylene (most severe); Group B — hydrogen and hydrogen-rich gases; Group C — ethylene, cyclopropane; Group D — propane, butane, gasoline, natural gas (most common). Equipment must be listed for the specific gas group present. A conduit seal fitting specified for Group D is not acceptable in a Group B (hydrogen) location because the explosion pressure can be much higher and the flame gap requirements differ.",
      },
      {
        id: "c1h-3",
        title: "Understand explosion-proof equipment requirements",
        explanation:
          "Explosion-proof equipment is designed to contain an internal explosion without igniting the surrounding atmosphere. The enclosure is constructed with threaded conduit hubs and machined flame-path joints (gaps) so that if a spark or flame occurs inside, combustion gases cool as they pass through the gap and exit below ignition temperature. Enclosures must be listed for the Class, Division, and Group. Conduit seals (Crouse-Hinds EYS fittings or equivalent) are required within 18 inches of explosion-proof equipment to prevent gas migration through conduit.",
      },
      {
        id: "c1h-4",
        title: "Recall conduit sealing requirements per NEC 501.15",
        explanation:
          "NEC 501.15 requires conduit seals: (1) within 18 inches of explosion-proof enclosures in Division 1; (2) where conduit passes from a Division 1 or 2 area to a non-hazardous area (boundary seal); (3) in conduit 2-inch trade size and larger entering explosion-proof enclosures. Seals are filled with a sealing compound (not regular putty) that when hardened limits gas passage. The sealing fitting must be accessible and the fill must occupy at least the full cross-section of the conduit. Only approved compounds listed for the fitting are acceptable.",
      },
    ],
  },
  {
    id: "transformer-protection",
    topic: "Transformer Protection",
    session: "Session 8a",
    icon: "🔋",
    description: "NEC Article 450 overcurrent protection requirements for transformers.",
    objectives: [
      {
        id: "tp-1",
        title: "Explain primary and secondary overcurrent protection for transformers",
        explanation:
          "NEC 450.3 establishes maximum ratings for transformer overcurrent protection based on impedance and whether secondary protection is provided. For transformers over 1000 VA with impedance ≤ 6%: primary protection at 125% of primary FLA (if a standard size isn't available, the next higher standard size is permitted); secondary protection at 125% of secondary FLA. When both primary and secondary protection are provided, primary protection can be as high as 250% of primary FLA for transformers with impedance ≤ 6%. The secondary conductor must still be sized accordingly.",
      },
      {
        id: "tp-2",
        title: "Size transformer overcurrent protection using NEC Table 450.3(B)",
        explanation:
          "NEC Table 450.3(B) summarizes protection requirements for transformers 600 V and less. The percentages apply to the transformer's rated current (kVA ÷ voltage ÷ 1.732 for three-phase). Example: a 75 kVA, 480 V primary transformer has a primary FLA of 75,000 ÷ (480 × 1.732) = 90.2 A. Primary protection at 125% = 112.75 A → next standard size breaker is 125 A. If secondary protection is also provided, a 250% primary OCPD = 225.5 A → 225 A breaker is acceptable. Always check the actual NEC table for the applicable voltage and impedance.",
      },
      {
        id: "tp-3",
        title: "Understand transformer inrush and its effect on protection selection",
        explanation:
          "Transformers draw high inrush current (8–12× rated current for 0.1 second) when first energized due to core magnetization. This inrush can nuisance-trip OCPD devices that are too small. NEC allows primary protection up to 250% of FLA specifically to accommodate inrush. If even 250% causes nuisance tripping, the next higher standard size may be used, but the actual overcurrent protection provided is reduced. Transformer inrush is time-current characteristic dependent — fuses with inverse-time characteristics are often better suited than instantaneous breakers.",
      },
      {
        id: "tp-4",
        title: "Identify NEC requirements for transformer location and guarding",
        explanation:
          "NEC 450.13 requires transformers to be accessible to qualified persons for inspection and maintenance. Dry-type transformers up to 50 kVA can be installed in fire-resistant hollow spaces of buildings (450.13(B)) if they have proper ventilation. Transformers over 35,000 V must be in a vault. Transformers must be kept away from combustible materials and have adequate ventilation to dissipate heat. Transformer vaults must have fire-resistive construction, drains, and ventilation openings per NEC 450.41–450.48.",
      },
    ],
  },
  {
    id: "motor-disconnect-sizing",
    topic: "Motor Disconnect Sizing",
    session: "Session 7",
    icon: "🔧",
    description: "NEC Article 430 Part IX requirements for motor disconnecting means.",
    objectives: [
      {
        id: "mds-1",
        title: "State the purpose and location requirements for motor disconnects",
        explanation:
          "NEC 430.102 requires a disconnecting means for each motor and motor controller, located in sight of the motor location and the driven machinery. 'In sight' means visible from and within 50 feet of the motor. If this isn't practical, the disconnect can be located elsewhere if it is capable of being locked in the open position and the location of the disconnect is marked at the motor. A single disconnect can serve both the motor and controller if it meets the requirements of both.",
      },
      {
        id: "mds-2",
        title: "Size motor disconnects per NEC 430.110",
        explanation:
          "Per NEC 430.110, motor disconnects must be rated at least 115% of the motor's full-load current rating (from NEC Table 430.250 for three-phase motors, not the nameplate FLA). This ensures the disconnect can handle the current without overheating. For combination motor controllers with inverse-time breakers, the breaker serves as both the motor branch-circuit OCPD and the disconnect. The disconnect must also be horsepower-rated for motors 100 HP and under — a switch rated at 100 A may not be rated for a 25 HP motor.",
      },
      {
        id: "mds-3",
        title: "Identify acceptable types of disconnecting means",
        explanation:
          "NEC 430.109 lists acceptable disconnecting means: (1) Motor-circuit switch rated in horsepower; (2) Molded-case circuit breaker; (3) Molded-case switch; (4) Instantaneous-trip circuit breaker (in certain applications); (5) Self-protected combination controller; (6) Manual motor controller (for small motors). General-use switches rated at 2× the motor FLA are acceptable for AC motors 2 HP or less on 300 V or less systems. A plain knife switch is NOT acceptable as a motor disconnect.",
      },
      {
        id: "mds-4",
        title: "Apply the in-sight and lockout requirements",
        explanation:
          "The disconnect must be within sight (visible and within 50 ft) of both the motor and the controller unless it can be locked open per NEC 430.102(B). When using a lockable disconnect not in sight of the motor, a label must be placed at the motor identifying the disconnect location. OSHA's lockout/tagout (LOTO) requirements (29 CFR 1910.147) also apply — the disconnect must be capable of accepting a lock in the open position. Electricians must follow LOTO procedures when working on motor circuits regardless of NEC requirements.",
      },
    ],
  },
  {
    id: "motor-control-centers",
    topic: "Motor Control Centers",
    session: "Session 7",
    icon: "🏭",
    description: "Construction, ratings, and NEC requirements for motor control centers.",
    objectives: [
      {
        id: "mcc-1",
        title: "Describe the construction of a motor control center",
        explanation:
          "A motor control center (MCC) is a factory-built assembly of one or more enclosed sections with a common power bus, individual motor control units (buckets), and associated wiring. Each bucket (unit) contains a combination starter with: incoming feeder fuses or circuit breaker, magnetic contactor, overload relay, and control transformer. Buses are typically copper and rated for the full short-circuit current of the system. MCC sections are bolted together and share the vertical bus through stab-on or bolt-on connections.",
      },
      {
        id: "mcc-2",
        title: "Understand MCC short-circuit current ratings (SCCR)",
        explanation:
          "The MCC must be rated for the available short-circuit current at its supply terminals (SCCR). If the available fault current is 65 kA symmetrical RMS and the MCC is rated for only 42 kA, it is not acceptable — the bus bars and enclosures could fail catastrophically during a fault. The SCCR of the MCC must meet or exceed the calculated available fault current. Series-rated breakers in MCCs are generally NOT acceptable — each unit must have its own rating. Arc flash labels based on the SCCR and settings are required per NFPA 70E.",
      },
      {
        id: "mcc-3",
        title: "Identify NEC wiring and grounding requirements for MCCs",
        explanation:
          "NEC 430.97 requires MCCs to have a means of connecting equipment grounding conductors. All metal enclosures must be bonded to the equipment ground bus. Control wiring within the MCC is limited to 600 V and must be separated from power wiring or shielded if run together. NEC 110.26 requires working clearance in front of MCCs: 3 feet minimum for 0–150 V, 3.5 feet for 151–600 V. Dedicated working space (6.5 ft high × width of MCC × depth of clearance) must be maintained. Piping and ductwork cannot run through this space.",
      },
      {
        id: "mcc-4",
        title: "Read and interpret MCC one-line and unit wiring diagrams",
        explanation:
          "A one-line diagram shows the power distribution schematic — main bus, feeder circuits, and motor loads — using single lines to represent three-phase conductors. MCC unit wiring diagrams show the specific control circuit for each bucket: control transformer, start/stop pushbuttons, seal-in contacts, auxiliary contacts, and pilot lights. NEMA and IEC designations differ — NEMA contactors are designated by size (Size 1, 2, 3…) while IEC contactors use utilization category codes (AC-3 for squirrel-cage motors). Most U.S. MCCs use NEMA-rated components.",
      },
    ],
  },
  {
    id: "motor-branch-circuits",
    topic: "Motor Branch Circuits",
    session: "Session 7",
    icon: "📐",
    description: "NEC Article 430 conductor sizing and OCPD requirements for motor branch circuits.",
    objectives: [
      {
        id: "mbc-1",
        title: "Size motor branch-circuit conductors per NEC 430.22",
        explanation:
          "Motor branch-circuit conductors must be sized at a minimum of 125% of the motor full-load current from NEC Tables 430.247–430.252 (not the nameplate ampere rating). Example: a 10 HP, 460 V three-phase motor has a table FLA of 14 A. Minimum conductor ampacity = 14 × 1.25 = 17.5 A → use #12 AWG (20 A ampacity). The table values are used — not nameplate — because motors often run cooler than their nameplate ratings in practice, and the table values represent the worst-case for conductor sizing.",
      },
      {
        id: "mbc-2",
        title: "Select branch-circuit short-circuit and ground-fault protection per NEC 430.52",
        explanation:
          "NEC Table 430.52 gives maximum OCPD ratings as percentages of motor FLA (from the NEC tables). For a squirrel-cage induction motor: inverse-time breaker = 250%, dual-element time-delay fuse = 175%, non-time-delay fuse = 300%. If the calculated value doesn't correspond to a standard size, use the next higher standard size. If the motor won't start at that size, you may increase to 400% for time-delay fuses and 400% for ITCBs. The OCPD protects the branch-circuit conductors, not the motor — the overload relay protects the motor.",
      },
      {
        id: "mbc-3",
        title: "Apply feeder protection rules for multiple motors on a common feeder",
        explanation:
          "NEC 430.62 states that the feeder OCPD for multiple motors must not exceed the largest rating branch-circuit OCPD in the group plus the sum of the FLAs of all other motors on the feeder. Example: two motors with branch-circuit OC devices of 50 A and 30 A, FLAs of 15 A and 10 A. Feeder OCPD = 50 + 10 = 60 A maximum. Feeder conductors must be sized at 125% of the largest motor FLA plus 100% of the FLA of all other motors (NEC 430.24).",
      },
      {
        id: "mbc-4",
        title: "Understand the difference between FLA, FLC, LRC, and SF amperes",
        explanation:
          "FLA (Full-Load Amps) — the nameplate current drawn at rated horsepower, voltage, and frequency. FLC (Full-Load Current) — the NEC table value used for conductor sizing and OCPD selection. LRC (Locked-Rotor Current) — the current drawn at startup when the rotor is stationary; typically 6–10× FLA. Service Factor (SF) Amps — the current drawn when the motor operates at its service factor load (e.g., 1.15 × HP). Conductors are sized to FLC; OLs are set to FLA; OCPD is sized to FLC using NEC Table 430.52 multipliers; LRC determines the transition timing in reduced-voltage starters.",
      },
    ],
  },
  {
    id: "class-ii-hazardous",
    topic: "Class II Hazardous Locations",
    session: "Session 8a",
    icon: "💨",
    description: "NEC Article 502 requirements for locations with combustible dust.",
    objectives: [
      {
        id: "c2h-1",
        title: "Define Class II hazardous locations and their divisions",
        explanation:
          "Class II locations (NEC Article 502) are hazardous because of the presence of combustible dust. Division 1 — combustible dust is in the air under normal operating conditions in quantities sufficient to produce explosive or ignitable mixtures, or where mechanical failure of equipment could cause an ignitable mixture and simultaneously provide a source of ignition. Division 2 — combustible dust accumulations are not normally sufficient to interfere with normal operation of electrical equipment, but could become suspended by abnormal operations.",
      },
      {
        id: "c2h-2",
        title: "Identify Class II dust groups and examples",
        explanation:
          "Class II dusts are categorized by conductivity and ignition sensitivity: Group E — metal dusts (aluminum, magnesium) — most hazardous; conductive and with low ignition temperature; Group F — carbonaceous dusts (carbon black, coal, coke) — may be conductive; Group G — grain dusts, flour, starch, sugar, cocoa, plastic dusts — most common. Equipment must be listed for the specific group. Grain elevators, flour mills, pharmaceutical plants, and coal-handling facilities are typical Class II locations.",
      },
      {
        id: "c2h-3",
        title: "Explain dust-ignition-proof equipment requirements",
        explanation:
          "Unlike Class I explosion-proof equipment (which contains an internal explosion), Class II dust-ignition-proof equipment prevents the entry of dust and operates at a surface temperature low enough that accumulated dust layers won't ignite. Enclosures must be gasketed and sealed so dust cannot enter. Surface temperatures must be controlled to remain below the ignition temperature of the specific dust (considering that a 1/8-inch dust layer significantly reduces heat dissipation). NEC 502.10 requires dust-tight fittings and sealing in Division 2 locations.",
      },
      {
        id: "c2h-4",
        title: "Recall wiring method requirements for Class II locations",
        explanation:
          "Class II Division 1: rigid metal conduit (RMC), intermediate metal conduit (IMC), or MI cable — threaded fittings; flexible metal conduit with listed dust-tight fittings where flexibility is needed. Class II Division 2: same as Division 1, plus electrical metallic tubing (EMT), dusttight wireways, and certain cables (MC, MI, PLTC, ITC) with listed fittings. No flexible conduit without listed dust-tight connectors. Box and conduit fill must account for dust-tight gasketing. Pull boxes must be minimized and gasketed.",
      },
    ],
  },
  {
    id: "dc-motors-generators",
    topic: "DC Motors & Generators",
    session: "Session 7",
    icon: "⚙️",
    description: "Construction, operating principles, and speed control of DC machines.",
    objectives: [
      {
        id: "dcmg-1",
        title: "Describe the construction of a DC motor",
        explanation:
          "A DC motor has two main parts: the stator (field) and the rotor (armature). The stator contains field windings or permanent magnets that create a stationary magnetic field. The armature is a wound rotor connected to a commutator — a segmented copper ring with carbon brushes that reverses current direction as the armature rotates, maintaining continuous torque production. The interaction between the armature current and the field flux produces force (torque) by the principle F = BIL (force = magnetic flux density × current × length).",
      },
      {
        id: "dcmg-2",
        title: "Explain shunt, series, and compound DC motor characteristics",
        explanation:
          "Shunt motor — field winding is connected in parallel with the armature; field current is essentially constant, providing good speed regulation and relatively constant speed from no-load to full-load. Series motor — field winding is in series with the armature; field flux varies with load current, producing very high starting torque but dangerously high no-load speed (never run unloaded). Compound motor — has both shunt and series field windings; combines the high starting torque of the series motor with the better speed regulation of the shunt motor.",
      },
      {
        id: "dcmg-3",
        title: "Understand DC motor speed control methods",
        explanation:
          "DC motor speed is controlled by: (1) Armature voltage control — reducing armature voltage reduces speed below base speed; most common method with SCR drives; (2) Field weakening — reducing field current increases speed above base speed (counter-EMF decreases, armature current and speed increase); (3) Armature resistance — inserting resistance in the armature circuit reduces speed but is inefficient (energy lost as heat). Modern DC drives use SCR phase control to vary the armature voltage for smooth speed adjustment from 0 to base speed, then field weakening above base speed.",
      },
      {
        id: "dcmg-4",
        title: "Identify NEC protection requirements for DC motors",
        explanation:
          "NEC Article 430 applies to DC motors with modifications noted in 430.2. DC motor FLC values come from NEC Table 430.247. Overload protection is sized the same as AC motors (125% of FLA for SF ≥ 1.15, 115% otherwise per NEC 430.32). Branch-circuit conductors at 125% of table FLC per 430.22. DC motors in adjustable-speed applications may need special protection against regenerative overvoltage and loss-of-field conditions. Series motors must always have the load connected — never operate a series DC motor unloaded.",
      },
    ],
  },
  {
    id: "class-iii-intrinsically-safe",
    topic: "Class III & Intrinsically Safe Systems",
    session: "Session 8a",
    icon: "🔒",
    description: "NEC Article 503 for ignitable fibers and NEC Article 504 for intrinsically safe systems.",
    objectives: [
      {
        id: "c3is-1",
        title: "Define Class III hazardous locations",
        explanation:
          "Class III locations (NEC Article 503) are hazardous because of the presence of easily ignitable fibers or flyings — not normally in suspension in quantities sufficient to produce ignitable mixtures, but can collect around equipment and be ignited by sparks, arcs, or hot surfaces. Examples include textile mills processing cotton, rayon, or nylon; woodworking plants with fine wood shavings; and facilities processing other combustible fibers. Class III Division 1 — handled or used; Class III Division 2 — stored or handled in storage.",
      },
      {
        id: "c3is-2",
        title: "Recall Class III wiring and equipment requirements",
        explanation:
          "Class III locations use the same wiring methods as Class II (RMC, IMC, EMT, MI cable) with dusttight enclosures. Equipment must prevent accumulation of fibers/flyings by design — enclosed motors, totally enclosed blowers, dust-tight lighting fixtures. Lighting fixtures must be protected against physical damage and designed so that fibers cannot rest on heated surfaces. Surface temperatures must stay below 165°C (329°F) for equipment in contact with fibers and 329°F for equipment not in contact but where accumulations are possible.",
      },
      {
        id: "c3is-3",
        title: "Explain the concept of intrinsic safety (IS)",
        explanation:
          "Intrinsic safety (IS) is a protection method for equipment in hazardous locations that limits electrical energy — both thermal and electrical spark energy — to levels below those required to ignite the specific hazardous atmosphere. Rather than containing an explosion or keeping out the atmosphere, IS prevents the ignition source from existing. IS systems use intrinsically safe barriers (zener barriers or galvanic isolators) to limit voltage and current from safe-area equipment reaching the hazardous-area device (sensor, switch, transmitter). Listed for NEC Article 504.",
      },
      {
        id: "c3is-4",
        title: "Understand associated apparatus and wiring for IS systems",
        explanation:
          "An IS system has two parts: the intrinsically safe apparatus (sensor/actuator in the hazardous area) and the associated apparatus (the barrier/isolator in the safe area). Both must be listed and the system must be installed per the control drawing (required by NEC 504.10). IS wiring (blue-labeled or separately routed) must be segregated from non-IS wiring to prevent energy transfer that could defeat the safety. Conduit seals are generally not required for IS wiring because the energy levels cannot cause ignition. Documentation and the control drawing must be maintained at the installation.",
      },
    ],
  },
  {
    id: "photoelectric-proximity",
    topic: "Photoelectric & Proximity Sensors",
    session: "Session 7",
    icon: "👁️",
    description: "Operating principles and applications of industrial sensing devices.",
    objectives: [
      {
        id: "pps-1",
        title: "Describe the three photoelectric sensor configurations",
        explanation:
          "The three types are: (1) Through-beam (opposed mode) — emitter and receiver are separate, aligned across the detection zone; object detection breaks the beam; longest range and most reliable; (2) Retroreflective — emitter and receiver are in the same housing; beam reflects off a retroreflector back to the receiver; easier installation than through-beam; (3) Diffuse (proximity mode) — emitter and receiver in same housing; detects light reflected directly off the target; shortest range; sensitive to target reflectivity and color.",
      },
      {
        id: "pps-2",
        title: "Explain inductive and capacitive proximity sensor operation",
        explanation:
          "Inductive proximity sensors detect metallic objects by generating an oscillating electromagnetic field from a ferrite-core coil in the sensor face. When a metal target enters the field, eddy currents are induced in the target, loading the oscillator circuit and causing its amplitude to decrease — a trigger circuit detects this and switches the output. Only detects metals. Capacitive proximity sensors detect changes in capacitance at the sensor face — can detect non-metallic materials (liquids, plastics, grain in a bin through walls) by their effect on the electric field between sensor electrodes.",
      },
      {
        id: "pps-3",
        title: "Interpret NPN vs. PNP sensor output types",
        explanation:
          "NPN (sinking) output — the output transistor connects the load to ground when activated; the load is connected between V+ and the output terminal; used with PLCs that source current to the input. PNP (sourcing) output — the output transistor connects the load to V+ when activated; the load is connected between the output terminal and ground; used with PLCs that sink current from the input. Most modern sensors offer either NPN or PNP outputs (some are selectable). The PLC input card type must match the sensor output type. Dark-on vs. light-on (for photoelectrics) refers to whether the output activates when the beam is broken or made.",
      },
      {
        id: "pps-4",
        title: "Identify wiring and installation considerations",
        explanation:
          "Sensors typically use 2-wire or 3-wire connections: 3-wire (Brown = V+, Blue = 0V/Common, Black = Signal output) is most common for NPN/PNP sensors. 2-wire sensors connect in series with the load. Voltage range is typically 10–30 VDC. Maximum current rating of the output transistor must not be exceeded (typically 100–300 mA). Minimum load current (for 2-wire sensors) must be maintained for reliable operation. EMI from VFDs and contactors can interfere with sensors — use shielded cable, proper routing away from power wiring, and sensor filters. Sensing range is affected by target size, material, and ambient temperature.",
      },
    ],
  },
  {
    id: "esd-general",
    topic: "ESD & General",
    session: "Session 8a",
    icon: "⚠️",
    description: "Electrostatic discharge, grounding, and general electrical safety concepts.",
    objectives: [
      {
        id: "esd-1",
        title: "Explain how electrostatic discharge (ESD) is generated",
        explanation:
          "Electrostatic discharge is generated when two materials with different electrical potentials come into contact and then separate — the triboelectric effect. Walking on carpet, sliding PCBs in/out of racks, or handling components with ungrounded tools can generate tens of thousands of volts on the human body or equipment. When this charge discharges through a sensitive component (MOSFET, CMOS IC, thin-film sensors), the resulting current pulse can instantly destroy the component or cause latent damage that reduces reliability. Human Body Model (HBM) ESD testing simulates a 100 pF capacitor discharging through 1.5 kΩ.",
      },
      {
        id: "esd-2",
        title: "Identify ESD control measures in an industrial environment",
        explanation:
          "ESD control measures include: (1) Grounded wrist straps — worn when handling ESD-sensitive components, connected to earth ground or an ESD mat; (2) ESD mats — dissipative or conductive surfaces that slowly bleed charge to ground (not a direct short — they use 1 MΩ resistors to limit current); (3) ESD bags and packaging — pink poly or metallic shielding bags for storage and transport; (4) Ionizers — air ionizers neutralize charge on non-conductive surfaces that can't be grounded; (5) ESD flooring and footwear — in ESD-controlled areas, conductive flooring with ESD shoes/straps. ANSI/ESD S20.20 is the standard for ESD control programs.",
      },
      {
        id: "esd-3",
        title: "Understand grounding and bonding for static control",
        explanation:
          "Ground is the reference point for ESD control — all conductive elements in an ESD-protected area (EPA) should be bonded to a common ground point. Bonding equalizes potential between objects so no discharge can occur between them. The equipment ground (green wire, conduit system) provides the path. In hazardous locations, static grounding of tanks, containers, and conveying equipment is critical — NEC 501.16 requires bonding of metallic equipment in Class I locations. Flexible bonding straps must be used where vibration or movement would break rigid connections.",
      },
      {
        id: "esd-4",
        title: "Review general electrical safety and PPE requirements",
        explanation:
          "Arc flash and shock are the primary electrical hazards. NFPA 70E requires an arc flash hazard analysis to determine incident energy at each piece of equipment. PPE is selected based on incident energy: Category 1 (4 cal/cm²) — arc-rated face shield and shirt; Category 2 (8 cal/cm²) — arc flash suit hood; Category 3 (25 cal/cm²) — arc flash suit; Category 4 (40 cal/cm²) — full arc flash suit. The hierarchy of controls (elimination, substitution, engineering controls, administrative controls, PPE) should be followed — energized work should only be performed when de-energized work is infeasible. LOTO per OSHA 1910.147 applies to all energy isolation.",
      },
    ],
  },
];
