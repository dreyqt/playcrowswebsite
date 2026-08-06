import { useEffect, useState } from 'react'
import logoImg from '../assets/logo_playcrows.png'
import type { Page } from '../data'
import { IcoDiscordSmall } from './Icons'

export function Navbar({ navigate, goHome, scrollTo }: { navigate: (p: Page) => void; goHome: () => void; scrollTo: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'Game Information', 'Donation Center', 'Rules']
  const linkIds: Record<string, string> = { 'Home': 'home', 'Game Information': 'game-info', 'Donation Center': 'donation', 'Rules': 'rules' }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-400" style={{ background: scrolled ? 'rgba(5,8,16,0.97)' : 'rgba(5,8,16,0.65)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(59,158,255,0.10)' }}>
      <div className="max-w-screen-xl mx-auto px-8 flex items-center justify-between h-[70px]">
        <button onClick={goHome} className="cursor-pointer bg-transparent border-none p-0 flex items-center gap-3">
          <img src={logoImg} alt="PLAYCROWS" className="h-11 w-11 object-contain" />
          <span className="font-cinzel font-bold text-base tracking-widest hidden sm:block" style={{ color: '#A8C8E8', letterSpacing: '0.18em' }}>PLAYCROWS</span>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(linkIds[link])} className="nav-link bg-transparent border-none p-0 cursor-pointer">{link}</button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <a href="https://account.playcrows.com/regchannel.php?pid=3006" target="_blank" rel="noopener noreferrer" className="btn-register no-underline">Register</a>
          <button onClick={() => { setMenuOpen(false); window.open('https://discord.gg/ayxHdychr', '_blank') }} className="btn-secondary flex items-center gap-2" style={{ padding: '9px 16px', fontSize: '12px' }}>
            <IcoDiscordSmall />Discord
          </button>
          <button onClick={() => scrollTo('download')} className="btn-primary" style={{ padding: '10px 20px', fontSize: '12px' }}><span>Download</span></button>
        </div>

        <button className="lg:hidden bg-transparent border-none cursor-pointer p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          {[0, 1, 2].map(i => <span key={i} className="block w-6 h-px" style={{ background: '#3B9EFF' }} />)}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-8 pb-8 pt-2 flex flex-col gap-5" style={{ background: 'rgba(5,8,16,0.98)' }}>
          {links.map(link => (
            <button key={link} onClick={() => { setMenuOpen(false); scrollTo(linkIds[link]) }} className="nav-link bg-transparent border-none p-0 cursor-pointer text-left">{link}</button>
          ))}
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://account.playcrows.com/regchannel.php?pid=3006" target="_blank" rel="noopener noreferrer" className="btn-register no-underline">Register</a>
            <button onClick={() => { setMenuOpen(false); window.open('https://discord.gg/ayxHdychr', '_blank') }} className="btn-secondary" style={{ padding: '9px 16px', fontSize: '12px' }}>Discord</button>
            <button onClick={() => { setMenuOpen(false); scrollTo('download') }} className="btn-primary" style={{ padding: '10px 16px', fontSize: '12px' }}><span>Download</span></button>
          </div>
        </div>
      )}
    </nav>
  )
}
