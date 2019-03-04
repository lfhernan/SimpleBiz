<<<<<<< HEAD
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
=======
import React,{Component, Fragment} from 'react'
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header/Header'
import AboutHome from '../components/Essential/AboutHome/AboutHome'
class Home extends Component{
    render(){
        return (
            <Fragment>
                <Header />
                <AboutHome />
            </Fragment>
            // <div>Home</div>
>>>>>>> master
        )
    }
}

export default Home