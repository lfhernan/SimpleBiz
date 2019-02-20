import React,{Component} from 'react'
import Essential from '../components/Essential/Essential'
import EmployeesList from '../components/EmployeesList/EmployeesList'

class DashBoard extends Component{
    render(){
        return (
            <div>
                <Essential />
                <EmployeesList />
            </div>
        )
    }
}

export default DashBoard