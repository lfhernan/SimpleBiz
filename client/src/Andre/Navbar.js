import React, { Component } from 'react';

class Navbar extends Component {

    constructor(props){
        super(props)

    }

  render() {
    let navItems = this.props.loggedIn ?
    <ul className="navbar-nav">
        <li className="nav-item active">
            <a className="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a className="nav-link" href="#">Account</a>
        </li>
        <li class="nav-item">
            <button className="nav-link" onClick={this.props.toggleLogin} href="#">Logout</button>
        </li>
    </ul> : null
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Box World</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            {navItems}
        </div>
        </nav>
    );
  }
}

export default Navbar;