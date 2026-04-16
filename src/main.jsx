import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Router.jsx'
import { RouterProvider } from 'react-router/dom'
import AuthProvaider from './Context/AuthProvaider.jsx'

// ✅ add this
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvaider>
        <RouterProvider router={router} />
      </AuthProvaider>
    </QueryClientProvider>
  </StrictMode>,
)