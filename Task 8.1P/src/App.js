import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Cardlist from './components/Cardlist';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />

      <img src="/images/1.jpg" className="topimg"/>

      <Cardlist />

      <div className="page-container">
      <div className="content-wrap">
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default App;

