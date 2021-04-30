import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  setInputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = async (e) => {
    e.preventDefault();
    let loggedInStatus = "NOT_LOGGED_IN"
    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    let res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    let resJson = await res.json();
    //console.log(resJson.token);
    if (resJson.token) {
      //alert("Login success");
      loggedInStatus = "LOGGED_IN"
      this.props.handleSuccessfulAuth(loggedInStatus);
      
    } else {
      alert(resJson.error);
      loggedInStatus = "NOT_LOGGED_IN"
    }
  };

  

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email*</label>
            <input
              type="email"
              id="exampleInputEmail1"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.setInputValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword">Password*</label>
            <input
              type="password"
              id="exampleInputPassword"
              className="form-control"
              name="password"
              value={this.state.password}
              onChange={this.setInputValue}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.login}>
            Login
          </button>
        </form>

        <div class="mt-2 jumbotron text-center">
            <h4 class="display-4">Try Successful Login</h4>
            <hr class="my-4"/>
            <p class="h4">Email : eve.holt@reqres.in</p>
            <p class="h4">Password : cityslicka</p>
        </div>
      </div>
    );
  }
}

export default Login;
