import React from 'react';

class UserAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.addUser = this.addUser.bind(this);
  }

  addUser() {
    let input = document.getElementById('userAddInput')
    let name = input.value.trim();
    if(name) {
      this.props.addUser(name);
      input.value = '';
    }
  }
  
  render() {
    return (<div className="user-add">
      <input id="userAddInput" type="text" placeholder="Enter user name"/>
      <button onClick={this.addUser}>Add</button>
    </div>
    );
  }
}

export default UserAdd;