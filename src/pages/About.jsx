import React from 'react'
import 'style/About.css'

function About() {
    return (
        <div className='about'>
            <div className="title">
                <p>About me</p>
            </div>
        <div className="main-content">
            <h1>Hi, I'm <span>Eltac Malik</span></h1>
            <p>
            My name is Eltac Malik I'm a Front End Engineer based in Azerbaijan ☀️ <br/>
            I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️. <br/>
            Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects.
            </p>
        </div>
        <div className="datas">
            <div className="info">
                <p className='data-title'>Name:</p>
                <p className='data-info'>Eltac</p>
            </div>
            <div className="info">
                <p className='data-title'>E-mail:</p>
                <p className='data-info'>eltacem@code.edu.az</p>
            </div>
            <div className="info">
                <p className='data-title'>Date of birth:</p>
                <p className='data-info'>9 August 2000</p>
            </div>
            <div className="info">
                <p className='data-title'>From:</p>
                <p className='data-info'>Azerbaijan/Baku</p>
            </div>
        </div>

        </div>
    )
}

export default About
