import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import AdminForm from '../../components/FormComponent/AdminIssueForm.js';


class Admin extends Component {
  state = {
    requests: [],
    firstName: "",
    lastName: "",
    emailAddress: "",
    Description: "",
    contractorName: "",
    requestStatus: "",
    belowSection: "renter_request"

  };

  componentDidMount() {
    this.loadRequests();
  }

 loadRequests = () => {
   API.getRequests()
      .then((res) => {
        console.log('this is res ----', res);
        this.setState({ requests: res.data, firstName: "", lastName: "", emailAddress: "", Description: "", contractorName: "", requestStatus: "" })
      })
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    console.log('this is our name of the thing we are going ot change', name);
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.contractorName && this.state.requestStatus) {
    
    console.log(this.state);

    let self = this;
     
     API.saveRequests({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email_address: this.state.emailAddress,
        request_detail: this.state.Description,
        contractor_name: this.state.contractorName,
        request_status: this.state.requestStatus
      })
      .then( function(res) {
        console.log(res);
        self.loadRequests();
      })
      .catch(err => console.log(err));
    }
  };

  render() {  

    let htmlThatWillShow;

    const ShowARequestHtml = (
      <Container fluid>
        <Col size="md-12">
          <nav-wrapper>           
            {this.state.requests.length ? (
              <div className="collection">
                <h4>Here are all the Open Issues:</h4>
                {this.state.requests.map(singleDude => (
                  <div>
                    <AdminForm singleDude={singleDude} />
                  </div>
                ))}
              </div>
            ) : (
              <h3>There are no open issues.</h3>
            )}
          </nav-wrapper>
        </Col>
      </Container>
    );
      
    const ShowInvoice = (
      console.log("this is where the second form goes")
    );


    if (this.state.belowSection === "renter_request") {
      htmlThatWillShow = ShowARequestHtml;
    } else if (this.state.belowSection === "show_invoice") {
      htmlThatWillShow = ShowInvoice;
    }

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

      
      <div id="index-banner" style={{height: '50px', minHeight: '200px'}} class="parallax-container">
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
        <ul class="btn-large waves-effect waves-light teal lighten-1" class="center hide-on-med-and-down">
          <li><button class="btn-large waves-effect waves-light teal lighten-1" onclick="MakeARequestHtml">Open Issues</button></li>
          <li><button class="btn-large waves-effect waves-light teal lighten-1"  onclick="MakeARequestHtml">Invoices</button></li>
        </ul>
      </nav>

       {htmlThatWillShow}

    </Container>

    );
  }
}

export default Admin;