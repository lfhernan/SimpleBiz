import React,{Component} from 'react'
import { Col,ListGroup } from 'reactstrap'
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
                    (employee,index)=>{
                        return <EmployeeItem key={employee.Id} info={employee} />
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
                    marginBottom: 10,
                    textAlign: 'center'
                }}
                >
                    <h3>Employee Info</h3>
                    <ListGroup>
                        {
                            this.renderEmployees()
                        }
                    </ListGroup>
                </div>
            </Col>
        )
    }
}

export default compose(
   graphql(getEmployees,{name: 'getEmployees'})
)(EmployeeList)