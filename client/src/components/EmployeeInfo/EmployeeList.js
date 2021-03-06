import React,{Component} from 'react'
import { Container, Col, ListGroup } from 'reactstrap'
import getEmployees from '../../Queries/GetEmployees'
import { compose,graphql } from 'react-apollo'
import EmployeeItem from './EmployeeItem'


class EmployeeList extends Component{

    renderEmployees = ()=>{
        let Employees

        try{
            const {getEmployees} = this.props
            if(!getEmployees.error){
                Employees = getEmployees.getEmployees.map(
                    (employee)=>{
                        return <EmployeeItem key={employee.id} info={employee} />
                    }
                )
            }
        }
        catch(err){
            Employees = 'loading'
        }
        return Employees
    }
    render(){
        return (
    
                <Col md="12"> 
                    <div
                    style={{
                        marginTop: 10,
                        marginBottom: 40,
                        textAlign: 'center'
                    }}
                    >
                    <Container>
                        <h3>Employee Info</h3>
                        <ListGroup>
                            {
                                this.renderEmployees()
                            }
                        </ListGroup>    
                    </Container>        
                    </div>
                </Col>
        )
    }
}

export default compose(
   graphql(getEmployees,{name: 'getEmployees'})
)(EmployeeList)