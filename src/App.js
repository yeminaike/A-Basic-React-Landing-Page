import "./App.css";
import React from 'react';
// import Header from "./Components/Header";
// import MainContent from "./Components/MainContent";

import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
    
      {/* <MainContent/> */}
      
      {/* <Header/>  */}
      <Navbar/>
      <Main/>
      <Footer/>
    
    </div>
  );
}

export default App;
