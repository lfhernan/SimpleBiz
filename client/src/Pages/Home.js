import React,{Component} from 'react'
import { Container, Row, Col } from 'reactstrap';
import AboutHome from '../components/Essential/AboutHome';

class Home extends Component{
    render(){
        return (
            <div>
                <AboutHome />
            </div> 
        )
    }
}

export default Home