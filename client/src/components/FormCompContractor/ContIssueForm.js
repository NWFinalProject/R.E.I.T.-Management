import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";


class ContIssueForm extends Component {

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
      requestStatus: "",
      scheduledDate: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.loadRequests = this.loadRequests.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  

  componentDidMount() {
    this.loadRequests();
  }


 loadRequests = () => {
   API.getAdminRequests()
      .then((res) => {
        console.log('this is res ----', res);
        this.setState({ requests: res.data, firstName: "", lastName: "", emailAddress: "", Description: "", contractorName: "", requestStatus: "", scheduledDate: "" })
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
    if (this.state.scheduledDate && this.state.requestStatus) {
    
    console.log("SCHEDULED DATE AND STATE " + this.state.scheduledDate + this.state.requestStatus);

    let self = this;
     
     API.contUpdate({
        id: id,
        scheduled_date: this.state.scheduledDate,
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
                  <a className="collection-item" style={{paddingBottom: '40px', backgroundColor: 'white', textDecoration: 'none'}}>
                    <span className="badge" style={{backgroundColor: 'white', color: '#e78200'}}>{"current status: " + this.props.singleDude.request_status}</span>
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
                    <span className="badge"style={{paddingBottom: '40px', backgroundColor: 'white', textDecoration: 'none', color: "#e78200"}}>{"current scheduled date: " + this.props.singleDude.scheduled_date}</span>
                    {/*{singleDude.contractor_name}*/}
                    <Input
                value={this.state.scheduledDate}
                onChange={this.handleInputChange}
                name="scheduledDate"
                placeholder="Enter Schedule Date"
              />
              </form>
              <FormBtn
                disabled={!(this.state.requestStatus && this.state.scheduledDate)}
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

export default ContIssueForm;