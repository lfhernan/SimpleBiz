import React, { Component } from 'react';

const styles = {
    backgroundColor: '#000',
    border: '1px solid #ccc',
    marginTop: '1px',
    height: '400px'
}

class Box extends Component {

  render() {
      return(
      <div style={{...styles,background: this.props.color,color: this.props.textColor}} className={`col-md-${this.props.width}`}>{this.props.name}</div>
    );
  }
}

export default Box;