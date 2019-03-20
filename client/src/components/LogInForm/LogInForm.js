import React,{Component} from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import loginCompany from '../../Queries/LoginCompany'
import {graphql,compose} from 'react-apollo'
import {withRouter} from "react-router-dom"
import logIn from '../../Store/Mutations/logIn'
import {ApolloConsumer} from 'react-apollo'

let myClient;

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
            alert('error')
        }
        else {
            this.login()
        }

    }

    login = async () => {

        const {username, password} = this.state
        const token = await this.props.loginCompany({
            variables:{
                email: username,
                password: password
            }
        })
        
        if(!token){
            alert('error')
        }
        else{
            localStorage.setItem('token', token)
            this.props.logIn(true)
            myClient.resetStore()
            this.props.history.push("/Dashboard")
        }
    }

    render(){
        return (
            <Form>
                <ApolloConsumer>{
                    client =>
                    {
                        myClient=client
                        return true
                    }
                }</ApolloConsumer>
                <FormGroup row>
                    <Label for="username" sm={2}>Username</Label>
                        <Col sm={6}>
                            <Input onChange={this.handleChange} type="username" name="username" placeholder="Enter Username" />
                        </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={2}>Password</Label>
                        <Col sm={6}>
                            <Input onChange={this.handleChange} type="password" name="password" placeholder="Enter Password" />
                        </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 6, offset: 2 }}>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default withRouter (compose(
    graphql(loginCompany,{name: 'loginCompany'}),
    graphql(logIn,{name: "logIn"})
)(LogInForm))