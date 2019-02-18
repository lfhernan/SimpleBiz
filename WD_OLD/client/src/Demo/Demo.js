import React, { Fragment,Component } from 'react';
import Nav from './Nav'
import Form from './form'
import BoxForm from './BoxForm';
class Demo extends Component {

    constructor(props){
        super(props)

        this.state = {
            loggedIn: false
        }
    }


    toggleLogIn = (e)=>{
        e.preventDefault()
        this.setState({
            loggedIn: !this.state.loggedIn
        })
        console.log('hello')
    }
  render() {
    return (
      <Fragment>
          <Nav 
            loggedIn={this.state.loggedIn}
            toggleLogIn={this.toggleLogIn}
           />
          {!this.state.loggedIn ?
            <Form 
            toggleLogIn={this.toggleLogIn}
            />: <BoxForm />}
            
      </Fragment>
    );
  }
}

export default Demo;