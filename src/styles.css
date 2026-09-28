* {
  box-sizing: border-box;
}

:root {
  color-scheme: dark;
  --bg: #080b16;
  --bg-2: #0f1630;
  --panel: rgba(18, 22, 38, 0.82);
  --panel-strong: rgba(12, 15, 26, 0.96);
  --stroke: rgba(144, 164, 197, 0.22);
  --text: #edf4ff;
  --muted: #9dabc2;
  --pink: #ff6bd6;
  --violet: #8d7dff;
  --cyan: #68e6ff;
  --gold: #f9d370;
  --green: #7ae7b5;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top, rgba(141, 125, 255, 0.18), transparent 35%),
    radial-gradient(circle at 30% 20%, rgba(255, 107, 214, 0.12), transparent 20%),
    linear-gradient(180deg, #090d1a 0%, #0f172d 52%, #070b14 100%);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

.wrap {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.app-shell {
  padding-bottom: 64px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 0;
  background: rgba(8, 11, 22, 0.78);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--stroke);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  font-weight: 900;
  background: linear-gradient(135deg, var(--pink), var(--violet));
  box-shadow: 0 0 24px rgba(255, 107, 214, 0.45);
}

.brand-block h1 {
  margin: 0;
  font-size: 1.4rem;
}

.eyebrow {
  display: block;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 18px;
  color: var(--muted);
  font-size: 0.95rem;
}

.primary-button,
.ghost-button,
.tip-button,
.ticket-button {
  border: 1px solid transparent;
  border-radius: 999px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.primary-button {
  padding: 0.9rem 1.2rem;
  background: linear-gradient(135deg, var(--pink), var(--violet));
  color: white;
  font-weight: 700;
  box-shadow: 0 12px 32px rgba(141, 125, 255, 0.34);
}

.primary-button.small {
  padding: 0.7rem 1rem;
}

.ghost-button {
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.04);
  border-color: var(--stroke);
  color: var(--text);
}

.tip-button {
  width: 100%;
  padding: 0.95rem 1rem;
  border-color: rgba(249, 211, 112, 0.55);
  background: linear-gradient(135deg, rgba(249, 211, 112, 0.18), rgba(255, 107, 214, 0.1));
  color: var(--text);
  font-weight: 700;
}

.primary-button:hover,
.ghost-button:hover,
.tip-button:hover,
.ticket-button:hover {
  transform: translateY(-1px);
}

.page {
  padding-top: 36px;
}

.hero-section {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 22px;
}

.hero-copy,
.token-panel,
.map-shell,
.broadcast-panel,
.profile-card,
.voice-card,
.wallet-card,
.cockpit-card,
.audio-card {
  background: var(--panel);
  border: 1px solid var(--stroke);
  border-radius: 28px;
  box-shadow: 0 16px 40px rgba(2, 5, 12, 0.32);
}

.hero-copy {
  padding: 36px;
}

.pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.pill {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.5rem 0.8rem;
  background: rgba(131, 212, 255, 0.12);
  border: 1px solid rgba(104, 230, 255, 0.35);
  color: var(--cyan);
  font-size: 0.75rem;
  font-weight: 700;
}

.pill.neutral {
  background: rgba(255, 255, 255, 0.03);
  border-color: var(--stroke);
  color: var(--muted);
}

.hero-copy h2 {
  margin: 0 0 18px;
  font-size: clamp(2.5rem, 5vw, 4.6rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
}

.hero-copy p {
  margin: 0;
  max-width: 60ch;
  color: var(--muted);
  font-size: 1.04rem;
  line-height: 1.7;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}

.stats-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
}

.stats-row div {
  min-width: 110px;
  display: flex;
  flex-direction: column;
}

.stats-row strong {
  font-size: 1.8rem;
}

.stats-row span {
  color: var(--muted);
}

.token-panel {
  padding: 22px 18px;
}

.panel-header,
.section-head,
.voice-header,
.wallet-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.status-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 14px rgba(122, 231, 181, 0.8);
}

.main-token {
  margin-top: 18px;
  padding: 18px 20px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(255, 107, 214, 0.12), rgba(104, 230, 255, 0.08));
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.main-token small,
.token-row small,
.meta-grid small,
.status-grid small {
  display: block;
  color: var(--muted);
}

.main-token strong {
  display: block;
  margin-top: 6px;
  font-size: 1.5rem;
}

.main-token p {
  margin: 14px 0 0;
  color: var(--muted);
}

.token-list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.token-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 10px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.token-row strong {
  display: block;
}

.token-row span {
  color: var(--muted);
  font-size: 0.75rem;
}

.plaza-section,
.interaction-section,
.coaster-section {
  margin-top: 34px;
}

.section-head {
  margin-bottom: 18px;
}

.section-head h3 {
  margin: 6px 0 0;
  font-size: clamp(1.7rem, 3vw, 2.5rem);
}

.plaza-layout,
.interaction-layout,
.coaster-layout {
  display: grid;
  gap: 20px;
}

.plaza-layout {
  grid-template-columns: 1.5fr 0.8fr;
}

.map-shell {
  position: relative;
  min-height: 520px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(99, 123, 255, 0.18), rgba(11, 16, 28, 0.7)),
    radial-gradient(circle at 30% 25%, rgba(106, 214, 255, 0.22), transparent 30%),
    #0b1220;
}

.map-shell::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 38px 38px;
}

.zone {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 18px;
  border: 1px solid rgba(148, 191, 255, 0.38);
  background: rgba(90, 120, 210, 0.18);
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 0.8rem;
  backdrop-filter: blur(8px);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.zone.active {
  box-shadow: 0 0 28px rgba(104, 230, 255, 0.26);
  border-color: rgba(104, 230, 255, 0.5);
  transform: scale(1.02);
}

.zone.gate {
  background: rgba(255, 107, 214, 0.18);
}

.zone.arcade {
  background: rgba(104, 230, 255, 0.12);
}

.zone.vip {
  background: rgba(249, 211, 112, 0.1);
}

.speech-bubble {
  position: absolute;
  padding: 0.55rem 0.75rem;
  border-radius: 999px;
  background: rgba(12, 18, 30, 0.82);
  border: 1px solid var(--stroke);
  font-size: 0.72rem;
  color: var(--text);
}

.bubble-one { left: 28%; top: 12%; }
.bubble-two { left: 62%; top: 54%; }
.bubble-three { left: 58%; top: 12%; }

.avatar {
  position: absolute;
  width: 28px;
  height: 28px;
  transform: translate(-50%, -50%);
  transition: left 0.5s ease, top 0.5s ease;
}

.avatar-shadow {
  position: absolute;
  inset: 8px 4px 0 4px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.42);
}

.avatar-body {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 18px;
  height: 18px;
  transform: translateX(-50%);
  border-radius: 50% 50% 40% 40%;
  background: linear-gradient(180deg, #ffdd9d, #ff9a4d);
  border: 2px solid rgba(255, 255, 255, 0.4);
}

.broadcast-panel {
  padding: 20px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.plaza-note {
  padding: 0.75rem 0.8rem;
  border-radius: 12px;
  background: rgba(104, 230, 255, 0.08);
  border: 1px solid rgba(104, 230, 255, 0.2);
  color: var(--cyan);
  font-size: 0.85rem;
}

.chat-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 220px;
  overflow-y: auto;
}

.chat-row {
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.04);
}

.chat-row strong {
  display: block;
  margin-bottom: 6px;
  font-size: 0.8rem;
}

.chat-row p {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
}

.chat-row.me {
  background: rgba(104, 230, 255, 0.08);
}

.roster {
  margin-top: auto;
}

.roster-header {
  color: var(--muted);
  margin-bottom: 10px;
}

.roster-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: 14px;
  background: rgba(255,255,255,0.02);
  color: var(--text);
  text-align: left;
}

.roster-item + .roster-item {
  margin-top: 8px;
}

.roster-item.active {
  background: rgba(141, 125, 255, 0.12);
  border-color: rgba(141, 125, 255, 0.35);
}

.mini-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-block;
}

.roster-item strong,
.roster-item small {
  display: block;
}

.roster-item small {
  color: var(--muted);
}

.wallet-panel {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;
  margin-bottom: 18px;
}

.wallet-card {
  padding: 18px 20px;
}

.wallet-card.big {
  background: linear-gradient(135deg, rgba(255, 107, 214, 0.08), rgba(104, 230, 255, 0.06));
}

.wallet-card strong {
  font-size: 1.4rem;
}

.ticket-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 18px;
}

.ticket-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  width: 100%;
  padding: 16px 18px;
  background: rgba(255,255,255,0.025);
  border-color: rgba(255,255,255,0.04);
  color: var(--text);
}

.ticket-button.selected {
  border-color: rgba(104, 230, 255, 0.6);
  background: rgba(104, 230, 255, 0.08);
}

.ticket-button small,
.ticket-button span {
  color: var(--muted);
}

.wallet-card h4 {
  margin: 12px 0 10px;
  font-size: 1.5rem;
}

.wallet-card p {
  margin: 0 0 12px;
  color: var(--muted);
  line-height: 1.6;
}

.wallet-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  display: grid;
  gap: 8px;
}

.interaction-layout {
  grid-template-columns: 0.95fr 1.05fr;
}

.profile-card,
.voice-card {
  padding: 22px;
}

.profile-top {
  display: flex;
  align-items: center;
  gap: 12px;
}

.profile-top h4,
.voice-header h4,
.audio-header h4 {
  margin: 0;
  font-size: 1.3rem;
}

.profile-top span,
.voice-header span {
  color: var(--muted);
}

.profile-badge {
  width: 42px;
  height: 42px;
  border-radius: 14px;
}

.meta-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 18px;
}

.meta-grid > div,
.status-grid > div {
  padding: 12px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255,255,255,0.04);
}

.thread-box {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 180px;
}

.thread-item {
  max-width: 80%;
  padding: 10px 12px;
  border-radius: 14px;
  line-height: 1.5;
}

.thread-item.me {
  margin-left: auto;
  background: rgba(255, 107, 214, 0.12);
}

.thread-item.them {
  background: rgba(255,255,255,0.03);
}

.composer {
  margin-top: 18px;
  display: flex;
  gap: 10px;
}

.composer input {
  width: 100%;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--stroke);
  border-radius: 999px;
  color: var(--text);
  padding: 0.9rem 1rem;
}

.voice-header {
  margin-bottom: 18px;
}

.timer {
  display: inline-flex;
  padding: 0.5rem 0.7rem;
  border-radius: 999px;
  background: rgba(122, 231, 181, 0.08);
  border: 1px solid rgba(122, 231, 181, 0.2);
  color: var(--green);
  font-weight: 700;
}

.waveform {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 8px;
  height: 110px;
  padding: 16px 14px;
  border-radius: 18px;
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.04);
}

.waveform span {
  display: inline-block;
  width: 100%;
  border-radius: 999px 999px 0 0;
  background: linear-gradient(180deg, var(--cyan), var(--violet));
}

.call-actions {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}

.video-view {
  position: relative;
  margin-top: 18px;
  height: 220px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
  background:
    linear-gradient(180deg, rgba(20, 28, 48, 0.7), rgba(7, 10, 17, 0.95)),
    radial-gradient(circle at 50% 40%, rgba(104, 230, 255, 0.2), transparent 26%);
}

.video-view::before {
  content: '';
  position: absolute;
  inset: 20% 22% 15% 18%;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(0,0,0,0.2), rgba(5,8,15,0.8));
  border: 1px solid rgba(255,255,255,0.04);
}

.video-overlay {
  position: absolute;
  left: 18px;
  bottom: 16px;
  display: inline-flex;
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: rgba(5, 8, 15, 0.7);
  border: 1px solid rgba(255,255,255,0.08);
  color: var(--muted);
}

.coaster-layout {
  grid-template-columns: 1.3fr 0.7fr;
}

.cockpit-card,
.audio-card {
  padding: 22px;
}

.cockpit-horizon {
  position: relative;
  height: 270px;
  overflow: hidden;
  border-radius: 20px;
  background: linear-gradient(180deg, #17263f 0%, #0d182f 28%, #081319 100%);
  border: 1px solid rgba(255,255,255,0.06);
}

.sky {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(94,157,255,0.24), rgba(0,0,0,0)),
    linear-gradient(135deg, rgba(255,107,214,0.18), transparent 35%);
}

.track {
  position: absolute;
  left: -10%;
  right: -10%;
  bottom: 0;
  height: 120px;
  border-radius: 50% 50% 0 0 / 20px 20px 0 0;
  background: linear-gradient(180deg, #2d2d3e, #6a6b74 40%, #262736 100%);
  transform: perspective(700px) rotateX(62deg) scaleX(1.2);
  box-shadow: 0 -16px 24px rgba(104, 230, 255, 0.2);
}

.hud-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.gauge-wrap {
  padding: 12px;
  border-radius: 14px;
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.04);
}

.gauge-wrap span {
  color: var(--muted);
}

.gauge-wrap strong {
  display: block;
  margin-top: 8px;
  font-size: 1.3rem;
}

.gauge,
.meter {
  position: relative;
  overflow: hidden;
  height: 10px;
  margin-top: 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
}

.gauge i,
.meter i {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--cyan), var(--pink));
}

.boost-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.audio-header {
  margin-bottom: 18px;
}

.sound-stack {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sound-stack label {
  display: block;
  margin-bottom: 8px;
  color: var(--muted);
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 22px;
}

.status-grid strong {
  display: block;
  margin-top: 6px;
}

@media (max-width: 900px) {
  .hero-section,
  .plaza-layout,
  .interaction-layout,
  .coaster-layout,
  .wallet-panel {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }
}

@media (max-width: 560px) {
  .hero-copy,
  .token-panel,
  .profile-card,
  .voice-card,
  .cockpit-card,
  .audio-card,
  .broadcast-panel,
  .wallet-card {
    padding: 18px;
  }

  .hero-copy h2 {
    font-size: 2.7rem;
  }

  .stats-row {
    gap: 12px;
  }

  .composer {
    flex-direction: column;
  }

  .status-grid,
  .ticket-grid {
    grid-template-columns: 1fr;
  }
}
