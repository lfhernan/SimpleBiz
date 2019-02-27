import React,{Component} from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class LogIn extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    
    handleInput = (e) => {
        e.preventDefault();
        
        const val = e.target.value;
        const type = e.target.name;

        this.setState({
            [type]: val
        })

        console.log(this.state)

    }

    render(){
        return (
            <Form>
                <FormGroup row>
                    <Label for="exampleUsername" sm={2}>Username</Label>
                        <Col sm={10}>
                            <Input onChange={this.handleInput} type="username" name="username" id="exampleUsername" placeholder="Enter Username" />
                        </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input onChange={this.handleInput} type="password" name="password" id="examplePassword" placeholder="Enter Password" />
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

export default LogIn