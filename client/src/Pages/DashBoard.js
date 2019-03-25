import React,{Component} from 'react'
import Essential from '../components/Essential/Essential'
import getCompanyInfo from '../Queries/GetCompanyInfo'
import EmployeeList from '../components/EmployeeInfo/EmployeeList'
import {graphql,compose} from 'react-apollo'

class DashBoard extends Component{
    render(){
        return (
            <div>
                <Essential />
                <EmployeeList />
            </div>
        )
    }
}

export default compose(
    graphql(getCompanyInfo,{name: 'getCompanyInfo'})
)(DashBoard)