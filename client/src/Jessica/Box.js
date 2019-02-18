import React, { Component } from 'react';

const styles = {
    backgroundColor: 'red',
    border: '1px solid #fff'

}



class Box extends Component {
  render() {
    return (
      <div style={{...styles, backgroudColor: this.props.color, color: this.props.color}} className={`col-md-${this.props.name}`}>
        {this.props.name}
      </div>

    );
  }
}

export default Box;
