import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'antd/dist/reset.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/routes.jsx'
import '@ant-design/v5-patch-for-react-19'
import AuthProvider from './providers/AuthProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
