import React,{Component, Fragment} from 'react'
import Request from './Request'
import CompanyInfo from './companyInfo'
import { Container, Row } from 'reactstrap';

class Essential extends Component{
    render(){
        return (
            <Container>
               <Row>
                <CompanyInfo />
                <Request />
               </Row>
            </Container>
        )
    }
}

export default Essential