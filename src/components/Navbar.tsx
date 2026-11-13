import { useEffect, useState } from 'react'
import { BookOpen, Download, Menu, Newspaper, Shield, ShoppingBag, X, UserPlus } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import logo from '../assets/playcrows-emblem.png'
import type { Page } from '../data'
import { LINKS } from '../site'
import { IcoDiscordSmall } from './Icons'
import Translator from './Translator'

export function Navbar({ goHome, scrollTo }: {
  navigate: (page: Page) => void; goHome: () => void; scrollTo: (id: string) => void
}) {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }
    const navigate = () => setMenuOpen(false)
    document.addEventListener('keydown', escape)
    window.addEventListener('hashchange', navigate)
    return () => {
      document.removeEventListener('keydown', escape)
      window.removeEventListener('hashchange', navigate)
    }
  }, [])
  const jump = (id: string) => { setMenuOpen(false); scrollTo(id) }
  return <header className="site-header">
    <div className="header-inner">
      <a href="#/" className="brand" aria-label="PlayCrows home" onClick={() => { setMenuOpen(false); goHome() }}>
        <img src={logo} alt="" width={48} height={48} />
        <span>PLAYCROWS<small>NIGHT CROWS</small></span>
      </a>
      <nav className="desktop-nav" aria-label={t('site.mainNavigation')}>
        <a className="nav-item" href="#account-merge"><BookOpen size={17} />{t('site.mergeGuide')}</a>
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
      <button onClick={() => jump('account-merge')}>{t('site.mergeGuide')}</button>
      <a href={LINKS.webshop} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>{t('site.webshop')}</a>
      <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>{t('site.community')}</a>
    </nav>}
  </header>
}
