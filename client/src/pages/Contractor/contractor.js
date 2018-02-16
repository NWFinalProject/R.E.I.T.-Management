import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import ContForm from '../../components/FormCompContractor/ContIssueForm.js';

class Contractor extends Component {
  state = {
    requests: [],
    id: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    Description: "",
    contractorName: "",
    requestStatus: "",
    scheduledDate: ""
  };

  componentDidMount() {
    this.loadRequests();
  }

 loadRequests = () => {
   API.getRequests()
      .then((res) => {
        console.log('this is res ----', res);
        this.setState({ requests: res.data, id: "", firstName: "", lastName: "", emailAddress: "", Description: "", contractorName: "", requestStatus: "", scheduledDate: "" })
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
    if (this.state.scheduledDate && this.state.requestStatus) {
    
    console.log(this.state);

    let self = this;
     
     API.contUpdate({
        scheduled_date: this.state.scheduledDate,
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

    console.log('this is our state ----', this.state);
    const style = {
      headerStyle: {
        marginBottom: '20px'
      }
    }
    return (
      <div>
        <nav className="white" role="navigation" style={style.headerStyle}>
          <div className="nav-wrapper container">
            <a href="/">
              <img id="logo-container" className="brand-logo" src="Logo2.png"/> 
          </a>
            <ul className="right hide-on-med-and-down">
              <li><a id="rentlink" href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=e6a6c0f3d4816&mfid=1517945926403_e6a6c0f3d4816#/checkout/openButton">Quick Rent Payment</a></li>
            </ul>

            <ul id="rentlink" className="side-nav">
              <li><a href="https://www.paypal.com/cgi-bin/webscr">Rent Payment</a></li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </nav>
        <Row>
      

          <Col size="md-10">
            <Jumbotron>
              <p>Open Issues</p>
            </Jumbotron>
            
            
            {this.state.requests.length ? (
              <div className="collection">
                <h4>Here are all the Open Issues:</h4>
                {this.state.requests.map(singleDude => (


                  <div>

                    <ContForm singleDude={singleDude} />
                  </div>

                ))}
              </div>
            ) : (
              <h3>There are no open issues.</h3>
            )}
          </Col>
        </Row>
        </div>
    );
  }
}

export default Contractor;