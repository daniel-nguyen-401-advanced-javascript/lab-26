import React, {useState} from 'react';
import "./styles/styles.scss";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ToDo from "./components/ToDo";
import SettingsForm from "./components/SettingsForm";
import {ListContext} from './components/Contexts';



function App() {
  const [displayCount, setDisplayCount] = useState(3);

  return (
    <div className="App">
      <ListContext.Provider value={{displayCount, setDisplayCount}}>
        <Header />
        <ToDo />
        <SettingsForm />
        <Footer />
      </ListContext.Provider>
    </div>
  );
}

export default App;