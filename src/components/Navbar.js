import React from 'react'
import logo from "../assets/logo.png"
import { Image } from 'react-bootstrap'
const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg pl-3 pl-sm-0 fixed-top" id="navbar">
    <div className="container">
      <div className="navbar-brand-wrapper d-flex" style={{width:"67%"}}>
        <h1>Mahdi jenhani</h1>
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="mdi mdi-menu navbar-toggler-icon"></span>
        </button> 
      </div>
      <div className="collapse navbar-collapse navbar-menu-wrapper" id="navbarSupportedContent">
        <ul className="navbar-nav align-items-lg-center align-items-start ml-auto">
          <li className="d-flex align-items-center justify-content-between pl-4 pl-lg-0">
            <div className="navbar-collapse-logo">
              {/* <img src="images/Group2.svg" alt=""> */}
            </div>
            <button className="navbar-toggler close-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="mdi mdi-close navbar-toggler-icon pl-5"></span>
            </button>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#home">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#testiomnials">Testiomnials</a>  
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#contact">Contact us</a>
          </li>
          
        </ul>
      </div>
    </div> 
    </nav>  )
}

export default Navbar