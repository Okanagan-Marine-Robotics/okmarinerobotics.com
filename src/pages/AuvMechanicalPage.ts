export function renderAuvMechanicalPage(): string {
  const teamPhoto = '/images/IMG_4649_edited_c71b766b6b.jpg';
  const subteamMembers = "Left to right: Ryan Shaw, Dylan Leier, Lukas Schuler Desnoyers, Karan Salvadi, Allen Chen, John Mabbayad, Nate Katzer, Ryan Buch, Jaeden Rossner, Dani Mackay, Ben Muwanga, Evan Kappes. Not pictured: Abdullah Arif, Daniel Lu, Sam Bachnak, Harnoor Chugh, Jeffery Duong, Mahmoud Zaher, Matthew Ohlmann, William Kusuma, Zahidul Islam Bayzid, Ryan Adib, Tanner Knapton, Luke Kachura.";

  const modules = [
    {
      title: "Structures & Chassis Frame",
      badge: "Modular Aluminum Frame",
      img: "/images/f0621d_18349111ad044c49b1bdc8f_ad70984216.png",
      desc: "The revised aluminum frame reduces the number of individual members and simplifies joint geometry compared to Cascade. Utilizing precision waterjet cut 6061-T6 aluminum plates and extruded profiles, it guarantees rigidity, easy mounting points for 8 brushless thrusters, and rapid ballast adjustments."
    },
    {
      title: "Battery Enclosure",
      badge: "Thermal Management & Rapid Swap",
      img: "/images/battery_20enclosure_edited_070b163cbc.jpg",
      desc: "To improve thermal management and serviceability of Ogopogo, we relocated the high-capacity LiPo batteries from the central pressure hull into dedicated external subsea pods. This isolation enables 2-minute field swaps between competition qualification runs without compromising main hull seals."
    },
    {
      title: "Electronics Sliding Tray",
      badge: "Modular Internal Avionics",
      img: "/images/ElectricalTray_a6ce27f428.png",
      desc: "The internal electronics chassis slides out smoothly on custom laser-cut rails. Stacked acrylic plates organize the STM32 compute stack, motor speed controllers (ESCs), power regulators, and inertial sensors with dedicated wire management channels for quick diagnostic access."
    },
    {
      title: "Robotic Manipulator Arm",
      badge: "Subsea Manipulation",
      img: "/images/f0621d_bf22475d21b847c4a7fd91b_c9dede5a5d.png",
      desc: "A waterproof servo-driven 2-finger claw designed to grasp submerged PVC handles, open bin lids, and transport competition markers underwater. Uses high-friction textured gripper pads and compliant spring return mechanisms."
    },
    {
      title: "Pneumatic Torpedo Launchers",
      badge: "High-Accuracy Actuation",
      img: "/images/Torpedo_1dcfe8a85a.png",
      desc: "Dual pneumatic torpedo barrels driven by miniature CO2 regulators and solenoid valves. The hydrodynamic 3D-printed torpedoes feature spiral stabilizing fins engineered for straight flight paths through water into target slots."
    },
    {
      title: "Marker Dropper Mechanism",
      badge: "Gravity & Solenoid Release",
      img: "/images/f0621d_39cfe71c49114f888b9c0a2_8aa49ed73f.png",
      desc: "Independent dual-marker gravity drop system actuated by low-profile magnetic latches. Accurately drops weighted competition markers into underwater target bins upon mission planner command."
    }
  ];

  return `
    <section class="section" style="padding-top: 60px;">
      <div class="container">
        <div class="section-header">
          <span class="badge">AUV Subsystems</span>
          <h1 class="section-title text-gradient">AUV Mechanical Engineering</h1>
          <p class="section-subtitle">Chassis structures, pressure hulls, dynamic seals, and precision subsea manipulators.</p>
        </div>

        <!-- Team Banner -->
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 70px;">
          <img src="${teamPhoto}" alt="AUV Mechanical Subteam" style="width: 100%; max-height: 460px; object-fit: cover;" />
          <div style="padding: 24px 32px;">
            <h3 style="font-size: 1.3rem; margin-bottom: 8px;">AUV Mechanical Subteam</h3>
            <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${subteamMembers}</p>
          </div>
        </div>

        <!-- Mechanical Modules -->
        <div style="display: flex; flex-direction: column; gap: 60px;">
          ${modules.map((m, idx) => `
            <div class="glass-card" style="display: grid; grid-template-columns: ${idx % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr'}; gap: 40px; align-items: center;">
              <div style="order: ${idx % 2 === 0 ? 1 : 2}; background: #061220; border-radius: var(--radius-md); padding: 20px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-color);">
                <img src="${m.img}" alt="${m.title}" style="max-height: 280px; object-fit: contain;" />
              </div>
              <div style="order: ${idx % 2 === 0 ? 2 : 1};">
                <span class="badge" style="margin-bottom: 12px;">${m.badge}</span>
                <h2 style="font-size: 2rem; margin-bottom: 16px;">${m.title}</h2>
                <p style="color: #CBD5E1; font-size: 1.05rem; line-height: 1.8;">${m.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
