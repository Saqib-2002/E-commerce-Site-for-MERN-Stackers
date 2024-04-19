import React from 'react'
import ReactDOM from 'react-dom/client'


// Components
import App from './App.jsx'

// CSS
import './style/navbar.css'
import './style/footer.css'

// Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
