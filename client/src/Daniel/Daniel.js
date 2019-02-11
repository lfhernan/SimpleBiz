import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form'

class Daniel extends Component {

    constructor(props){
        super(props)

        this.state = {
            loggedIn: false
        }
    }

    toggleLogin = () =>{
        this.setState({
            loggedIn : !this.state.loggedIn
        })
    }

    render() {

        let form = !this.props.loggedIn ? <Form toggleLogin={this.toggleLogin}/> : ''

      return (
        <div>
            <Navbar loggedIn={this.state.loggedIn}/>
            {form}
        </div>    
      );
    }
  }

export default Daniel;