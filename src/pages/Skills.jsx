import React from 'react'
import 'style/Skills.css'

function Skills() {
    return (
        <div className='skills'>
            <div className="ability">
                <div className="skill">
                    <div className="skill-content">
                        <p>HTML</p>
                        <p>90%</p>
                    </div>
                    <div className="skill-degree">
                        <p style={{"width":"90%"}} className='degree'></p>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-content">
                        <p>CSS</p>
                        <p>91%</p>
                    </div>
                    <div className="skill-degree">
                        <p style={{"width":"91%"}} className='degree'></p>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-content">
                        <p>JAVASCRIPT</p>
                        <p>89%</p>
                    </div>
                    <div className="skill-degree">
                        <p style={{"width":"89%"}} className='degree'></p>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-content">
                        <p>REACT</p>
                        <p>80%</p>
                    </div>
                    <div className="skill-degree">
                        <p style={{"width":"80%"}} className='degree'></p>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-content">
                        <p>REDUX</p>
                        <p>90%</p>
                    </div>
                    <div className="skill-degree">
                        <p style={{"width":"90%"}} className='degree'></p>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-content">
                        <p>BOOTSTRAP (TAILWIND,MATERIAL UI)</p>
                        <p>90%</p>
                    </div>
                    <div className="skill-degree">
                        <p style={{"width":"90%"}} className='degree'></p>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-content">
                        <p>CONTEXT API</p>
                        <p>90%</p>
                    </div>
                    <div className="skill-degree">
                        <p style={{"width":"90%"}} className='degree'></p>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-content">
                        <p>RESTful API</p>
                        <p>85%</p>
                    </div>
                    <div className="skill-degree">
                        <p style={{"width":"85%"}} className='degree'></p>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-content">
                        <p>Git version control</p>
                        <p>90%</p>
                    </div>
                    <div className="skill-degree">
                        <p style={{"width":"90%"}} className='degree'></p>
                    </div>
                </div>
            </div>
            <div className="experience">
                <h1>Experience</h1>
                <div className='work'>
                    <div className="work-img">
                        <img src="https://media-exp1.licdn.com/dms/image/C560BAQE-t9Fbf3j0cQ/company-logo_200_200/0/1645562242345?e=1661385600&v=beta&t=ipeW0CvpN4zl4QB-TwwSOM2K_4MOgp5HSwk3KgR3A2g" alt=""/>
                    </div>
                    <h3>Frontend Developer</h3>
                    <p>5 months</p>
                </div>
                
            </div>
        </div>
    )
}

export default Skills
