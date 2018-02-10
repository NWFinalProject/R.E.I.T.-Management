import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Renters from "./pages/Renter";
//import Detail from "./pages/Detail";
//import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import Home from "./components/Home/home.js";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import Contractor from "./pages/Contractor";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/renter" component={Renters} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/contractor" component={Contractor} />
      </Switch>
    </div>
  </Router>;

export default App;


        //<Route exact path="/renter/:id" component={Detail} />
        //<Route component={NoMatch} />