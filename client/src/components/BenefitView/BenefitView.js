import React,{Component} from 'react'
import {Container, Row} from 'reactstrap';
import Title from './Title'
import Benefit from './Benefit'

const styles = {
    border: "5px solid red",
    margin: "0"
}

class BenefitView extends Component{
    constructor(props){
        super(props)
        this.state ={
            benefits: [
                {
                    title: 'title1',
                    benefit: 'text1'
                },
                {
                    title: 'title2',
                    benefit: 'text2'
                },
                {
                    title: 'title3',
                    benefit: 'text3'
                }
            ]
        }
    }
    render(){
        return (
            <Container style={styles}>
                <Title />
                <Row>
                    {
                        this.state.benefits.map(x => <Benefit title={x.title} benefit={x.benefit}/>)
                    }
                </Row>
            </Container>
        )
    }
}

export default BenefitView