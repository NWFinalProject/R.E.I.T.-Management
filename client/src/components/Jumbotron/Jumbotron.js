import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 100, marginTop: "30px", color: "white", backgroundColor: "#083b66", marginTop: "30px"}} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
