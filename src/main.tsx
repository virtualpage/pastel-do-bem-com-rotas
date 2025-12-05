import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'
import HomeRedirect from './components/home-direciton.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRedirect />} />
        <Route path="/pasteldobem" element={<App />} />
      </Routes>
    </BrowserRouter>,
  </StrictMode>,
)
