// import React, {PropTypes, Component} from 'react/addons';
//import shouldPureComponentUpdate from 'react-pure-render/function';
import React, {Component} from "react";
import {greatPlaceStyle} from './my_great_place_styles.js';
import ReactTooltip from 'react-tooltip';
export default class MyGreatPlace2 extends Component {
  
  displayModal = () => {

  }

  handleHover = () => {
     
  }

  render() {
    return (
      <div>
       <div style={greatPlaceStyle} data-tip='' data-for='tooltipStartup'> </div>
       <ReactTooltip id='tooltipStartup' place='top' delayHide={1000} effect='solid'> 
        {/* <div style={{width: '250px', height:'110px'}}>
          Sellerlabs
          <br/>

          Put address here.
          <br/>
          <br/>
          Check out our social media <a href="https://google.com"> here! </a>
          <br/>
          <br/>
          Say a few lines about your startup here!
          </div> */}
       </ReactTooltip>
       </div>
    );
  }
}