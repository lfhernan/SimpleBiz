import React,{Component,Fragment} from 'react'
import { 
    ListGroupItem,
    Container,
    Row,
    Col,
    Button, 
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Alert
} from 'reactstrap'


class RequestItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    render(){
        return (
            <Fragment>
                <ListGroupItem>
                <Container>
                    <Row>
                        <Col xs="6" md="4">request type</Col>
                        <Col xs={{size: 4,offset: 2}} md="6">
                        <Button color="danger" onClick={this.toggle}>Info</Button> {" "} Status
                        </Col>
                    </Row>
                </Container>
            </ListGroupItem>
            <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
            </Fragment>
        )
    }
}

export default RequestItem