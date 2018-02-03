import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Renters from "./pages/Renter";
//import Detail from "./pages/Detail";
//import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Renters} />
        <Route exact path="/renter" component={Renters} />

      </Switch>
    </div>
  </Router>;

export default App;


        //<Route exact path="/renter/:id" component={Detail} />
        //<Route component={NoMatch} />