import { useEffect, useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import logoImg from '../assets/logo_playcrows.png'
import playcrowsLogo from '../assets/playcrows_logo.png'
import thumbAnnouncement from '../assets/announcement.png'
import thumbUpdate from '../assets/update.png'
import thumbGameInfo from '../assets/game.png'
import thumbSupport from '../assets/support.png'
import type { Page, Lang } from '../data'
import discordBannerImg from '../assets/image-1.png'
import { IcoBell, IcoRefresh, IcoCalendar, IcoShield, IcoDiscordSmall, IcoDonate, IcoLeft, IcoRight, IcoArrow, IcoDownload } from './Icons'
import { ANNOUNCEMENTS, HERO_SLIDES, UPDATES } from '../data'


export function Hero() {
  const { t } = useTranslation();

  const slide = HERO_SLIDES[0];
  const [videoEnabled, setVideoEnabled] = useState(Boolean(slide.video));

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: 620, marginTop: 70 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.img})` }}
      />

      {slide.video && videoEnabled && (
        <video
          src={slide.video}
          poster={slide.img}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={() => setVideoEnabled(false)}
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,12,9,.45) 0%, rgba(15,12,9,.65) 55%, rgba(15,12,9,.95) 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <img
          src={playcrowsLogo}
          alt={t('hero.logoAlt')}
          className="mb-4"
          style={{
            height: "clamp(70px,12vw,160px)",
            width: "auto",
          }}
        />

        <p
          style={{
            fontSize: "clamp(.9rem,1.6vw,1.05rem)",
            color: "#A8916E",
            maxWidth: 560,
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
          }}
        >
          {t("hero.subtitle")}
        </p>
      </div>
    </section>
  );
}

export function QuickNav() {
  return null
}

export function NewsGrid({ navigate, scrollTo }: { navigate: (p: Page) => void; scrollTo: (id: string) => void }) {
  const { t, i18n } = useTranslation()

  const SUPPORTED_LANGS: Lang[] = ['en', 'kr', 'th', 'tw', 'br']
  const lang: Lang = SUPPORTED_LANGS.includes(i18n.language as Lang) ? (i18n.language as Lang) : 'en'

  const THUMB_ANN = thumbAnnouncement
  const THUMB_UPD = thumbUpdate
  const THUMB_GI = thumbGameInfo
  const THUMB_SUP = thumbSupport

  const cols = [
    {
      heading: t('newsGrid.columns.announcement.heading'), thumb: THUMB_ANN, thumbAlt: t('newsGrid.columns.announcement.thumbAlt'),
      featured: ANNOUNCEMENTS[0].title[lang],
      onArrow: () => navigate({ view: 'announcements' }),
      links: ANNOUNCEMENTS.slice(0, 4).map(a => ({ label: a.title[lang], onClick: () => navigate({ view: 'announcement', id: a.id }) })),
    },
    {
      heading: t('newsGrid.columns.update.heading'), thumb: THUMB_UPD, thumbAlt: t('newsGrid.columns.update.thumbAlt'),
      featured: UPDATES[0].title[lang],
      onArrow: () => navigate({ view: 'updates' }),
      links: UPDATES.map(u => ({ label: u.title[lang], onClick: () => navigate({ view: 'update', id: u.id }) })),
    },
    {
      heading: t('newsGrid.columns.gameInformation.heading'), thumb: THUMB_GI, thumbAlt: t('newsGrid.columns.gameInformation.thumbAlt'),
      featured: t('newsGrid.columns.gameInformation.featured'),
      onArrow: () => scrollTo('game-info'),
      links: [
        { label: t('newsGrid.columns.gameInformation.links.beginnersHandbook'), onClick: () => scrollTo('game-info') },
        { label: t('newsGrid.columns.gameInformation.links.pvpRankings'), onClick: () => scrollTo('game-info') },
        { label: t('newsGrid.columns.gameInformation.links.guildWarSchedule'), onClick: () => scrollTo('game-info') },
        { label: t('newsGrid.columns.gameInformation.links.bossRaidGuide'), onClick: () => scrollTo('game-info') },
      ],
    },
    {
      heading: t('newsGrid.columns.support.heading'), thumb: THUMB_SUP, thumbAlt: t('newsGrid.columns.support.thumbAlt'),
      featured: t('newsGrid.columns.support.featured'),
      onArrow: () => scrollTo('donation'),
      links: [
        { label: t('newsGrid.columns.support.links.donationCenter'), onClick: () => scrollTo('donation') },
        { label: t('newsGrid.columns.support.links.newPlayerStarterRewards'), onClick: () => scrollTo('donation') },
        { label: t('newsGrid.columns.support.links.faqAccountLogin'), onClick: () => scrollTo('discord-section') },
        { label: t('newsGrid.columns.support.links.contactStaffViaDiscord'), onClick: () => window.open('https://discord.gg/ayxHdychr', '_blank') },
      ],
    },
  ]

  return (
    <section style={{ background: '#0F0C09', padding: '40px 0 72px' }}>
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cols.map(col => (
            <div key={col.heading} style={{ background: '#15110A', border: '1px solid rgba(212,169,77,0.08)' }}>
              <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid rgba(212,169,77,0.08)' }}>
                <span className="font-cinzel font-semibold text-white" style={{ fontSize: 13, letterSpacing: '0.12em' }}>{col.heading}</span>
                <button onClick={col.onArrow} className="bg-transparent border-none cursor-pointer transition-colors duration-200 p-1" style={{ color: '#6B5640' }} onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = '#D4A94D')} onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = '#6B5640')}><IcoArrow /></button>
              </div>
              <div className="relative overflow-hidden" style={{ height: 160, background: '#0F0C09' }}>
                <img src={col.thumb} alt={col.thumbAlt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,12,9,0.75) 0%, transparent 60%)' }} />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="font-inter text-white font-medium leading-snug" style={{ fontSize: 12 }}>{col.featured}</p>
                </div>
              </div>
              <ul style={{ padding: '6px 0' }}>
                {col.links.map((link, index) => (
                  <li key={index}>
                    <button onClick={link.onClick} className="w-full text-left flex items-start gap-2 px-4 py-2.5 font-inter bg-transparent border-none cursor-pointer transition-all duration-200" style={{ fontSize: 13, color: '#8A7050', borderBottom: index < col.links.length - 1 ? '1px solid rgba(212,169,77,0.05)' : 'none' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#C4A05A'; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(212,169,77,0.04)' }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#8A7050'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent' }}>
                      <span style={{ color: '#4A3720', flexShrink: 0, lineHeight: '22px' }}>·</span>
                      <span className="truncate">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DownloadSection() {
  const { t } = useTranslation()

  const pcLinks = [
    { lang: t('download.languages.english'), url: 'http://download.playcrows.com/p/PlayPC-en.zip' },
    { lang: t('download.languages.taiwanese'), url: 'http://download.playcrows.com/p/PlayPC-tw.zip' },
    { lang: t('download.languages.korean'), url: 'http://download.playcrows.com/p/PlayPC-kr.zip' },
  ]

  const androidLinks = [
    { lang: t('download.languages.english'), url: 'http://download.playcrows.com/p/playandroid-en-8.apk' },
    { lang: t('download.languages.taiwanese'), url: 'http://download.playcrows.com/p/playandroid-tw-8.apk' },
    { lang: t('download.languages.korean'), url: 'http://download.playcrows.com/p/playandroid-kr-8.apk' },
  ]

  return (
    <section id="download" className="py-24 px-6" style={{ background: '#0D0A07' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">{t('download.sectionLabel')}</p>
          <h2 className="font-cinzel font-bold text-white tracking-widest" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '.15em' }}>
            {t('download.title')}
          </h2>
          <div className="divider-blue mt-5 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2" style={{ border: '1px solid rgba(255,255,255,.08)', background: '#17120B', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ borderRight: '1px solid rgba(255,255,255,.08)' }}>
            <div className="font-cinzel font-bold text-white tracking-widest text-center" style={{ fontSize: '1.8rem', letterSpacing: '0.15em', padding: '24px 0' }}>
              {t('download.pc')}
            </div>
            {pcLinks.map((item) => (
              <div key={item.lang} className="flex items-center justify-between px-6 py-4" style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
                <span className="font-cinzel" style={{ color: '#C9B99C', fontSize: 13, letterSpacing: '.12em' }}>{item.lang}</span>
                <a href={item.url} className="btn-primary no-underline" style={{ padding: '8px 18px', fontSize: 12 }}>{t('download.downloadButton')}</a>
              </div>
            ))}
          </div>

          <div>
            <div className="font-cinzel font-bold text-white tracking-widest text-center" style={{ fontSize: '1.8rem', letterSpacing: '0.15em', padding: '24px 0' }}>
              {t('download.android')}
            </div>
            {androidLinks.map((item) => (
              <div key={item.lang} className="flex items-center justify-between px-6 py-4" style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
                <span className="font-cinzel" style={{ color: '#C9B99C', fontSize: 13, letterSpacing: '.12em' }}>{item.lang}</span>
                <a href={item.url} className="btn-primary no-underline" style={{ padding: '8px 18px', fontSize: 12 }}>{t('download.downloadButton')}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import expImg from '../assets/gameinfo/exp.png'
import dropImg from '../assets/gameinfo/drop.png'
import enhanceImg from '../assets/gameinfo/enhance.png'
import starterImg from '../assets/gameinfo/starter.png'
import dailyImg from '../assets/gameinfo/daily.png'
import npcImg from '../assets/gameinfo/npc.png'

export function GameInfoSection() {
  const { t } = useTranslation()

  const items = [
    {
      title: t('gameInfo.items.expRate.title'),
      value: t('gameInfo.items.expRate.value'),
      image: expImg,
      color: '#9A6BFF',
    },
    {
      title: t('gameInfo.items.dropRate.title'),
      value: t('gameInfo.items.dropRate.value'),
      image: dropImg,
      color: '#D4A94D',
    },
    {
      title: t('gameInfo.items.enhancementRate.title'),
      value: t('gameInfo.items.enhancementRate.value'),
      image: enhanceImg,
      color: '#65D15F',
    },
    {
      title: t('gameInfo.items.newPlayerRewards.title'),
      value: t('gameInfo.items.newPlayerRewards.value'),
      image: starterImg,
      color: '#4CB9FF',
    },
    {
      title: t('gameInfo.items.dailyRewards.title'),
      value: t('gameInfo.items.dailyRewards.value'),
      image: dailyImg,
      color: '#FF9B3E',
    },
    {
      title: t('gameInfo.items.modifiedNpc.title'),
      value: t('gameInfo.items.modifiedNpc.value'),
      image: npcImg,
      color: '#49D6D8',
    },
  ]

  return (
    <section
      id="game-info"
      className="py-28 px-6"
      style={{ background: '#0F0C09' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">{t('gameInfo.sectionLabel')}</p>

          <h2
            className="font-cinzel font-bold text-white tracking-widest"
            style={{
              fontSize: 'clamp(2rem,4vw,3rem)',
              letterSpacing: '.15em',
            }}
          >
            {t('gameInfo.title')}
          </h2>

          <div
            className="mx-auto mt-6"
            style={{
              width: 70,
              height: 2,
              background: '#C8A96A',
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden"
              style={{
                background: '#191309',
                border: `1px solid ${item.color}33`,
                borderRadius: 12,
                transition: 'all .3s ease',
                boxShadow: `0 0 18px ${item.color}15`,
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: 170,
                  overflow: 'hidden',
                  background: '#0F0C09',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div
                style={{
                  padding: '18px',
                  textAlign: 'center',
                }}
              >
                <h3
                  className="font-cinzel font-bold"
                  style={{
                    color: item.color,
                    fontSize: 34,
                    textShadow: `0 0 12px ${item.color}`,
                    lineHeight: 1,
                  }}
                >
                  {item.value}
                </h3>

                <div
                  style={{
                    width: 50,
                    height: 1,
                    background: item.color,
                    margin: '14px auto',
                    opacity: .7,
                  }}
                />

                <p
                  className="font-cinzel"
                  style={{
                    color: '#E8D9B0',
                    letterSpacing: '.12em',
                    fontSize: 12,
                  }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DonationSection() {
  const { t } = useTranslation()

  const starterRewardsItems = t('donation.starterRewards.items', { returnObjects: true }) as string[]
  const dailyRewardsItems = t('donation.dailyRewards.items', { returnObjects: true }) as string[]

  return (
    <section id="donation" className="py-28 px-6 relative overflow-hidden" style={{ background: '#0D0A07' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,169,77,0.07) 0%, transparent 65%)' }} />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="section-label mb-5">{t('donation.sectionLabel')}</p>
          <h2 className="font-cinzel font-bold text-white mb-5 tracking-widest" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '0.15em' }}>{t('donation.title')}</h2>
          <div className="divider-blue mb-7" />
          <p className="font-inter font-light leading-relaxed" style={{ color: '#7A6248' }}>{t('donation.description')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div style={{ border: '1px solid rgba(212,169,77,0.15)', background: '#14100A', padding: 24 }}>
            <p className="font-cinzel font-semibold text-white mb-4" style={{ fontSize: 13, letterSpacing: '0.15em' }}>{t('donation.starterRewards.heading')}</p>
            <p className="font-inter font-light mb-4" style={{ fontSize: 13, color: '#8A7050' }}>{t('donation.starterRewards.description')}</p>
            <ul style={{ padding: 0, listStyle: 'none' }}>
              {starterRewardsItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2 font-inter font-light" style={{ fontSize: 13, color: '#7A6248', padding: '3px 0' }}>
                  <span style={{ color: '#D4A94D', flexShrink: 0 }}>·</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ border: '1px solid rgba(212,169,77,0.15)', background: '#14100A', padding: 24 }}>
            <p className="font-cinzel font-semibold text-white mb-4" style={{ fontSize: 13, letterSpacing: '0.15em' }}>{t('donation.dailyRewards.heading')}</p>
            <p className="font-inter font-light mb-4" style={{ fontSize: 13, color: '#8A7050' }}>{t('donation.dailyRewards.description')}</p>
            <ul style={{ padding: 0, listStyle: 'none' }}>
              {dailyRewardsItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2 font-inter font-light" style={{ fontSize: 13, color: '#7A6248', padding: '3px 0' }}>
                  <span style={{ color: '#D4A94D', flexShrink: 0 }}>·</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <a href="https://playcrowsweb.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block no-underline mb-4" style={{ fontSize: 14, padding: '14px 60px' }}>
            <span>{t('donation.donateButton')}</span>
          </a>
          <p className="font-inter font-light" style={{ fontSize: 13, color: '#4A3720' }}>{t('donation.footerNote')}</p>
        </div>
      </div>
    </section>
  )
}

export function RulesSection() {
  const { t } = useTranslation()

  const generalRulesItems = t('rules.generalRules.items', { returnObjects: true }) as { num: string; title: string; rules: string[] }[]
  const warningSystemItems = t('rules.warningSystem.items', { returnObjects: true }) as string[]
  const speedHackLines = t('rules.zeroTolerance.speedHackLines', { returnObjects: true }) as string[]
  const permanentBanLines = t('rules.permanentBanPolicy.lines', { returnObjects: true }) as string[]
  const evidenceLines = t('rules.evidenceRequirements.lines', { returnObjects: true }) as string[]

  return (
    <section id="rules" className="py-28 px-6" style={{ background: '#0F0C09' }}>
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-4">{t('rules.sectionLabel')}</p>
          <h2 className="font-cinzel font-bold text-white tracking-widest" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '0.15em' }}>{t('rules.title')}</h2>
          <div className="divider-blue mt-6 mb-6" />
          <p className="font-inter font-light" style={{ color: '#7A6248', fontSize: 15 }}>{t('rules.subtitle')}</p>
        </div>
        <div style={{ border: '1px solid rgba(212,169,77,0.12)', background: '#15110A', padding: '28px 32px', marginBottom: 16 }}>
          <p className="font-cinzel font-semibold text-white mb-5" style={{ fontSize: 13, letterSpacing: '0.2em' }}>{t('rules.generalRules.heading')}</p>
          {generalRulesItems.map(rule => (
            <div key={rule.num} className="flex gap-6 mb-5 last:mb-0">
              <span className="font-cinzel font-bold shrink-0" style={{ color: '#4A3720', fontSize: '1.4rem', lineHeight: 1, paddingTop: 2 }}>{rule.num}</span>
              <div>
                <p className="font-cinzel font-semibold text-white mb-1" style={{ fontSize: 13, letterSpacing: '0.15em' }}>{rule.title}</p>
                {rule.rules.map((text, index) => <p key={index} className="font-inter font-light" style={{ fontSize: 14, color: '#7A6248', lineHeight: 1.7 }}>{text}</p>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ border: '1px solid rgba(212,169,77,0.12)', background: '#15110A', padding: '28px 32px', marginBottom: 16 }}>
          <p className="font-cinzel font-semibold text-white mb-4" style={{ fontSize: 13, letterSpacing: '0.2em' }}>{t('rules.warningSystem.heading')}</p>
          <p className="font-inter font-light mb-3" style={{ fontSize: 14, color: '#7A6248', lineHeight: 1.8 }}>
            <Trans i18nKey="rules.warningSystem.intro">
              PlayCrows uses a <strong style={{ color: '#C4A05A' }}>3-Warning Policy</strong> for most rule violations.
            </Trans>
          </p>
          {warningSystemItems.map((line, index) => (
            <div key={index} className="flex items-start gap-2 mb-2"><span style={{ color: '#D4A94D', flexShrink: 0 }}>·</span><p className="font-inter font-light" style={{ fontSize: 14, color: '#7A6248', lineHeight: 1.7 }}>{line}</p></div>
          ))}
        </div>
        <div style={{ border: '1px solid rgba(200,60,60,0.2)', background: '#150C0A', padding: '28px 32px', marginBottom: 16 }}>
          <p className="font-cinzel font-semibold mb-4" style={{ fontSize: 13, letterSpacing: '0.2em', color: '#CC5555' }}>{t('rules.zeroTolerance.heading')}</p>
          <p className="font-inter font-light mb-3" style={{ fontSize: 14, color: '#7A6248', lineHeight: 1.8 }}>
            <Trans i18nKey="rules.zeroTolerance.intro">
              The following offenses result in an <strong style={{ color: '#CC5555' }}>immediate permanent ban</strong> without any warnings:
            </Trans>
          </p>
          <div className="mb-4">
            <p className="font-cinzel font-semibold text-white mb-1" style={{ fontSize: 13, letterSpacing: '0.1em' }}>{t('rules.zeroTolerance.speedHackTitle')}</p>
            {speedHackLines.map((line, index) => (
              <div key={index} className="flex items-start gap-2 mb-1"><span style={{ color: '#CC5555', flexShrink: 0 }}>·</span><p className="font-inter font-light" style={{ fontSize: 14, color: '#7A6248', lineHeight: 1.7 }}>{line}</p></div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div style={{ border: '1px solid rgba(212,169,77,0.12)', background: '#15110A', padding: '24px 28px' }}>
            <p className="font-cinzel font-semibold text-white mb-3" style={{ fontSize: 13, letterSpacing: '0.2em' }}>{t('rules.permanentBanPolicy.heading')}</p>
            {permanentBanLines.map((line, index) => (
              <div key={index} className="flex items-start gap-2 mb-2"><span style={{ color: '#D4A94D', flexShrink: 0 }}>·</span><p className="font-inter font-light" style={{ fontSize: 14, color: '#7A6248', lineHeight: 1.7 }}>{line}</p></div>
            ))}
          </div>
          <div style={{ border: '1px solid rgba(212,169,77,0.12)', background: '#15110A', padding: '24px 28px' }}>
            <p className="font-cinzel font-semibold text-white mb-3" style={{ fontSize: 13, letterSpacing: '0.2em' }}>{t('rules.evidenceRequirements.heading')}</p>
            {evidenceLines.map((line, index) => (
              <div key={index} className="flex items-start gap-2 mb-2"><span style={{ color: '#D4A94D', flexShrink: 0 }}>·</span><p className="font-inter font-light" style={{ fontSize: 14, color: '#7A6248', lineHeight: 1.7 }}>{line}</p></div>
            ))}
          </div>
        </div>
        <div style={{ border: '1px solid rgba(212,169,77,0.1)', background: '#15110A', padding: '20px 28px', marginBottom: 32 }}>
          <p className="font-inter font-light" style={{ fontSize: 14, color: '#7A6248', lineHeight: 1.85 }}>
            {t('rules.footerNote')}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://playcrows.base44.app" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block no-underline" style={{ fontSize: 13, padding: '12px 36px' }}><span>{t('rules.viewRulesButton')}</span></a>
          <a href="https://discord.com/channels/1527607490840100955/1527609980625227866" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-block no-underline" style={{ fontSize: 13, padding: '12px 36px' }}>{t('rules.reportPlayerButton')}</a>
        </div>
      </div>
    </section>
  )
}

export function DiscordSection() {
  const { t } = useTranslation()

  return (
    <section id="discord-section" className="py-28 px-6 relative overflow-hidden" style={{ background: '#0D0A07' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 55%, rgba(212,169,77,0.08) 0%, transparent 60%)' }} />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="section-label mb-5">{t('discord.sectionLabel')}</p>
          <h2 className="font-cinzel font-bold text-white mb-5 tracking-widest" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '0.15em' }}>{t('discord.title')}</h2>
          <div className="divider-blue mb-7" />
          <p className="font-inter font-light leading-relaxed" style={{ color: '#7A6248', maxWidth: 480, margin: '0 auto' }}>
            {t('discord.description')}
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div style={{ width: 300, background: '#1C160E', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(212,169,77,0.3)', boxShadow: '0 0 40px rgba(212,169,77,0.15)' }}>
            <div
              style={{
                height: 80,
                backgroundImage: `url(${discordBannerImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div style={{ padding: '0 16px', marginTop: -28 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', border: '4px solid #1C160E', overflow: 'hidden', background: '#0F0C09', marginBottom: 8 }}>
                <img src={logoImg} alt={t('discord.logoAlt')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <p className="font-cinzel font-bold text-white" style={{ fontSize: 15, letterSpacing: '0.08em', marginBottom: 4 }}>{t('discord.serverName')}</p>
              <div className="flex items-center gap-4 mb-3" style={{ fontSize: 13, fontFamily: 'Inter, sans-serif' }}>
                <span style={{ color: '#23A55A' }}>● <span style={{ color: '#C9B99C' }}>{t('discord.onlineCount')}</span></span>
                <span style={{ color: '#8A7050' }}>● <span style={{ color: '#C9B99C' }}>{t('discord.memberCount')}</span></span>
              </div>
              <p style={{ fontSize: 12, color: '#8A7050', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, marginBottom: 6 }}>{t('discord.established')}</p>
              <p style={{ fontSize: 13, color: '#C9B99C', fontFamily: 'Inter, sans-serif', lineHeight: 1.65, marginBottom: 16 }}>
                {t('discord.serverDescription')}
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="https://discord.gg/ayxHdychr" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block no-underline" style={{ fontSize: 14, padding: '14px 60px' }}>
            <span>{t('discord.joinButton')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}