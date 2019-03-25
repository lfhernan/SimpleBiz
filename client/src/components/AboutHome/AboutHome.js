import React,{Component} from 'react'
import { Container,Col, Button } from 'reactstrap';

const styles = {
    fontWeight: "bold",
    textAlign: "center",
}

const containerStyles ={
    marginTop: '50px',
    marginBottom: '50px',
}

class AboutHome extends Component{
    render(){
        return (
                <Container styles={containerStyles}>
                    <Col md="12">
                        <h2 style={styles}>
                            About
                        </h2>
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error
                         sit voluptatem accusantium doloremque laudantium,
                          totam rem aperiam, eaque ipsa quae ab illo inventore
                           veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. Nemo enim ipsam voluptatem quia voluptas
                             sit aspernatur aut odit aut fugit, sed quia
                              consequuntur magni dolores eos qui ratione
                               voluptatem sequi nesciunt. Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet,
                                 consectetur, adipisci velit, sed quia non
                                  numquam eius modi tempora incidunt ut labore 
                                  et dolore magnam a
                        </p>
                        <a color= 'white' href='http://localhost:3000/SignUp'><Button color = 'success'> Get Started Now!</Button></a>{''}
                    </Col>
                </Container>                         
        )
    }
}

export default AboutHome

