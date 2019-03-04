import React, { Component } from 'react';
import Navbar from './Navbar'
import Form from './form'

class Andre extends Component {

    constructor(props){
        super(props)

        this.state = {
            loggedIn: false
        }
    }

    toggleLogin = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    } 

  render() {
    return (
      <div>
          <Navbar loggedIn = {this.state.loggedIn} toggleLogin = {this.toggleLogin}/>
          {!this.state.loggedIn ? <Form toggleLogin = {this.toggleLogin}/> : null}
          {/* <button onClick = {this.toggleLogin}>
              Login
          </button> */}
      </div>
    );
  }
}

export default Andre;
