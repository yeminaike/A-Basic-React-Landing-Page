import "./App.css";
import React, { useState } from 'react';
// import Header from "./Components/Header";
// import MainContent from "./Components/MainContent";

import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";


function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode(){
    setDarkMode((prevDarkMode => !prevDarkMode))
  }
  return (
    <div className="App">
    
      {/* <MainContent/> */}
      
      {/* <Header/>  */}
      <Navbar darkMode ={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
      <Footer/>
    
    </div>
  );
}

export default App;
