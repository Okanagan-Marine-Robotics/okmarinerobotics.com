export function renderHydrofoilPage(): string {
  const heroImg = '/images/11C89DD6-862A-4788-BB88-BC096E_f7ef30bc84.jpeg';

  return `
    <section class="section" style="padding-top: 60px;">
      <div class="container">
        <div class="section-header">
          <span class="badge">A New Endeavour</span>
          <h1 class="section-title text-gradient">The Hydrofoil Project</h1>
          <p class="section-subtitle">Expanding our marine engineering portfolio with high-efficiency water surface craft and active flight control.</p>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 60px;">
          <img src="${heroImg}" alt="Hydrofoil project concept" style="width: 100%; max-height: 480px; object-fit: cover;" />
          <div style="padding: 36px;">
            <h2 style="font-size: 1.8rem; margin-bottom: 14px;">Next Horizon: Hydrodynamic Flight</h2>
            <p style="color: #CBD5E1; font-size: 1.15rem; line-height: 1.8; margin-bottom: 24px;">
              This year marks the exciting start of our new Hydrofoil project! Our goal is to bring a new engineering challenge to life that expands our team's diverse portfolio. Stay tuned as we design, prototype, and test for the Hydrofoil's first season on Okanagan Lake!
            </p>
            <div style="display: flex; gap: 16px; flex-wrap: wrap;">
              <a href="/our-team" class="btn btn-primary" data-nav>Meet the Hydrofoil Team</a>
              <a href="/contact-us" class="btn btn-secondary" data-nav>Get Involved</a>
            </div>
          </div>
        </div>

        <!-- Project Pillars -->
        <div class="card-grid">
          <div class="glass-card">
            <span class="badge" style="width: fit-content; margin-bottom: 12px;">Hydrodynamics</span>
            <h3 style="font-size: 1.4rem; margin-bottom: 10px;">Foil Aerofoil & Lift Profile</h3>
            <p style="color: var(--text-muted); line-height: 1.7;">
              Computational Fluid Dynamics (CFD) modeling using specialized low-Reynolds aerofoil profiles designed to optimize lift-to-drag ratio (L/D) and delay cavitation at cruising speeds.
            </p>
          </div>

          <div class="glass-card">
            <span class="badge" style="width: fit-content; margin-bottom: 12px;">Composite Materials</span>
            <h3 style="font-size: 1.4rem; margin-bottom: 10px;">Carbon-Fiber Construction</h3>
            <p style="color: var(--text-muted); line-height: 1.7;">
              Manufacturing vacuum-infused carbon fiber composite struts and wings, delivering extreme torsional stiffness to withstand bending moments while minimizing vehicle mass.
            </p>
          </div>

          <div class="glass-card">
            <span class="badge" style="width: fit-content; margin-bottom: 12px;">Active Control</span>
            <h3 style="font-size: 1.4rem; margin-bottom: 10px;">Ride Height & Pitch Autopilot</h3>
            <p style="color: var(--text-muted); line-height: 1.7;">
              Integrating ultrasonic water-clearance sensors, IMUs, and micro-actuated trailing edge flaps to maintain stable flight altitude over varying surface waves and water chop.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
