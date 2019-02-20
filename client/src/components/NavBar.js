import React,{Component} from 'react';
import {NavLink as NLink,withRouter} from "react-router-dom"
import loggedIN from '../Store/Queries/AuthStatus'
import {compose, graphql} from 'react-apollo'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }


  toggle =()=> {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    console.log(this.props)
    const {location: {pathname}} = this.props
    const {status} = this.props
    
    // if user is not logged in, redirect them to signUp
    if(pathname === "/DashBoard" && !status){
        this.props.history.push("/SignIn")
    }
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NLink className="nav-link" to="/">Home</NLink>
              </NavItem>
              <NavItem>
                <NLink className="nav-link" to="/SignIn">Login</NLink>
              </NavItem>
              <NavItem>
                <NLink className="nav-link" to="/SignUp">Sign up</NLink>
              </NavItem>
              <NavItem>
                <NLink className="nav-link" to="/DashBoard">DashBoard</NLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(compose(
    graphql(loggedIN,{
      props: ({data: {loggedIn}}) => loggedIn
    }),
  )(NavBar))
