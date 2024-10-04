import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage.tsx'
import { createBrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)
