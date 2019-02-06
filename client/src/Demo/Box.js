import React, { Component } from 'react';

const styles = {
    border: '1px solid #000',
    padding: 30,
    borderRadius: '20px'
}

class Box extends Component {
  
    constructor(props){
        super(props)
    }
  
  render() {
    return (
        <div style={styles} className="col-md-4">{this.props.name}</div>
    );
  }
}

export default Box;
