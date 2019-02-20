import React,{Component} from 'react'
import { Container, Row, Col } from 'reactstrap';
import Essential from '../components/Essential/Essential'

class DashBoard extends Component{
    render(){
        return (
            <div>
                <Essential />
                <Essential />
                <Essential />
            </div>
        )
    }
}

export default DashBoard