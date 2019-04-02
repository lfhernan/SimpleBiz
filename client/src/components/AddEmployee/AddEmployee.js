import React,{Component} from 'react'
import { compose,graphql } from 'react-apollo'
import newEmployee from '../../Queries/AddEmployee'
import getEmployees from '../../Queries/GetEmployees'
import { 
  Button,
  Modal,
  ModalHeader,
  ModalBody, 
  ModalFooter,
  Form, 
  FormGroup, 
  Input,
  FormFeedback
 } from 'reactstrap';


class AddEmployee extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: null,
      password: null,
      username: null,
      imageurl: null,
      type: 'Employee'
    }
  }
    
  toggle = () => {
    if (this.state.modal) {
      this.clearFormData()
    }
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
    
  createEmployee = async() => {
    const {name,password,username,type,imageurl} = this.state
    const {data} = await this.props.newEmployee({
      variables:{
        name,password,username,type,imageurl
      },
      refetchQueries:[{query: getEmployees}]
    })
    alert('Employee succesfully created.')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let valid = true
    const keys = Object.keys(this.state)

    for (let i = 0; i < keys.length; i++) {
      if (this.state[keys[i]].length === 0) {
        valid = false
        break;
      }
    }
    if (!valid) {
      alert('No values can be left empty')
    }
    else {
      this.createEmployee()
      this.toggle()
    }
  }

    
  render(){
    const { name, username, password, imageurl } = this.state;

    return (
      <div>
        <Button color="info" onClick={this.toggle}>Add Employee</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Add Employee</ModalHeader>
        <ModalBody>
          
          <Form>
            <FormGroup>
              <Input 
                {...this.addPropsFeedback(name)}  
                type="text" 
                placeholder="Full name" 
                name="name" 
                onBlur={this.validateForm} 
                autoComplete="new-password"
              />
              <FormFeedback>Must enter name and last name</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Input 
                {...this.addPropsFeedback(username)}  
                type="text" 
                placeholder="Username" 
                name="username" 
                onBlur={this.validateForm} 
                autoComplete="new-password"
              />
              <FormFeedback>Username must be alphanumeric</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Input type="select" name="type" onChange={this.validateForm}>
                <option value="Employee">Employee</option>
                <option value="Manager">Manager</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Input 
                {...this.addPropsFeedback(password)}  
                type="password" 
                placeholder="Password" 
                name="password" 
                onBlur={this.validateForm} 
                autoComplete="new-password"
              />
              <FormFeedback>Password must be between 4 and 20 digits long and include at least one numeric digit.</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Input 
                {...this.addPropsFeedback(imageurl)}  
                type="text" 
                name="imageurl" 
                placeholder="Image URL" 
                onChange={this.validateForm}
                autoComplete="new-password"
              />
              <FormFeedback>Invalid url to image</FormFeedback>
              <FormFeedback valid>Found image at url</FormFeedback>
            </FormGroup>
          </Form>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmit}>Create Employee</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

  addPropsFeedback = (formData) => {
    let output = {};
    if (formData != null) {
      output = (formData !== '') ? {valid: true} : {invalid: true}
    }
    return output;
  }

  validateForm = (e) => {
    const field = e.target.name;
    const data = e.target.value;
    let isValid = false;
    
    switch (field) {
      case 'name':
        const splitted = data.split(' ');
        isValid = (splitted[0] && splitted[1]);
        isValid ? this.setState({name: data}) : this.setState({name: ''});
      break;
      case 'username':
        isValid = data.match(/^[0-9a-z]+$/); 
        isValid ? this.setState({username: data}) : this.setState({username: ''});
      break;
      case 'password':
        isValid = data.match(/^(?=.*\d).{4,20}$/);
        isValid ? this.setState({password: data}) : this.setState({password: ''});
      break;
      case 'imageurl':
        let imageData = new Image();
        imageData.onload = () => this.setState({imageurl: data});
        imageData.onerror = () => this.setState({imageurl: ''});
        imageData.src = data;
      break;
      default:
        this.setState({ [field]: data });
      break;
    }
  }

  clearFormData = () => {
    this.setState({
      name: null,
      password: null,
      username: null,
      imageurl: null,
      type: 'Employee'
    })
  }
  
}

export default compose(
  graphql(newEmployee,{name: 'newEmployee'})
)(AddEmployee)