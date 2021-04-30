import React from "react";
import Login from "./Login";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSuccessfulAuth = (loggedInStatus) => {
    this.props.handleLogin(loggedInStatus);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div className="container">
        <h1 className="alert alert-primary">Home</h1>
        <h5 className="alert alert-info">Status: {this.props.loggedInStatus}</h5>
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}

export default Home;
