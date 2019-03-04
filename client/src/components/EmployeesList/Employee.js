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
                        <div>
                            <FontAwesomeIcon icon="calendar-alt" size="lg"/> | <FontAwesomeIcon icon="edit" size="lg"/> | <FontAwesomeIcon icon="user-times" size="lg"/>
                        </div>    
                    </Col>
                </Row>
            </ListGroupItem>
        )
    }
}

export default Employee