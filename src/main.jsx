import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PedidoProvider } from './context/PedidoContext.jsx'

createRoot(document.getElementById('root')).render(
    <PedidoProvider>
        <App />
    </PedidoProvider>
    ,
)
