export function renderAuvElectricalPage(): string {
  const teamPhoto = '/images/f0621d_484532f63a75403986c6ae8_8463546e62.jpg';
  const subteamMembers = "Left to right: Gabe Piano, Seth Richard, Sachin Kumar, Maggie Wu, James Williamson, Rhea Deshpande, Yatin Gour, Aras Jahangiri, Kyle Lee, Jovan Sohi, Malachy Frey, Adam Teodosio, David Manhart, Hasan Mohammad. Not pictured: Salman Amin, Saim Hajini, Antoine Godin, Reid Pratley.";

  const modules = [
    {
      title: "Main MCU",
      badge: "Compute & Real-Time Control",
      img: "/images/MainMCU_55ed335599.png",
      desc: "The onboard control system was redesigned by replacing the previous ESP32 with an STM32F7 standalone microcontroller. The high-performance ARM Cortex-M7 core provides hardware floating point processing, abundant DMA streams, and dedicated timers for real-time sensor polling and thruster PWM allocation."
    },
    {
      title: "Actuator Board",
      badge: "Servos & Mechanism Triggers",
      img: "/images/ActuatorBoard_8a06b2081c.png",
      desc: "The Actuator Board controls all the servos on board the submarine. It allows each servo to be controlled independently and provides optical isolation to prevent electrical interference from high-current thrusters and solenoid surges from feeding back into sensitive microcontrollers."
    },
    {
      title: "Power Distribution Board (PDB)",
      badge: "High-Current Subsea Power",
      img: "/images/f0621d_e880175a54fe4d648d9a219_459fa78ae3.png",
      desc: "Engineered to deliver clean regulated voltages (16V, 12V, 5V, 3.3V) across high-draw subsea brushless thrusters, compute modules, and acoustic electronics. Built with integrated current/voltage sensing for real-time telemetry."
    },
    {
      title: "Magnetic Kill Switch",
      badge: "Safety & Emergency Shutdown",
      img: "/images/f0621d_9d08029334a54da7ac8462d_a3cb1804d3.png",
      desc: "A competition-mandated fail-safe that cuts primary battery power cleanly. Designed with a robust magnetic reed / hall latch mechanism completely sealed inside our waterproof enclosure."
    },
    {
      title: "Battery Management System (BMS)",
      badge: "Lithium Chemistry Safety",
      img: "/images/BMS_09cbda32d5.jpg",
      desc: "Custom multi-cell monitoring circuitry providing active cell balancing, over-current cutoffs, under-voltage protection, and precision thermal sensors attached directly to high-capacity LiPo packs."
    },
    {
      title: "Acoustic Hydrophone Pinger",
      badge: "Subsea Acoustic Localization",
      img: "/images/pinger_a8a32e6578.jpg",
      desc: "High-frequency subsea acoustic receivers paired with precision analog front-end bandpass filtering and preamplifiers to localize underwater acoustic beacons via microsecond-level Time Difference of Arrival (TDoA)."
    }
  ];

  return `
    <section class="section" style="padding-top: 60px;">
      <div class="container">
        <div class="section-header">
          <span class="badge">AUV Subsystems</span>
          <h1 class="section-title text-gradient">AUV Electrical Engineering</h1>
          <p class="section-subtitle">Custom multi-layer PCB designs, embedded STM32 firmware, and subsea power architecture.</p>
        </div>

        <!-- Team Banner -->
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 70px;">
          <img src="${teamPhoto}" alt="AUV Electrical Subteam" style="width: 100%; max-height: 460px; object-fit: cover;" />
          <div style="padding: 24px 32px;">
            <h3 style="font-size: 1.3rem; margin-bottom: 8px;">AUV Electrical Subteam</h3>
            <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${subteamMembers}</p>
          </div>
        </div>

        <!-- Electrical Modules -->
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
