import { Outlet } from 'react-router'
import './dashboardLayout.css'
import React from 'react'
import ChatList from '../../components/chatList/ChatList'

function DashboardLayout() {
  return (
    <div className='dashboardLayout'>
        <div className='menu'><ChatList/></div>
        <div className='content'>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout