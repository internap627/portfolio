import React from 'react'
import './Contact.scss'
const twitter = require('./images/twitter-logo.png')
const insta = require('./images/insta-logo.png')
const gmail = require('./images/gmail-logo.png')

const Contact = () => {
    return (
        <div className='Contact'>
            <div className='ContactGroup'>
                <h1>Contact...</h1>
                <h2>Want to collaborate or just say hi? <br/> Email or connect via social media</h2>
                <div className='Social'>
                    <a href='https://twitter.com/Dawood627' rel='noopener noreferrer' target='_blank'><img src={twitter} alt='twitter logo' /></a>
                    <a href='https://www.instagram.com/_multisig_/' rel='noopener noreferrer' target='_blank'><img src={insta} alt='insta logo' /></a>
                    <a href='mailto:internap627@gmail.com' rel='noopener noreferrer' target='_blank'><img src={gmail} alt='gmail logo' /></a>
                </div>
            </div>
            <div className='Footer'>
                <p>©2019 Nkosi Phillip</p>
            </div>

        </div>
    )
}

export default Contact