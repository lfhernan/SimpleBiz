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
        )
    }
}

export default Home