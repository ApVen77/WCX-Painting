import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PreviousWork from "./pages/PreviousWork";
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    
   <Router>
    
     <NavBar />
     {/* <Jumbotron /> */}
     <div className ="container">
      
     
     <Switch>
       <Route exact path="/about-me" page={AboutMe} />
       <Route exact path="/contact-me" page={Contact} />
       <Route exact path="/previous-work" page={PreviousWork} />
       <Route page={Home} />
       
     </Switch>
    
     </div>
   </Router>
  );
}

export default App;
