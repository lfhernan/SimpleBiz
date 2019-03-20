import React,{Component} from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import createCompany from '../../Queries/CreateCompany'
import {graphql,compose} from 'react-apollo'
import {withRouter} from "react-router-dom"

class SignUpForm extends Component {

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
            alert('error')
        }
        else {
            this.create()
        }

    }

    create = async () => {

        const {companyName, owner, email, industry, password} = this.state
        const token = await this.props.createCompany({
            variables:{
                companyName: companyName,
                owner: owner,
                email: email,
                industry: industry,
                password: password
            }
        })
        
        if(!token){
            alert('error')
        }
        else{
            localStorage.setItem('token', token)
            this.props.history.push("/SignIn")
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

export default withRouter (compose(
    graphql(createCompany,{name: 'createCompany'}),
)(SignUpForm))