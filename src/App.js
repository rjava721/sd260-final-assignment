import React, { Component } from 'react';
//import Header from './Header';
import StatusForm from './StatusForm';
//import Timeline from './Timeline';
import Post from './Post';

import Comment from './Comment';
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

      createdOrder: 0
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
        "createdOrder" : this.state.createdOrder, 
        "commentsAmount" : 0,
        "userImage": 'https://lh6.googleusercontent.com/proxy/U4Xg7pjLdOi-k39llZrQl4Rry7JDFN3Z1lwuUkXAh_SNbJXwnutlgqGb2jr9nSMttrJKYz-02nG-fQmXW8KB1rwbiA' });
      
      console.log(everyUserPosts);
    } else {
      everyUserPosts.push({ 
        "formValue" : formValue, 
        "id" : 2, 
        "belongsTo": 'Skywalker', 
        "likesAmount" : 0,
        "createdOrder" : this.state.createdOrder, 
        "commentsAmount" : 0, 
        "userImage" : 'https://pdpcom.scdn1.secure.raxcdn.com/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/f/r/front_20-_20on_1_1.png' });

      console.log('everyUserPosts');
      console.log(everyUserPosts);
    }}

    // empty the form input box
    this.setState({ formValue : '' });
    
    // when clicking on the button, find the post order in the state array with the button's id and increment the likeAmount
    this.setState({ createdOrder: this.state.createdOrder++});

  }// handleFormSubmit()

  //call it renderPost
  createPost = () => {
    let everyUserPosts = this.state.everyUserPosts;
    let currentUser = this.state.currentUser;
    

    if(currentUser.name === 'everyone') {
      
      return everyUserPosts.map(postObject => { 
        console.log('inside of createpost test everyone ' + postObject.belongsTo);
        // call a function that updates the createdorder state
        return <Post 
          currentUser={postObject} 
          formContent={postObject.formValue} 
          userImage={postObject.userImage}
          likesAmount={postObject.likesAmount}
          commentsAmount={postObject.commentsAmount}
          incrementLikes={this.incrementLikes} 
          trackingNumber={this.state.createdOrder} 
          createComment={this.createComment} />
          
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
          incrementLikes={this.incrementLikes}
          trackingNumber={this.state.createdOrder}
          createComment={this.createComment} />

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
          incrementLikes={this.incrementLikes}
          trackingNumber={this.state.createdOrder}
          createComment={this.createComment} />
        }  
      }))
    }
  }

  //Posts================================================
  createComment = () => {
    return <Comment />;
  }
  incrementLikes = (event) => {

    // you duplicate the state array, 
    // update the duplicated array
    // set state the state array to the duplicate array
    console.log('this function is supposed to increment likes');
    console.log(event.target.id);
    
    let tempArray = this.state.everyUserPosts;

    tempArray.forEach( (post, index) => {
      if (index === parseInt(event.target.id)) {
        tempArray[index].likesAmount++;
      } else {
        console.log('they do not match ' + index + event.target.id);
      }
    })

    this.setState({everyUserPosts: tempArray});
    console.log(this.state.everyUserPosts)
  }

  updateStoredText = (event) => {
    let currentInputBoxText = event.target.value;
    this.setState({ formValue : currentInputBoxText});
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
        updateStoredText={this.updateStoredText} 
        formValue={this.state.formValue} />

        {/* 5 static posts */}
        {this.createPost()}
        {this.createComment()}
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
