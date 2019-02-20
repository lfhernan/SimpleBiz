import React,{Component} from 'react'
import { Button } from 'reactstrap';


class AboutHome extends Component{
    render(){
        return (
                <div style={{backgroundColor: '#D3D3D3', margin: '10px'}}>
                    <center>
                        <h1>About</h1>
                        <p>Lorem Ipsum </p>
                    </center>
                    <div style={{backgroundColor: 'grey'}}>
                 <center>
                    <Button color="grey">secondary</Button>{' '}
                 </center>
             </div>    
                </div>                            
        )
    }
}

export default AboutHome