import React from 'react'
import './Projects.scss'
const design = require('./images/design-app.png')
const khabib = require('./images/khabib-app.png')
const crypto = require('./images/crypto-app.png')
const multisig = require('./images/multisig-app.png')
const fact = require('./images/fact-app.png')
const stock = require('./images/stock-app.png')

const Projects = () => {
    return (
        <div className='Projects'>
            <h1>Projects...</h1>
            <div className='ProjectImages'>
                <img src={design} alt='project image' />
                <img src={khabib} alt='project image' />
                <img src={crypto} alt='project image' />
                <img src={multisig} alt='project image' />
                <img src={fact} alt='project image' />
                <img src={stock} alt='project image' />
            </div>
        </div>
    )
}

export default Projects
