import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.js";
import {useSelector} from 'react-redux'
import "style/Home.css";

function Home() {


  const hideable = useSelector(state => state.style.typing)
  console.log(hideable);

  return (
    <div className="home">
      <div className="for-img">
        <div className="img">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEuj9FE4rOasA/profile-displayphoto-shrink_800_800/0/1649931221431?e=1658966400&v=beta&t=fg5uXbZ8zW8m1z0l_Y9AsVS4vGr0m_14w2Knt_3eROg"
            alt="new"
          />
        </div>
      </div>
      <div className="content">
        <p className='naming'>HI, I'M ELTAC</p>
         <p className={`typing ${hideable}`}>
        <Typewriter
            loop={5}
            cursor
            typeSpeed={100}
            cursorStyle="|"
            deleteSpeed={100}
            delaySpeed={100}
            words={["Frontend Developer"]}
          />
          </p>
        <p className='naming'>based in baku</p>
      </div>
    </div>
  );
}

export default Home;
