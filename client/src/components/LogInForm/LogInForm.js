import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';



class LogInForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        this.setState({
            [name]: value
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

    render() {
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
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default LogInForm