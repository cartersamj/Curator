import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import App from './containers/App.jsx'
import Navbar from './components/Navbar.jsx'
import style from './scss/application.scss'



const container = document.getElementById('root')
const root = createRoot(container)
export default root.render(
  <Provider store={store}>
    <Navbar />
    <App />
  </Provider>
)