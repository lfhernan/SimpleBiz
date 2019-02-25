import React,{Component} from 'react'
import { Container, Row, Col } from 'reactstrap';
<<<<<<< HEAD
import AboutHome from '../components/Essential/AboutHome';

class Home extends Component{
    render(){
        return (
            <div>
                <AboutHome />
            </div> 
=======
import Header from '../components/Header/Header'
class Home extends Component{
    render(){
        return (
            // <div>Home</div>
            <Header />
>>>>>>> master
        )
    }
}

export default Home