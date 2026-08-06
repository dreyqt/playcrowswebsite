import type { ReactNode } from 'react'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="page-shell">
      <div className="page-shell-inner py-16">{children}</div>
    </div>
  )
}
