import React,{Component} from 'react'
import Employee from './Employee'

class EmployeesList extends Component{
    render(){
        return (
            <div>
                List of Employees
                <Employee />
                <Employee />
                <Employee />
            </div>
        )
    }
}

export default EmployeesList