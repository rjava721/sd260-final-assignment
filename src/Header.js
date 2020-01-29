import React, { Component } from 'react';
import App from './App';


//let's make header a function and the value of it will be our current user.
class Header extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='header'>
        <h2>Social News Feed</h2>
        <select className='user-select-list'>
          {this.props.users.map(user => { return <option value={user}>{user}</option>})}
        </select>
      </div>
    )
  }
}

export default Header;