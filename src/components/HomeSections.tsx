import { useEffect, useRef, useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown, Download, Gift, Globe2, Monitor, Pause, Play, Shield, ShoppingBag, Smartphone, Sparkles, Swords, UserPlus, Users } from 'lucide-react'
import type { Page, Lang } from '../data'
import { ANNOUNCEMENTS, UPDATES } from '../data'
import { LINKS, SERVERS, type Platform } from '../site'
import heroVideo from '../assets/hero.mp4'
import heroPoster from '../assets/hero-poster.png'
import announcementArt from '../assets/announcement.png'
import knight from '../assets/night-crows-knight.png'
import world from '../assets/night-crows-world.png'
import updateArt from '../assets/update.png'
import newsArt from '../assets/game.png'
import crest from '../assets/playcrows-emblem.png'
import { IcoDiscordSmall } from './Icons'
import AccountMergeGuide from './AccountMergeGuide'

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
      <div className="hero-perks"><span><Swords size={16} />PlayCrows V1</span><span><Monitor size={16} />Windows & Android</span><span><Globe2 size={16} />{t('site.globalCommunity')}</span></div>
      <div className="hero-buttons"><button className="btn-primary" onClick={() => scrollTo('servers')}><UserPlus size={18} />{t('site.beginJourney')}<ArrowRight size={17} /></button><button className="btn-secondary" onClick={() => scrollTo('download')}><Download size={17} />{t('site.downloadGame')}</button></div>
      <a className="hero-explore" href="#servers">{t('site.findRealm')}<ArrowDown size={14} /></a>
    </div>
    {motion && <button className="video-toggle" onClick={toggleVideo} aria-label={t(paused ? 'site.playVideo' : 'site.pauseVideo')}>{paused ? <Play size={14} /> : <Pause size={14} />}</button>}
    <div className="hero-caption" aria-hidden="true">PLAYCROWS <span>NIGHT CROWS</span></div>
  </section>
}

export function ServerSection({ onDownload }: { onDownload: () => void }) {
  const { t } = useTranslation()
  const server = SERVERS.v1
  return <section id="servers" className="section servers-section">
    <div className="section-heading"><div><p className="eyebrow">{t('site.chooseChapter')}</p><h2>{t('site.ourServers')}</h2></div><p>{t('site.serverIntro')}</p></div>
    <div className="servers-grid">
      <article id="server-v1" className="server-card v1">
        <div className="server-scene">
          <img src={world} alt="" className="server-art" loading="lazy" width={960} height={540} />
          <div className="server-shade" /><img src={knight} className="server-character" alt="" loading="lazy" width={1655} height={1763} />
          <span className="server-number" aria-hidden="true">01</span>
          <div className="server-copy"><p className="server-kicker">NIGHT CROWS</p><h3>PLAYCROWS <span>{server.name}</span></h3><div className="short-rule" /><p>{t('site.v1Description')}</p><a className="btn-primary" href={server.register} target="_blank" rel="noopener noreferrer"><UserPlus size={16} />{t('site.createAccount')}<ArrowUpRight size={16} /></a></div>
        </div>
        <div className="server-card-footer"><div><strong>PlayCrows {server.name}</strong><span className="server-tag">{t('site.v1Tag')}</span><small>Windows · Android</small></div><div className="server-card-actions"><a href="#game-info" aria-label={`${server.name} — ${t('site.features')}`}><BookOpen size={15} />{t('site.features')}</a><button onClick={onDownload} aria-label={`${server.name} — ${t('site.download')}`}><Download size={15} />{t('site.download')}</button></div></div>
      </article>
      <AccountMergeGuide />
    </div>
    <p className="server-note"><Shield size={14} />{t('site.accountNote')}</p>
  </section>
}

export function NewsGrid({ navigate }: { navigate: (page: Page) => void }) {
  const { t, i18n } = useTranslation()
  const lang = (['en', 'kr', 'th', 'tw', 'br'].includes(i18n.language) ? i18n.language : 'en') as Lang
  const featured = [
    { item: ANNOUNCEMENTS[0], category: t('site.announcements'), image: ANNOUNCEMENTS[0].banner ?? announcementArt, page: { view: 'announcement', id: ANNOUNCEMENTS[0].id } as Page },
    { item: UPDATES[0], category: t('site.updates'), image: updateArt, page: { view: 'update', id: UPDATES[0].id } as Page },
    { item: ANNOUNCEMENTS[1], category: t('site.announcements'), image: ANNOUNCEMENTS[1].banner ?? newsArt, page: { view: 'announcement', id: ANNOUNCEMENTS[1].id } as Page },
  ]
  return <section id="news" className="section news-section">
    <div className="section-heading"><div><p className="eyebrow">{t('site.fromRealm')}</p><h2>{t('site.newsTitle')}</h2></div><div className="news-links"><a href="#/announcements">{t('site.announcements')}<ArrowUpRight size={15} /></a><a href="#/updates">{t('site.updates')}<ArrowUpRight size={15} /></a></div></div>
    <div className="news-grid">{featured.map(({ item, category, image, page }) => <button key={item.id} className="news-card" onClick={() => navigate(page)}>
      <div className="news-image"><img src={image} alt="" loading="lazy" width={640} height={360} style={{ objectPosition: 'fullBanner' in item && item.fullBanner ? 'center top' : undefined }} /><span>{category}</span></div>
      <div className="news-body"><time>{item.date[lang]}</time><h3>{item.title[lang]}</h3><p>{item.preview[lang]}</p><span className="news-read">{t('site.readMore')}<ArrowUpRight size={17} /></span></div>
    </button>)}</div>
  </section>
}

export function GameInfoSection() {
  const { t } = useTranslation()
  const rewardPrefix = 'donation'
  const starterItems = t(`${rewardPrefix}.starterRewards.items`, { returnObjects: true }) as string[]
  const dailyItems = t(`${rewardPrefix}.dailyRewards.items`, { returnObjects: true }) as string[]
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
    <div className="reward-heading">
      <div><h3>{t('serverRewards.title')}</h3><p>{t('serverRewards.sharedInfo')}</p></div>
    </div>
    <div className="reward-accordions">
      <details className="reward-detail">
        <summary><Gift size={18} /><span><b className="reward-server-badge">V1</b>{t(`${rewardPrefix}.starterRewards.heading`).replace(/^[^\p{L}]+/u, '')}</span><ChevronDown size={17} /></summary>
        <div className="detail-content"><p>{t(`${rewardPrefix}.starterRewards.description`)}</p><ul>{starterItems.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </details>
      <details className="reward-detail">
        <summary><Gift size={18} /><span><b className="reward-server-badge">V1</b>{t(`${rewardPrefix}.dailyRewards.heading`).replace(/^[^\p{L}]+/u, '')}</span><ChevronDown size={17} /></summary>
        <div className="detail-content"><p>{t(`${rewardPrefix}.dailyRewards.description`)}</p><ul>{dailyItems.map(item => <li key={item}>{item}</li>)}</ul></div>
      </details>
    </div>
  </section>
}

export function DownloadSection() {
  const { t } = useTranslation()
  const [platform, setPlatform] = useState<Platform>('windows')
  const chosen = SERVERS.v1
  const downloadUrl = chosen.downloads[platform]
  return <section id="download" className="section download-panel">
    <div className="download-intro"><p className="eyebrow">{t('site.getStarted')}</p><h2>{t('site.realmAwaits')}</h2><p>{t('site.downloadIntro')}</p><ol className="onboarding-steps"><li><span>01</span><div><strong>{t('site.createAccount')}</strong><p>{t('site.createAccountHint')}</p></div></li><li><span>02</span><div><strong>{t('site.enterWorld')}</strong><p>{t('site.enterWorldHint')}</p></div></li></ol><a className="text-link" href="#account-merge">{t('site.mergeGuide')}<ArrowRight size={16} /></a></div>
    <div className="download-controls">
      <div className="download-options"><fieldset><legend>{t('site.platform')}</legend><div className="segmented platform-selector">{(['windows', 'android'] as const).map(id => <label key={id} className={platform === id ? 'selected' : ''}><input type="radio" name="platform" value={id} checked={platform === id} onChange={() => setPlatform(id)} />{id === 'windows' ? <Monitor size={19} /> : <Smartphone size={19} />}<span>{id === 'windows' ? 'Windows' : 'Android'}</span></label>)}</div></fieldset><div className="client-language"><span>{t('site.clientLanguage')}</span><p className="multilingual-client">{t('site.multiLanguageClient')}</p></div></div>
      <p className="multilingual-note">{t('site.multiLanguageHint')}</p>
      <div className="download-summary" aria-live="polite"><span className="version-emblem">{chosen.name}</span><div><strong>PlayCrows {chosen.name}</strong><span>{platform === 'windows' ? 'Windows · ZIP' : 'Android · APK'}<span aria-hidden="true"> · </span>{t('site.multiLanguageClient')}</span></div></div>
      <a className="btn-primary download-button" href={downloadUrl} target="_blank" rel="noopener noreferrer"><Download size={19} />{t('site.download')} — {chosen.name}<ArrowUpRight size={18} /></a>
      <a className="download-register" href={chosen.register} target="_blank" rel="noopener noreferrer"><UserPlus size={16} />{t('site.registerFor', { server: chosen.name })}<ArrowUpRight size={15} /></a>
      <p className="download-help">{t('site.downloadHelp')} <a href={LINKS.discord} target="_blank" rel="noopener noreferrer">{t('site.askCommunity')}</a></p>
      <details className="download-mirrors"><summary>{t('site.allDownloads')}<ChevronDown size={14} /></summary><div>{(['windows', 'android'] as const).map(os => <div key={os}><strong>{os === 'windows' ? 'Windows' : 'Android'}</strong><a href={chosen.downloads[os]} target="_blank" rel="noopener noreferrer">{chosen.name} · {t('site.multiLanguageClient')}<Download size={14} /></a></div>)}</div></details>
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
