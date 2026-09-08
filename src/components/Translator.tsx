import { Globe2, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
const languages = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'kr', label: '한국어', short: 'KO' },
  { code: 'th', label: 'ไทย', short: 'TH' },
  { code: 'br', label: 'Português', short: 'PT' },
  { code: 'tw', label: '繁體中文', short: '繁中' },
]
export default function Translator() {
  const { i18n, t } = useTranslation()
  const selected = languages.find(item => item.code === i18n.language) ?? languages[0]
  return <label className="language-picker">
    <Globe2 size={16} aria-hidden="true" /><span aria-hidden="true">{selected.short}</span><ChevronDown size={12} aria-hidden="true" />
    <select aria-label={t('site.language')} value={selected.code} onChange={event => {
      void i18n.changeLanguage(event.target.value)
      try { localStorage.setItem('lang', event.target.value) } catch { /* Storage can be unavailable. */ }
    }}>
      {languages.map(language => <option key={language.code} value={language.code}>{language.label}</option>)}
    </select>
  </label>
}
