import { Link, Outlet } from 'react-router'
import './rootLayout.css'
import Logo from '/logo.png'
import React from 'react'

const RootLayout = () => {
  return (
    <div className="rootLayout">
    <header>
        <Link className='logo' to="/">
        <img src={Logo} alt="Logo" />
        <span>Ollama Marka</span>
        </Link>
        <div className="user">User</div>
    </header>
    <main>
        <Outlet/>
    </main>
    </div>
  )
}

export default RootLayout