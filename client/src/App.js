import React,{Component,Fragment} from 'react';
import {graphql,compose} from 'react-apollo'
import loggedIN from './Store/Queries/AuthStatus'
import logIn from './Store/Mutations/logIn'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import DashBoard from './Pages/DashBoard'
import Error from './Pages/Error'
 
class App extends Component
{
  //Check if use is logged in when component mounts
  componentWillMount(){
    const status = !!localStorage.getItem('token')
    if(status)
      this.props.logIn()
  }
  
  render()
  {
    return (
      <BrowserRouter>
        <Fragment>
            <NavBar />
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/SignIn" component={Login} />
                  <Route exact path="/SignUp" component={SignUp} />
                  <Route exact path="/DashBoard" component={DashBoard} />
                  <Route component={Error} />
              </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default compose(
  graphql(logIn,{name:'logIn'}),
  graphql(loggedIN,{
    props: ({data: {loggedIn}}) => loggedIn
  }),
)(App)