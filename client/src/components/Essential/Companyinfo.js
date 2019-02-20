import React,{Component} from 'react'
import { Col } from 'reactstrap';


const styles = {
    backgroundColor: "green", 
    marginBottom:"10px"
}

class CompanyInfo extends Component{
    render(){
        return (
            <Col md="9">
               <div style={styles}>
                    CompanyInfo
               </div>
            </Col>
        )
    }
}

export default CompanyInfo