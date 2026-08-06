export function Breadcrumb({ crumbs }: { crumbs: { label: string; onClick?: () => void }[] }) {
  return (
    <div className="breadcrumb-row">
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="breadcrumb-separator">/</span>}
          {c.onClick
            ? <button onClick={c.onClick} className="breadcrumb-link">{c.label}</button>
            : <span className="breadcrumb-text">{c.label}</span>}
        </span>
      ))}
    </div>
  )
}
