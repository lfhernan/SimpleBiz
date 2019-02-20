import React,{Component} from 'react'
import { Col } from 'reactstrap';


class Request extends Component{
    render(){
        return (
            <Col md="3">
                <div style={{backgroundColor: "red"}}>
                    Request
                </div>
            </Col>
        )
    }
}

export default Request