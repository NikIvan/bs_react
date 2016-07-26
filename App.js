import React from 'react'
import update from 'react-addons-update';
// import Utils from './utils/Utils'
import UserManager from './components/UserManager'

class App extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return <div>
      <UserManager />
    </div>
  }
}

export default App