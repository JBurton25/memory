import React, {Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            
              <nav className="navbar fixed-top bg-primary">
                    <span className="navbar-brand mb-0 h1">Test your Memory!</span>
                    <span className="navbar-brand mb-0 h1">Score: {this.props.score}</span>
             </nav>
        );
    }
}

export default Navbar;