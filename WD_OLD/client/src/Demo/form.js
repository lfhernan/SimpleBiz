import React, { Component, Fragment } from 'react';

class Form extends Component {
  render() {
    return (
        <Fragment>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button onClick={this.props.toggleLogIn} className="btn btn-primary">log in</button>
            </form>
        </Fragment>
    );
  }
}

export default Form;