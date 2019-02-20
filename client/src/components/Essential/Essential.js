<<<<<<< HEAD
import React,{Component} from 'react'
import { Container, Row, Col } from 'reactstrap';
import companyInfo from './companyInfo'
import Request from './Request'
=======
import React,{Component, Fragment} from 'react'
import Request from './Request'
import CompanyInfo from './Companyinfo'
import { Container, Row } from 'reactstrap';
>>>>>>> master

class Essential extends Component{
    render(){
        return (
<<<<<<< HEAD
            <Fragment>
                <companyInfo />
                <Request />
            </Fragment>
=======
            <Container>
               <Row>
               <CompanyInfo />
                <Request />
               </Row>
            </Container>
>>>>>>> master
        )
    }
}

export default Essential