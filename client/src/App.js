<<<<<<< HEAD
import React, { Component } from 'react';
import Form2 from './Jessica/Form2'


const styles = {
  margin: '0 20px',
  marginTop: '10px'
}


class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Form2/>
        </div>

=======
import React,{Component,Fragment} from 'react';
import Test from './test'
import NavBar from './components/NavBar/NavBar'

class App extends Component
{
  render()
  {
    return (
      <Fragment>
        <NavBar />
        <h1>Welcome</h1>
        <Test />
      </Fragment>
>>>>>>> master
    );
  }
}

export default App
