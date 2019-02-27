import React,{Component} from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class LogInForm extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    
    handleChange = (e) => {
        e.preventDefault();
        
        const val = e.target.value;
        const type = e.target.name;

        this.setState({
            [type]: val
        })
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
            console.log('error')
        }
        else {
            console.log('submit form')
        }

    }

    render(){
        return (
            <Form>
                <FormGroup row>
                    <Label for="username" sm={2}>Username</Label>
                        <Col sm={10}>
                            <Input onChange={this.handleChange} type="username" name="username" placeholder="Enter Username" />
                        </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input onChange={this.handleChange} type="password" name="password" placeholder="Enter Password" />
                        </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default LogInForm