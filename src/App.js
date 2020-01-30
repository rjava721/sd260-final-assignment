import React, { Component } from 'react';
//import Header from './Header';
import StatusForm from './StatusForm';
//import Timeline from './Timeline';
import Post from './Post';

// import Comment from './Comment';
import './App.css';

// update your data
// you are rendering your stuff through setState which updates your data

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUser: {
        name: '',
        id: 5,
        avatarUrl: ''
      },
      // userData: ['jawad', 'Skywalker'],
      userData: [
        {
          userName: 'jawad',
          id: 0,
          avatarUrl: 'https://lh6.googleusercontent.com/proxy/U4Xg7pjLdOi-k39llZrQl4Rry7JDFN3Z1lwuUkXAh_SNbJXwnutlgqGb2jr9nSMttrJKYz-02nG-fQmXW8KB1rwbiA'
        },
        {
          userName: 'Skywalker',
          id: 1,
          avatarUrl: 'https://pdpcom.scdn1.secure.raxcdn.com/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/f/r/front_20-_20on_1_1.png'
        }
      ],
      user1Posts: [],
      user2Posts: [],
      formValue: '',
    }
  }

  // Header================================

  updateCurrentUser = (event) => {
    {/* inside of header, on change , when the name is selected, grab it with event.name and change state to it */}
    let userData = this.state.userData;
    let currentUserTempArray = this.state.currentUser;
    let selectedUser = event.target.value;

    // now we update state.currentUser with setState
    userData.map( user => {
      if (selectedUser === user.userName) {
        currentUserTempArray.name = selectedUser;
        currentUserTempArray.id = user.id;
        currentUserTempArray.avatarUrl = user.avatarUrl;

        this.setState ({ currentUser : currentUserTempArray });
        console.log(this.state.currentUser);
      }
    })
  }

  // StatusForm=================================

  handleFormSubmit = (event) => {
    // if the currentuser is 1 then push everything related to it in its own array
    // else currentuser is 2 then push all posts to user2statearray
    // then empty the box

    let user1Posts = this.state.user1Posts;
    let user2Posts = this.state.user2Posts;
    let formValue = this.state.formValue;
    let currentUser = this.state.currentUser;

    // prevent the page reload
    console.log('form submit function called');
    event.preventDefault();

    // take the state array and store the formtextcontnet inside of it.
    {if (currentUser.name === 'jawad') {
      user1Posts.push(formValue);
      console.log('were dealing with user1 : ' + user1Posts)
    } else {
      user2Posts.push(formValue);
      console.log('were dealing with user2 : ' + user2Posts);
    }}

    // empty the form input box
    this.setState({ formValue : '' });

    // then map through the array and then create a post inside the render function
    // the function gets called inside of the render
    
  }

  //call it renderPost
  createPost = () => {
    let user1Posts = this.state.user1Posts;
    let user2Posts = this.state.user2Posts;
    let currentUser = this.state.currentUser;

    if(currentUser.name === 'jawad') {
      return (this.state.user1Posts.map((post) => { return <Post currentUser={this.state.currentUser} formContent={post} userImage={this.state.currentUser.avatarUrl} /> }))
    } else {
      return (this.state.user2Posts.map((post) => { return <Post currentUser={this.state.currentUser} formContent={post} userImage={this.state.currentUser.avatarUrl} /> }))
    }

  }

  updateState = (event) => {
    this.setState({ formValue : event.target.value});
  }

  render() {
    return (
      <div className='main-container'>
        <Header currentUser={this.state.currentUser} userData={this.state.userData} onChange={this.updateCurrentUser}/>

        <StatusForm currentUser={this.state.currentUser} handleFormSubmit={this.handleFormSubmit} updateState={this.updateState} formValue={this.state.formValue} />

        {this.createPost()}
      </div>  
    )
  }

}

let Header = (props) => {
  let alluserData = props.userData;

  return (
    <div className='header'>
      <h2>Social News Feed</h2>
      <select className='user-select-list' onChange={props.onChange}>
        {alluserData.map(user => { return <option value={user.userName}>{user.userName}</option> })}
      </select>
    </div>
  )
}

export default App;
