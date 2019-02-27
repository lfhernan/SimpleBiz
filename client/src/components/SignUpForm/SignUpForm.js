import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



 class SignUpForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            companyName: '',
            owner: '',
            email: '',
            industry: '',
            password: ''
        }
    }

    handleChange = (e)=>{
        const value = e.target.value
        const name = e.target.name

    this.setState({
        [name]: value
    })
        
    }

    handleSubmit=  (e)=>{
        e.preventDefault()


        let valid = true

        const keys = Object.keys(this.state)

        for(let i = 0; i < keys.length;i++){
            if(this.state[keys[i]].length == 0){
                valid = false
                break;
            }
        }
        if(!valid){
            console.log('error')
        }
        else{
            console.log('submit form')
        }

    }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Company Name</Label>
          <Input type="name" name="companyName" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" name="owner" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Industry</Label>
          <Input type="text" name="industry" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="text" name="email" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password" onChange={this.handleChange}/>
        </FormGroup>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}

export default SignUpForm