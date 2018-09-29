import React, { Component } from "react";

export default class Toggler extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };
  render() {
    const { children } = this.props;
    // just render the children function that is being passed as a child, passing it arguments.
    return children({ on: this.state.on, togglerFunc: this.toggle });
  }
}
