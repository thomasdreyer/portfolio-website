import React from 'react';
import './Portfolio.css';

const Portfolio = () =>{

return(
<div id="portfolio">
  <div className="mw9 center ph3-ns">
  <div className="cf ph2-ns">
    <div className="fl w-100 w-third-ns pa2">
      <div class="container">
  <img src="http://mrmrs.github.io/photos/u/011.jpg" alt="Avatar" className="image"/>
  <div className="overlay">
    <div className="text">Hello World</div>
  </div>
</div>
</div> 
    <div className="fl w-50 w-third-ns pa2">
      <div className="outline bg-white pv4"></div>
    </div>
    <div className="fl w-50 w-third-ns pa2">
      <div className="outline bg-white pv4"></div>
    </div>
  </div>
</div>

</div>
);


}

export default Portfolio;
