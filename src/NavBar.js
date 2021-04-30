import React from "react";
import { Link, NavLink } from "react-router-dom";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogoutClick = () => {
    let data = "NOT_LOGGED_IN";
    this.props.handleLogout(data);
  }

  render() {
    return (
      <div className="px-1 " id="sticky-sidebar">
        <nav className="nav flex-column flex-nowrap vh-100 overflow-auto p-2">
          <li className="nav-item">
            <NavLink to="/dashboard/todo" className="nav-link">
              Todo list
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/users" className="nav-link">
              User list
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" onClick={() => this.handleLogoutClick()}>
              Logout
            </NavLink>
          </li>
        </nav>
      </div>
    );
  }
}

export default NavBar;
