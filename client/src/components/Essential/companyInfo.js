import React,{Component,Fragment} from 'react'
import { Col,Card,CardBody } from 'reactstrap';
import getCompanyInfo from '../../Queries/GetCompanyInfo'
import {graphql,compose} from 'react-apollo'

class CompanyInfo extends Component{

    compInfo= ()=>{
        const {getCompanyInfo} = this.props

        if(getCompanyInfo.loading){
            return <div>loading</div>
        }
        else{
            const c = getCompanyInfo.getCompany
            let info;
            try{
            info = (
            <Fragment>
                <div>Company Name: {c.companyName}</div>
                <div>Industry: {c.industry}</div>
                <div>Owner: {c.owner}</div>
            </Fragment>)
            }
            catch(err){
                info = <div>loading</div>
            }
            return info
        }
    }

    render(){
        return (
            <Col md="6">
              <div style={{
                  marginTop: 10,
                  marginBottom: 10
              }}>
              <h3>Company Information</h3>
              <Card>
                 <CardBody>
                 {this.compInfo()}
                 </CardBody>
               </Card>
              </div>
            </Col>
        )
    }
}

export default compose(
    graphql(getCompanyInfo,{name: 'getCompanyInfo'})
)(CompanyInfo)