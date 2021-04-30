import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./header/Header";
import Routes from "./routes/Routes";


const App = () => {
  return (
      <BrowserRouter>
    <div className="App">
      {/*// hashrouter //  provider*/}
      <Header />
      <Routes />
    </div>
      </BrowserRouter>
  );
}

export default App;
