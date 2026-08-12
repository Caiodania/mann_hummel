import { useState } from 'react'
import { StoreProvider, useStore } from './store'
import { TeamLoadBoard } from './components/TeamLoadBoard'
import { PipelineBoard } from './components/PipelineBoard'
import { GanttBoard } from './components/GanttBoard'

type Tab = 'carga' | 'pipeline' | 'gantt'

const TABS: { id: Tab; label: string }[] = [
  { id: 'carga', label: 'Cotação' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'gantt', label: 'Gantt' },
]

function ErrorToast() {
  const { syncError, clearError } = useStore()
  if (!syncError) return null
  return (
    <div className="toast toast-error" role="alert">
      <span className="toast-icon" aria-hidden>
        ⚠
      </span>
      <span className="toast-msg">{syncError}</span>
      <button
        className="toast-close"
        onClick={clearError}
        aria-label="Dispensar aviso"
      >
        ×
      </button>
    </div>
  )
}

function Shell() {
  const [tab, setTab] = useState<Tab>('carga')
  const { loaded } = useStore()
  return (
    <div className="app">
      <ErrorToast />
      <header className="topbar">
        <div className="logo">
          <span className="mann">MANN+</span>
          <span className="hummel">HUMMEL</span>
          <span className="sub">Carga &amp; Pipeline</span>
        </div>
        <nav className="tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`tab ${tab === t.id ? 'active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>
        <div className="topbar-spacer" />
      </header>

      {!loaded ? (
        <div className="empty" style={{ margin: 'auto' }}>
          Carregando dados do servidor…
        </div>
      ) : (
        <>
          {tab === 'carga' && <TeamLoadBoard />}
          {tab === 'pipeline' && <PipelineBoard />}
          {tab === 'gantt' && <GanttBoard />}
        </>
      )}
    </div>
  )
}

export default function App() {
  return (
    <StoreProvider>
      <Shell />
    </StoreProvider>
  )
}
