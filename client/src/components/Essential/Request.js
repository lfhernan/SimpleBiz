import React,{Component} from 'react'
import { Col,ListGroup } from 'reactstrap'
import RequestItem from './RequestItem'


class Request extends Component{
    render(){
        return (
            <Col md="6"> 
                <div
                style={{
                    marginTop: 10,
                    marginBottom: 10
                }}
                >
                    <h3>Requests</h3>
                    <ListGroup>
                        <RequestItem/>
                        <RequestItem/>
                        <RequestItem/>
                    </ListGroup>
                </div>
            </Col>
        )
    }
}

export default Request