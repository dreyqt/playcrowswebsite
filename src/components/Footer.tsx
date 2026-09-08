import { ArrowUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import logo from '../assets/playcrows-emblem.png'
import { IcoDiscordSmall, IcoFacebook } from './Icons'
import { LINKS, SERVERS } from '../site'
import type { Page } from '../data'

export function Footer(_: { navigate: (page: Page) => void; goHome: () => void }) {
  const { t } = useTranslation()
  return <footer className="site-footer"><div className="footer-inner"><div className="footer-top">
    <div className="footer-about"><a className="brand" href="#/"><img src={logo} alt="" width={48} height={48} /><span>PLAYCROWS<small>NIGHT CROWS</small></span></a><p>{t('site.footerDescription')}</p><div className="footer-social"><a href={LINKS.discord} target="_blank" rel="noopener noreferrer" aria-label="PlayCrows Discord"><IcoDiscordSmall /></a><a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="PlayCrows Facebook"><IcoFacebook /></a></div></div>
    <div className="footer-column"><h3>{t('site.explore')}</h3><a href="#servers">{t('site.ourServers')}</a><a href="#game-info">{t('site.gameInfo')}</a><a href="#/announcements">{t('site.announcements')}</a><a href="#/updates">{t('site.updates')}</a></div>
    <div className="footer-column"><h3>{t('site.startPlaying')}</h3><a href={SERVERS.v1.register} target="_blank" rel="noopener noreferrer">{t('site.registerFor', { server: 'V1' })} ↗</a><a href={SERVERS.v2.register} target="_blank" rel="noopener noreferrer">{t('site.registerFor', { server: 'V2' })} ↗</a><a href="#download">{t('site.downloadGame')}</a><a href={LINKS.webshop} target="_blank" rel="noopener noreferrer">{t('site.webshop')} ↗</a></div>
    <div className="footer-column"><h3>{t('site.community')}</h3><a href={LINKS.discord} target="_blank" rel="noopener noreferrer">Discord ↗</a><a href={LINKS.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a><a href="#rules">{t('site.rules')}</a><a href={LINKS.report} target="_blank" rel="noopener noreferrer">{t('site.contactSupport')} ↗</a></div>
  </div><div className="footer-bottom"><div>© {new Date().getFullYear()} PlayCrows. <span>{t('site.independentNote')}</span></div><a href="#hero">{t('site.backTop')}<ArrowUp size={14} /></a></div></div></footer>
}
