import { useEffect, useRef, useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown, Download, Gift, Globe2, Monitor, Pause, Play, Shield, ShoppingBag, Smartphone, Sparkles, Swords, UserPlus, Users } from 'lucide-react'
import type { Page, Lang } from '../data'
import { ANNOUNCEMENTS, UPDATES } from '../data'
import { CLIENT_LANGUAGES, LINKS, SERVERS, type ClientLanguage, type Platform, type ServerId } from '../site'
import heroVideo from '../assets/hero.mp4'
import heroPoster from '../assets/hero-poster.png'
import serverV1 from '../assets/announcement.png'
import knight from '../assets/night-crows-knight.png'
import mage from '../assets/night-crows-mage.png'
import world from '../assets/night-crows-world.png'
import serverV2 from '../assets/update.png'
import newsArt from '../assets/game.png'
import crest from '../assets/playcrows-emblem.png'
import { IcoDiscordSmall } from './Icons'

export function Hero({ scrollTo }: { scrollTo: (id: string) => void }) {
  const { t } = useTranslation()
  const video = useRef<HTMLVideoElement>(null)
  const [motion, setMotion] = useState(false)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const screen = window.matchMedia('(min-width: 768px)')
    const update = () => {
      const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
      setMotion(!preference.matches && screen.matches && !connection?.saveData)
    }
    update()
    preference.addEventListener('change', update)
    screen.addEventListener('change', update)
    return () => { preference.removeEventListener('change', update); screen.removeEventListener('change', update) }
  }, [])
  const toggleVideo = () => {
    if (!video.current) return
    if (video.current.paused) void video.current.play().then(() => setPaused(false)).catch(() => setPaused(true))
    else { video.current.pause(); setPaused(true) }
  }
  return <section id="hero" className="hero-panel">
    <img className="hero-media" src={heroPoster} alt="" fetchPriority="high" width={1920} height={1080} />
    {motion && <video ref={video} src={heroVideo} poster={heroPoster} className="hero-media" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" onError={() => setMotion(false)} onPause={() => setPaused(true)} onPlaying={() => setPaused(false)} />}
    <div className="hero-shade" />
    <div className="hero-content">
      <p className="eyebrow"><span className="eyebrow-line" />{t('site.heroEyebrow')}</p>
      <h1>{t('site.heroTitle')}<br /><em>Night Crows.</em></h1>
      <p className="hero-description">{t('site.heroDescription')}</p>
      <div className="hero-perks"><span><Swords size={16} />V1 & V2</span><span><Monitor size={16} />Windows & Android</span><span><Globe2 size={16} />{t('site.globalCommunity')}</span></div>
      <div className="hero-buttons"><button className="btn-primary" onClick={() => scrollTo('servers')}><UserPlus size={18} />{t('site.beginJourney')}<ArrowRight size={17} /></button><button className="btn-secondary" onClick={() => scrollTo('download')}><Download size={17} />{t('site.downloadGame')}</button></div>
      <a className="hero-explore" href="#servers">{t('site.findRealm')}<ArrowDown size={14} /></a>
    </div>
    {motion && <button className="video-toggle" onClick={toggleVideo} aria-label={t(paused ? 'site.playVideo' : 'site.pauseVideo')}>{paused ? <Play size={14} /> : <Pause size={14} />}</button>}
    <div className="hero-caption" aria-hidden="true">PLAYCROWS <span>NIGHT CROWS</span></div>
  </section>
}

export function ServerSection({ onDownload }: { onDownload: (server: ServerId) => void }) {
  const { t } = useTranslation()
  return <section id="servers" className="section servers-section">
    <div className="section-heading"><div><p className="eyebrow">{t('site.chooseChapter')}</p><h2>{t('site.ourServers')}</h2></div><p>{t('site.serverIntro')}</p></div>
    <div className="servers-grid">
      {(['v1', 'v2'] as const).map((id, index) => <article id={`server-${id}`} key={id} className={`server-card ${id}`}>
        <div className="server-scene">
          <img src={world} alt="" className="server-art" loading="lazy" width={960} height={540} />
          <div className="server-shade" /><img src={id === 'v1' ? knight : mage} className="server-character" alt="" loading="lazy" width={id === 'v1' ? 1655 : 1346} height={id === 'v1' ? 1763 : 1726} />
          <span className="server-number" aria-hidden="true">0{index + 1}</span>
          <div className="server-copy"><p className="server-kicker">NIGHT CROWS</p><h3>PLAYCROWS <span>{SERVERS[id].name}</span></h3><div className="short-rule" /><p>{t(`site.${id}Description`)}</p><a className="btn-primary" href={SERVERS[id].register} target="_blank" rel="noopener noreferrer"><UserPlus size={16} />{t('site.createAccount')}<ArrowUpRight size={16} /></a></div>
        </div>
        <div className="server-card-footer"><div><strong>PlayCrows {SERVERS[id].name}</strong><span className="server-tag">{t(`site.${id}Tag`)}</span><small>Windows · Android</small></div><div className="server-card-actions"><a href="#game-info" aria-label={`${SERVERS[id].name} — ${t('site.features')}`}><BookOpen size={15} />{t('site.features')}</a><button onClick={() => onDownload(id)} aria-label={`${SERVERS[id].name} — ${t('site.download')}`}><Download size={15} />{t('site.download')}</button></div></div>
      </article>)}
    </div>
    <p className="server-note"><Shield size={14} />{t('site.accountNote')}</p>
  </section>
}

export function NewsGrid({ navigate }: { navigate: (page: Page) => void }) {
  const { t, i18n } = useTranslation()
  const lang = (['en', 'kr', 'th', 'tw', 'br'].includes(i18n.language) ? i18n.language : 'en') as Lang
  const featured = [
    { item: ANNOUNCEMENTS[0], category: t('site.announcements'), image: ANNOUNCEMENTS[0].banner ?? serverV1, page: { view: 'announcement', id: ANNOUNCEMENTS[0].id } as Page },
    { item: UPDATES[0], category: t('site.updates'), image: serverV2, page: { view: 'update', id: UPDATES[0].id } as Page },
    { item: ANNOUNCEMENTS[1], category: t('site.announcements'), image: newsArt, page: { view: 'announcement', id: ANNOUNCEMENTS[1].id } as Page },
  ]
  return <section id="news" className="section news-section">
    <div className="section-heading"><div><p className="eyebrow">{t('site.fromRealm')}</p><h2>{t('site.newsTitle')}</h2></div><div className="news-links"><a href="#/announcements">{t('site.announcements')}<ArrowUpRight size={15} /></a><a href="#/updates">{t('site.updates')}<ArrowUpRight size={15} /></a></div></div>
    <div className="news-grid">{featured.map(({ item, category, image, page }) => <button key={item.id} className="news-card" onClick={() => navigate(page)}>
      <div className="news-image"><img src={image} alt="" loading="lazy" width={640} height={360} /><span>{category}</span></div>
      <div className="news-body"><time>{item.date[lang]}</time><h3>{item.title[lang]}</h3><p>{item.preview[lang]}</p><span className="news-read">{t('site.readMore')}<ArrowUpRight size={17} /></span></div>
    </button>)}</div>
  </section>
}

export function GameInfoSection() {
  const { t } = useTranslation()
  const features = [
    { key: 'expRate', icon: Swords },
    { key: 'dropRate', icon: Sparkles },
    { key: 'enhancementRate', icon: Shield },
    { key: 'newPlayerRewards', icon: Gift },
    { key: 'dailyRewards', icon: Check },
    { key: 'modifiedNpc', icon: Users },
  ]
  return <section id="game-info" className="section game-section">
    <div className="feature-banner"><img src={world} alt="" loading="lazy" width={2560} height={1080} /><div className="feature-banner-shade" /><div className="feature-intro"><p className="eyebrow">{t('site.gameInfo')}</p><h2>{t('site.familiarWorld')}<br /><em>{t('site.differentPace')}</em></h2><p>{t('site.featuresDescription')}</p><a className="text-link" href="#download">{t('site.startPlaying')}<ArrowRight size={17} /></a></div><div className="feature-brand" aria-hidden="true"><img src={crest} alt="" loading="lazy" width={200} height={200} /><span>THE PLAYCROWS EXPERIENCE</span></div></div>
    <div className="features-grid">{features.map(({ key, icon: Icon }) => <div className="feature-item" key={key}><Icon size={22} /><div><strong>{t(`gameInfo.items.${key}.value`)}</strong><span>{t(`gameInfo.items.${key}.title`)}</span></div></div>)}</div>
    <div className="reward-accordions">{(['starterRewards', 'dailyRewards'] as const).map(key => <details className="reward-detail" key={key}><summary><Gift size={18} /><span>{t(`donation.${key}.heading`).replace(/^[^\p{L}]+/u, '')}</span><ChevronDown size={17} /></summary><div className="detail-content"><p>{t(`donation.${key}.description`)}</p><ul>{(t(`donation.${key}.items`, { returnObjects: true }) as string[]).map(item => <li key={item}>{item}</li>)}</ul></div></details>)}</div>
  </section>
}

export function DownloadSection({ server, setServer }: { server: ServerId; setServer: (id: ServerId) => void }) {
  const { t } = useTranslation()
  const [platform, setPlatform] = useState<Platform>('windows')
  const [language, setLanguage] = useState<ClientLanguage>('en')
  const chosen = SERVERS[server]
  return <section id="download" className="section download-panel">
    <div className="download-intro"><p className="eyebrow">{t('site.getStarted')}</p><h2>{t('site.realmAwaits')}</h2><p>{t('site.downloadIntro')}</p><ol className="onboarding-steps"><li><span>01</span><div><strong>{t('site.chooseServer')}</strong><p>{t('site.chooseServerHint')}</p></div></li><li><span>02</span><div><strong>{t('site.createAccount')}</strong><p>{t('site.createAccountHint')}</p></div></li><li><span>03</span><div><strong>{t('site.enterWorld')}</strong><p>{t('site.enterWorldHint')}</p></div></li></ol></div>
    <div className="download-controls">
      <fieldset><legend>{t('site.selectServer')}</legend><div className="segmented server-selector">{(['v1', 'v2'] as const).map(id => <label key={id} className={server === id ? 'selected' : ''}><input type="radio" name="server" value={id} checked={server === id} onChange={() => setServer(id)} /><span>PlayCrows {SERVERS[id].name}</span>{server === id && <Check size={15} />}</label>)}</div></fieldset>
      <div className="download-options"><fieldset><legend>{t('site.platform')}</legend><div className="segmented platform-selector">{(['windows', 'android'] as const).map(id => <label key={id} className={platform === id ? 'selected' : ''}><input type="radio" name="platform" value={id} checked={platform === id} onChange={() => setPlatform(id)} />{id === 'windows' ? <Monitor size={19} /> : <Smartphone size={19} />}<span>{id === 'windows' ? 'Windows' : 'Android'}</span></label>)}</div></fieldset><label className="client-language"><span>{t('site.clientLanguage')}</span><div><select value={language} onChange={event => setLanguage(event.target.value as ClientLanguage)}>{CLIENT_LANGUAGES.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select><ChevronDown size={16} /></div></label></div>
      <div className="download-summary" aria-live="polite"><span className={`version-emblem ${server}`}>{chosen.name}</span><div><strong>PlayCrows {chosen.name}</strong><span>{platform === 'windows' ? 'Windows · ZIP' : 'Android · APK'}<span aria-hidden="true"> · </span>{CLIENT_LANGUAGES.find(item => item.id === language)?.name}</span></div></div>
      <a className="btn-primary download-button" href={chosen.downloads[platform][language]} target="_blank" rel="noopener noreferrer"><Download size={19} />{t('site.download')} — {chosen.name}<ArrowUpRight size={18} /></a>
      <a className="download-register" href={chosen.register} target="_blank" rel="noopener noreferrer"><UserPlus size={16} />{t('site.registerFor', { server: chosen.name })}<ArrowUpRight size={15} /></a>
      <p className="download-help">{t('site.downloadHelp')} <a href={LINKS.discord} target="_blank" rel="noopener noreferrer">{t('site.askCommunity')}</a></p>
      <details className="download-mirrors"><summary>{t('site.allDownloads')}<ChevronDown size={14} /></summary><div>{(['windows', 'android'] as const).map(os => <div key={os}><strong>{os === 'windows' ? 'Windows' : 'Android'}</strong>{CLIENT_LANGUAGES.map(client => <a key={client.id} href={chosen.downloads[os][client.id]} target="_blank" rel="noopener noreferrer">{chosen.name} · {client.name}<Download size={14} /></a>)}</div>)}</div></details>
    </div>
  </section>
}

export function CommunitySection() {
  const { t } = useTranslation()
  return <section className="section community-grid">
    <div id="discord-section" className="community-panel"><div className="panel-icon"><IcoDiscordSmall /></div><p className="eyebrow">{t('site.community')}</p><h2>{t('site.betterTogether')}</h2><p>{t('site.communityDescription')}</p><a className="btn-secondary" href={LINKS.discord} target="_blank" rel="noopener noreferrer"><IcoDiscordSmall />{t('site.joinDiscord')}<ArrowUpRight size={16} /></a><div className="community-caption"><Globe2 size={15} />{t('site.globalCommunity')}</div></div>
    <div id="donation" className="shop-panel"><div className="panel-icon"><ShoppingBag /></div><p className="eyebrow">{t('site.webshop')}</p><h2>{t('site.supportJourney')}</h2><p>{t('site.shopDescription')}</p><a className="btn-primary" href={LINKS.webshop} target="_blank" rel="noopener noreferrer"><ShoppingBag size={17} />{t('site.visitShop')}<ArrowUpRight size={16} /></a><div className="community-caption"><Shield size={15} />{t('site.shopNote')}</div></div>
  </section>
}

export function RulesSection() {
  const { t } = useTranslation()
  const general = t('rules.generalRules.items', { returnObjects: true }) as { num: string; title: string; rules: string[] }[]
  return <section id="rules" className="section rules-section"><div className="section-heading"><div><p className="eyebrow">{t('site.playRespectfully')}</p><h2>{t('site.rules')}</h2></div><a className="text-link" href={LINKS.report} target="_blank" rel="noopener noreferrer">{t('rules.reportPlayerButton')}<ArrowUpRight size={16} /></a></div><div className="rules-list">
    <details><summary><Shield size={18} /><span>{t('rules.generalRules.heading').replace(/^[^\p{L}]+/u, '')}</span><ChevronDown size={18} /></summary><div className="detail-content">{general.map(rule => <div key={rule.num} className="rule-entry"><h3>{rule.num}. {rule.title}</h3>{rule.rules.map(line => <p key={line}>{line}</p>)}</div>)}</div></details>
    <details><summary><BookOpen size={18} /><span>{t('rules.warningSystem.heading').replace(/^[^\p{L}]+/u, '')}</span><ChevronDown size={18} /></summary><div className="detail-content"><p><Trans i18nKey="rules.warningSystem.intro" components={[<strong key="policy" />]} /></p><ul>{(t('rules.warningSystem.items', { returnObjects: true }) as string[]).map(line => <li key={line}>{line}</li>)}</ul></div></details>
    <details><summary><Swords size={18} /><span>{t('rules.zeroTolerance.heading').replace(/^[^\p{L}]+/u, '')}</span><ChevronDown size={18} /></summary><div className="detail-content"><p><Trans i18nKey="rules.zeroTolerance.intro" components={[<strong key="ban" />]} /></p><h3>{t('rules.zeroTolerance.speedHackTitle')}</h3><ul>{(t('rules.zeroTolerance.speedHackLines', { returnObjects: true }) as string[]).map(line => <li key={line}>{line}</li>)}</ul></div></details>
    {(['permanentBanPolicy', 'evidenceRequirements'] as const).map(key => <details key={key}><summary><Shield size={18} /><span>{t(`rules.${key}.heading`).replace(/^[^\p{L}]+/u, '')}</span><ChevronDown size={18} /></summary><div className="detail-content"><ul>{(t(`rules.${key}.lines`, { returnObjects: true }) as string[]).map(line => <li key={line}>{line}</li>)}</ul></div></details>)}
  </div><p className="rules-note">{t('rules.footerNote')}</p><a className="text-link" href={LINKS.rules} target="_blank" rel="noopener noreferrer">{t('rules.viewRulesButton')}<ArrowUpRight size={16} /></a></section>
}
