import React,{Component} from 'react'
import { Col, Card, CardText, CardBody, 
    CardSubtitle } from 'reactstrap';

class Benefit extends Component{
    render(){
        return (
            <Col md="4">
                <div>
                    <Card>
                        <CardBody>
                            <h3>{this.props.title}</h3>
                            <CardText>{this.props.benefit}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </Col>
        )
    }
}

export default Benefit