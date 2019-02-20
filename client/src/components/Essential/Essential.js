import React,{Component} from 'react'
import { Container, Row, Col } from 'reactstrap';
import companyInfo from './companyInfo'
import Request from './Request'

class Essential extends Component{
    render(){
        return (
            <Fragment>
                <companyInfo />
                <Request />
            </Fragment>
        )
    }
}

export default Essential