import { useState } from 'react'

type IconName = 'home' | 'scan' | 'learn' | 'bell' | 'shield' | 'arrow' | 'close' | 'mail' | 'text' | 'voice' | 'video' | 'article'

const paths: Record<IconName, React.ReactNode> = {
  home: <><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10M9.5 20v-6h5v6"/></>,
  scan: <><path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4"/><path d="M8 12h8M12 8v8"/></>,
  learn: <><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H20v16H7.5A3.5 3.5 0 0 0 4 21.5z"/><path d="M4 5.5v16M9 7h7M9 11h5"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
  shield: <><path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
  arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></>,
  text: <><path d="M20 15a4 4 0 0 1-4 4H8l-5 3 1.5-5A7 7 0 0 1 3 13V8a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4Z"/><path d="M8 10h8M8 14h5"/></>,
  voice: <><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></>,
  video: <><rect x="3" y="5" width="14" height="14" rx="3"/><path d="m17 10 4-2v8l-4-2Z"/></>,
  article: <><path d="M5 3h11l3 3v15H5zM15 3v5h4M8 12h8M8 16h8M8 8h3"/></>,
}

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

function MoonScene() {
  return (
    <svg className="moon-scene" viewBox="0 0 210 180" role="img" aria-label="A person sitting safely on a crescent moon">
      <path className="moon" d="M142 16c-22 10-36 32-35 58 1 36 31 64 67 63 7 0 14-1 20-4-14 26-41 43-73 43-45 0-81-36-81-81 0-41 30-74 69-80 11-2 23-1 33 1Z"/>
      <circle className="head" cx="112" cy="51" r="10"/>
      <path className="hair" d="M103 51c0-8 4-12 10-12 7 0 10 5 9 12-4-1-6-5-7-7-2 5-7 7-12 7Z"/>
      <path className="body" d="M106 62c10-3 18 1 21 11l5 18-20 5-10-23c-2-5 0-9 4-11Z"/>
      <path className="limb" d="m128 84 22 13 17 1M112 93l15 21 20 8M105 70 88 83 72 79"/>
      <path className="line" d="M72 79C45 75 31 66 24 48"/>
      <circle className="caught" cx="22" cy="42" r="6"/>
    </svg>
  )
}

function IntroMoon() {
  return (
    <svg className="intro-moon-art" viewBox="0 0 390 420" role="img" aria-label="A friendly person sitting on a crescent moon with a fishing rod">
      <circle className="intro-halo" cx="195" cy="192" r="146"/>
      <path className="intro-crescent" d="M218 68c-37 18-61 57-59 101 2 62 53 109 115 107 13 0 25-3 36-7-23 45-70 74-124 74-76 0-138-62-138-138 0-69 51-126 117-137 18-3 37-3 53 0Z"/>
      <circle className="intro-crater" cx="103" cy="270" r="13"/><circle className="intro-crater small" cx="81" cy="227" r="7"/>
      <circle className="intro-head" cx="187" cy="115" r="18"/>
      <path className="intro-hair" d="M169 114c0-15 8-23 20-23 13 0 19 10 17 23-7-2-12-8-14-14-4 8-12 13-23 14Z"/>
      <path className="intro-shirt" d="M177 134c18-5 32 3 37 20l8 31-35 8-17-40c-3-9 0-16 7-19Z"/>
      <path className="intro-limbs" d="m215 171 38 23 29 1M188 188l25 36 35 14M176 148l-29 22-28-7"/>
      <path className="intro-rod" d="M119 163 62 105"/>
      <path className="intro-line" d="M62 105C30 150 54 252 54 365"/>
      <path className="intro-hook" d="M54 365c0 12 15 13 18 3"/>
      <circle className="intro-star" cx="317" cy="112" r="5"/><circle className="intro-star two" cx="61" cy="89" r="3"/>
    </svg>
  )
}

const channels: { label: string; detail: string; note: string; icon: IconName; className: string }[] = [
  { label: 'Email', detail: 'email', note: '8 filtered', icon: 'mail', className: 'email-world' },
  { label: 'Texts', detail: 'texts', note: '3 blocked', icon: 'text', className: 'text-world' },
  { label: 'Voice', detail: 'voice', note: 'AI listening', icon: 'voice', className: 'voice-world' },
  { label: 'Video', detail: 'video', note: '2 checked', icon: 'video', className: 'video-world' },
  { label: 'Articles', detail: 'articles', note: 'Fact check', icon: 'article', className: 'article-world' },
  { label: 'Learn', detail: 'learn', note: '4 lessons', icon: 'learn', className: 'learn-world' },
  { label: 'Next steps', detail: 'recommendations', note: '2 ready', icon: 'shield', className: 'recommend-world' },
]

export default function App() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<'idle' | 'safe' | 'risk'>('idle')
  const [detail, setDetail] = useState<string | null>(null)
  const [intro, setIntro] = useState<'waiting' | 'casting' | 'complete'>('waiting')
  const selectedChannel = channels.find((channel) => channel.detail === detail)

  function revealDashboard() {
    if (intro !== 'waiting') return
    setIntro('casting')
    window.setTimeout(() => setIntro('complete'), 1800)
  }

  function analyze() {
    if (!query.trim()) return
    const suspicious = /gift|urgent|password|verify|crypto|winner|click|bank/i.test(query)
    setResult(suspicious ? 'risk' : 'safe')
  }

  return (
    <main className="app-shell">
      {intro !== 'complete' && (
        <section className={`intro-screen ${intro}`} aria-label="Welcome to your safety orbit">
          <div className="intro-stars" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/></div>
          <div className="intro-copy">
            <p className="eyebrow">WELCOME TO ORBIT</p>
            <h1>Your safer corner<br/>of the universe.</h1>
            <p>Let’s pull up your protection dashboard.</p>
          </div>
          <button className="moon-trigger" onClick={revealDashboard} disabled={intro === 'casting'} aria-label="Tap the person on the moon to open your dashboard">
            <IntroMoon />
          </button>
          <div className="real-fishing-line" aria-hidden="true"><i/></div>
          <div className="dashboard-catch" aria-hidden="true">
            <span className="caught-sun"><Icon name="shield" size={21}/></span>
            <span/><span/><span/>
            <strong>Your safety orbit</strong>
          </div>
          <p className="tap-instruction"><span>↑</span> Tap our moon watcher</p>
        </section>
      )}
      <div className={`dashboard-content ${intro === 'casting' ? 'being-pulled' : ''}`}>
      <div className="sky-dots" aria-hidden="true"><i/><i/><i/><i/><i/></div>
      <section className="topbar">
        <button className="avatar" aria-label="Open profile">MC<span className="status-dot" /></button>
        <div>
          <p className="eyebrow">YOUR SAFETY ORBIT</p>
          <h1>Good morning, Maya</h1>
        </div>
      </section>

      <section className="cosmos-dashboard" aria-label="Your interactive safety system">
        <div className="cosmos-heading">
          <span className="safe-pill"><Icon name="shield" size={15}/> All systems protected</span>
          <p>Tap a planet to explore your protection</p>
        </div>
        <div className="star-field" aria-hidden="true">{Array.from({length: 16}, (_, i) => <i key={i}/>)}</div>
        <div className="galaxy-glow" aria-hidden="true"/>
        <div className="system-orbit orbit-a" aria-hidden="true"/>
        <div className="system-orbit orbit-b" aria-hidden="true"/>
        <div className="system-orbit orbit-c" aria-hidden="true"/>
        <button className="safety-sun" onClick={() => setDetail('score')} aria-label="Safety score 92, excellent">
          <i className="sun-rays"/>
          <span className="score-label">SAFETY SCORE</span>
          <strong>92</strong>
          <span className="score-status">Excellent</span>
        </button>
        {channels.map((channel) => (
          <button key={channel.detail} className={`channel-world ${channel.className}`} onClick={() => setDetail(channel.detail)}>
            {channel.detail === 'learn' && <i className="planet-ring"/>}
            <span className="world-icon"><Icon name={channel.icon} size={17}/></span>
            <strong>{channel.label}</strong>
            <small>{channel.note}</small>
          </button>
        ))}
        <div className="tiny-moon"><MoonScene /></div>
        <p className="week-note"><strong>13 threats</strong> kept out of your orbit this week</p>
      </section>

      <section className="scanner">
        <div className="section-heading">
          <div><p className="eyebrow">NOT SURE?</p><h2>Check anything suspicious</h2></div>
          <span className="spark">AI</span>
        </div>
        <div className="input-wrap">
          <Icon name="scan" size={20}/>
          <input value={query} onChange={(e) => {setQuery(e.target.value); setResult('idle')}} onKeyDown={(e) => e.key === 'Enter' && analyze()} placeholder="Paste a message, link, or username" aria-label="Suspicious content to check"/>
          <button className="analyze-button" onClick={analyze} disabled={!query.trim()} aria-label="Analyze content"><Icon name="arrow" size={20}/></button>
        </div>
        {result !== 'idle' && (
          <div className={`result ${result}`} role="status">
            <Icon name="shield" size={22}/>
            <div>
              <strong>{result === 'risk' ? 'This looks suspicious' : 'No common scam signals found'}</strong>
              <p>{result === 'risk' ? 'Don’t click links or share personal details. Verify the sender another way.' : 'Still pause before sharing money, passwords, or verification codes.'}</p>
            </div>
          </div>
        )}
        <div className="quick-actions">
          <button onClick={() => setQuery('Check a social media account for bot activity')}><span>@</span> Check an account</button>
          <button onClick={() => setQuery('Reverse search this social media post')}><span>⌕</span> Reverse search</button>
        </div>
      </section>

      <section className="activity">
        <div className="section-heading">
          <div><p className="eyebrow">TODAY</p><h2>What we found</h2></div>
          <button className="text-button" onClick={() => setDetail('activity')}>View all</button>
        </div>
        <button className="alert-card" onClick={() => setDetail('alert')}>
          <span className="alert-icon">!</span>
          <span><strong>Possible real message in spam</strong><small>From Greenway Pharmacy · 12 min ago</small></span>
          <Icon name="arrow" size={18}/>
        </button>
        <button className="lesson-card" onClick={() => setDetail('lesson')}>
          <span className="lesson-number">2 min</span>
          <span><small>QUICK LESSON</small><strong>Spot an AI voice scam</strong></span>
          <Icon name="arrow" size={18}/>
        </button>
      </section>

      {detail && (
        <div className={`sheet-backdrop ${selectedChannel || detail === 'score' ? 'planet-backdrop' : ''}`} onClick={() => setDetail(null)}>
          <section className={`sheet ${selectedChannel ? `planet-sheet ${selectedChannel.detail}-sheet` : detail === 'score' ? 'planet-sheet score-sheet' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="sheet-close" onClick={() => setDetail(null)} aria-label="Close"><Icon name="close"/></button>
            <span className="sheet-mark">{selectedChannel ? <Icon name={selectedChannel.icon} size={28}/> : <Icon name="shield" size={28}/>}</span>
            <p className="eyebrow">SAFETY DETAILS</p>
            <h2>{detail === 'recommendations' ? 'Your next best steps' : detail === 'lesson' || detail === 'learn' ? 'Learn to spot the signs' : detail === 'alert' ? 'Review this message' : detail === 'video' ? 'That video may not be real' : detail === 'articles' ? 'Know where a story came from' : detail === 'voice' ? 'AI voice protection is listening' : detail === 'score' ? 'Your safety score is excellent' : `Your ${detail} protection`}</h2>
            <p>{detail === 'recommendations' ? 'Turn on two-step verification for your email, then create a family safe word for unexpected voice calls. These two actions can raise your safety score by 5 points.' : detail === 'lesson' || detail === 'learn' ? 'Try a two-minute lesson on AI voices, fake urgency, phishing links, or deepfake video. Each lesson ends with one simple action you can remember.' : detail === 'alert' ? 'This pharmacy message appears to match a sender you have used before. Open your pharmacy app directly instead of tapping the email link.' : detail === 'video' ? 'We check visual artifacts, audio patterns, and the original source. This clip was first posted by a sketch-comedy organization—not a news outlet.' : detail === 'articles' ? 'We trace the publisher, author history, citations, and earlier versions so you can see whether an article is trustworthy or manipulated.' : detail === 'voice' ? 'Voicemails are checked for synthetic speech and impersonation signals. We never rely on voice alone to confirm someone’s identity.' : detail === 'score' ? 'Your score combines message safety, account security, scam exposure, and completed learning. Keep improving it with one small action at a time.' : 'Suspicious senders, urgent language, unsafe links, and known scam patterns are filtered before they can pressure you.'}</p>
            <button className="primary-button" onClick={() => setDetail(null)}>Got it</button>
          </section>
        </div>
      )}
      </div>
    </main>
  )
}
