import React, { Component } from 'react';

class Navbar extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            loggedIn: false
        }
    }

  render() {

    let navItems = 
    <ul className="navbar-nav">
        <li className="nav-item active">
            <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Account</a>
        </li>
        <li className="nav-item">
            <button className="nav-link" onClick={this.props.toggleLogIn} href="#">Logout</button>
        </li>
    </ul>

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Box World</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            {navItems}
        </div>

        </nav>
    );
  }
}

export default Navbar;
