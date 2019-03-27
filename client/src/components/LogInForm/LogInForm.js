import React,{Component} from 'react'
import { Col, Button, Form, FormGroup, Label, Input,Card,CardBody } from 'reactstrap';
import loginCompany from '../../Queries/LoginCompany'
import {graphql,compose} from 'react-apollo'
import {withRouter} from "react-router-dom"
import logIn from '../../Store/Mutations/logIn'
import {ApolloConsumer} from 'react-apollo'

let myClient;

const styles={
    width: '300px',
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
}

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
            console.log('error')
            
        }
        else{
            console.log(token)
            localStorage.setItem('token', token.data.loginCompany)
            myClient.resetStore()
            this.props.logIn(true)
            this.props.history.push("/Dashboard")
        }
    }

    render(){
        return (
            <div style={styles}>
                <Card>
                    <CardBody>
                        <h3 style={{textAlign: 'center',paddingBottom: '10px'}}>Login</h3>
                        <Form>
                        <ApolloConsumer>{
                            client =>
                            {
                                myClient=client
                                return true
                            }
                        }</ApolloConsumer>
                        <FormGroup>
                                    <Input onChange={this.handleChange} type="username" name="username" placeholder="Enter Username" />
                        </FormGroup>
                        <FormGroup>
                                    <Input onChange={this.handleChange} type="password" name="password" placeholder="Enter Password" />
                        </FormGroup>
                        <FormGroup>
                                <Button onClick={this.handleSubmit}>Submit</Button>
                        </FormGroup>
                        </Form>
                </CardBody>
                 </Card>
            </div>
        )
    }
}

export default withRouter (compose(
    graphql(loginCompany,{name: 'loginCompany'}),
    graphql(logIn,{name: "logIn"})
    
)(LogInForm))