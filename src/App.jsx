import { useEffect, useMemo, useState } from 'react';

const supportTokens = [
  { name: 'Balloon', symbol: 'BALLOON', address: '0x494301facc434ca703239e3e1e5def31fdc20ba3', tag: 'Carnival boost' },
  { name: 'Caffeine', symbol: 'CAFFEINE', address: '0x5a69d0cc5783bd15c437dc329d78319325d13ba3', tag: 'Nitro launch' },
  { name: 'Zai', symbol: 'ZAI', address: '0x05e4c8b357da5981496cc7b2b0b8ea3956212ba3', tag: 'Telemetry copilot' },
  { name: 'Telp', symbol: 'TELP', address: '0x22ffa503e90c651cb53e3f88deafc80160c9fba3', tag: 'Radio comms' },
  { name: 'Auto', symbol: 'AUTO', address: '0x910cb6ce72a2ee7b1c9d093d5b09aed7f19f8ba3', tag: 'Procedural rails' },
  { name: 'Aeth', symbol: 'AETH', address: '0x8c7cffbdd51be8c43300f38f052ccdaac59f0ba3', tag: 'Gravity inversion' },
  { name: 'WO', symbol: 'WO', address: '0x7811d40ec95015c4571663a2eaaeca58c4412ba3', tag: 'Extreme zone' },
  { name: 'Flaw', symbol: 'FLAW', address: '0xe9bd329a1ff8c56c9f44a937863983ec5b81aba3', tag: 'Combo score' },
  { name: 'Emrld', symbol: 'EMRLD', address: '0x4b89c4263e1dc7c843482b85bff12b142ac4aba3', tag: 'Emerald lighting' },
  { name: 'Rev', symbol: 'REV', address: '0xaf4721ead1b366b88d21d6a0bfec7b25cb118ba3', tag: 'RPM overdrive' },
  { name: 'Blzet', symbol: 'BLZET', address: '0xad4f3857808a7c3b420c87d7cfabfe3934c18ba3', tag: 'Warp visuals' },
];

const attendees = [
  { id: 1, name: 'Luna Drift', status: 'Live in VIP', color: '#7ee7d6', vibe: 'Sprint coach', badge: 'Pro rider' },
  { id: 2, name: 'Milo Pike', status: 'Booking arcade pass', color: '#ff7ce5', vibe: 'Arcade scorer', badge: 'Combo king' },
  { id: 3, name: 'Nova Rook', status: 'Chasing launch cam', color: '#7ab8ff', vibe: 'Coaster spotter', badge: 'Camera crew' },
  { id: 4, name: 'Sage Vale', status: 'Pacing the plaza loop', color: '#f2d166', vibe: 'Night market host', badge: 'VIP host' },
];

const initialMessages = [
  { id: 1, user: 'Milo Pike', text: 'Launch window looks sharp—who wants a midnight run?', type: 'speaker' },
  { id: 2, user: 'Luna Drift', text: 'I’m in. Keep the banking lane clean.', type: 'speaker' },
  { id: 3, user: 'Nova Rook', text: 'Coaster cam is live. Hands up when the drop hits.', type: 'speaker' },
  { id: 4, user: 'You', text: 'The plaza pulse is strong tonight.', type: 'me' },
];

const initialThread = [
  { id: 1, from: 'them', text: 'You still on for the VIP rail run tonight?' },
  { id: 2, from: 'me', text: 'Absolutely. I’ll stack the speed meter up.' },
  { id: 3, from: 'them', text: 'Perfect. I’ve got the ride album loaded.' },
];

const zoneData = [
  { key: 'gate', label: 'Coaster Boarding Gate', x: 18, y: 20, w: 30, h: 26 },
  { key: 'arcade', label: 'Carnival Arcade', x: 58, y: 18, w: 28, h: 26 },
  { key: 'vip', label: 'VIP Lounge', x: 52, y: 58, w: 34, h: 24 },
];

const zoneDetails = {
  gate: {
    name: 'Coaster Boarding Gate',
    blurb: 'Launch lane primed for high-speed entry and quick rider swaps.',
    stats: ['200 rollin gate', 'Fast-track queue', 'Boarding live'],
  },
  arcade: {
    name: 'Carnival Arcade',
    blurb: 'Combo play, prize streaks, and ticket jackpots across the neon loop.',
    stats: ['50 rollin boosts', 'Prize ladder', 'High-score chase'],
  },
  vip: {
    name: 'VIP Lounge',
    blurb: 'Private lounge access with VIP chat discounts and limited-run drops.',
    stats: ['Exclusive events', 'Premium pacing', 'Priority rides'],
  },
};

const defaultTokenBalances = {
  rollin: 2850,
  balloon: 24,
  caffeine: 18,
  zai: 13,
  telp: 8,
  auto: 11,
  aeth: 9,
  wo: 6,
  flaw: 17,
  emrld: 12,
  rev: 10,
  blzet: 7,
};

const defaultStreak = {
  days: 6,
  reward: 'VIP lounge access + 150 rollin',
};

const leaderboard = [
  { name: 'Luna Drift', score: 9420 },
  { name: 'Milo Pike', score: 9010 },
  { name: 'Nova Rook', score: 8840 },
  { name: 'Sage Vale', score: 8200 },
  { name: 'You', score: 7880 },
];

const eventSchedule = [
  { time: '18:30', title: 'Neon Drop Rush', tag: 'Limited run' },
  { time: '19:15', title: 'Arcade Combo Bash', tag: 'High score' },
  { time: '20:00', title: 'VIP Radio Lounge', tag: 'Exclusive' },
  { time: '21:30', title: 'Midnight Gravity Jump', tag: 'Elite' },
];

const rewards = [
  { title: 'Ride streak', value: '+25 rollin', status: 'Ready' },
  { title: 'VIP lounge', value: 'Unlocked', status: 'Live' },
  { title: 'Arcade boost', value: '+15% combo', status: 'Claimed' },
];

const formatShortAddress = (value) => `${value.slice(0, 6)}...${value.slice(-4)}`;

function App() {
  const [selectedAttendee, setSelectedAttendee] = useState(attendees[0]);
  const [ticker, setTicker] = useState(104.2);
  const [avatarPos, setAvatarPos] = useState({ x: 32, y: 43 });
  const [thread, setThread] = useState(initialThread);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState(initialMessages);
  const [walletConnected, setWalletConnected] = useState(() => {
    const saved = localStorage.getItem('rollin-wallet');
    return saved ? saved === 'true' : false;
  });
  const [tokenBalances, setTokenBalances] = useState(() => {
    const saved = localStorage.getItem('rollin-balances');
    return saved ? JSON.parse(saved) : defaultTokenBalances;
  });
  const [activeZone, setActiveZone] = useState('gate');
  const [coasterMode, setCoasterMode] = useState('BANKED');
  const [gust, setGust] = useState(68);
  const [handsUp, setHandsUp] = useState(true);
  const [parkPulse, setParkPulse] = useState('Boarding lane open');
  const [selectedTicket, setSelectedTicket] = useState('gate');
  const [streak, setStreak] = useState(defaultStreak);

  useEffect(() => {
    localStorage.setItem('rollin-wallet', String(walletConnected));
  }, [walletConnected]);

  useEffect(() => {
    localStorage.setItem('rollin-balances', JSON.stringify(tokenBalances));
  }, [tokenBalances]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTicker((prev) => {
        const next = prev >= 144 ? 86 : prev + 1.8;
        return Number(next.toFixed(1));
      });
      setGust((prev) => (prev >= 96 ? 54 : prev + 3.1));
      setMessages((prev) => {
        const rotation = [
          'The reward loop is melting into the night.',
          'VIP lounge just dropped a limited run.',
          'Arcade combo leaderboards are heating up.',
          'Boarding gate is flowing faster than expected.',
          'Gravity run is open for elite riders.',
        ];
        const line = rotation[Math.floor(Math.random() * rotation.length)];
        return [...prev.slice(-3), { id: Date.now(), user: 'Park Bot', text: line, type: 'speaker' }];
      });
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const tokenTotal = useMemo(() => supportTokens.length + 1, []);
  const activeZoneMeta = zoneDetails[activeZone];

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletConnected(true);
      } else {
        setWalletConnected(true);
      }
    } catch {
      setWalletConnected(false);
    }
  };

  const handleMapClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setAvatarPos({ x: Math.min(Math.max(x, 8), 92), y: Math.min(Math.max(y, 12), 84) });

    const zone = zoneData.find((item) => {
      const xInside = x >= item.x && x <= item.x + item.w;
      const yInside = y >= item.y && y <= item.y + item.h;
      return xInside && yInside;
    });

    if (zone) {
      setActiveZone(zone.key);
      setParkPulse(`${zone.label} is in play`);
    } else {
      setParkPulse('Cruising the plaza loop');
    }
  };

  const addThreadMessage = () => {
    if (!draft.trim()) return;
    setThread((prev) => [...prev, { id: Date.now(), from: 'me', text: draft }]);
    setDraft('');
  };

  const purchaseTicket = (ticketType) => {
    const cost = ticketType === 'gate' ? 200 : 50;
    setTokenBalances((prev) => ({ ...prev, rollin: prev.rollin - cost }));
    setSelectedTicket(ticketType);
    setParkPulse(ticketType === 'gate' ? 'Gate entry approved' : 'Ride launch queued');
  };

  const sendTip = () => {
    setTokenBalances((prev) => ({ ...prev, rollin: prev.rollin - 50 }));
    setParkPulse(`50 rollin tip sent to ${selectedAttendee.name}`);
  };

  const claimReward = () => {
    setStreak((prev) => ({ ...prev, reward: 'Reward claimed: 150 rollin + lounge boost' }));
    setTokenBalances((prev) => ({ ...prev, rollin: prev.rollin + 150 }));
  };

  const pulseBars = [42, 68, 84, 52, 92, 62, 78, 58, 88, 54, 60, 72];

  return (
    <div className="app-shell">
      <header className="topbar wrap">
        <div className="brand-block">
          <div className="brand-mark">R</div>
          <div>
            <span className="eyebrow">4out iron park economy</span>
            <h1>RollinCoaster</h1>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#plaza">Plaza</a>
          <a href="#tickets">Tickets</a>
          <a href="#rewards">Rewards</a>
          <a href="#coaster">Coaster</a>
        </nav>

        <button className="primary-button" onClick={connectWallet}>
          {walletConnected ? 'Base Wallet Linked' : 'Connect Base Wallet'}
        </button>
      </header>

      <main className="page wrap">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="pill-row">
              <span className="pill">Public access</span>
              <span className="pill neutral">Live park pulse</span>
            </div>
            <h2>Ride the speed. Stack the vibe. Own every night.</h2>
            <p>
              RollinCoaster blends a public social plaza, Base-native token economy, private attendee comms, and a high-thrill coaster cockpit into a sticky, repeat-visit park experience.
            </p>

            <div className="cta-row">
              <button className="primary-button" onClick={() => purchaseTicket('gate')}>Enter the Park</button>
              <button className="ghost-button" onClick={() => setActiveZone('arcade')}>View Token Map</button>
            </div>

            <div className="stats-row">
              <div>
                <strong>200</strong>
                <span>rollin gate</span>
              </div>
              <div>
                <strong>50</strong>
                <span>ride launch</span>
              </div>
              <div>
                <strong>{tokenTotal}</strong>
                <span>support tokens</span>
              </div>
            </div>
          </div>

          <div className="token-panel" id="tokens">
            <div className="panel-header">
              <span>Primary token</span>
              <span className="status-dot live" />
            </div>

            <div className="main-token">
              <div>
                <small>ROLLIN</small>
                <strong>0x622e...3bA3</strong>
              </div>
              <p>Base chain native park economy</p>
            </div>

            <div className="token-list compact">
              {supportTokens.map((token) => (
                <div className="token-row" key={token.address}>
                  <div>
                    <strong>{token.symbol}</strong>
                    <small>{token.tag}</small>
                  </div>
                  <span>{formatShortAddress(token.address)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="plaza-section" id="plaza">
          <div className="section-head">
            <div>
              <span className="eyebrow">Community plaza</span>
              <h3>Live motion loop</h3>
            </div>
            <div className="pill neutral">{attendees.length} attendees online</div>
          </div>

          <div className="plaza-layout">
            <div className="map-shell" onClick={handleMapClick}>
              {zoneData.map((zone) => (
                <div
                  key={zone.key}
                  className={`zone ${zone.key} ${activeZone === zone.key ? 'active' : ''}`}
                  style={{ left: `${zone.x}%`, top: `${zone.y}%`, width: `${zone.w}%`, height: `${zone.h}%` }}
                >
                  {zone.label}
                </div>
              ))}

              <div className="speech-bubble bubble-one">Boost lane is clear!</div>
              <div className="speech-bubble bubble-two">VIP lounge open</div>
              <div className="speech-bubble bubble-three">Next launch in 02:14</div>

              <div className="avatar" style={{ left: `${avatarPos.x}%`, top: `${avatarPos.y}%` }}>
                <span className="avatar-shadow" />
                <span className="avatar-body" />
              </div>
            </div>

            <aside className="broadcast-panel">
              <div className="panel-header">
                <span>Broadcast chat</span>
                <span className="status-dot live" />
              </div>

              <div className="plaza-note">{parkPulse}</div>

              <div className="chat-list">
                {messages.map((msg) => (
                  <div key={msg.id} className={`chat-row ${msg.type}`}>
                    <strong>{msg.user}</strong>
                    <p>{msg.text}</p>
                  </div>
                ))}
              </div>

              <div className="roster">
                <div className="roster-header">Attendee roster</div>
                {attendees.map((attendee) => (
                  <button
                    key={attendee.id}
                    className={`roster-item ${selectedAttendee.id === attendee.id ? 'active' : ''}`}
                    onClick={() => setSelectedAttendee(attendee)}
                  >
                    <span className="mini-avatar" style={{ background: attendee.color }} />
                    <div>
                      <strong>{attendee.name}</strong>
                      <small>{attendee.status}</small>
                    </div>
                  </button>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="interaction-section" id="tickets">
          <div className="section-head">
            <div>
              <span className="eyebrow">Wallet + access flow</span>
              <h3>Gate and ride economy</h3>
            </div>
          </div>

          <div className="wallet-panel">
            <div className="wallet-card big">
              <div className="wallet-topline">
                <span>Rollin balance</span>
                <strong>{tokenBalances.rollin} ROLLIN</strong>
              </div>

              <div className="ticket-grid">
                <button className={`ticket-button ${selectedTicket === 'gate' ? 'selected' : ''}`} onClick={() => purchaseTicket('gate')}>
                  <small>Park admission</small>
                  <strong>200 rollin</strong>
                  <span>Gate entry</span>
                </button>
                <button className={`ticket-button ${selectedTicket === 'ride' ? 'selected' : ''}`} onClick={() => purchaseTicket('ride')}>
                  <small>Coaster launch</small>
                  <strong>50 rollin</strong>
                  <span>Ride start</span>
                </button>
              </div>
            </div>

            <div className="wallet-card">
              <div className="detail-header">Active zone</div>
              <h4>{activeZoneMeta.name}</h4>
              <p>{activeZoneMeta.blurb}</p>
              <ul>
                {activeZoneMeta.stats.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="interaction-layout">
            <div className="profile-card">
              <div className="profile-top">
                <div className="profile-badge" style={{ background: selectedAttendee.color }} />
                <div>
                  <h4>{selectedAttendee.name}</h4>
                  <span>{selectedAttendee.status}</span>
                </div>
              </div>

              <div className="meta-grid">
                <div>
                  <small>Vibe</small>
                  <strong>{selectedAttendee.vibe}</strong>
                </div>
                <div>
                  <small>Badge</small>
                  <strong>{selectedAttendee.badge}</strong>
                </div>
              </div>

              <div className="thread-box">
                {thread.map((item) => (
                  <div key={item.id} className={`thread-item ${item.from}`}>
                    {item.text}
                  </div>
                ))}
              </div>

              <div className="composer">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Private message..."
                />
                <button className="primary-button small" onClick={addThreadMessage}>Send</button>
              </div>
            </div>

            <div className="voice-card">
              <div className="voice-header">
                <div>
                  <span className="eyebrow">Voice call</span>
                  <h4>Live link</h4>
                </div>
                <span className="timer">02:46</span>
              </div>

              <div className="waveform">
                {pulseBars.map((bar, index) => (
                  <span key={index} style={{ height: `${bar}%` }} />
                ))}
              </div>

              <div className="call-actions">
                <button className="ghost-button">Mute</button>
                <button className="ghost-button">Camera</button>
              </div>

              <div className="video-view">
                <div className="video-overlay">Coaster chase cam</div>
              </div>

              <button className="tip-button" onClick={sendTip}>Peer tip 50 rollin to {selectedAttendee.name}</button>
            </div>
          </div>
        </section>

        <section className="rewards-section" id="rewards">
          <div className="section-head">
            <div>
              <span className="eyebrow">Retention loop</span>
              <h3>Rider progression</h3>
            </div>
          </div>

          <div className="rewards-grid">
            <div className="reward-card streak-card">
              <div className="mini-label">Daily streak</div>
              <div className="streak-number">{streak.days} days</div>
              <p>{streak.reward}</p>
              <button className="primary-button" onClick={claimReward}>Claim reward</button>
            </div>

            <div className="reward-card">
              <div className="mini-label">Leaderboard</div>
              <div className="leaderboard-list">
                {leaderboard.map((entry, index) => (
                  <div key={entry.name} className="leader-row">
                    <span>#{index + 1} {entry.name}</span>
                    <strong>{entry.score}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="reward-card">
              <div className="mini-label">Event schedule</div>
              <div className="event-list">
                {eventSchedule.map((event) => (
                  <div key={event.title} className="event-row">
                    <span>{event.time}</span>
                    <div>
                      <strong>{event.title}</strong>
                      <small>{event.tag}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reward-card">
              <div className="mini-label">Reward vault</div>
              <div className="reward-list">
                {rewards.map((reward) => (
                  <div key={reward.title} className="reward-item">
                    <div>
                      <strong>{reward.title}</strong>
                      <small>{reward.value}</small>
                    </div>
                    <span>{reward.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="coaster-section" id="coaster">
          <div className="section-head">
            <div>
              <span className="eyebrow">Roller coaster</span>
              <h3>First-person launch cockpit</h3>
            </div>
            <div className="pill neutral">Throttle {coasterMode}</div>
          </div>

          <div className="coaster-layout">
            <div className="cockpit-card">
              <div className="cockpit-horizon">
                <div className="sky" />
                <div className="track" />
              </div>

              <div className="hud-row">
                <div className="gauge-wrap">
                  <span>Speed</span>
                  <strong>{ticker.toFixed(1)} mph</strong>
                  <div className="gauge"><i style={{ width: `${Math.min((ticker / 150) * 100, 100)}%` }} /></div>
                </div>

                <div className="gauge-wrap">
                  <span>Thrill</span>
                  <strong>{(ticker / 35).toFixed(1)}x</strong>
                  <div className="gauge"><i style={{ width: `${Math.min((ticker / 140) * 100, 100)}%` }} /></div>
                </div>
              </div>

              <div className="boost-row">
                <button className="ghost-button" onClick={() => setCoasterMode('BANKED')}>Bank</button>
                <button className="ghost-button" onClick={() => setCoasterMode('LAUNCH')}>Launch</button>
                <button className="ghost-button" onClick={() => setHandsUp((prev) => !prev)}>
                  {handsUp ? 'Hands Up' : 'Hands Down'}
                </button>
              </div>
            </div>

            <div className="audio-card">
              <div className="audio-header">
                <span className="eyebrow">Audio engine</span>
                <h4>Ride sound layer</h4>
              </div>

              <div className="sound-stack">
                <div>
                  <label>Chain lift</label>
                  <div className="meter"><i style={{ width: '72%' }} /></div>
                </div>
                <div>
                  <label>Wind</label>
                  <div className="meter"><i style={{ width: `${gust}%` }} /></div>
                </div>
                <div>
                  <label>Speed effect</label>
                  <div className="meter"><i style={{ width: `${Math.min((ticker / 150) * 100, 100)}%` }} /></div>
                </div>
              </div>

              <div className="status-grid">
                <div>
                  <small>Gate</small>
                  <strong>Open</strong>
                </div>
                <div>
                  <small>Thrill</small>
                  <strong>{(ticker / 35).toFixed(1)}x</strong>
                </div>
                <div>
                  <small>Launch</small>
                  <strong>{handsUp ? 'Active' : 'Idle'}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
