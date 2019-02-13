import React, { Component } from 'react';

const styles={
    backgroundColor: 'red',
    border: '1px solid #FFF',
    height: '100'
}


class Box extends Component {
  render() {
    return (
      <div style={{...styles, backgroundColor: this.props.backgroundColor, color: this.props.color}} className={'col-md-${this.props.width'}>
        {this.props.name}
      </div>
    );
  }
}

export default Box;
