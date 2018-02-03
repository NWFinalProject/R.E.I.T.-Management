import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import PaypalBtn from "../../components/Paypal";

class Renters extends Component {
  state = {
    requests: [],
    firstName: "",
    lastName: "",
    emailAddress: "",
    Description: ""
  };

  componentDidMount() {
    this.loadRequests();
  }

 loadRequests = () => {
   API.getRequests()
      .then((res) => {
        console.log('this is res ----', res);
        this.setState({ requests: res.data, firstName: "", lastName: "", emailAddress: "", Description: "" })
      })
      .catch(err => console.log(err));
  };

  // deleteBook = id => {
  //  API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.emailAddress && this.state.Description) {
      console.log(this.state);
     API.saveRequests({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email_address: this.state.emailAddress,
        request_detail: this.state.Description
      })
        .then(res => this.loadRequests())
        .catch(err => console.log(err));
    }
  };

  render() {  
    console.log('this is our staet ----', this.state);
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <p>Maintenance Request</p>
            </Jumbotron>
            <form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name"
              />
              <Input
                value={this.state.emailAddress}
                onChange={this.handleInputChange}
                name="emailAddress"
                placeholder="Email Address (required)"
              />
              <TextArea
                value={this.state.Description}
                onChange={this.handleInputChange}
                name="Description"
                placeholder="Issue Description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.firstName && this.state.lastName && this.state.emailAddress && this.state.Description)}
                onClick={this.handleFormSubmit}
              >
                Submit An Issue
              </FormBtn>
            </form>
          </Col>

          <Col size="md-6">
            <Jumbotron>
              <p>Open Issues</p>
            </Jumbotron>
            <PaypalBtn />
            {this.state.requests.length ? (
              <div>
                {this.state.requests.map(singleDude => (
                  <div>
                    <h1>{singleDude.first_name}</h1>
                  </div>
                ))}
              </div>
            ) : (
              <h3>Here are your Open Issues with REIT Managment:</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Renters;
