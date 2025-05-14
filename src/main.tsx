import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GenreProvider } from './components/GenreContext.tsx'

const root = document.getElementById('root')

if (root) {
  createRoot(root).render(
    <StrictMode>
      <GenreProvider>
        <App />
      </GenreProvider>
    </StrictMode>,
  )
} else {
  console.error('Root element not found')
}
