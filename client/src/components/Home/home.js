import React from "react";
import { Link } from 'react-router-dom'

const Homepage = props =>
  <div>
    {/*<input {...props} />*/}
    <h1>Hello World</h1>
    <Link to="/renter">CLick Me !! for renter</Link>
  </div>;

  export default Homepage;