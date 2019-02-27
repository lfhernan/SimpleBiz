import React,{Component} from 'react'
import { Col, Row, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Employee extends Component{
    
    constructor(props) {
        super(props);
    }
     
    render(){

        const image = {
            width: '150px',
            borderRadius: '50%',
            float: 'left',
            margin: '10px'
        }

        return (
            <ListGroupItem>
                <Row>
                    <Col md="3">
                        <img src={this.props.imageurl}
                            alt="employee image" style={image}
                        />   
                        
                        <div>
                            <p>Name: 
                                {this.props.name}
                            </p>

                            <p>Position:
                                {this.props.type}    
                            </p>    
                        </div>
                    </Col> 

                    {/* Space between the employee info and toolbar */}
                    <Col md="6" />

                    <Col md="3">
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