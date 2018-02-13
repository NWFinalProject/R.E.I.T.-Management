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
  	username: "",
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
    if (this.state.username&& this.state.email && this.state.password) {
    
    console.log(this.state);

    let self = this;
     
     API.newUser({
        username: this.state.username,
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

      <Container fluid>

      <nav class="white" role="navigation">
        <div class="nav-wrapper container">
          <a href="/">
            <img id="logo-container" class="brand-logo" src="Logo2.png"/> 
          </a>
      
          <ul class="right hide-on-med-and-down">
            <li><a id="signOutLink" href="">Sign Out</a></li>
          </ul>

          <ul id="signOutlink" class="side-nav">
             <li><a href="">Sign Out</a></li>
          </ul>
      
          <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
        </div>
      </nav>

          <Col size="md-12">
            <Jumbotron>
              <p>New User</p>
            </Jumbotron>
            <form>
              <label>
              Choose Your Role:
              <select name="role" onChange={this.handleInputChange} value={this.state.role} style={{display: "block"}}>
                <option value="administrator">Administrator</option>
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
                <Link to="/renter">Submit An Issue</Link>
              </FormBtn>
             
            </form>
          </Col>
          
      </Container>
    );
  }
}

export default Signup;