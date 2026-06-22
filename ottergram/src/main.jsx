import { Provider} from './components/ui/provider'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import {createRoot} from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)