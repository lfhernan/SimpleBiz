import React,{Component} from 'react'
import { Container, Row, Col } from 'reactstrap'
import BenefitView from '../components/BenefitView/BenefitView'

class Home extends Component{
    render(){
        return (
            <Container>
                <div>Home</div>
                <BenefitView />
            </Container>
        )
    }
}

export default Home