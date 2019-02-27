import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignUpForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            companyName: '',
            owner: '',
            email: '',
            industry: '',
            password: ''
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
                    <Label for="companyName" sm={2}>Company Name</Label>
                    <Col sm={10}>
                        <Input type="name" name="companyName" placeholder="Enter Company Name" onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="owner" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="owner" placeholder="Enter Name" onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="industry" sm={2}>Industry</Label>
                    <Col>
                        <Input type="text" name="industry" placeholder="Enter Industry Type" onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="email" sm={2}>Email</Label>
                    <Col>
                        <Input type="text" name="email" placeholder="Enter Email" onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>
        );
    }
}

export default SignUpForm