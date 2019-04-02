import React,{Component} from 'react';
import { compose,graphql } from 'react-apollo';
import { Col, Row, ListGroupItem, Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, FormFeedback, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import editCompanyEmployee from '../../Queries/EditCompanyEmployee';
import deleteEmployee from '../../Queries/DeleteEmployee';
import getEmployees from '../../Queries/GetEmployees';

const image = {
    maxWidth: '130px',
    maxHeight: '130px',
    borderRadius: '50%',
    margin: '10px'
}

class EmployeeItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            type: null,
            imageurl: null,
            schedule: false,
            edit: false,
            remove: false
        }
    }

    toggleSchedule = async () => {
        this.setState(prevState => ({
          schedule: !prevState.schedule
        }));
    }

    toggleEdit = async () => {
        if (this.state.edit) {
            this.clearFormData();
        }
        this.setState(prevState => ({
          edit: !prevState.edit
        }));
    }

    toggleRemove = async () => {
        this.setState(prevState => ({
          remove: !prevState.remove
        }));
    }

    deleteHandler = async () => {
        this.toggleRemove();
        const data = await this.props.deleteEmployee({
            variables: {id: this.props.info.id},
            refetchQueries: [{query: getEmployees}]
        })
        console.log(data);
        
    } 

    editHandler = async () => {
        let form = {id: this.props.info.id};
        let accept = true;
        
        Object
        .keys(this.state)
        .filter(k => k!=='edit' && k!=='schedule' && k!=='remove')
        .forEach(key => { 
            if (this.state[key] === '') {
                accept = false;
                return;
            }
            else if (this.state[key]) {
                form[key] = this.state[key]
            }
        });

        if (accept === false) {
            return;
        }

        const data = await this.props.editCompanyEmployee({
            variables: form,
            refetchQueries: [{query: getEmployees}]
        })
        this.toggleEdit();
    }

    render(){
        const {name, type, imageurl} = this.props.info;
        const formName = this.state.name;
        const formImageurl = this.state.imageurl;

        return (
            <ListGroupItem action>
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

                        {/* This block deals with the schedule icon and modal  */}
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

                        {/* This block deals with the edit employee icon and modal     */}
                        <Button onClick={this.toggleEdit} color="none"><FontAwesomeIcon icon="edit" size="lg"/></Button> |
                            <Modal isOpen={this.state.edit} toggle={this.toggleEdit} className={this.props.className}>
                                <ModalHeader toggle={this.toggleEdit}>Edit Employee Information</ModalHeader>
                                <ModalBody>
                                    <Form>
                                        <FormGroup>
                                        <Label for="employeeNameInput">Employee Name</Label>
                                        <Input type="text" name="name" onBlur={this.validateForm} placeholder={name} {...this.addPropsFeedback(formName)} />
                                        <FormFeedback>Must enter name and last name</FormFeedback>              
                                        </FormGroup>

                                        <FormGroup>
                                        <Label for="employeeTypeInput">Type</Label>
                                        <Input type="select" name="type" onBlur={this.validateForm} defaultValue={type}>
                                            <option>Employee</option>
                                            <option>Manager</option>
                                        </Input>
                                        </FormGroup>

                                        <FormGroup>
                                        <Label for="employeeImageUrl">Image URL</Label>
                                        <Input type="text" name="imageurl" onChange={this.validateForm} placeholder={imageurl} {...this.addPropsFeedback(formImageurl)} />
                                        <FormFeedback>Invalid url to image</FormFeedback>
                                        <FormFeedback valid>Found image at url</FormFeedback>
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.editHandler}>Edit</Button>
                                    <Button color="secondary" onClick={this.toggleEdit}>Close</Button>
                                </ModalFooter>
                            </Modal>

                        {/* This block deals with the firing employeen icon and modal */}
                        <Button onClick={this.toggleRemove} color="none"><FontAwesomeIcon icon="user-times" size="lg"/></Button>
                            <Modal isOpen={this.state.remove} toggle={this.toggleRemove} className={this.props.className}>
                                    <ModalHeader toggle={this.toggleRemove}>Fire Employee</ModalHeader>
                                    <ModalBody>
                                        Are you sure you want to fire {name}?
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" onClick={this.deleteHandler}>Fire!</Button>
                                        <Button color="secondary" onClick={this.toggleRemove}>Close</Button>
                                    </ModalFooter>
                            </Modal>
                    </Col>
                </Row>
            </ListGroupItem>
        )
    }

    
    addPropsFeedback = (formData) => {
        let output = {};
        if (formData != null) {
        output = (formData !== '') ? {valid: true} : {invalid: true}
        }
        return output;
    }

    validateForm = (e) => {
        const field = e.target.name;
        const data = e.target.value;
        let isValid = false;

        if (data === '') {
            this.setState({ [field]: null })
            return;
        }
        
        switch (field) {
        case 'name':
            const splitted = data.split(' ');
            isValid = (splitted[0] && splitted[1]);
            isValid ? this.setState({name: data}) : this.setState({name: ''});
        break;
        case 'username':
            isValid = data.match(/^[0-9a-z]+$/); 
            isValid ? this.setState({username: data}) : this.setState({username: ''});
        break;
        case 'password':
            isValid = data.match(/^(?=.*\d).{4,20}$/);
            isValid ? this.setState({password: data}) : this.setState({password: ''});
        break;
        case 'imageurl':
            let imageData = new Image();
            imageData.onload = () => this.setState({imageurl: data});
            imageData.onerror = () => this.setState({imageurl: ''});
            imageData.src = data;
        break;
        default:
            this.setState({ [field]: data });
        break;
        }
    }

    clearFormData = () => {
        this.setState({
            name: null,
            imageurl: null,
            type: null
        })
    }
}

export default compose(
    graphql(editCompanyEmployee, {name: 'editCompanyEmployee'}),
    graphql(deleteEmployee, {name: 'deleteEmployee'})
  )(EmployeeItem)