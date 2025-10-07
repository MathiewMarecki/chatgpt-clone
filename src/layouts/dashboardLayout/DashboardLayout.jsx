import { Outlet } from 'react-router'
import './dashboardLayout.css'
import React from 'react'

function DashboardLayout() {
  return (
    <div className='dashboardLayout'>
        <div className='menu'>MENU</div>
        <div className='content'>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout