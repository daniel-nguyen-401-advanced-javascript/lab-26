import React from 'react';
import "./styles/styles.scss";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ToDo from "./components/ToDo";



function App() {
  return (
    <div className="App">
        <Header />
        <ToDo />
        <Footer />
    </div>
  );
}

export default App;