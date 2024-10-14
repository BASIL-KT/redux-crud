import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './UserReducer.jsx'

const store=configureStore({
  reducer:{
    users:UserReducer

  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Provider store={store}>
    <App />


    </Provider>

  </StrictMode>,
)
