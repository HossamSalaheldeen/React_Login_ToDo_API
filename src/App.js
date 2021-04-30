import React from "react";
import ToDoList from "./ToDoList";
import Home from "./Home";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
    };
  }

  componentDidMount() {
    if (localStorage["loggedInStatus"]) {
      let loggedInStatus = localStorage.getItem("loggedInStatus");
      this.setState({ loggedInStatus: loggedInStatus });
    }
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: data,
    });
    this.saveToLocalStorage(data);
  };

  handleLogout = (data) => {
    this.setState({
      loggedInStatus: data,
    });
    this.saveToLocalStorage(data);
  };

  saveToLocalStorage = (data) => {
    localStorage.setItem("loggedInStatus", data);
  };

  render() {
    return (
      <BrowserRouter>
        {/* <ToDoList/> <ToDoList/> */}
        <Switch>
          <Route
            path="/home"
            exact
            render={(props) => (
              <Home
                handleLogin={this.handleLogin}
                loggedInStatus={this.state.loggedInStatus}
                {...props}
              />
            )}
          />
          {localStorage.getItem("loggedInStatus") === "LOGGED_IN"  &&(
            <Route
              path="/dashboard"
              render={(props) => (
                <Dashboard
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                  {...props}
                />
              )}
            />
          )}
          <Route path="/notfound" component={NotFound} />
          
          <Redirect to="/home" />
          
          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
