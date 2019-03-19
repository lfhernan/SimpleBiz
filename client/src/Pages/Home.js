import React,{Component,Fragment} from 'react'
// import { Container, Row, Col } from 'reactstrap'
import Header from '../components/Header/Header'
import BenefitView from '../components/BenefitView/BenefitView'
import AboutHome from '../components/Essential/AboutHome/AboutHome'


class Home extends Component{
    render(){
        return (
            <Fragment>
                 <Header />
                <div>Home</div>
                <BenefitView />
                <AboutHome />
            </Fragment>
        )
    }
}

export default Home