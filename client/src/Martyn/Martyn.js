import React, { Component } from 'react';
import Navbar from './Navbar';
class Martyn extends Component {

  
  constructor(props)
  {
    super();

    this.state = {
      name: 'Alex'
    }
  }


  render() {
    return (
      <div>
          <Navbar />
      </div>
    );
  }
}

export default Martyn;
