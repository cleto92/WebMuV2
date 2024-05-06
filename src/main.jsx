import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import './index.css'
import { ProveedorAuth } from './Context/AuthContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ProveedorAuth>
    <NextUIProvider>
      <App />
    </NextUIProvider>
    </ProveedorAuth>
  </React.StrictMode>,
)