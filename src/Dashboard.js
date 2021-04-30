import React from "react";
import ToDoList from "./ToDoList";
import UserList from "./UserList";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect, Link, NavLink } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 bg-dark">
            <h5 style={{ color: "white" }}>Dashboard</h5>
            <h6 style={{ color: "white" }}>
              Status: {this.props.loggedInStatus}
            </h6>
            <NavBar handleLogout={this.props.handleLogout} />
          </div>
          <div className="col">
            <Switch>
              <Route path="/dashboard/todo" exact component={ToDoList} />
              <Route path="/dashboard/users" exact component={UserList} />
              <Route path="/dashboard/*"component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
