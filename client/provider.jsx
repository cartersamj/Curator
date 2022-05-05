import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import App from './containers/App.jsx'
import Navbar from './components/Navbar.jsx'
import style from './scss/application.scss'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import User from './components/User.jsx'


const container = document.getElementById('root')
const root = createRoot(container)
export default root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App  />} />
        <Route path="/user" element={<User />} />
        <Route path='/shuffle' element={<Navigate replace to='/'/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
)