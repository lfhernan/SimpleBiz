import React,{Component} from 'react'
import { Col, Row, ListGroupItem } from 'reactstrap';

class Employee extends Component{
    
    constructor(props) {
        super(props);
    
        this.state = {
            employeeId: '',
            name: '',
            position: ''
        };
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
                        <img src="https://images.unsplash.com/photo-1518548183878-5e1fcea68bb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                            alt="employee image" style={image}
                        />   
                        
                        <div>
                            <p>Name</p>
                            <p>Position</p>    
                        </div>
                    </Col> 

                    {/* Space between the employee info and toolbar */}
                    <Col md="6" />

                    <Col md="3">
                        <div>
                            Modal   | Edit  | Remove
                        </div>    
                    </Col>
                </Row>
            </ListGroupItem>
        )
    }
}

export default Employee