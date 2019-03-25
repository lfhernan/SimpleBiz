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
  Label, 
  Input, 
  FormText
 } from 'reactstrap';


class AddEmployee extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          name: '',
          password: '',
          username: '',
          type: 'Employee',
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

      handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        this.setState({
            [name]: value
        })

    }

    createEmployee = async()=>{
      const {name,password,username,type} = this.state
      const {data} = await this.props.newEmployee({
        variables:{
          name,password,username,type
        },
        refetchQueries:[{query: getEmployees}]
      })
      console.log(data)
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
          console.log(this.state)
      }
      else {
          this.createEmployee()
          console.log(this.props)
          this.toggle()
      }

  }
    
    render(){
        return (
            <div>
                <Button color="info" onClick={this.toggle}>Add Employee</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Add Employee</ModalHeader>
                <ModalBody>
                    <Form>
                      <FormGroup>
                        <Input type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
                      </FormGroup>
                      <FormGroup>
                        <Input type="text" placeholder="Username" name="username" onChange={this.handleChange}/>
                      </FormGroup>
                      <FormGroup>
                        <Input type="select" name="type" onChange={this.handleChange}>
                          <option value="Employee">Employee</option>
                          <option value="Manager">Manager</option>
                        </Input>
                    </FormGroup>
                      <FormGroup>
                        <Input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
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
}

export default compose(
  graphql(newEmployee,{name: 'newEmployee'})
)(AddEmployee)