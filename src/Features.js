import React from 'react'
import './Features.scss'
const code = require('./images/code-white.png')
const responsive = require('./images/phonelink-white.png')
const group = require('./images/group-white.png')

const Features = () => {
    return (
        <div className='Features'>
            <div className='FeaturesGroup'>
                <h1>My <span>code</span> of conduct...</h1>
                <div className='FeaturesBlock'>
                    <div className="hexagon"><img src={code} alt='code icon' /></div>
                    <div className='Line'></div>
                    <div className='BlockText'>
                        <h2>Choose your stack</h2>
                        <p>It doesn't matter if you like your java black or with milk. I am open to working with any language or framework to get the job done.</p>
                    </div>
                </div>
                <div className='FeaturesBlock'>
                    <div className="hexagon"><img src={responsive} alt='code icon' /></div>
                    <div className='Line'></div>
                    <div className='BlockText'>
                        <h2>Responsive design</h2>
                        <p>Moving content that fits any screen. My layouts will scale nicely on mobile, tablet and desktop.</p>
                    </div>
                    
                </div>
                <div className='FeaturesBlock'>
                    <div className="hexagon"><img src={group} alt='code icon' /></div>
                    <div className='Line'></div>
                    <div className='BlockText'>
                        <h2>Accessible content</h2>
                        <p>With code I strive to make the internet accessible to those with disabilities. In this age no one should be left behind.</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Features
