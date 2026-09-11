import { siteConfig } from '../data/siteData';

export function renderAuvPage(): string {
  return `
    <section class="section" style="padding-top: 60px;">
      <div class="container">
        <div class="section-header">
          <span class="badge">RoboSub Competition Vehicle</span>
          <h1 class="section-title text-gradient">The AUV — Ogopogo</h1>
          <p class="section-subtitle">Say hello to Ogopogo, our second-generation autonomous underwater vehicle built for RoboSub in California.</p>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 60px;">
          <img src="${siteConfig.poolTestingImage}" alt="Ogopogo submerged in testing pool" style="width: 100%; max-height: 480px; object-fit: cover;" />
          <div style="padding: 36px;">
            <h2 style="font-size: 1.8rem; margin-bottom: 14px;">Next-Generation Subsea Autonomy</h2>
            <p style="color: #CBD5E1; font-size: 1.1rem; line-height: 1.8; margin-bottom: 24px;">
              Ogopogo is a true team effort that will continue to evolve moving toward RoboSub 2026. Each improvement builds on what we've learned from previous challenges, testing sessions at the Kelowna Family YMCA, and judge feedback in California.
            </p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 18px; padding-top: 20px; border-top: 1px solid var(--border-color);">
              <div>
                <div style="color: var(--accent-cyan); font-weight: 700; font-size: 1.2rem;">8 Thrusters</div>
                <div style="color: var(--text-muted); font-size: 0.9rem;">6-DOF Full Holonomic Control</div>
              </div>
              <div>
                <div style="color: var(--accent-cyan); font-weight: 700; font-size: 1.2rem;">STM32F7 MCU</div>
                <div style="color: var(--text-muted); font-size: 0.9rem;">Custom Embedded Electronics</div>
              </div>
              <div>
                <div style="color: var(--accent-cyan); font-weight: 700; font-size: 1.2rem;">ROS2 Middleware</div>
                <div style="color: var(--text-muted); font-size: 0.9rem;">Humble Robotics Architecture</div>
              </div>
              <div>
                <div style="color: var(--accent-cyan); font-weight: 700; font-size: 1.2rem;">YOLOv8 Vision</div>
                <div style="color: var(--text-muted); font-size: 0.9rem;">Real-Time Subsea Perception</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Subsystems Deep Dive Cards -->
        <h2 style="font-size: 2rem; margin-bottom: 30px; text-align: center;">Explore The Subsystems</h2>
        <div class="card-grid">
          <div class="glass-card">
            <span class="badge" style="width: fit-content; margin-bottom: 12px;">Subsystem 01</span>
            <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Mechanical Engineering</h3>
            <p style="color: var(--text-muted); margin-bottom: 24px;">
              Modular aluminum chassis, waterproof acrylic pressure hull, custom modular battery enclosure, internal electronics sliding tray, pneumatic torpedo and dropper actuators.
            </p>
            <a href="/auv-mechanical" class="btn btn-secondary" style="margin-top: auto;" data-nav>
              View Mechanical
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div class="glass-card">
            <span class="badge" style="width: fit-content; margin-bottom: 12px;">Subsystem 02</span>
            <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Electrical Engineering</h3>
            <p style="color: var(--text-muted); margin-bottom: 24px;">
              Redesigned STM32F7 standalone MCU, dedicated Actuator Board, heavy-duty Power Distribution Board (PDB), magnetic kill switch, custom Battery Management System (BMS), and subsea acoustic hydrophones.
            </p>
            <a href="/auv-electrical" class="btn btn-secondary" style="margin-top: auto;" data-nav>
              View Electrical
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div class="glass-card">
            <span class="badge" style="width: fit-content; margin-bottom: 12px;">Subsystem 03</span>
            <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Software & Autonomy</h3>
            <p style="color: var(--text-muted); margin-bottom: 24px;">
              Layered 5-tier control hierarchy, ROS2 nodes, automated state machine mission planner, OpenCV & YOLOv8 perception, acoustic time-difference-of-arrival (TDoA) localization, and Stonefish simulation.
            </p>
            <a href="/auv-software" class="btn btn-secondary" style="margin-top: auto;" data-nav>
              View Software
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
