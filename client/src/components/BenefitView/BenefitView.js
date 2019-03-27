import React,{Component} from 'react'
import {Container, Row} from 'reactstrap';
import Title from './Title'
import Benefit from './Benefit'

const styles = {
    marginTop: '50px',
    marginBottom: '50px',
}

class BenefitView extends Component{
    constructor(props){
        super(props)
        this.state ={
            benefits: [
                {
                    title: 'feature 1',
                    benefit: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vol'
                },
                {
                    title: 'feature 2',
                    benefit: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vol'
                },
                {
                    title: 'feature 3',
                    benefit: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vol'
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
                        this.state.benefits.map((x,key) => <Benefit key={key} title={x.title} benefit={x.benefit}/>)
                    }
                </Row>
            </Container>
        )
    }
}

export default BenefitView