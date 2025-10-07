import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './routes/homepage/homepage.jsx';
import SignUpPage from './routes/signUpPage/SignUpPage.jsx';
import DashBoard from './routes/dashBoard/DashBoard.jsx';
import ChatPage from './routes/chatPage/chatPage.jsx';
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<Routes>
  <Route path='/' element={<RootLayout />}>
<Route index element={<Homepage />} />
<Route path="/dashboard" element ={<DashboardLayout />}>
    <Route index element={<DashBoard />} />
    <Route path=":id" element={<ChatPage />} />
</Route>
  </Route>
  <Route element={<SignUpPage />}>

  </Route>

</Routes>
  </BrowserRouter>,
)
