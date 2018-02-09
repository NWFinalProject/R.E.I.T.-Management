import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Renters from "./pages/Renter";
//import Detail from "./pages/Detail";
//import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import Home from "./components/Home/home.js"

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/homepage" component={Home} />
        <Route exact path="/renter" component={Renters} />
      </Switch>
    </div>
  </Router>;

export default App;


        //<Route exact path="/renter/:id" component={Detail} />
        //<Route component={NoMatch} />