import React,{Component} from 'react'
import { Col, Row, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Employee extends Component{
    
    constructor(props) {
        super(props);
    }
     
    render(){

        const image = {
            width: '130px',
            borderRadius: '50%',
            margin: '10px'
        }

        return (
            <ListGroupItem>
                <Row>
                    <Col md="3" className="text-center">
                        <div>
                        <img src={this.props.imageurl}
                            alt="employee image" style={image}
                        />   
                        </div>
                    </Col> 

                    <Col md="6" className="align-self-center text-center text-md-left">
                        <div>
                            <p>
                                Name: {this.props.name}
                            </p>

                            <p>
                                Position: {this.props.type}    
                            </p>    
                        </div>
                    </Col>

                    <Col md="3" className="align-self-center text-center">
                        <div>
                            <FontAwesomeIcon icon="calendar-alt" />    | <FontAwesomeIcon icon="edit" />  | <FontAwesomeIcon icon="user-times" />
                        </div>    
                    </Col>
                </Row>
            </ListGroupItem>
        )
    }
}

export default Employee