import './homepage.css'
import React from 'react'
import { Link } from 'react-router'
import Typewriter from 'typewriter-effect';

const Homepage = () => {
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className='orbital' />
     <div className="left">
      <h1>Ollama Marka</h1>
      <h2>Początki są trudne ale kiedyś trzeba zacząć!</h2>
      <h3>Ważne żeby próbować, jakoś to będzie :P </h3>
      <Link to='/dashboard' className='link'>Zaczynamy</Link>
     </div>
     <div className="right">
      <div className="imgContainer">
        <div className="bgContainer">
          <div className="bg">
          </div>
        </div>
            <img src="/bot.png" alt="" className='bot'/>
            <div className="chat">
              <img src="/bot.png" alt=""/>
                 <Typewriter
  options={{
    strings: ['Mam ciekawy pomysł, pomożesz?', 'Dlaczego to nie działa znowu, a nie czekaj działa, nie było tematu:P'],
    autoStart: true,
    loop: true,
    delay:20,
    deleteSpeed: 10,
    
    
  }}
/>

           
            </div>
      </div>
     </div>
    </div>
  )
}

export default Homepage;