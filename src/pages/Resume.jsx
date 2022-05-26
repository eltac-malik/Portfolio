import React from 'react'
import "style/Resume.css"
import img from 'img/cv-pic.jpg'
import pdf from 'img/EltacMelikmemmedovResume.pdf'


function Resume() {
    return (
        <div className='resume'>
            <div className="cv-download">
                <h1>Download CV</h1>
                <a href={pdf} download>download</a>
            </div>
            <div className="cv-img-content">
                <div className="cv-img">
                    <img src={img} alt=""/>
                </div>
            </div>
            
        </div>
    )
}

export default Resume
