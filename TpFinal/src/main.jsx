import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles/Index.css'
import { ProductProvide } from './context/productsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ProductProvide>
    <App />
  </ProductProvide>  
    
  </React.StrictMode>,
)
