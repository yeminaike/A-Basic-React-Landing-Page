import React from 'react';
import "../index.css"
import logo from "../Images/logo192.png"


function Navbar (props) {
    return ( 

        <nav className={props.darkMode ? "dark" : ""}>
            <img src={logo} className='nav--icon'/>
            <h3 className='nav--logo_text'>REACTFACTS</h3>
            {/* <h4 className='nav--title'>React Course-c f Project 1</h4> */}
            <div className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
     );
}

export default Navbar ;