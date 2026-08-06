import { useEffect, useState } from 'react'
import logoImg from '../assets/logo_playcrows.png'
import type { Page } from '../data'
import { IcoBell, IcoRefresh, IcoCalendar, IcoShield, IcoDiscordSmall, IcoDonate, IcoLeft, IcoRight, IcoArrow, IcoDownload } from './Icons'
import { ANNOUNCEMENTS, HERO_SLIDES, UPDATES } from '../data'

export function Hero() {
  const slide = HERO_SLIDES[0]
  const [videoEnabled, setVideoEnabled] = useState(Boolean(slide.video))

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
            "linear-gradient(to bottom, rgba(5,8,16,.45) 0%, rgba(5,8,16,.65) 55%, rgba(5,8,16,.95) 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <h1
          className="font-cinzel font-bold text-white mb-4"
          style={{
            fontSize: "clamp(2rem,5vw,3.8rem)",
            letterSpacing: ".08em",
          }}
        >
          {slide.title}
        </h1>

        <p
          style={{
            fontSize: "clamp(.9rem,1.6vw,1.05rem)",
            color: "#7A9AB8",
            maxWidth: 560,
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
          }}
        >
          {slide.subtitle}
        </p>
      </div>
    </section>
  )
}

export function QuickNav() {
  return null
}

export function NewsGrid({ navigate, scrollTo }: { navigate: (p: Page) => void; scrollTo: (id: string) => void }) {
  const THUMB_ANN = 'https://images.unsplash.com/photo-1640903581708-8d491706515b?w=400&h=220&fit=crop&auto=format'
  const THUMB_UPD = 'https://images.unsplash.com/photo-1689009755519-9016708b9575?w=400&h=220&fit=crop&auto=format'
  const THUMB_GI = 'https://images.unsplash.com/photo-1775954966578-28ec452fdbcf?w=400&h=220&fit=crop&auto=format'
  const THUMB_SUP = 'https://images.unsplash.com/photo-1773216344341-e5ca0a1f0df9?w=400&h=220&fit=crop&auto=format'

  const cols = [
    {
      heading: 'Announcement', thumb: THUMB_ANN, thumbAlt: 'Announcement banner',
      featured: ANNOUNCEMENTS[0].title,
      onArrow: () => navigate({ view: 'announcements' }),
      links: ANNOUNCEMENTS.slice(0, 4).map(a => ({ label: a.title, onClick: () => navigate({ view: 'announcement', id: a.id }) })),
    },
    {
      heading: 'Update', thumb: THUMB_UPD, thumbAlt: 'Update banner',
      featured: UPDATES[0].title,
      onArrow: () => navigate({ view: 'updates' }),
      links: UPDATES.map(u => ({ label: u.title, onClick: () => navigate({ view: 'update', id: u.id }) })),
    },
    {
      heading: 'Game Information', thumb: THUMB_GI, thumbAlt: 'Game info',
      featured: 'Complete Class Guide — All 6 Classes',
      onArrow: () => scrollTo('game-info'),
      links: [
        { label: 'Beginner\'s Handbook', onClick: () => scrollTo('game-info') },
        { label: 'PvP Rankings — Current Season', onClick: () => scrollTo('game-info') },
        { label: 'Guild War Schedule', onClick: () => scrollTo('game-info') },
        { label: 'Boss Raid Guide', onClick: () => scrollTo('game-info') },
      ],
    },
    {
      heading: 'Support', thumb: THUMB_SUP, thumbAlt: 'Support',
      featured: 'Donation Center — Packages & Perks',
      onArrow: () => scrollTo('donation'),
      links: [
        { label: 'Donation Center', onClick: () => scrollTo('donation') },
        { label: 'New Player Starter Rewards', onClick: () => scrollTo('donation') },
        { label: 'FAQ — Account & Login', onClick: () => scrollTo('discord-section') },
        { label: 'Contact Staff via Discord', onClick: () => window.open('https://discord.gg/ayxHdychr', '_blank') },
      ],
    },
  ]

  return (
    <section style={{ background: '#050810', padding: '40px 0 72px' }}>
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cols.map(col => (
            <div key={col.heading} style={{ background: '#07090F', border: '1px solid rgba(59,158,255,0.08)' }}>
              <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid rgba(59,158,255,0.08)' }}>
                <span className="font-cinzel font-semibold text-white" style={{ fontSize: 13, letterSpacing: '0.12em' }}>{col.heading}</span>
                <button onClick={col.onArrow} className="bg-transparent border-none cursor-pointer transition-colors duration-200 p-1" style={{ color: '#2A4A6A' }} onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = '#3B9EFF')} onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = '#2A4A6A')}><IcoArrow /></button>
              </div>
              <div className="relative overflow-hidden" style={{ height: 160, background: '#050810' }}>
                <img src={col.thumb} alt={col.thumbAlt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,8,16,0.75) 0%, transparent 60%)' }} />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="font-inter text-white font-medium leading-snug" style={{ fontSize: 12 }}>{col.featured}</p>
                </div>
              </div>
              <ul style={{ padding: '6px 0' }}>
                {col.links.map((link, index) => (
                  <li key={index}>
                    <button onClick={link.onClick} className="w-full text-left flex items-start gap-2 px-4 py-2.5 font-inter bg-transparent border-none cursor-pointer transition-all duration-200" style={{ fontSize: 13, color: '#3A5A74', borderBottom: index < col.links.length - 1 ? '1px solid rgba(59,158,255,0.05)' : 'none' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#7AAEC8'; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(59,158,255,0.04)' }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#3A5A74'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent' }}>
                      <span style={{ color: '#1A3A54', flexShrink: 0, lineHeight: '22px' }}>·</span>
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
  const pcLinks = [
    { lang: 'ENGLISH', url: 'http://download.playcrows.com/p/PlayPC-en.zip' },
    { lang: 'TAIWANESE', url: 'http://download.playcrows.com/p/PlayPC-tw.zip' },
    { lang: 'KOREAN', url: 'http://download.playcrows.com/p/PlayPC-kr.zip' },
  ]

  const androidLinks = [
    { lang: 'ENGLISH', url: 'http://download.playcrows.com/p/playandroid-en-8.apk' },
    { lang: 'TAIWANESE', url: 'http://download.playcrows.com/p/playandroid-tw-8.apk' },
    { lang: 'KOREAN', url: 'http://download.playcrows.com/p/playandroid-kr-8.apk' },
  ]

  return (
    <section
      id="download"
      className="py-24 px-6"
      style={{ background: '#040710' }}
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="section-label mb-3">Get Started</p>

          <h2
            className="font-cinzel font-bold text-white tracking-widest"
            style={{
              fontSize: 'clamp(2rem,4vw,3rem)',
              letterSpacing: '.15em',
            }}
          >
            DOWNLOAD
          </h2>

          <div className="divider-blue mt-5 mx-auto" />
        </div>

        <div
          className="grid md:grid-cols-2"
          style={{
            border: '1px solid rgba(255,255,255,.08)',
            background: '#070B14',
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          {/* PC */}
        <div
          style={{
            borderRight: '1px solid rgba(255,255,255,.08)',
          }}
        >
          <div
            className="font-cinzel font-bold text-white tracking-widest text-center"
            style={{
              fontSize: '1.8rem',
              letterSpacing: '0.15em',
              padding: '24px 0',
            }}
          >
            PC
          </div>

          {pcLinks.map((item) => (
            <div
              key={item.lang}
              className="flex items-center justify-between px-6 py-4"
              style={{
                borderTop: '1px solid rgba(255,255,255,.05)',
              }}
            >
              <span
                className="font-cinzel"
                style={{
                  color: '#8EA8C2',
                  fontSize: 13,
                  letterSpacing: '.12em',
                }}
              >
                {item.lang}
              </span>

              <a
                href={item.url}
                className="btn-primary no-underline"
                style={{
                  padding: '8px 18px',
                  fontSize: 12,
                }}
              >
                Download
              </a>
            </div>
          ))}
        </div>

            {/* ANDROID */}
            <div>
              <div
                className="font-cinzel font-bold text-white tracking-widest text-center"
                style={{
                  fontSize: '1.8rem',
                  letterSpacing: '0.15em',
                  padding: '24px 0',
                }}
              >
                ANDROID
              </div>

              {androidLinks.map((item) => (
                <div
                  key={item.lang}
                  className="flex items-center justify-between px-6 py-4"
                  style={{
                    borderTop: '1px solid rgba(255,255,255,.05)',
                  }}
                >
                  <span
                    className="font-cinzel"
                    style={{
                      color: '#8EA8C2',
                      fontSize: 13,
                      letterSpacing: '.12em',
                    }}
                  >
                    {item.lang}
                  </span>

                  <a
                    href={item.url}
                    className="btn-primary no-underline"
                    style={{
                      padding: '8px 18px',
                      fontSize: 12,
                    }}
                  >
                    Download
                  </a>
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
  const items = [
    {
      title: 'EXP RATE',
      value: '50x',
      image: expImg,
      color: '#9A6BFF',
    },
    {
      title: 'DROP RATE',
      value: '30x',
      image: dropImg,
      color: '#D4A94D',
    },
    {
      title: 'ENHANCEMENT RATE',
      value: '3x',
      image: enhanceImg,
      color: '#65D15F',
    },
    {
      title: 'NEW PLAYER REWARDS',
      value: 'STARTER PACK',
      image: starterImg,
      color: '#4CB9FF',
    },
    {
      title: 'DAILY REWARDS',
      value: 'LOGIN BONUS',
      image: dailyImg,
      color: '#FF9B3E',
    },
    {
      title: 'MODIFIED NPC',
      value: 'CUSTOM NPC',
      image: npcImg,
      color: '#49D6D8',
    },
  ]

  return (
    <section
      id="game-info"
      className="py-28 px-6"
      style={{ background: '#050810' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Explore</p>

          <h2
            className="font-cinzel font-bold text-white tracking-widest"
            style={{
              fontSize: 'clamp(2rem,4vw,3rem)',
              letterSpacing: '.15em',
            }}
          >
            GAME INFORMATION
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
                background: '#090C14',
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
                  background: '#050810',
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
  return (
    <section id="donation" className="py-28 px-6 relative overflow-hidden" style={{ background: '#040710' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(59,158,255,0.07) 0%, transparent 65%)' }} />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="section-label mb-5">Support</p>
          <h2 className="font-cinzel font-bold text-white mb-5 tracking-widest" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '0.15em' }}>SUPPORT PLAYCROWS</h2>
          <div className="divider-blue mb-7" />
          <p className="font-inter font-light leading-relaxed" style={{ color: '#4A6280' }}>Your contributions directly fund hosting, development, and new content for every player.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div style={{ border: '1px solid rgba(59,158,255,0.15)', background: '#060A16', padding: 24 }}>
            <p className="font-cinzel font-semibold text-white mb-4" style={{ fontSize: 13, letterSpacing: '0.15em' }}>🎁 New Player Starter Rewards</p>
            <p className="font-inter font-light mb-4" style={{ fontSize: 13, color: '#3A5A74' }}>Every new adventurer will receive a New Player Gift Pack to kick-start their journey!</p>
            <ul style={{ padding: 0, listStyle: 'none' }}>
              {[
                'Sealed Hero Weapon Selection Box (Attributed) ×1',
                'Sealed Hero Accessory Selection Box (Attributed) ×1',
                'Sealed Hero Armor Selection Box (Attributed) ×1',
                '[L] Mount Summon (Bound) ×1',
                'Legendary Weapon Appearance Summon (Attributed) ×1',
                'Snowflake Mumruffin (Bound) ×1',
                'Nighthawk Equipment I/II/III/IV Selection Boxes (Attributed) ×6',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 font-inter font-light" style={{ fontSize: 13, color: '#4A6280', padding: '3px 0' }}>
                  <span style={{ color: '#3B9EFF', flexShrink: 0 }}>·</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ border: '1px solid rgba(59,158,255,0.15)', background: '#060A16', padding: 24 }}>
            <p className="font-cinzel font-semibold text-white mb-4" style={{ fontSize: 13, letterSpacing: '0.15em' }}>📅 Daily Login Rewards</p>
            <p className="font-inter font-light mb-4" style={{ fontSize: 13, color: '#3A5A74' }}>Log in every day to claim valuable rewards and strengthen your character!</p>
            <ul style={{ padding: 0, listStyle: 'none' }}>
              {[
                "Sunset's Mount Summon x11 (Bound) ×10",
                "Sunset's Weapon Style Summon x11 (Bound) ×10",
                'Night Crows Stimulant of Growth (Bound) ×10',
                'Food Basket (Owned) ×20',
                'Gold Coin Chest (Owned) ×100',
                'Mileage ×30,000',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 font-inter font-light" style={{ fontSize: 13, color: '#4A6280', padding: '3px 0' }}>
                  <span style={{ color: '#3B9EFF', flexShrink: 0 }}>·</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <a href="https://playcrowsweb.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block no-underline mb-4" style={{ fontSize: 14, padding: '14px 60px' }}>
            <span>Donate Now</span>
          </a>
          <p className="font-inter font-light" style={{ fontSize: 13, color: '#2A4060' }}>Every donation helps keep the server online.</p>
        </div>
      </div>
    </section>
  )
}

export function RulesSection() {
  return (
    <section id="rules" className="py-28 px-6" style={{ background: '#050810' }}>
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Conduct</p>
          <h2 className="font-cinzel font-bold text-white tracking-widest" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '0.15em' }}>SERVER RULES</h2>
          <div className="divider-blue mt-6 mb-6" />
          <p className="font-inter font-light" style={{ color: '#3A5270', fontSize: 15 }}>The code of conduct that governs the PlayCrows realm.</p>
        </div>
        <div style={{ border: '1px solid rgba(59,158,255,0.12)', background: '#07090F', padding: '28px 32px', marginBottom: 16 }}>
          <p className="font-cinzel font-semibold text-white mb-5" style={{ fontSize: 13, letterSpacing: '0.2em' }}>🛡️ General Rules</p>
          {[
            { num: '1', title: 'Respect All Players', rules: ['Treat everyone with respect.', 'Harassment, discrimination, hate speech, or excessive toxicity will not be tolerated.'] },
            { num: '2', title: 'No Exploiting or Bug Abuse', rules: ['Exploiting game bugs or unintended mechanics for personal gain is prohibited.', 'Any discovered bugs should be reported immediately.'] },
            { num: '3', title: 'No Third-Party Programs', rules: ['The use of cheats, hacks, bots, macros, scripts, or unauthorized third-party software that provides an unfair advantage is strictly prohibited.'] },
            { num: '4', title: 'No Account Trading or Selling', rules: ['Buying, selling, sharing, or trading accounts is done entirely at your own risk.', 'PlayCrows is not responsible for any losses resulting from account sharing or trading.'] },
            { num: '5', title: 'Impersonation', rules: ['Pretending to be a Game Master (GM), Administrator, Moderator, or any PlayCrows staff member is prohibited.'] },
            { num: '6', title: 'Respect the Community', rules: ['Do not intentionally disrupt gameplay, events, or community activities.', 'Follow instructions given by PlayCrows staff when necessary.'] },
          ].map(rule => (
            <div key={rule.num} className="flex gap-6 mb-5 last:mb-0">
              <span className="font-cinzel font-bold shrink-0" style={{ color: '#1A3A5C', fontSize: '1.4rem', lineHeight: 1, paddingTop: 2 }}>{rule.num}</span>
              <div>
                <p className="font-cinzel font-semibold text-white mb-1" style={{ fontSize: 13, letterSpacing: '0.15em' }}>{rule.title}</p>
                {rule.rules.map((text, index) => <p key={index} className="font-inter font-light" style={{ fontSize: 14, color: '#3A5270', lineHeight: 1.7 }}>{text}</p>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ border: '1px solid rgba(59,158,255,0.12)', background: '#07090F', padding: '28px 32px', marginBottom: 16 }}>
          <p className="font-cinzel font-semibold text-white mb-4" style={{ fontSize: 13, letterSpacing: '0.2em' }}>⚠️ Warning System</p>
          <p className="font-inter font-light mb-3" style={{ fontSize: 14, color: '#3A5270', lineHeight: 1.8 }}>PlayCrows uses a <strong style={{ color: '#7AAEC8' }}>3-Warning Policy</strong> for most rule violations.</p>
          {['Each valid video evidence submitted and verified by the staff counts as one (1) warning.', 'Players can accumulate a maximum of three (3) warnings.', 'Upon receiving the third warning, the account will be permanently banned.', 'All verified warnings will be publicly listed on the official PlayCrows website for transparency.'].map((line, index) => (
            <div key={index} className="flex items-start gap-2 mb-2"><span style={{ color: '#3B9EFF', flexShrink: 0 }}>·</span><p className="font-inter font-light" style={{ fontSize: 14, color: '#3A5270', lineHeight: 1.7 }}>{line}</p></div>
          ))}
        </div>
        <div style={{ border: '1px solid rgba(200,60,60,0.2)', background: '#0A0608', padding: '28px 32px', marginBottom: 16 }}>
          <p className="font-cinzel font-semibold mb-4" style={{ fontSize: 13, letterSpacing: '0.2em', color: '#CC5555' }}>🚫 Zero-Tolerance Violations</p>
          <p className="font-inter font-light mb-3" style={{ fontSize: 14, color: '#3A5270', lineHeight: 1.8 }}>The following offenses result in an <strong style={{ color: '#CC5555' }}>immediate permanent ban</strong> without any warnings:</p>
          <div className="mb-4">
            <p className="font-cinzel font-semibold text-white mb-1" style={{ fontSize: 13, letterSpacing: '0.1em' }}>Speed Hack</p>
            {['The use of any speed modification, speed hack, or movement manipulation software is strictly forbidden.', 'No warnings will be issued.', 'Once verified, the account will receive an immediate permanent ban.'].map((line, index) => (
              <div key={index} className="flex items-start gap-2 mb-1"><span style={{ color: '#CC5555', flexShrink: 0 }}>·</span><p className="font-inter font-light" style={{ fontSize: 14, color: '#3A5270', lineHeight: 1.7 }}>{line}</p></div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div style={{ border: '1px solid rgba(59,158,255,0.12)', background: '#07090F', padding: '24px 28px' }}>
            <p className="font-cinzel font-semibold text-white mb-3" style={{ fontSize: 13, letterSpacing: '0.2em' }}>🔒 Permanent Ban Policy</p>
            {['Once an account has been permanently banned, the decision is final.', 'Permanent bans are not eligible for appeal.', 'Creating alternative accounts to bypass a permanent ban may result in additional enforcement actions.'].map((line, index) => (
              <div key={index} className="flex items-start gap-2 mb-2"><span style={{ color: '#3B9EFF', flexShrink: 0 }}>·</span><p className="font-inter font-light" style={{ fontSize: 14, color: '#3A5270', lineHeight: 1.7 }}>{line}</p></div>
            ))}
          </div>
          <div style={{ border: '1px solid rgba(59,158,255,0.12)', background: '#07090F', padding: '24px 28px' }}>
            <p className="font-cinzel font-semibold text-white mb-3" style={{ fontSize: 13, letterSpacing: '0.2em' }}>📹 Evidence Requirements</p>
            {['Video evidence must clearly show the offense.', 'Edited, manipulated, or incomplete recordings may be rejected.', 'PlayCrows staff reserves the right to determine whether submitted evidence is valid.'].map((line, index) => (
              <div key={index} className="flex items-start gap-2 mb-2"><span style={{ color: '#3B9EFF', flexShrink: 0 }}>·</span><p className="font-inter font-light" style={{ fontSize: 14, color: '#3A5270', lineHeight: 1.7 }}>{line}</p></div>
            ))}
          </div>
        </div>
        <div style={{ border: '1px solid rgba(59,158,255,0.1)', background: '#07090F', padding: '20px 28px', marginBottom: 32 }}>
          <p className="font-inter font-light" style={{ fontSize: 14, color: '#3A5270', lineHeight: 1.85 }}>
            ⚖️ These rules exist to maintain a fair and competitive environment for everyone. By playing on PlayCrows, you acknowledge and agree to follow all server rules and understand that staff decisions regarding rule enforcement are final. Thank you for helping us build a better PlayCrows community.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://playcrows.base44.app" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block no-underline" style={{ fontSize: 13, padding: '12px 36px' }}><span>View Rules Page</span></a>
          <a href="https://discord.com/channels/1527607490840100955/1527609980625227866" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-block no-underline" style={{ fontSize: 13, padding: '12px 36px' }}>Report a Player</a>
        </div>
      </div>
    </section>
  )
}

export function DiscordSection() {
  return (
    <section id="discord-section" className="py-28 px-6 relative overflow-hidden" style={{ background: '#040710' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 55%, rgba(88,101,242,0.08) 0%, transparent 60%)' }} />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="section-label mb-5">Community</p>
          <h2 className="font-cinzel font-bold text-white mb-5 tracking-widest" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '0.15em' }}>JOIN US ON DISCORD</h2>
          <div className="divider-blue mb-7" />
          <p className="font-inter font-light leading-relaxed" style={{ color: '#4A6280', maxWidth: 480, margin: '0 auto' }}>
            Join our community and stay updated with announcements, events, and giveaways.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div style={{ width: 300, background: '#1E2033', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(88,101,242,0.3)', boxShadow: '0 0 40px rgba(88,101,242,0.15)' }}>
            <div style={{ height: 80, background: 'linear-gradient(135deg, #1a1f4a 0%, #0a0f2a 100%)' }} />
            <div style={{ padding: '0 16px', marginTop: -28 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', border: '4px solid #1E2033', overflow: 'hidden', background: '#050810', marginBottom: 8 }}>
                <img src={logoImg} alt="PLAYCROWS" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <p className="font-cinzel font-bold text-white" style={{ fontSize: 15, letterSpacing: '0.08em', marginBottom: 4 }}>PLAYCROWS OFFICIAL</p>
              <div className="flex items-center gap-4 mb-3" style={{ fontSize: 13, fontFamily: 'Inter, sans-serif' }}>
                <span style={{ color: '#23A55A' }}>● <span style={{ color: '#B5BAC1' }}>212 Online</span></span>
                <span style={{ color: '#80848E' }}>● <span style={{ color: '#B5BAC1' }}>1,386 Members</span></span>
              </div>
              <p style={{ fontSize: 12, color: '#72767D', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, marginBottom: 6 }}>Est. Jul 2026</p>
              <p style={{ fontSize: 13, color: '#B5BAC1', fontFamily: 'Inter, sans-serif', lineHeight: 1.65, marginBottom: 16 }}>
                PlayCrows is a community-driven Night Crows Private Server built for players who want a fair, competitive, and rewarding experience.
              </p>
              <a href="https://discord.gg/ayxHdychr" target="_blank" rel="noopener noreferrer" className="block text-center no-underline font-semibold mb-4" style={{ background: '#23A55A', color: '#fff', borderRadius: 4, padding: '10px', fontSize: 14, fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em' }}>
                Go to Server
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="https://discord.gg/ayxHdychr" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block no-underline" style={{ fontSize: 14, padding: '14px 60px' }}>
            <span>Join Discord</span>
          </a>
        </div>
      </div>
    </section>
  )
}
