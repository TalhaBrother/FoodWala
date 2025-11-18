import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import ThemeContextProvider from "./context/themeContext.jsx"
export const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ThemeContextProvider>
    <QueryClientProvider client={queryClient}>
  <StrictMode>
    <App />
  </StrictMode>
  </QueryClientProvider>
  </ThemeContextProvider>

  </BrowserRouter>
)
