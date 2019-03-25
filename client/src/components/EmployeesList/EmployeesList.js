import React,{Component} from 'react'
import {ListGroup, Container} from 'reactstrap';
import Employee from './Employee';
import getEmployees from '../../Queries/getEmployees'
import {graphql,compose} from 'react-apollo'

class EmployeesList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            employees: [{}]
        } 
    }
    
    componentDidMount() {
        this.setState({employees: [this.props.getEmployees]})
    }
    
    render() {
        return (
            <Container>
                <ListGroup>
                    List of Employees
                    {this.state.employees.map(employee => <Employee key={employee.Id} name={employee.name} type={employee.type} imageurl={employee.imageurl}/>)}
                </ListGroup>
            </Container>
        );
    }
}

export default compose(
    graphql(getEmployees,{name: 'getEmployees'}),
)(EmployeesList)





















