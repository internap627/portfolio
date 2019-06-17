import React from 'react'
import './Skills.scss'
import Particles from 'react-particles-js';
const css = require('./images/css-logo.png')
const react = require('./images/react-logo.png')
const node = require('./images/node-logo.png')
const html = require('./images/html-logo.png')
const js = require('./images/js-logo.png')
const ruby = require('./images/ruby-logo.png')
const fire = require('./images/fire-logo.png')
const mongodb = require('./images/mongodb-logo.png')

const Skills = () => {
    const particlesOptions = {
	    "particles": {
	        "number": {
	            "value": 13,
	            "density": {
	                "enable": true,
	                "value_area": 500
	            }
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 4,
	            // "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "images"
	                
	            ],
	            "images": [
	                {
	                    "src": `${react}`,
	                    "height": 80,
	                    "width": 80
	                },
	                
	                
                    {
	                    "src": `${html}`,
	                    "height": 20,
	                    "width": 20
                    },
                    
                    {
	                    "src": `${js}`,
	                    "height": 70,
	                    "width": 80
                    },
                    {
	                    "src": `${ruby}`,
	                    "height": 40,
	                    "width": 40
                    },
                    {
	                    "src": `${fire}`,
	                    "height": 60,
	                    "width": 40
                    },
                    {
	                    "src": `${css}`,
	                    "height": 20,
	                    "width": 20
	                },
	                
                    {
	                    "src": `${mongodb}`,
	                    "height": 60,
	                    "width": 75
                    },
                    {
	                    "src": `${node}`,
	                    "height": 70,
	                    "width": 70
                    }
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 30,
	            "random": false,
	            "anim": {
	                "enable":false,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}
    return (
        <div className='Skills'>
            <div className='SkillsGroup'>
                <div className='SkillsText'>
                    <h2>Passionate Developer</h2>
                    <p>Although this section lists my skills, in this line of work it's about adaptation, and what works best for the project. I’m open to learning any stack if it works. I have experience with pair programming as well as collaborating in groups. <br/> I also have experience with refactoring and I enjoy working with small development teams.  
                    I care deeply about the code I write and the effect my work has on the product. <br/>
                    I am a Fullstack developer by trade, however I seem to have an eye for design and user experience. I enjoy front-end development that is functional, accessible, and give the intended experience. 
                    </p>
                </div>
                <div className="SkillsIcons">
                <Particles className='particles' params={particlesOptions} />
                </div>
            </div>
        </div>
    )
}

export default Skills
