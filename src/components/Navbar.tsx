import { useEffect, useState } from 'react'
import logoImg from '../assets/logo_playcrows.png'
import type { Page } from '../data'
import { IcoDiscordSmall } from './Icons'
import Translator from "./Translator";
import { useTranslation } from "react-i18next";

export function Navbar({
  navigate,
  goHome,
  scrollTo,
}: {
  navigate: (p: Page) => void
  goHome: () => void
  scrollTo: (id: string) => void
}) {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'hero', key: 'nav.home' },
    { id: 'game-info', key: 'nav.gameInfo' },
    { id: 'donation', key: 'nav.donation' },
    { id: 'rules', key: 'nav.rules' },
  ]

  const handleNavClick = (id: string) => {
    if (id === 'hero') {
      goHome()
    } else {
      scrollTo(id)
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? 'rgba(5,8,16,0.97)' : 'rgba(5,8,16,0.65)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(59,158,255,0.10)',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-8 flex items-center justify-between h-[70px]">
        <button
          onClick={goHome}
          className="cursor-pointer bg-transparent border-none p-0 flex items-center gap-3"
        >
          <img
            src={logoImg}
            alt="PLAYCROWS"
            className="block h-11 w-11 object-contain"
            width={44}
            height={44}
          />
          <span
            className="font-cinzel font-bold text-base tracking-widest hidden sm:block"
            style={{ color: '#A8C8E8', letterSpacing: '0.18em' }}
          >
            PLAYCROWS
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="nav-link bg-transparent border-none p-0 cursor-pointer"
            >
              {t(item.key)}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Translator />

          <button
            onClick={() => {
              setMenuOpen(false);
              window.open("https://discord.gg/ayxHdychr", "_blank");
            }}
            className="btn-secondary flex items-center gap-2"
            style={{ padding: "9px 16px", fontSize: "12px" }}
          >
            <IcoDiscordSmall />
            {t('nav.discord')}
          </button>

          <button
            onClick={() => scrollTo("download")}
            className="btn-primary"
            style={{ padding: "10px 20px", fontSize: "12px" }}
          >
            <span>{t('nav.download')}</span>
          </button>
        </div>

        <button
          className="lg:hidden bg-transparent border-none cursor-pointer p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="block w-6 h-px" style={{ background: '#3B9EFF' }} />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden px-8 pb-8 pt-2 flex flex-col gap-5"
          style={{ background: 'rgba(5,8,16,0.98)' }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setMenuOpen(false)
                handleNavClick(item.id)
              }}
              className="nav-link bg-transparent border-none p-0 cursor-pointer text-left"
            >
              {t(item.key)}
            </button>
          ))}

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://account.playcrows.com/regchannel.php?pid=3006" target="_blank" rel="noopener noreferrer" className="btn-register no-underline">
              {t('nav.register')}
            </a>

            <button
              onClick={() => {
                setMenuOpen(false)
                window.open('https://discord.gg/ayxHdychr', '_blank')
              }}
              className="btn-secondary"
              style={{ padding: '9px 16px', fontSize: '12px' }}
            >
              {t('nav.discord')}
            </button>

            <button
              onClick={() => {
                setMenuOpen(false)
                scrollTo('download')
              }}
              className="btn-primary"
              style={{ padding: '10px 16px', fontSize: '12px' }}
            >
              <span>{t('nav.download')}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}