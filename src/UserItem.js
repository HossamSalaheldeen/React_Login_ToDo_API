import React from "react";
class UserItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="col col-12 col-md-6 col-lg-4">
        <div className="card mt-4" >
          <img
            className="card-img-top"
            src={this.props.user.avatar}
            alt="User image"
          />
          <div className="card-body">
            <h5 className="card-title">
              {this.props.user.first_name} {this.props.user.last_name}
            </h5>
            <p className="card-text">{this.props.user.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserItem;
