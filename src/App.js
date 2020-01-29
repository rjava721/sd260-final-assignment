import React, { Component } from 'react';
//import Header from './Header';
import Status from './Status';
import Timeline from './Timeline';
import Post from './Post';

// import Comment from './Comment';
import './App.css';

// current functionality objectives
// link my current user to my post
// be able to post an item according to each user

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUser: '',
      users : ['jawad', 'Skywalker'],
      userPosts : []
    }
  }

  createPost = (event) => {
    console.log('hi');
  }

  updateCurrentUser = (event) => {
            {/* inside of header, on change , when the name is selected, grab it with event.name and change state to it */}

    console.log(event.target.value)
  }

  render() {
    // inside of Header, we need to grab the value of the select tag 
    // in order to set our currentUser
    // => we change Header from class to function

    return (
      <div className='main-container'>
        <Header currentUser={this.state.currentUser} users={this.state.users} onClick={this.updateCurrentUser}/>
        <Status currentUser={this.state.currentUser} users={this.state.users} onClick={this.createPost}/>
        <Timeline />
      </div>
      
    )
  }
}

let Header = (props) => {
  let allUsers = props.users;
  let currentUser = props.currentUser;

  return (
    <div className='header'>
      <h2>Social News Feed</h2>
      <select className='user-select-list'>
        {
        allUsers.map(user => { return <option value={user}>{user}</option>})
        }
      </select>
    </div>
  )
}

export default App;
