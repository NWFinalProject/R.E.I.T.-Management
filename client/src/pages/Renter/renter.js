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
    Description: "",
    belowSection: "make_request"
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

    let self = this;
     
     API.saveRequests({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email_address: this.state.emailAddress,
        request_detail: this.state.Description
      })
      .then( function(res) {
        console.log(res);
        self.loadRequests();
      })
      .catch(err => console.log(err));
    }
  };

/* ************* Forms **************************** */

  render() {
    
    let htmlThatWillBeShow;

    const MakeARequestHtml = (
      
          <Col size="md-12">
            <nav-wrapper>
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
            </nav-wrapper>
          </Col>
    );

    const ShowRequest = (

                <Col size="md-6">
            <Jumbotron>
              <p>Open Issues</p>
            </Jumbotron>
            <PaypalBtn />
            {this.state.requests.length ? (
              <div className="collection">
                <h4>Here are your Open Issues with REIT Managment:</h4>
                {this.state.requests.map(singleDude => (
                  <a className="collection-item">
                    <span className="badge">{singleDude.request_status}</span>
                    {singleDude.request_detail}
                  </a>
                ))}
              </div>
            ) : (
              <h3>There are no open issues.</h3>
            )}
          </Col>
    );

// toggleHtml = () {
//   if (this.state.belowSection === "make_request") {
//     this.setState
//   }
// }
    if (this.state.belowSection === "make_request") {
      htmlThatWillBeShow = MakeARequestHtml;
    } else if (this.state.belowSection === "show_request") {
      htmlThatWillBeShow = ShowRequest;
    }

/* ************* What shows on the page**************************** */
    return (
      <Container fluid>

    <nav class="white" role="navigation">
    <div class="nav-wrapper container">
      <a href="/homepage">
        <img id="logo-container" class="brand-logo" src="Logo2.png"/> 
    </a>
      <ul class="right hide-on-med-and-down">
        <li><a id="rentlink" href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=e6a6c0f3d4816&mfid=1517945926403_e6a6c0f3d4816#/checkout/openButton">Quick Rent Payment</a></li>
      </ul>

      <ul id="rentlink" class="side-nav">
        <li><a href="https://www.paypal.com/cgi-bin/webscr">Rent Payment</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
  </nav>


  <div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container">
    
        <h1 class="header center teal-text text-lighten-2" >R.E.I.T Management</h1>
        <div class="row center">
        </div>
        <div class="row center">
        </div>
        

      </div>
    </div>
    <div style={{opacity: '0.5'}} class="parallax"><img src="background3.jpg" alt="Unsplashed background img 1"/></div>
  </div>

      
    <nav>
    <div class="nav-wrapper">
      <ul class="left hide-on-med-and-down">
        <li><button onclick="MakeARequestHtml">Make a Request</button></li>
        <li><button onclick="MakeARequestHtml">Show Request</button></li>
      </ul>
    </div>
  </nav>

        {htmlThatWillBeShow}
      </Container>
    );
  }
}

export default Renters;
