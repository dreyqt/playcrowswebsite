import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ANNOUNCEMENTS, UPDATES, getAnnouncementContent, getUpdateContent, type Page, type Lang } from '../data'
import announcementArt from '../assets/announcement.png'
import updateArt from '../assets/update.png'
import { Breadcrumb } from './Breadcrumb'
import { PageShell } from './PageShell'

type Props = { navigate: (page: Page) => void; goHome: () => void; kind: 'announcement' | 'update' }
function useArticleLanguage() {
  const { i18n } = useTranslation()
  return (['en', 'kr', 'th', 'br', 'tw'].includes(i18n.language) ? i18n.language : 'en') as Lang
}

export function NewsArchive({ navigate, goHome, kind }: Props) {
  const { t } = useTranslation()
  const lang = useArticleLanguage()
  const items = kind === 'announcement' ? ANNOUNCEMENTS : UPDATES
  const title = t(kind === 'announcement' ? 'site.announcements' : 'site.updates')
  return <PageShell><Breadcrumb crumbs={[{ label: t('site.home'), onClick: goHome }, { label: title }]} /><p className="eyebrow">{t('site.fromRealm')}</p><h1 className="article-title">{title}</h1><div className="article-list">{items.map(item => <button className="article-list-item" key={item.id} onClick={() => navigate({ view: kind, id: item.id })}><div><h2>{item.title[lang]}</h2><p>{item.preview[lang]}</p><time>{item.date[lang]}</time></div><ArrowUpRight size={20} /></button>)}</div></PageShell>
}

export function NewsArticle({ navigate, goHome, kind, id }: Props & { id: string }) {
  const { t } = useTranslation()
  const lang = useArticleLanguage()
  const items = kind === 'announcement' ? ANNOUNCEMENTS : UPDATES
  const item = items.find(article => article.id === id)
  const listing: Page = { view: kind === 'announcement' ? 'announcements' : 'updates' }
  const title = t(kind === 'announcement' ? 'site.announcements' : 'site.updates')
  if (!item) return <PageShell><h1 className="article-title">{t('site.notFound')}</h1><button className="btn-secondary" onClick={() => navigate(listing)}><ArrowLeft size={16} />{title}</button></PageShell>
  const banner = kind === 'announcement' ? ANNOUNCEMENTS.find(article => article.id === id)?.banner ?? announcementArt : updateArt
  return <PageShell><Breadcrumb crumbs={[{ label: t('site.home'), onClick: goHome }, { label: title, onClick: () => navigate(listing) }, { label: item.title[lang] }]} /><img className="article-banner" src={banner} alt={item.title[lang]} /><time className="article-date">{item.date[lang]}</time><h1 className="article-title">{item.title[lang]}</h1>{lang !== 'en' && <p className="article-language-note">{t('site.articleEnglish')}</p>}<div lang="en">{kind === 'announcement' ? getAnnouncementContent(id) : getUpdateContent(id)}</div><button className="btn-secondary mt-10" onClick={() => navigate(listing)}><ArrowLeft size={17} />{t(kind === 'announcement' ? 'site.backNews' : 'site.backUpdates')}</button></PageShell>
}
