import React,{Component} from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            password: "",
            companyId: "",
            username: ""
        }
    }

    handleInput = (e) => {
        const val = e.target.value;
        const type = e.target.name;

        this.setState({
            [type]: val
        })

        console.log(this.state)

    }

    onSubmit = () => {
        if (this.isEmpty() == true){
            return console.log("Submitted");
        }
        else{
            return console.log("Incomplete Form");
        }

    }

    isEmpty = () => {
        if (this.state.name === ""){
            return console.log("Empty name");
        } 
        else if (this.state.password === ""){
            return console.log("Empty password");
        } 
        else if (this.state.companyId === ""){
            return console.log("Empty company id");
        } else if (this.state.username === ""){
            return console.log("Empty username");
        } else {
            return true;
        }
    }

    //state for fields
    //function to check if field is empty
    //onsubmit will check if form fields are not blank
    //if not blank sign up user
    render(){
        return (
            //form
            //when you type in field, it goes to respective state key
            //on Click trigger onsubmit
            <Form>
                <FormGroup row>
                    <Label for="exampleName" sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input onChange={this.handleInput} type="name" name="name" id="exampleName" placeholder="Enter Name" />
                        </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input onChange={this.handleInput} type="password" name="password" id="examplePassword" placeholder="Enter Password" />
                        </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleCompanyId" sm={2}>Company ID</Label>
                        <Col sm={10}>
                            <Input onChange={this.handleInput} type="companyId" name="companyId" id="exampleCompanyId" placeholder="Enter Compamny ID" />
                        </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleUsername" sm={2}>Username</Label>
                        <Col sm={10}>
                            <Input onChange={this.handleInput} type="username" name="username" id="exampleUsername" placeholder="Enter Username" />
                        </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button onClick={this.onSubmit}>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default SignUp