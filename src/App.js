import React from 'react'
import Main from './components/Main';
import {BrowserRouter as Router} from "react-router-dom"
import {ReactNavbar} from "overlay-navbar";
import logo from "./assets/logo.png"

const App = () => {
  return (
    <Router>
      <ReactNavbar 
        navColor1="rgba(26, 20, 20, 0.59)"
        logo={logo}
        logoWidth="300px"
        logoHoverColor="white"

        nav2justifyContent="flex-end"
        nav3justifyContent="flex-start"

        link1Text="Home"
        link1Color="white" 
        link1Url="/Home"
        link1Size="2vmax"
        link1Family="Arial"
        link1ColorHover="grey"
        link1Margin="1vmax"
        link1Padding="5px"
        
        link2Text="About Us"
        link2Url="/AboutUs"

        link3Text="Meet The Horses" 
        link3Url="/Meet"

        link4Text="Contact Us"
        link4Url="/Contact" 
        
      />
      <div>
          <Main />
      </div>
    </Router>
  )
}

export default App