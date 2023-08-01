import React from 'react'
import PropTypes from 'prop-types'
// import {Link }from 'react-router-dom';

export default function Navbar(props) {
  
  return (
    
<nav  style={{backgroundColor:'#dfafaf'}}className={`navbar navbar-expand-lg navbar-${props.mode}`}>
    <div className="container-fluid">
      <div>
        <h1 style={{marginLeft:900,color:"#a31623",fontSize:50}} ><b>{props.title}</b></h1></div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

    </div>
    <div className={`form-check form-switch text-${props.mode==="light" ? "dark":"white"}`}>
  <input className="form-check-input" onClick={props.colour} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label  className="form-check-label" htmlFor="flexSwitchCheckDefault"  ><b>Enable Red Mode</b></label>
</div>
    <div className={`form-check form-switch text-${props.mode==="light" ? "dark":"white"}`}>
  <input className="form-check-input" onClick={props.yellow} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label  className="form-check-label" htmlFor="flexSwitchCheckDefault"  ><b>Enable Yellow Mood</b></label>
</div>
    <div className={`form-check form-switch text-${props.mode==="light" ? "dark":"light"}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label  className="form-check-label" htmlFor="flexSwitchCheckDefault" ><b>Enable Dark Mood</b></label>
</div>
  </nav>
  )
}
Navbar.propTypes={title:PropTypes.string.isRequired, about:PropTypes.string} //title cannot be no. or other data type
// Navbar.defaultProps={title:"set title here", about:"set about here"}


// we can use a and hef but it reload the website which we do not ant thats why we use router