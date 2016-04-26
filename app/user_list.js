import React, { Component } from 'react';

class UserList extends Component {
  displayHeading() {
    if (this.props.users.length > 0) {
      return (<h1>Lots of Users</h1>);
    } else {
      return (<h1>No Users</h1>);
    }
  }
  displayUserList() {
    return this.props.users.map((user) => {
      return (<li key={user}>{user}</li>);
    });
  }
  render() {
    return (
      <div>
        {this.displayHeading()}
        <ul>
          {this.displayUserList()}
        </ul>
      </div>
    );
  }
}
UserList.propTypes = {
  users: React.PropTypes.array.isRequired
};

export default UserList;
