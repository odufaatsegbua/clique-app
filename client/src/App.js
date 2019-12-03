import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Communities from "./pages/Communities";
import Community from "./components/Community";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


class App extends React.Component {

  
  render(){
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/communities" component={Communities} />
            <Route exact path="/community" component={Community} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Dashboard} />




            <Route component={NoMatch} />
          </Switch>
          <Footer />
      </Router>
    </div>
  )
}
}
        
        export default App;
