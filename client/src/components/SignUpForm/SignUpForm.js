import React,{Component} from 'react'
import { Col,Card,CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import createCompany from '../../Queries/CreateCompany'
import {graphql,compose} from 'react-apollo'
import {withRouter} from "react-router-dom"


const styles = {
    width: '350px',
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
}

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
                password: password,
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
            <div style={styles}>
                <Card>
                <CardBody>
                    <h3 style={{textAlign: 'center', marginBottom: '10px'}}>Sign Up</h3>
                    <Form>
                    <FormGroup row>
                            <Input type="name" name="companyName" placeholder="Enter Company Name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup row>
                            <Input type="text" name="owner" placeholder="Enter Name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup row>
                        
                            <Input type="text" name="industry" placeholder="Enter Industry Type" onChange={this.handleChange} />

                    </FormGroup>
                    <FormGroup row>
                        
                            <Input type="text" name="email" placeholder="Enter Email" onChange={this.handleChange} />

                    </FormGroup>
                    <FormGroup row>
                    
                            <Input type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </Form>
                </CardBody>
            </Card>
            </div>
        );
    }
}

export default withRouter (compose(
    graphql(createCompany,{name: 'createCompany'}),
)(SignUpForm))