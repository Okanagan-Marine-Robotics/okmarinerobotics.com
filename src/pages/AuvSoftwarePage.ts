export function renderAuvSoftwarePage(): string {
  const teamRoster = "Kurt Galanto (Software Lead), Hammad Tariq, Arsh Mehta, Jia Yi Lu, Chigoziri Okpanku, Aditya Patel.";

  return `
    <section class="section" style="padding-top: 50px; background: var(--bg-page);">
      <div class="container">
        <div class="section-header">
          <span class="badge">AUV Subsystems</span>
          <h1 class="section-title">AUV Software Architecture</h1>
          <p class="section-subtitle">A modular, scalable autonomy stack built on ROS2 Humble, computer vision, acoustic localization, and behavior tree planning.</p>
        </div>

        <div class="card" style="margin-bottom: 40px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
          <div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--navy-deep); margin-bottom: 4px; text-transform: uppercase;">Software Subteam Roster</h3>
            <p style="color: var(--text-body);">${teamRoster}</p>
          </div>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="https://github.com/Okanagan-Marine-Robotics/okmr_auv" target="_blank" rel="noopener" class="btn btn-primary" style="padding: 10px 20px; font-size: 0.95rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub Repository
            </a>
            <a href="https://docs.google.com/document/d/1PhQ2q0ED-8mXD5I1RwiWC_7xKGJy2q97WKZ9-5tj8FE/edit?tab=t.0" target="_blank" rel="noopener" class="btn btn-secondary" style="padding: 10px 20px; font-size: 0.95rem;">
              Software Docs
            </a>
          </div>
        </div>

        <!-- Architecture Overview -->
        <div class="card" style="margin-bottom: 50px;">
          <span class="badge" style="width: fit-content; margin-bottom: 12px;">System Architecture</span>
          <h2 style="font-size: 2rem; font-weight: 800; color: var(--navy-deep); margin-bottom: 14px; text-transform: uppercase;">5-Tier Control Hierarchy</h2>
          <p style="color: var(--text-body); font-size: 1.05rem; line-height: 1.8; margin-bottom: 24px;">
            Our software stack is organized using an industry-standard Subsea Control Hierarchy, isolating low-level hardware actuation from high-level strategic reasoning. This guarantees that individual node failures never compromise vehicle stability.
          </p>
          <div style="background: #F8FAFC; border-radius: var(--radius-md); padding: 24px; text-align: center; border: 1px solid var(--border-color); margin-bottom: 24px;">
            <img src="/images/f0621d_a915c38e765942c181ee2af_cccc02c609.png" alt="ROS2 Software System Architecture Diagram" style="max-height: 380px; margin: 0 auto; object-fit: contain;" />
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
            <div style="background: var(--ocean-tint); padding: 18px; border-radius: var(--radius-sm); border: 1px solid #D0E4F5;">
              <div style="color: var(--ocean-blue); font-weight: 800; font-family: var(--font-heading); font-size: 1.15rem;">L5 — Planning</div>
              <p style="color: var(--text-body); font-size: 0.9rem; margin-top: 6px;">Executive mission logic, qualification task sequencing, and fallback behavior trees.</p>
            </div>
            <div style="background: var(--ocean-tint); padding: 18px; border-radius: var(--radius-sm); border: 1px solid #D0E4F5;">
              <div style="color: var(--ocean-blue); font-weight: 800; font-family: var(--font-heading); font-size: 1.15rem;">L4 — Perception</div>
              <p style="color: var(--text-body); font-size: 0.9rem; margin-top: 6px;">YOLOv8 target detection, OpenCV color gating, buoy identification, and bin segmentation.</p>
            </div>
            <div style="background: var(--ocean-tint); padding: 18px; border-radius: var(--radius-sm); border: 1px solid #D0E4F5;">
              <div style="color: var(--ocean-blue); font-weight: 800; font-family: var(--font-heading); font-size: 1.15rem;">L3 — Navigation</div>
              <p style="color: var(--text-body); font-size: 0.9rem; margin-top: 6px;">State estimation, Extended Kalman Filter (EKF), IMU fusion, and waypoint trajectory planning.</p>
            </div>
            <div style="background: var(--ocean-tint); padding: 18px; border-radius: var(--radius-sm); border: 1px solid #D0E4F5;">
              <div style="color: var(--ocean-blue); font-weight: 800; font-family: var(--font-heading); font-size: 1.15rem;">L2 — Execution</div>
              <p style="color: var(--text-body); font-size: 0.9rem; margin-top: 6px;">PID position/velocity loops and 8-thruster holonomic allocation matrix.</p>
            </div>
            <div style="background: var(--ocean-tint); padding: 18px; border-radius: var(--radius-sm); border: 1px solid #D0E4F5;">
              <div style="color: var(--ocean-blue); font-weight: 800; font-family: var(--font-heading); font-size: 1.15rem;">L1 — Hardware</div>
              <p style="color: var(--text-body); font-size: 0.9rem; margin-top: 6px;">STM32 microcontroller drivers, serial micro-ROS communication, and PWM generators.</p>
            </div>
          </div>
        </div>

        <!-- Software Modules Grid -->
        <div class="card-grid">
          <div class="card">
            <span class="badge" style="width: fit-content; margin-bottom: 12px;">Computer Vision</span>
            <h3 style="font-size: 1.45rem; font-weight: 800; color: var(--navy-deep); margin-bottom: 10px; text-transform: uppercase;">YOLOv8 & OpenCV Pipeline</h3>
            <p style="color: var(--text-body); line-height: 1.6; margin-bottom: 16px;">
              Trained on hundreds of synthetic and in-pool annotated images, our deep neural networks accurately recognize underwater gates, torpedo targets, style markers, and bins despite water turbidity and shifting caustic sunlight.
            </p>
            <div style="background: #F8FAFC; border-radius: var(--radius-sm); padding: 12px; text-align: center; border: 1px solid var(--border-color); margin-top: auto;">
              <img src="/images/image_bb73b7e2fb.png" alt="OpenCV Object Detection" style="max-height: 180px; margin: 0 auto; object-fit: contain;" />
            </div>
          </div>

          <div class="card">
            <span class="badge" style="width: fit-content; margin-bottom: 12px;">Mission Logic</span>
            <h3 style="font-size: 1.45rem; font-weight: 800; color: var(--navy-deep); margin-bottom: 10px; text-transform: uppercase;">Behavior Tree Planner</h3>
            <p style="color: var(--text-body); line-height: 1.6; margin-bottom: 16px;">
              Our automated planning system relies on reactive Behavior Trees. If a target is lost or obstructed by bubbles, the vehicle gracefully pivots into a localized search pattern before timing out and moving to the next objective.
            </p>
            <div style="background: #F8FAFC; border-radius: var(--radius-sm); padding: 12px; text-align: center; border: 1px solid var(--border-color); margin-top: auto;">
              <img src="/images/image_45f613065f.png" alt="Behavior Tree Mission Planner" style="max-height: 180px; margin: 0 auto; object-fit: contain;" />
            </div>
          </div>

          <div class="card">
            <span class="badge" style="width: fit-content; margin-bottom: 12px;">Acoustic Localization</span>
            <h3 style="font-size: 1.45rem; font-weight: 800; color: var(--navy-deep); margin-bottom: 10px; text-transform: uppercase;">Hydrophone TDoA Processing</h3>
            <p style="color: var(--text-body); line-height: 1.6; margin-bottom: 16px;">
              To locate the underwater acoustic pinger, Ogopogo samples signals from an array of 4 subsea hydrophones. Phase differences are processed using cross-correlation algorithms to compute precise 3D azimuth and elevation bearings.
            </p>
            <div style="background: #F8FAFC; border-radius: var(--radius-sm); padding: 12px; text-align: center; border: 1px solid var(--border-color); margin-top: auto;">
              <img src="/images/image_4158e25f29.png" alt="Acoustic Signal Processing" style="max-height: 180px; margin: 0 auto; object-fit: contain;" />
            </div>
          </div>

          <div class="card">
            <span class="badge" style="width: fit-content; margin-bottom: 12px;">Digital Twin</span>
            <h3 style="font-size: 1.45rem; font-weight: 800; color: var(--navy-deep); margin-bottom: 10px; text-transform: uppercase;">Stonefish Subsea Simulation</h3>
            <p style="color: var(--text-body); line-height: 1.6; margin-bottom: 16px;">
              We replicate competition ocean dynamics in Stonefish, simulating hydrodynamic drag, thruster fluid dynamics, synthetic camera distortion, and buoyancy imbalances to validate full mission logic before touching pool water.
            </p>
            <div style="background: #F8FAFC; border-radius: var(--radius-sm); padding: 12px; text-align: center; border: 1px solid var(--border-color); margin-top: auto;">
              <img src="/images/image_3160a37482.png" alt="Stonefish Subsea Simulator" style="max-height: 180px; margin: 0 auto; object-fit: contain;" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
