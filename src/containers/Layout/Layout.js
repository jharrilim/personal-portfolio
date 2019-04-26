import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Preloader from "../../components/Preloader/Preloader";
import Landing from "../../components/Landing/Landing";

class Layout extends Component {
  state = {
    showLoader: true
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        showLoader: false
      });
    }, 2000);
  };
  render() {
    return (
      <Aux>
        <Preloader show={this.state.showLoader} />
        <Landing />
      </Aux>
    );
  }
}

export default Layout;
