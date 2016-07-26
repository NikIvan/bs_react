import React from 'react';
import UserListItem from './UserListItem';

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.eachUser = this.eachUser.bind(this);
  }

  eachUser(user) {
    return <UserListItem key={user.id} id={user.id} name={user.name} deleteUser={ this.props.deleteUser } />
  }

  render() {
    let users = this.props.users;

    return (<div className="user-list">
      { users.map(this.eachUser) }
    </div>
    );
  }
}

export default UserList;