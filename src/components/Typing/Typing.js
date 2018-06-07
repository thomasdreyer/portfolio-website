import React from 'react';
import Typist from 'react-typist';
import './Typing.css'




const Typing = () =>{


return(

  <Typist>
    <span className='f2 f1-l fw2 white-90 mb0 lh-title'> Hello, I'm Thomas</span>
    <Typist.Backspace count={17} delay={800} />
    <span className='f2 f1-l fw2 white-90 mb0 lh-title'>  I'm a developer</span>
  <Typist.Backspace count={16} delay={200} />
      <span className='f2 f1-l fw2 white-90 mb0 lh-title'>  I love coffee </span>


  </Typist>
);

}

export default Typing;
