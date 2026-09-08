import type { Page } from '../data'
import { NewsArchive } from '../components/ArticlePages'
export default function UpdatesPage(props: { navigate: (page: Page) => void; goHome: () => void }) {
  return <NewsArchive {...props} kind="update" />
}
