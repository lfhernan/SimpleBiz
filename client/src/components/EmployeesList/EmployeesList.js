import React,{Component} from 'react'
import { ListGroup} from 'reactstrap';
import Employee from './Employee';

class EmployeesList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                {name:'John Cena', type:'Employee', imageurl:'https://www.halorecognition.com/wp-content/uploads/2015/09/cord-blog-300x300.jpg'},
                {name:'Cat Jhonsons', type:'Employee', imageurl:'https://images.ctfassets.net/mnc2gcng0j8q/4adL7Ufgdyu882WAYqYc2Y/ad27f3a0f295733864f674617b1d2193/why-happy-employees-real-key-happy-customers-jason-whitman.jpg'},
                {name:'Ron Smith', type:'Employee', imageurl:'https://10l7swlu5po2i2wbq43eapit-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/home-masthead-1.png'},
                {name:'Homer Simpsons', type:'Manager', imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBNtP-5jqcv0FEF4WG9cu5O6-SC8UHaVOilm_vfwjBs27bpYjXA'}
            ]
        } 
    }
    
    
    render() {
        return (
            <ListGroup>
                List of Employees
                {this.state.employees.map(employee => <Employee name={employee.name} type={employee.type} imageurl={employee.imageurl}/>)}
            </ListGroup>
        );
    }
}

export default EmployeesList


















