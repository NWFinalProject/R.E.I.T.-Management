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
    belowSection: "show_request"
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
 handleBelowState = type => {
    console.log("Working!",type);
    this.setState({belowSection: type})
  }

  render() {
    
    let htmlThatWillShow;

    const MakeARequestHtml = (
      <Container fluid>
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
      </Container>
    );

    const ShowRequest = (
      
     
      
      <div class="collection">       
            {this.state.requests.length ? (
              <div className="collection-item">
            {this.state.requests.map(singleDude => (
                <a style={{color: 'black', fontSize: '20px'}} className="collection-item">
                  <span style={{fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif', borderColor:'#008489', background: 'transparent', fontSize: '15px'}} class="badge">{singleDude.request_status}</span>
                    {singleDude.request_detail}
                </a>
                ))}
              </div>
            ) : (
              <h3>There are no open issues.</h3>
            )}

      </div>


      
   
      
    );


    if (this.state.belowSection === "make_request") {
      htmlThatWillShow = MakeARequestHtml;
    } else if (this.state.belowSection === "show_request") {
      htmlThatWillShow = ShowRequest;
    }

    const style = {
      buttonStyle: {
        width: "100%"
      },
      buttonLiStyle: {
        display: "inline-block",
        width: "50%"
      }
    }


    return (
      <Container fluid>
        
        <nav class="white" role="navigation">
          <div class="nav-wrapper container">
            <a href="/">
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


        <div id="index-banner" style={{ height: '50px', minHeight: '200px'}} class="parallax-container">
          <div class="section no-pad-bot">
            <div class="container">
              <h1 class="header center teal-text text-lighten-2" >R.E.I.T Management</h1>
                <div class="row center"></div>
                <div class="row center"></div>
            </div>
          </div>
          
          <div style={{opacity: '0.5'}} class="parallax"><img src="background3.jpg" alt="Unsplashed background img 1"/></div>
        
        </div>

      
        <nav class="white" >
          
 <li style={style.buttonLiStyle}><button style={style.buttonStyle} class="btn-large waves-effect waves-light teal lighten-1" onClick={() => {this.handleBelowState("make_request")}}>Make a Request</button></li>
        <li style={style.buttonLiStyle}><button style={style.buttonStyle} class="btn-large waves-effect waves-light teal lighten-1"  onClick={() => {this.handleBelowState("show_request")}}>Show Request</button></li>
        </nav>
        {htmlThatWillShow}

      </Container>
    );
  }
}

export default Renters;
