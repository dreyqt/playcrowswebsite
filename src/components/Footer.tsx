import logoImg from '../assets/logo_playcrows.png'
import { IcoDiscordSmall, IcoFacebook } from './Icons'
import type { Page } from '../data'

export function Footer({ navigate, goHome }: { navigate: (p: Page) => void; goHome: () => void }) {
  const links = [
    { label: 'Home', action: goHome },
    { label: 'Download', action: () => { goHome(); setTimeout(() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' }), 100) } },
    { label: 'Game Information', action: () => { goHome(); setTimeout(() => document.getElementById('game-info')?.scrollIntoView({ behavior: 'smooth' }), 100) } },
    { label: 'Donation Center', action: () => { goHome(); setTimeout(() => document.getElementById('donation')?.scrollIntoView({ behavior: 'smooth' }), 100) } },
    { label: 'Rules', action: () => { goHome(); setTimeout(() => document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' }), 100) } },
    { label: 'Discord', action: () => window.open('https://discord.gg/ayxHdychr', '_blank') },
  ]

  return (
    <footer style={{ background: '#0A0806', borderTop: '1px solid #D4A94D10' }}>
      <div className="max-w-screen-lg mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="flex flex-col gap-4">
            <img src={logoImg} alt="PLAYCROWS" className="w-12 h-12 object-contain" />
            <p className="font-inter font-light" style={{ fontSize: 13, maxWidth: 200, lineHeight: 1.8, color: '#3A2C18' }}>The Ultimate Night Crows Private Server Experience</p>
            <div className="flex gap-3 mt-2">
              <a href="https://discord.gg/ayxHdychr" target="_blank" rel="noopener noreferrer" title="Discord" className="flex items-center justify-center no-underline transition-colors duration-200" style={{ width: 36, height: 36, border: '1px solid rgba(212,169,77,0.2)', color: '#5865F2' }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#5865F2'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(88,101,242,0.1)' }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(212,169,77,0.2)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}>
                <IcoDiscordSmall />
              </a>
              <a href="https://www.facebook.com/PlayCrows" target="_blank" rel="noopener noreferrer" title="Facebook" className="flex items-center justify-center no-underline transition-colors duration-200" style={{ width: 36, height: 36, border: '1px solid rgba(212,169,77,0.2)', color: '#1877F2' }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#1877F2'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(24,119,242,0.1)' }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(212,169,77,0.2)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}>
                <IcoFacebook />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="section-label" style={{ fontSize: 9 }}>Quick Links</p>
            {links.map(link => (
              <button key={link.label} onClick={link.action} className="text-left font-inter bg-transparent border-none p-0 cursor-pointer transition-colors duration-200" style={{ fontSize: 13, color: '#3A2C18' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#9C8560' }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#3A2C18' }}>{link.label}</button>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderTop: '1px solid #D4A94D08' }}>
          <p className="font-inter font-light" style={{ fontSize: 12, color: '#2A2018' }}>© 2026 PLAYCROWS. All Rights Reserved.</p>
          <p className="font-inter font-light" style={{ fontSize: 11, color: '#1C140E' }}>Not affiliated with Witcom or Kakao Games.</p>
        </div>
      </div>
    </footer>
  )
}