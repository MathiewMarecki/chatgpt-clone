import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './routes/homepage/homepage.jsx';
import SignUpPage from './routes/signUpPage/SignUpPage.jsx';
import DashBoard from './routes/dashBoard/DashBoard.jsx';
import ChatPage from './routes/chatPage/chatPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<Routes>
  <Route index element={<Homepage />} />
  <Route element={<SignUpPage />}>

  </Route>

  <Route path="/dashboard">
    <Route index element={<DashBoard />} />
    <Route path=":id" element={<ChatPage />} />
  </Route>
</Routes>
  </BrowserRouter>,
)
