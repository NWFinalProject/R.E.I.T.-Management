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
   console.log(localStorage.getItem("userName"));
   API.getRequests({
    username: localStorage.getItem("userName")
   })
      .then((res) => {
        console.log('this is res ----', res);
        this.setState({ requests: res.data, firstName: "", lastName: "", emailAddress: "", Description: "", username: ""})
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
        request_detail: this.state.Description,
        username: localStorage.getItem("userName")
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
      
      <div className="collection">
        {this.state.requests.length ? (
          <div class ="row" className="collection-item">
            <table>
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Request Description</th>
                  <th>Assigned Contractor</th>
                  <th>Scheduled Date</th>
                  <th>Status</th>
                  <th className="col-md-1"></th>
                  <th className="col-md-2">Request ID</th>
                  <th className="col-md-2">Request Description</th>
                  <th className="col-md-2">Assigned Contractor</th>
                  <th className="col-md-2">Scheduled Date</th>
                  <th className="col-md-2">Status</th>
                  <th className="col-md-1"></th>
                </tr>
              </thead> 
            </table> 

        {this.state.requests.map(singleDude => (
            <table className="collection">
              <tbody>
                <tr>
                  <td>{singleDude.id}</td>
                  <td>{singleDude.request_detail}</td>
                  <td>{singleDude.contractor_name}</td>
                  <td>{singleDude.scheduled_date}</td>
                  <td><span style={{fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif', borderColor:'#008489', background: 'transparent', fontSize: '15px'}} class="badge">{singleDude.request_status}</span></td>
                  <th className="col-md-1"></th>
                  <th className="col-md-2">{singleDude.id}</th>
                  <th className="col-md-2">{singleDude.request_detail}</th>
                  <th className="col-md-2">{singleDude.contractor_name}</th>
                  <th className="col-md-2">{singleDude.scheduled_date}</th>
                  <th className="col-md-2"> {singleDude.request_status}</th>
                  <th className="col-md-1"></th>
                </tr>
              </tbody>
            </table>
            ))}
          </div>
            ) : (
              <h3>There are no open issues.</h3>
            )}
      </div>
      );


      const PayRent = (

        <div className="paypalpage" style={{textAlign: "center", fontSize: "20px", color: "#083b66", marginTop: "50px", lineHeight: "1.5rem"}}>
          <p>Rent can be mailed to: <br />
            <br />
            REIT Management<br />
            555 Reit Row<br />
            Chicago, IL 60633<br />
            <br />
            
            Or Use the Paypal Button Below: <br />

      
            </p>
            <br />
            <PaypalBtn />
            </div>
              

        );

    if (this.state.belowSection === "make_request") {
      htmlThatWillShow = MakeARequestHtml;
    } else if (this.state.belowSection === "show_request") {
      htmlThatWillShow = ShowRequest;
    } else if (this.state.belowSection === "payrent") {
      htmlThatWillShow = PayRent;
    }

    const style = {
      buttonStyle: {
        width: "100%"
      },
      buttonLiStyle: {
        display: "inline-block",
        width: "33.3%"
      }
    }


    return (
      <div>
        
        <nav className="white" role="navigation">
          <div className="nav-wrapper container">
            <a href="/">
              <img id="logo-container" className="brand-logo" src="Logo2.png"/> 
            </a>

            <ul className="right hide-on-med-and-down">
              <li><a id="rentlink" href="#">Sign Out</a></li>
            </ul>
          
            <ul id="rentlink" className="side-nav">
              <li><a href="https://www.paypal.com/cgi-bin/webscr">Rent Payment</a></li>
            </ul>

            <a href="#" data-activates="nav-mobile" className="button-collapse"><i class="material-icons">menu</i></a>
          
          </div>
        </nav>


        <div id="index-banner" style={{ height: '60px', minHeight: '200px'}} className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <h1 className="header center teal-text text-lighten-2" >R.E.I.T Management</h1>
                <div className="row center"></div>
                <div className="row center"></div>
            </div>
          </div>
          
          <div style={{opacity: '0.5'}} className="parallax"><img style={{height:"200px", width:"100%"}} src="background5.jpg" alt="Unsplashed background img 1"/></div>
        
        </div>

      
        <nav className="white" >
          
        <li style={style.buttonLiStyle}><button style={style.buttonStyle} className="btn-large waves-effect waves-light teal lighten-1" onClick={() => {this.handleBelowState("make_request")}}>Make a Request</button></li>
        <li style={style.buttonLiStyle}><button style={style.buttonStyle} className="btn-large waves-effect waves-light teal lighten-1"  onClick={() => {this.handleBelowState("show_request")}}>View Open Request</button></li>
        <li style={style.buttonLiStyle}><button style={style.buttonStyle} className="btn-large waves-effect waves-light teal lighten-1"  onClick={() => {this.handleBelowState("payrent")}}>Pay Rent</button></li>
        </nav>
        {htmlThatWillShow}

      </div>
    );
  }
}

export default Renters;
