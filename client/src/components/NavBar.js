import React,{Component,Fragment} from 'react';
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
import {ApolloConsumer} from 'react-apollo'
import getCompanyInfo from '../Queries/GetCompanyInfo'
import AddEmployee from './AddEmployee/AddEmployee'

//apollo client object
let myClient
class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      companyName: 'Simple Biz'
    };
  }


  toggle =()=> {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout=() =>
    {
        localStorage.removeItem('token')
        myClient.resetStore()
    }
  
  render() {
    const {location: {pathname}} = this.props
    const {status, getCompanyInfo} = this.props
    
    // if user is not logged in, redirect them to signUp
    if(pathname === "/DashBoard" && !status){
        this.props.history.push("/SignIn")
    }
    // if user is logged in and is heading to a signed out route
    if((pathname === "/" || pathname === "/SignIn" || pathname === "/SignUp") && status){
      this.props.history.push("/DashBoard")
    }
    return (
      <div>
        <ApolloConsumer>{
                    client =>{myClient=client; return true}}
        </ApolloConsumer>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{this.state.companyName}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {
                (()=>(!getCompanyInfo.error ? 
                <Fragment>
                  <AddEmployee/>
                  <NavItem>
                    <NLink onClick={this.logout} className="nav-link" to="/">logout</NLink>
                  </NavItem>
                </Fragment>
                :
                <Fragment>
                    <NavItem>
                      <NLink className="nav-link" to="/">Home</NLink>
                    </NavItem>
                    <NavItem>
                      <NLink className="nav-link" to="/SignIn">Login</NLink>
                    </NavItem>
                    <NavItem>
                      <NLink className="nav-link" to="/SignUp">Sign up</NLink>
                    </NavItem>
                </Fragment>
                
                ))()
              }
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
    graphql(getCompanyInfo,{name: 'getCompanyInfo'})
  )(NavBar))
