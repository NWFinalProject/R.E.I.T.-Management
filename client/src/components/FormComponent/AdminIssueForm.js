import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";


class AdminIssueForm extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      requests: [],
      firstName: "",
      lastName: "",
      emailAddress: "",
      Description: "",
      contractorName: "",
      requestStatus: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.loadRequests = this.loadRequests.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  

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
    console.log('this is our state ----', this.props);
    const style = {
      headerStyle: {
        marginBottom: '20px'
      }
    }

    return (
      <div>
                  <a className="collection-item">
                    <span className="badge">{"current status: " + this.props.singleDude.request_status}</span>
                    {this.props.singleDude.request_detail}
                    <form>
                    <Input
                value={this.state.requestStatus}
                onChange={this.handleInputChange}
                name="requestStatus"
                placeholder="Enter Status"
              />
                </form>
                <form>
                    <span className="badge">{"current contractor: " + this.props.singleDude.contractor_name}</span>
                    {/*{singleDude.contractor_name}*/}
                    <Input
                value={this.state.contractorName}
                onChange={this.handleInputChange}
                name="contractorName"
                placeholder="Enter Contractor Name"
              />
              <FormBtn
                disabled={!(this.state.requestStatus && this.state.contractorName)}
                onClick={this.handleFormSubmit}
              >
                Submit!
              </FormBtn>
              </form>
                    
              
              
              
                  </a>
                
        </div>
    );
  }
}

export default AdminIssueForm;