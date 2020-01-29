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
      currentUser: 'Jawad',
      users: ['jawad', 'Skywalker'],

      userPosts: [],
      formValue: '',
    }
  }

  // Header================================

  updateCurrentUser = (event) => {
    {/* inside of header, on change , when the name is selected, grab it with event.name and change state to it */}
    console.log('value of this.state.currentUser before this.setState' + this.state.currentUser);
    let selectedUser = event.target.value;
    console.log('the select tag has updated, called props.onChange which called updateCurrentUser')
    this.setState({ currentUser : selectedUser});
    console.log('value of this.state.currentUser after this.setState ' + this.state.currentUser);
  }

  // StatusForm

  handleFormSubmit = (event) => {
    let userPosts = this.state.userPosts;
    let formValue = this.state.formValue;

    // prevent the page reload
    console.log('form submit function called');
    event.preventDefault();

    // take the state array and store the formtextcontnet inside of it.
    userPosts.push(formValue);
    console.log(userPosts);

    // empty the form input box
    this.setState({ formValue : '' });

    // then map through the array and then create a post inside the render function
    // the function gets called inside of the render
    
  }

  //call it renderPost
  createPost = () => {
    return (this.state.userPosts.map((post) => { return <Post currentUser={this.state.currentUser} formContent={post} /> }))
  }

  updateState = (event) => {
    // update the state
    // push the texcontent inside of a state array that is meant to store all posts
    // and clear the input box
    // map through the array
    // create a new post for each array element
    
    this.setState({ formValue : event.target.value});
    // this.setState({ formValue: ''});
  }

  render() {
    
    return (
      <div className='main-container'>
        <Header currentUser={this.state.currentUser} users={this.state.users} onChange={this.updateCurrentUser}/>
        <StatusForm currentUser={this.state.currentUser} handleFormSubmit={this.handleFormSubmit} updateState={this.updateState} formValue={this.state.formValue} />
        {this.createPost()}
      </div>  
    )
  }

}

let Header = (props) => {
  let allUsers = props.users;

  return (
    <div className='header'>
      <h2>Social News Feed</h2>
      <select className='user-select-list' onChange={props.onChange}>
        {allUsers.map(user => { return <option value={user}>{user}</option> })}
      </select>
    </div>
  )
}

export default App;
