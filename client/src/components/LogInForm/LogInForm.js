import React from 'react'
import { withRouter } from "react-router-dom"
import { graphql, compose, ApolloConsumer } from 'react-apollo'
import { Button, Form, FormGroup, Label, Card, CardBody } from 'reactstrap'
import { withFormik, Field } from 'formik'
import { LogInSchema } from '../Validator/Validation'
import { CustomInputComponent } from '../CustomInputs/CustomInput'
import loginCompany from '../../Queries/LoginCompany'
import logIn from '../../Store/Mutations/logIn'

let myClient;

const styles = {
    width: '300px',
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
}

const LogInForm = ({ handleSubmit }) => {
    return (
        <div style={styles}>
            <Card>
                <CardBody>
                    <h3 style={{ textAlign: 'center', paddingBottom: '10px' }}>Login</h3>
                    <Form>
                        <ApolloConsumer>{
                            client => {
                                myClient = client
                                return true
                            }
                        }</ApolloConsumer>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Field 
                                name="email" 
                                type="email" 
                                component={CustomInputComponent} 
                                placeholder="Enter email" 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Field 
                                name="password" 
                                type="password" 
                                component={CustomInputComponent} 
                                placeholder="Enter password" 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button type="button" onClick={handleSubmit}>Submit</Button>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export const LogIn = withFormik({
    mapPropsToValues() {
        return {
            email: "",
            password: ""
        }
    },
    validationSchema: LogInSchema,
    handleSubmit(values, { props }) {
        const login = async () => {

            const { email, password } = values

            const token = await props.loginCompany({
                variables: {
                    email: email,
                    password: password
                }
            })
            if (!token) {
                alert("error")
            } else {
                console.log(token)
                localStorage.setItem('token', token.data.loginCompany)
                myClient.resetStore()
                props.logIn(true)
                props.history.push("/Dashboard")
            }
        }
        login()
    }
}) (LogInForm)

export default withRouter(compose(
    graphql(loginCompany, { name: 'loginCompany' }),
    graphql(logIn, { name: "logIn" })
)(LogIn))