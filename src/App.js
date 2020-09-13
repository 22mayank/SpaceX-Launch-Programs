import React from "react";
import "./App.css";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
