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
                
                <div className='Card one'>
                    <h2>Design PPL</h2>
                    <a href='https://designppl.netlify.com/' rel='noopener noreferrer' target='_blank'><button>Site</button></a>
                </div>
                <div className='Card two'>
                    <h2>Khabib Tribute</h2>
                    <a href='https://khabibtribute.netlify.com/' rel='noopener noreferrer' target='_blank'><button>Site</button></a>
                </div>
                <div className='Card three'>
                    <h2>Crypto Trends</h2>
                    <a href='https://cryptotrendsapp.netlify.com/' rel='noopener noreferrer' target='_blank'><button>Site</button></a>
                </div>
                <div className='Card four'>
                    <h2>Portfolio</h2>
                    <a href='https://multisig.netlify.com/' rel='noopener noreferrer' target='_blank'><button>Site</button></a>
                </div>
                <div className='Card five'>
                    <h2>Fact Factory</h2>
                    <a href='https://github.com/internap627/fact_factory_backend' rel='noopener noreferrer' target='_blank'><button>Code</button></a>
                </div>
                <div className='Card six'>
                    <h2>Stock Tracker</h2>
                    <a href='https://github.com/internap627/stock_app' rel='noopener noreferrer' target='_blank'><button>Code</button></a>
                </div>
                
                
            </div>
        </div>
    )
}

export default Projects
