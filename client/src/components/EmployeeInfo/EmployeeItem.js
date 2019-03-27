import React,{Component} from 'react'
import { Col, Row, ListGroupItem, Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, FormText, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const image = {
    width: '130px',
    borderRadius: '50%',
    margin: '10px'
}

class EmployeeItem extends Component{

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
        
        const {name, type, imageurl} = this.props.info

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
                                        <FormGroup>
                                        <Label for="employeeNameInput">Employee Name</Label>
                                        <Input type="text" name="employeeNameInput" id="employeeNameInput" defaultValue={name}/>
                                        </FormGroup>
                            
                                        <FormGroup>
                                        <Label for="employeeTypeInput">Type</Label>
                                        <Input type="select" name="employeeTypeInput" id="employeeTypeInput" defaultValue={type}>
                                            <option>Employee</option>
                                            <option>Manager</option>
                                        </Input>
                                        </FormGroup>
                                    
                                        <FormGroup>
                                        <Label for="employeeImageUrl">Image URL</Label>
                                        <Input type="text" name="employeeImageUrl" id="employeeImageUrl" defaultValue={imageurl}/>
                                        <FormText color="muted">
                                            Link to this employee's photo
                                        </FormText>
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleEdit}>Edit</Button>
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
                {/* <div style={{
                    display: 'inline-block',
                    float: 'left',
                    textAlign: 'center',
                    width: 45
                }}>
                    <img 
                    style={{borderRadius: '100'}}
                    src={this.props.info.imageurl} height="42" width="42"
                    alt="employee"
                    />
                    <br />
                    {this.props.info.name}
                </div> */}
            </ListGroupItem>
        )
    }
}

export default EmployeeItem