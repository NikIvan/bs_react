import React from 'react';
import update from 'react-addons-update';
import UserAdd from './UserAdd';
import UserList from './UserList';

class UserManager extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      users: [
        { name: 'Alex', id: 0 },
        { name: 'Ivan', id: 1 },
        { name: 'Nik', id: 2 }
      ]
    };

    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  addUser(name) {
    let id = this.state.users[this.state.users.length - 1].id + 1;
    let user = { name, id };

    console.dir(user.name);

    let newState = update(this.state, {
      users: {
        $push: [user]
      }
    });
    
    this.setState(newState);
  }

  deleteUser(id) {
    let users = this.state.users.filter((user) => {
      return user.id !== id;
    });

    this.setState({
      users: users
    });
  }

  render() {
    return (<div className="user-manager">
      <UserAdd addUser={ this.addUser } />
      <UserList users={ this.state.users } deleteUser={ this.deleteUser } />
    </div>
    );
  }
}

export default UserManager;