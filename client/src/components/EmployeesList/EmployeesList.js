import React,{Component} from 'react'
import { ListGroup} from 'reactstrap';
import Employee from './Employee';

class EmployeesList extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            employeeId: '',
            name: '',
            position: ''
        };
    }
    
    render() {
        return (
            <ListGroup>
                List of Employees
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>
            </ListGroup>
        );
    }
}

export default EmployeesList



















