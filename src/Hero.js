import React from 'react'
import './Hero.scss'
import Particles from 'react-particles-js'

export default function Hero() {
    const particlesOptions = {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          }
        }
      }
    return (
        <div className='Hero'>
            <Particles className='particles' params={particlesOptions} />
            <div className='HeroGroup'>
                <h1>Hello, my name is <span>Nkosi Phillip</span> </h1>
                <h2>I am a full stack web developer and blockchain enthusiast.
                On this page you’ll find apps I’ve built using JavaScript, React, Rails and Firebase. <br/>
                Links to my blogs are also here for your reading pleasure.</h2>
                <button>Find me online</button>
            </div>
        </div>
    )
}
