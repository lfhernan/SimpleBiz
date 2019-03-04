import React, { Component, Fragment } from 'react';



class Form extends Component {
  render() {
    return (
        <Fragment>
            <input type="name"></input>
            <button onClick = {this.props.toggleLogin}>Login</button>            
        </Fragment>
    );
  }
}

export default Form;
