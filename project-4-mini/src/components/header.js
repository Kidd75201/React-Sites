import React, { Component } from "react";
import "../css/styles.css";

// function one(name) {
//   console.log(name);
// }

// function two(name) {
//   one(name);
// }

// two("francis");

// consider as function one
class Header extends React.Component {
  state = {
    keywords: ""
  };

  inputChangeHandler = event => {
    this.setState({
      keywords: event.target.value
    });
  };

  render() {
    return (
      <header>
        <div className="logo">Logo</div>
        {/* consider as function two calling function one */}
        <input type="text" onChange={this.inputChangeHandler} />
      </header>
    );
  }
}

export default Header;
