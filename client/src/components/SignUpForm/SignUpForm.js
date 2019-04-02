import React from 'react'
import { withRouter } from "react-router-dom"
import { graphql, compose } from 'react-apollo'
import { Button, Form, FormGroup, Label, Card, CardBody } from 'reactstrap'
import { withFormik, Field } from 'formik'
import { SignUpSchema } from '../Validator/Validation'
import { CustomInputComponent } from '../CustomInputs/CustomInput'
import createCompany from '../../Queries/CreateCompany'

const styles = {
    width: '400px',
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
}

const SignUpForm = ({ handleSubmit }) => {
    return (
        <div style={styles}>
            <Card>
                <CardBody>
                    <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>Sign Up</h3>
                    <Form>
                        <FormGroup>
                            <Label for="companyName">Company Name</Label>
                            <Field 
                            name="companyName" 
                            type="text" 
                            component={CustomInputComponent} 
                            placeholder="Enter company name" 
                        />
                        </FormGroup>
                        <FormGroup>
                            <Label for="owner">Owner's Name</Label>
                            <Field 
                                name="owner" 
                                type="text" 
                                component={CustomInputComponent} 
                                placeholder="Enter owner's name" 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="industry">Industry</Label>
                            <Field 
                                name="industry" 
                                type="text" 
                                component={CustomInputComponent} 
                                placeholder="Enter industry type" 
                            />
                        </FormGroup>
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
                            <Label for="confirmPassword">Confirm Password</Label>
                            <Field 
                                name="confirmPassword" 
                                type="password" 
                                component={CustomInputComponent} 
                                placeholder="Please confirm your password" 
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

export const SignUp = withFormik({
    mapPropsToValues() {
        return {
            companyName: '',
            owner: '',
            email: '',
            industry: '',
            password: '',
            confirmPassword: ''
        }
    },
    validationSchema: SignUpSchema,
    handleSubmit(values, { props, setErrors}) {
        if (values.password !== values.confirmPassword) {
            setErrors({ confirmPassword: "Passwords do not match" })
        }
        else {
           const create = async () => {

                const { companyName, owner, email, industry, password } = values
                const token = await props.createCompany({
                    variables:{
                        companyName: companyName,
                        owner: owner,
                        email: email,
                        industry: industry,
                        password: password,
                    }
                })
                
                if (!token){
                    alert("error")
                } else {
                    localStorage.setItem('token', token)
                    props.history.push("/SignIn")
                }
            }
            create()
        }
    }
})(SignUpForm)

export default withRouter(compose(
    graphql(createCompany, { name: 'createCompany' }),
)(SignUp))