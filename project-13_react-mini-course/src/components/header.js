import React, { Component } from "react";

class Header extends Component {
  state = {
    active: false,
    keywords: "Hello",
  };

  inputChangeHandler = (event) => {
    const value = event.target.value === "" ? false : true;
    this.setState({
      active: value,
      keywords: event.target.value,
    });
  };

  render() {
    return (
      <header style={{ background: `${this.state.active ? "red" : "blue"}` }}>
        <div className="logo">Logo</div>
        <input type="text" onChange={this.inputChangeHandler} />
      </header>
    );
  }
}
export default Header;
