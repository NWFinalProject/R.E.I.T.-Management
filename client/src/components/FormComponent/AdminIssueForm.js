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
      id: "",
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
    console.log('this is our name of the thing we are going to change', name);
    console.log('this is the value...', value);
    this.setState({
      [name]: value
    });
  };



  handleFormSubmit = (id) => {
    // event.preventDefault()

    console.log("id = " + id);
    if (this.state.contractorName && this.state.requestStatus) {
    
    console.log("CONTRACTOR AND STATE " + this.state.contractorName + this.state.requestStatus);

    let self = this;
     
     API.adminUpdate({
        id: id,
        contractor_name: this.state.contractorName,
        request_status: this.state.requestStatus

      })
      .then( function(res) {
        console.log(res);
        self.loadRequests();
      })
      .catch(err => console.log(err));
    }
  }

  render() {  
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
              </form>
              <FormBtn
                disabled={!(this.state.requestStatus && this.state.contractorName)}
                onClick={(
                  ) => this.handleFormSubmit(this.props.singleDude.id)}
              >
                Submit!
              </FormBtn>
                    
              
              
              
                  </a>
                
        </div>
    );
  }
}

export default AdminIssueForm;