import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Results from "./components/Results";
import Saved from "./components/Saved";
import './App.css';


const App = () =>
  <Router>
      <div className="App">
        <Header />
        <Home />

       
        <Results />

        <switch>
          <Route exact path="/" component={Articles} />
        </switch>
        
        <Saved />
        <Footer />
      </div>
  </Router>;    


export default App;
