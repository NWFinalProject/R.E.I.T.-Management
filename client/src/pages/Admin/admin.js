import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import AdminForm from '../../components/FormComponent/AdminIssueForm.js';
import { Chart } from 'react-google-charts';


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
    console.log('this is our name of the thing we are going to change', name);
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

    handleBelowState = type => {
    console.log("Working!",type);
    this.setState({belowSection: type})
    this.loadRequests()
  }

  render() {  

    let htmlThatWillShow;

    const ShowARequestHtml = (
      <div className="collection">

          
            {this.state.requests.length ? (
              <div className="collection-item">
                {this.state.requests.map(singleDude => (
                  <div style={{color: 'black', fontSize: '20px'}} className="collection-item">
                    <AdminForm singleDude={singleDude} />
                  </div>
      
                ))}
              </div>
            ) : (
              <h3>There are no open issues.</h3>
            )}
</div>
    );
      
    const ShowInvoice = (
      <div className="collection">
        <a href="#!" className="collection-item">Invoice 1</a>
        <a href="#!" className="collection-item active">Invoice 2</a>
        <a href="#!" className="collection-item">Invoice 3</a>
        <a href="#!" className="collection-item">Invoice 4</a>
      </div>

    );


    if (this.state.belowSection === "renter_request") {
      htmlThatWillShow = ShowARequestHtml;
    } else if (this.state.belowSection === "show_invoice") {
      htmlThatWillShow = ShowInvoice;
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
        <div style={{opacity: '0.5'}} className="parallax"><img src="background3.jpg" alt="Unsplashed background img 1"/></div>
      </div>

      <nav className="white" >
 <li style={style.buttonLiStyle}><button style={style.buttonStyle} className="btn-large waves-effect waves-light teal lighten-1" onClick={() => {this.handleBelowState("make_request")}}> Requests</button></li>
        <li style={style.buttonLiStyle}><button style={style.buttonStyle} className="btn-large waves-effect waves-light teal lighten-1"  onClick={() => {this.handleBelowState("show_invoice")}}>Show Invoices</button></li>
      </nav>

         {htmlThatWillShow}

    </Container>

    );
  }
}

export default Admin;