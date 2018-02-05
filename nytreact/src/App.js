import React, { Component } from 'react';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./components/Home";
import Results from "./components/Results";
import Saved from "./components/Saved";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Home />
        <Results />
        <Saved />
        <Footer />
      </div>
    );
  }
}

export default App;
