import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import PaypalBtn from "../../components/Paypal";


class Signup extends Component {
  state = {
    role: "",
  	username: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  	email: "",
  	password: ""
  };




  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.role&& this.state.username&& this.state.address&& this.state.city&& this.state.state&& this.state.zip&& this.state.email && this.state.password) {
    
    console.log(this.state);
    localStorage.setItem("userName", this.state.username);
    console.log("this is our localStorage:", localStorage.getItem("userName"));

    let self = this;
     
     API.newUser({
        role: this.state.role,
        username: this.state.username,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        email: this.state.email,
        password: this.state.password
      })
      .then( function(res) {
        console.log(res);
        // self.loadRequests();
      })
      .catch(err => console.log(err));
    }
  };

  render() {  
    console.log('this is our staet ----', this.state);
    return (

      <div>

      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a href="/">
            <img id="logo-container" className="brand-logo" src="Logo2.png"/> 
          </a>
      
          <ul className="right hide-on-med-and-down">
            <li><a id="signOutLink" href="">Sign Out</a></li>
          </ul>

          <ul id="signOutlink" className="side-nav">
             <li><a href="">Sign Out</a></li>
          </ul>
      
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>

          
           <div id="index-banner" style={{height: '50px', minHeight: '200px'}} className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <h1 className="header center teal-text text-lighten-2" >R.E.I.T Management</h1>
              <div className="row center"></div>
              <div className="row center"></div>
          </div>
        </div>
        <div style={{opacity: '0.5'}} className="parallax"><img style={{height:"200px", width:"100%"}}src="background5.jpg" alt="Unsplashed background img 1"/></div>
      </div>
            <Jumbotron>
              <p style={{paddingLeft:"375px"}}>Sign Up</p>
            </Jumbotron>
            <form class="col-md-9" style={{paddingLeft:"375px"}}>
              <label>
              Choose Your Role:
              <select name="role" onChange={this.handleInputChange} value={this.state.role} style={{display: "block"}}>
                <option value="admin">Administrator</option>
                <option value="renter">Renter</option>
                <option value="contractor">Contractor</option>
              </select>
            </label>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="User Name"
              />
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="Address"
              />
              <Input
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="City"
              />
              <Input
                value={this.state.state}
                onChange={this.handleInputChange}
                name="state"
                placeholder="State"
              />
              <Input
                value={this.state.zip}
                onChange={this.handleInputChange}
                name="zip"
                placeholder="Zip"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email Address"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
                type="password"
              />
              
           
              <FormBtn
                disabled={!(this.state.username && this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                <Link to={`/${this.state.role}`}>  Submit  </Link>
              </FormBtn>
            
             
            </form>
         
          
      </div>
    );
  }
}

export default Signup;