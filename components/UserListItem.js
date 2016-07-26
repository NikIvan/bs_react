import React from 'react';

class UserListItem extends React.Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser() {
    console.log('Removing user');
    this.props.deleteUser(this.props.id);
  }

  render() {
    return (<div className="user-list-item">
      <span>{this.props.name}</span>
      <button onClick={ this.deleteUser }>Delete</button>
    </div>
    );
  }
}

export default UserListItem;