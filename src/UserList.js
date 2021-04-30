import React from "react";
import UserItem from "./UserItem";
import loading from "./loading.gif"

class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    setTimeout(async () => {
      let res = await fetch("https://reqres.in/api/users?page=2", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      let resJson = await res.json();
      this.setState({ users: resJson.data, loading: false });
    }, 5000);
  }

  render() {
    return (
      <div className="container">
          <h1 className="alert alert-primary">Users List</h1>
        <div className="row">
          {!this.state.loading
            ? this.state.users.map((item) => {
                return <UserItem key={item.id} user={item} />;
              })
            : <img src={loading} style={{width:'100%'}} alt="loading"/>}
        </div>
      </div>
    );
  }
}

export default UserList;
