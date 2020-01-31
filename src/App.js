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

      userData: [
        {
          userName: 'everyone',
          id: 5,
          avatarUrl: ''
        },
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

      everyUserPosts: [],

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
    let everyUserPosts = this.state.everyUserPosts;
   
    let formValue = this.state.formValue;
    let currentUser = this.state.currentUser;

    // prevent the page reload
    console.log('form submit function called');
    event.preventDefault();

    // take the state array and store the formtextcontnet inside of it.
    {if (currentUser.name === 'jawad') {
      everyUserPosts.push({
        "formValue" : formValue,
        "id" : 1,
        "belongsTo": 'jawad',
        "likesAmount" : 0,
        "commentsAmount" : 0,
        "userImage": 'https://lh6.googleusercontent.com/proxy/U4Xg7pjLdOi-k39llZrQl4Rry7JDFN3Z1lwuUkXAh_SNbJXwnutlgqGb2jr9nSMttrJKYz-02nG-fQmXW8KB1rwbiA' });
      
      console.log(everyUserPosts);
    } else {
      everyUserPosts.push({ 
        "formValue" : formValue, 
        "id" : 2, 
        "belongsTo": 'Skywalker', 
        "likesAmount" : 0, 
        "commentsAmount" : 0, 
        "userImage" : 'https://pdpcom.scdn1.secure.raxcdn.com/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/f/r/front_20-_20on_1_1.png' });

      console.log('everyUserPosts');
      console.log(everyUserPosts);
    }}

    // empty the form input box
    this.setState({ formValue : '' });

    // then map through the array and then create a post inside the render function
    // this function gets called inside of the render
    
  }// handleFormSubmit()

  //call it renderPost
  createPost = () => {
    let everyUserPosts = this.state.everyUserPosts;
    let currentUser = this.state.currentUser;

    if(currentUser.name === 'everyone') {
      return everyUserPosts.map(postObject => { 
        console.log('inside of createpost test everyone ' + postObject.belongsTo);
        return <Post 
          currentUser={postObject} 
          formContent={postObject.formValue} 
          userImage={postObject.userImage}
          likesAmount={postObject.likesAmount}
          commentsAmount={postObject.commentsAmount}
          incrementLikes={this.incrementLikes} />
          
        })
    }

    if(currentUser.name === 'jawad') {
      return (everyUserPosts.map(postObject => {
        if(postObject.id === 1) { 
          return <Post 
          currentUser={postObject} 
          formContent={postObject.formValue} 
          userImage={postObject.userImage}
          likesAmount={postObject.likesAmount}
          commentsAmount={postObject.commentsAmount}
          incrementLikes={this.incrementLikes} />

        }
      }))
    } else {
      return (everyUserPosts.map(postObject => {
        if(postObject.id === 2) {
          return <Post 
          currentUser={postObject} 
          formContent={postObject.formValue} 
          userImage={postObject.userImage}
          likesAmount={postObject.likesAmount}
          commentsAmount={postObject.commentsAmount}
          incrementLikes={this.incrementLikes} />
        }  
      }))
    }
  }
  
  incrementLikes = (e) => {
    console.log('this function is supposed to increment likes');
    console.log(e);
  }

  updateState = (event) => {
    this.setState({ formValue : event.target.value});
  }

  render() {
    return (
      <div className='main-container'>
        <Header 
        currentUser={this.state.currentUser} 
        userData={this.state.userData} 
        onChange={this.updateCurrentUser}/>

        <StatusForm 
        currentUser={this.state.currentUser} 
        handleFormSubmit={this.handleFormSubmit} 
        updateState={this.updateState} 
        formValue={this.state.formValue} />

        {this.createPost()}
      </div>  
    )
  }//render

}//class

let Header = (props) => {
  let alluserData = props.userData;
  return (
    <div className='header'>
      <h2>Social News Feed</h2>
      <select 
      className='user-select-list' 
      onChange={props.onChange}
      >
      {
      alluserData.map(user => { 
        return <option value={user.userName}>{user.userName}</option> 
      })
      }
      </select>
    </div>
  )
}

export default App;
