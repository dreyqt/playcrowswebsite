import type { Page } from '../data'
import { NewsArticle } from '../components/ArticlePages'
export default function AnnouncementDetailPage(props: { id: string; navigate: (page: Page) => void; goHome: () => void }) {
  return <NewsArticle {...props} kind="announcement" />
}
