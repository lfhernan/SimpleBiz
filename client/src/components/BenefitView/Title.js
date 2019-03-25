import React,{Component} from 'react'
import { Col } from 'reactstrap';

const styles = {
    //border: "5px solid red",
    textAlign: "center",
    marginBottom: "15px",
    fontWeight: "bold"   
}

class Title extends Component{
    render(){
        return (
            <Col md="12">
                <h2 style={styles}>
                    Title
                </h2>
            </Col>
        )
    }
}

export default Title