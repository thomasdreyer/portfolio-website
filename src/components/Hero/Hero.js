import React from 'react';
import './Hero.css';
import Typing from '../Typing/Typing';
import { SocialIcon } from 'react-social-icons';
const Hero = () =>{

return(

  <header className="sans-serif">
    <div className="cover bg-left bg-center-l heroImage" >
      <div className="bg-black-80 pb5 pb6-m pb7-l">
        <nav className="dt w-100 mw8 center">
          <div className="dtc w2 v-mid pa3">

          </div>

        </nav>
        <div className="tc-l mt4 mt5-m mt6-l ph3">
              <Typing />




          <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="#contact">Hire me</a>
          <span className="dib v-mid ph3 white-70 mb3">or</span>
          <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="#portfolio">my Portfolio</a>
<p>
<SocialIcon url="https://github.com/thomasdreyer" color="#0F0F0F"/>&nbsp;
<SocialIcon url="https://medium.com/@thomasdreyer" color="#0F0F0F"/>&nbsp;
<SocialIcon url="https://www.linkedin.com/in/thomas-dreyer" color="#0F0F0F" />&nbsp;
<SocialIcon url="https://codepen.io/thomasdreyer" color="#0F0F0F"/>



 </p>     </div>
      </div>
    </div>
  </header>


);


}

export default Hero;
