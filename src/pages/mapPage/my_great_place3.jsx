// import React, {PropTypes, Component} from 'react/addons';
//import shouldPureComponentUpdate from 'react-pure-render/function';
import React, {Component} from "react";
import {greatPlaceStyle} from './my_great_place_styles.js';
import ReactTooltip from 'react-tooltip';
export default class MyGreatPlace3 extends Component {
  
  render() {
    return (
      <div>
       <div style={greatPlaceStyle} data-tip='' data-for='tooltipStartup'> </div>
       <ReactTooltip id='tooltipStartup' place='top' delayHide={2000} effect='solid'> 
        <div style={{width: '250px', height:'200px'}}>
          Four Athens
          <br/>

          723 W Hancock Ave Athens, GA, 30601 
          <br/>
          <br/>
          Check out our social media <a href="https://www.facebook.com/fourathens/"> here! </a>
          <br/>
          <br/>
          The pillars of Four Athens - Talent, Education, Community, and High growth resources - support our mission of make Athens a startup hub. We work with startups working on innovative solutions to the challenges of The Third Wave.
          </div>
       </ReactTooltip>
       </div>
    );
  }
}