import { ArrowRight, ArrowUpRight, Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LINKS } from '../site'

export default function AccountMergeGuide() {
  const { t } = useTranslation()
  const steps = t('accountMerge.steps', { returnObjects: true }) as { title: string; description: string }[]

  return <article id="account-merge" className="account-merge-panel" aria-labelledby="account-merge-title">
    <p className="eyebrow">{t('accountMerge.eyebrow')}</p>
    <h3 id="account-merge-title">{t('accountMerge.title')}</h3>
    <p className="account-merge-description">{t('accountMerge.description')}</p>
    <ol className="merge-steps">
      {steps.map((step, index) => <li key={step.title}>
        <span className="merge-step-number" aria-hidden="true">0{index + 1}</span>
        <div><h4>{step.title}</h4><p>{step.description}</p></div>
      </li>)}
    </ol>
    <div className="merge-actions">
      <a className="btn-primary" href={LINKS.accountMerge} target="_blank" rel="noopener noreferrer">{t('accountMerge.openPage')}<ArrowUpRight size={16} /></a>
      <a className="text-link" href="#download"><Download size={16} />{t('accountMerge.download')}</a>
    </div>
    <p className="merge-help">{t('accountMerge.help')}</p>
    <a className="text-link" href={LINKS.discord} target="_blank" rel="noopener noreferrer">{t('accountMerge.support')}<ArrowRight size={16} /></a>
  </article>
}
