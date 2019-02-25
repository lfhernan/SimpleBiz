import React,{Component} from 'react'
import { Jumbotron, Button } from 'reactstrap';


class AboutHome extends Component{
    render(){
        return (
                <div>
                    <Jumbotron style={{background: 'none'}}>
                    
                        <h1 className="display-3">About</h1>
                        <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Duis condimentum justo ut tellus convallis, vitae sollicitudin eros euismod. 
                            Nulla vitae dignissim mauris, interdum posuere quam. 
                            In tristique tellus lectus, in sodales sapien pellentesque in. 
                            Pellentesque quis dui eu lorem dapibus dictum a dictum elit. 
                            Curabitur massa ligula, maximus id lobortis eget, convallis ut ipsum. 
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur 
                            ridiculus mus. Nam scelerisque turpis in erat varius, sed ultricies 
                            arcu maximus. Sed odio lectus, condimentum non augue id, consectetur 
                            scelerisque lorem. Suspendisse finibus justo eget felis dapibus ultrices. 
                            Sed eleifend purus augue, ut fermentum metus efficitur eu. Aliquam porttitor 
                            pretium lectus, non scelerisque neque auctor at. Sed ac pulvinar purus. </p>
                        <hr className="my-2" />
                        <p>
                            <a color= 'white' href='http://localhost:3000/SignUp'><Button color = 'success'> Get Started Now!</Button></a>{''}
                        </p>
                    </Jumbotron>
                </div>                              
        )
    }
}

export default AboutHome