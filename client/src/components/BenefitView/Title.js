import React,{Component} from 'react'
import { Col } from 'reactstrap';

const styles = {
    textAlign: "center",
    marginBottom: "15px",
    fontWeight: "bold"   
}

class Title extends Component{
    render(){
        return (
            <Col md="12">
                <h2 style={styles}>
                    Features
                </h2>
            </Col>
        )
    }
}

export default Title