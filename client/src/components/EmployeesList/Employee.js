import React,{Component} from 'react'
import { Col, Row, ListGroupItem, Button, Modal, ModalHeader, ModalBody, ModalFooter,
        Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Employee extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            schedule: false,
            edit: false,
            remove: false
        };

        this.toggleSchedule = this.toggleSchedule.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleRemove = this.toggleRemove.bind(this);
    }
    
    toggleSchedule() {
        this.setState(prevState => ({
          schedule: !prevState.schedule
        }));
    }

    toggleEdit() {
        this.setState(prevState => ({
          edit: !prevState.edit
        }));
    }

    toggleRemove() {
        this.setState(prevState => ({
          remove: !prevState.remove
        }));
    }
        
    render(){

        const image = {
            width: '130px',
            borderRadius: '50%',
            margin: '10px'
        }

        const {name, type, imageurl} = this.props 

        return (
            <ListGroupItem>
                <Row>
                    <Col md="3" className="text-center">
                        <div>
                        <img src={imageurl}
                            alt="employee" style={image}
                        />   
                        </div>
                    </Col> 

                    <Col md="6" className="align-self-center text-center text-md-left">
                        <div>
                            <p>
                                Name: {name}
                            </p>

                            <p>
                                Position: {type}    
                            </p>    
                        </div>
                    </Col>

                    <Col md="3" className="align-self-center text-center">

                        <Button onClick={this.toggleSchedule} color="none"><FontAwesomeIcon icon="calendar-alt" size="lg"/></Button> |
                            <Modal isOpen={this.state.schedule} toggle={this.toggleSchedule} className={this.props.className}>
                                <ModalHeader toggle={this.toggleSchedule}>Employee Schedule</ModalHeader>
                                <ModalBody>
                                    Employee Schedule would go here
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleSchedule}>Close</Button>
                                </ModalFooter>
                            </Modal>
                            
                        <Button onClick={this.toggleEdit} color="none"><FontAwesomeIcon icon="edit" size="lg"/></Button> | 
                            <Modal isOpen={this.state.edit} toggle={this.toggleEdit} className={this.props.className}>
                                <ModalHeader toggle={this.toggleEdit}>Edit Employee Information</ModalHeader>
                                <ModalBody>
                                    <Form>
                                        <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                            <Label for="examplePassword">Password</Label>
                                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                            </FormGroup>
                                        </Col>
                                        </Row>
                                        <FormGroup>
                                        <Label for="exampleAddress">Address</Label>
                                        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
                                        </FormGroup>
                                        <FormGroup>
                                        <Label for="exampleAddress2">Address 2</Label>
                                        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
                                        </FormGroup>
                                        <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                            <Label for="exampleCity">City</Label>
                                            <Input type="text" name="city" id="exampleCity"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                            <Label for="exampleState">State</Label>
                                            <Input type="text" name="state" id="exampleState"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                            <FormGroup>
                                            <Label for="exampleZip">Zip</Label>
                                            <Input type="text" name="zip" id="exampleZip"/>
                                            </FormGroup>  
                                        </Col>
                                        </Row>
                                        <FormGroup check>
                                        <Input type="checkbox" name="check" id="exampleCheck"/>
                                        <Label for="exampleCheck" check>Check me out</Label>
                                        </FormGroup>
                                        <Button>Sign in</Button>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleEdit}>Submit</Button>
                                    <Button color="secondary" onClick={this.toggleEdit}>Close</Button>
                                </ModalFooter>
                            </Modal>

                        <Button onClick={this.toggleRemove} color="none"><FontAwesomeIcon icon="user-times" size="lg"/></Button>   
                            <Modal isOpen={this.state.remove} toggle={this.toggleRemove} className={this.props.className}>
                                    <ModalHeader toggle={this.toggleRemove}>Fire Employee</ModalHeader>
                                    <ModalBody>
                                        Are you sure you want to fire this employee?
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" onClick={this.toggleRemove}>Fire!</Button>
                                        <Button color="secondary" onClick={this.toggleRemove}>Close</Button>
                                    </ModalFooter>
                            </Modal>
                    </Col>
                </Row>
            </ListGroupItem>
        )
    }
}

export default Employee