import React,{Component} from 'react'
import { Container,Row,Col,ListGroupItem } from 'reactstrap'


class EmployeeItem extends Component{
    render(){
        console.log(this.props)
        return (
            <ListGroupItem>
                <div style={{
                    display: 'inline-block',
                    float: 'left',
                    textAlign: 'center',
                    width: 45
                }}>
                    <img 
                    style={{borderRadius: '100'}}
                    src={this.props.info.imageurl} height="42" width="42"
                    alt="employee"
                    />
                    <br />
                    {this.props.info.name}
                </div>
            </ListGroupItem>
        )
    }
}

export default EmployeeItem