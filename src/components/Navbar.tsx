import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Download, Menu, Newspaper, Shield, ShoppingBag, X, LayoutGrid, UserPlus } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import logo from '../assets/playcrows-emblem.webp'
import type { Page } from '../data'
import { LINKS } from '../site'
import { IcoDiscordSmall } from './Icons'
import Translator from './Translator'

export function Navbar({ goHome, scrollTo }: {
  navigate: (page: Page) => void; goHome: () => void; scrollTo: (id: string) => void
}) {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [serversOpen, setServersOpen] = useState(false)
  const disclosure = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!disclosure.current?.contains(event.target as Node)) setServersOpen(false)
    }
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (serversOpen) disclosure.current?.querySelector('button')?.focus()
        setServersOpen(false)
        setMenuOpen(false)
      }
    }
    const navigate = () => { setMenuOpen(false); setServersOpen(false) }
    document.addEventListener('pointerdown', close)
    document.addEventListener('keydown', escape)
    window.addEventListener('hashchange', navigate)
    return () => {
      document.removeEventListener('pointerdown', close)
      document.removeEventListener('keydown', escape)
      window.removeEventListener('hashchange', navigate)
    }
  }, [serversOpen])
  const jump = (id: string) => { setMenuOpen(false); setServersOpen(false); scrollTo(id) }
  return <header className="site-header">
    <div className="header-inner">
      <a href="#/" className="brand" aria-label="PlayCrows home" onClick={() => { setMenuOpen(false); goHome() }}>
        <img src={logo} alt="" width={48} height={48} />
        <span>PLAYCROWS<small>NIGHT CROWS</small></span>
      </a>
      <nav className="desktop-nav" aria-label={t('site.mainNavigation')}>
        <div className="server-disclosure" ref={disclosure}>
          <button className="nav-item" aria-expanded={serversOpen} aria-controls="server-nav" onClick={() => setServersOpen(!serversOpen)}>
            <LayoutGrid size={17} />{t('site.servers')}<ChevronDown size={13} />
          </button>
          {serversOpen && <div id="server-nav" className="nav-dropdown">
            {(['v1', 'v2'] as const).map(id => <button key={id} onClick={() => jump(`server-${id}`)}>
              <span className={`version-emblem ${id}`}>{id.toUpperCase()}</span>
              <span>PlayCrows {id.toUpperCase()}<small>{t(`site.${id}Tag`)}</small></span>
            </button>)}
          </div>}
        </div>
        <a className="nav-item" href={LINKS.discord} target="_blank" rel="noopener noreferrer"><IcoDiscordSmall />{t('site.community')}</a>
        <a className="nav-item" href="#news"><Newspaper size={17} />{t('site.news')}</a>
        <a className="nav-item" href="#game-info"><Shield size={17} />{t('site.gameInfo')}</a>
        <a className="nav-item" href={LINKS.webshop} target="_blank" rel="noopener noreferrer"><ShoppingBag size={17} />{t('site.webshop')}</a>
      </nav>
      <div className="header-actions">
        <Translator />
        <button className="btn-secondary header-download" onClick={() => jump('download')}><Download size={16} />{t('site.download')}</button>
        <button className="btn-primary header-play" onClick={() => jump('servers')}><UserPlus size={16} />{t('site.playNow')}</button>
        <button className="menu-toggle icon-button" aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label={t(menuOpen ? 'site.closeMenu' : 'site.openMenu')} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </div>
    {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label={t('site.mainNavigation')}>
      {[['servers', 'servers'], ['news', 'news'], ['game-info', 'gameInfo'], ['download', 'download'], ['rules', 'rules']].map(([id, key]) => <button key={id} onClick={() => jump(id)}>{t(`site.${key}`)}</button>)}
      <a href={LINKS.webshop} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>{t('site.webshop')}</a>
      <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>{t('site.community')}</a>
    </nav>}
  </header>
}
