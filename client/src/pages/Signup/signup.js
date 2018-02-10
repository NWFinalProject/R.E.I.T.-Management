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
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <p>New User</p>
            </Jumbotron>
            <form>
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
          </Row>
      </Container>
    );
  }
}

export default Signup;