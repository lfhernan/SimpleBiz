import React,{Component} from 'react'
import { Container, Row, Col } from 'reactstrap'
import Header from '../components/Header/Header'
import BenefitView from '../components/BenefitView/BenefitView'

class Home extends Component{
    render(){
        return (
            <Container>
                <Header />
                <div>Home</div>
                <BenefitView />
            </Container>
        )
    }
}

export default Home