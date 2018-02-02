import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Renter";
//import Detail from "./pages/Detail";
//import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/renter" component={Books} />

      </Switch>
    </div>
  </Router>;

export default App;


        //<Route exact path="/renter/:id" component={Detail} />
        //<Route component={NoMatch} />