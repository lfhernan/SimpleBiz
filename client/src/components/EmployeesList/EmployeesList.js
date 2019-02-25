import React,{Component} from 'react'
import { ListGroup} from 'reactstrap';
import Employee from './Employee';

class EmployeesList extends Component {
    render() {
        return (
            <ListGroup>
                List of Employees
                <Employee/>
            </ListGroup>
        );
    }
}

export default EmployeesList



















