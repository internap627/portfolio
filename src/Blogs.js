import React from 'react'
import './Blogs.scss'

const Blogs = () => {
    return (
        <div className='Blogs'>
            <h1>Blogs...</h1>
            <div className='BlogsImages'>
                
                <div className='Card one'>
                    <h2>Speech Recognition</h2>
                    <a href='https://dev.to/internap627/speech-recognition-in-action-44m7' rel='noopener noreferrer' target='_blank'><button>Read</button></a>
                </div>
                <div className='Card two'>
                    <h2>Context API</h2>
                    <a href='https://medium.com/@internap627/react-context-api-demo-95123ba8e84e' rel='noopener noreferrer' target='_blank'><button>Read</button></a>
                </div>
                <div className='Card three'>
                    <h2>Solidity Intro</h2>
                    <a href='https://medium.com/@internap627/a-look-at-smart-contracts-and-solidity-b945f8e10ede' rel='noopener noreferrer' target='_blank'><button>Read</button></a>
                </div>
                <div className='Card four'>
                    <h2>Method Chaining</h2>
                    <a href='https://medium.com/@internap627/method-chaining-in-javascript-9747574cfe8d' rel='noopener noreferrer' target='_blank'><button>Read</button></a>
                </div>
                <div className='Card five'>
                    <h2>Green Code</h2>
                    <a href='https://medium.com/@internap627/memory-bloat-ruby-on-rails-610a48d9829' rel='noopener noreferrer' target='_blank'><button>Read</button></a>
                </div>
                <div className='Card six'>
                    <h2>Security Concepts</h2>
                    <a href='https://medium.com/g4s-your-code/g4s-your-code-a1bfe2a6c051' rel='noopener noreferrer' target='_blank'><button>Read</button></a>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Blogs
