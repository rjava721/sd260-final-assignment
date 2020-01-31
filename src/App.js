import React, { Component } from 'react';
import StatusForm from './StatusForm';
import Post from './Post';
import Comment from './Comment';
import './App.css';

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
          userName: 'everyone',// placeholder for selecting every post
          id: 5,//not necessary
          avatarUrl: ''// not necessary
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
      postId: 0
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
  updateStoredText = (event) => {
    let currentInputBoxText = event.target.value;
    this.setState({ formValue : currentInputBoxText});
  }
  
  handleFormSubmit = (event) => {
    // grabs the text from box, creates an object with extra details, pushes it inside allUserPosts state array
    // then empties the input box

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
        "postId" : this.state.postId, 
        "commentsAmount" : 0,
        "userImage": 'https://lh6.googleusercontent.com/proxy/U4Xg7pjLdOi-k39llZrQl4Rry7JDFN3Z1lwuUkXAh_SNbJXwnutlgqGb2jr9nSMttrJKYz-02nG-fQmXW8KB1rwbiA' 
      });
      
      console.log(everyUserPosts);
    } else {
      everyUserPosts.push({ 
        "formValue" : formValue, 
        "id" : 2, 
        "belongsTo": 'Skywalker', 
        "likesAmount" : 0,
        "postId" : this.state.postId, 
        "commentsAmount" : 0, 
        "userImage" : 'https://pdpcom.scdn1.secure.raxcdn.com/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/f/r/front_20-_20on_1_1.png' 
      });

      console.log('everyUserPosts');
      console.log(everyUserPosts);
    }}

    // empty the form input box
    this.setState({ formValue: '' });
    
    console.log('before incrementing postId ' + this.state.postId);
    this.setState({ postId: this.state.postId++});
    console.log('just incremented postID ' + this.state.postId)

  }// handleFormSubmit()

  //Renders the post
  createPost = () => {
    let everyUserPosts = this.state.everyUserPosts;
    let currentUser = this.state.currentUser;
    
    if(currentUser.name === 'everyone') {
      return everyUserPosts.map(postObject => { 
        console.log('inside of createpost test everyone ' + postObject.belongsTo);
        // call a function that updates the postId state
        return <Post 
          currentUser={postObject} 
          formContent={postObject.formValue} 
          userImage={postObject.userImage}
          likesAmount={postObject.likesAmount}
          commentsAmount={postObject.commentsAmount}
          incrementLikes={this.incrementLikes} 
          trackingNumber={this.state.postId} 
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
          trackingNumber={this.state.postId}
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
          trackingNumber={this.state.postId}
          createComment={this.createComment} />
        }  
      }))
    }
  }

  //Posts================================================
  createComment = () => {
    console.log('this function is for creating a comment')
    return <Comment />;
  }

  incrementLikes = (event) => {

    // duplicate the state array, 
    // update the duplicated array
    // set state the state array to the duplicate array
    console.log('this function is supposed to increment likes');
    console.log(event.target.id);
    
    let tempArray = this.state.everyUserPosts;

    tempArray.forEach( (post, index) => {
      if (post.postId === parseInt(event.target.id)) {
        post.likesAmount++;
      } else {
        console.log('they do not match ' + post.id + event.target.id);
      }
    })

    this.setState({everyUserPosts: tempArray});
    console.log(this.state.everyUserPosts)
  }

  render() {
    return (
      <div className='main-container'>
        <Header 
        currentUser={this.state.currentUser} 
        userData={this.state.userData} 
        updateCurrentUser={this.updateCurrentUser}/>

        <StatusForm 
        currentUser={this.state.currentUser} 
        handleFormSubmit={this.handleFormSubmit} 
        updateStoredText={this.updateStoredText} 
        formValue={this.state.formValue} />

        {/* 5 static posts */}
        {/* <Post 
          currentUser="jawad" 
          formContent="static post 1" 
          userImage="https://lh6.googleusercontent.com/proxy/U4Xg7pjLdOi-k39llZrQl4Rry7JDFN3Z1lwuUkXAh_SNbJXwnutlgqGb2jr9nSMttrJKYz-02nG-fQmXW8KB1rwbiA"
          likesAmount='5'
          commentsAmount= '0'
          incrementLikes={this.incrementLikes} 
          trackingNumber={this.state.postId} 
          createComment={this.createComment} />
          <Comment />
        <Post 
          currentUser="jawad" 
          formContent="static post 2" 
          userImage="https://lh6.googleusercontent.com/proxy/U4Xg7pjLdOi-k39llZrQl4Rry7JDFN3Z1lwuUkXAh_SNbJXwnutlgqGb2jr9nSMttrJKYz-02nG-fQmXW8KB1rwbiA"
          likesAmount='5'
          commentsAmount= '4'
          incrementLikes={this.incrementLikes} 
          trackingNumber={this.state.postId} 
          createComment={this.createComment} />
          <Comment />
        <Post 
          currentUser="Skywalker" 
          formContent="static post 3" 
          userImage="https://pdpcom.scdn1.secure.raxcdn.com/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/f/r/front_20-_20on_1_1.png"
          likesAmount='5'
          commentsAmount= '3'
          incrementLikes={this.incrementLikes} 
          trackingNumber={this.state.postId} 
          createComment={this.createComment} />
          <Comment />
        <Post 
          currentUser="Skywalker" 
          formContent="static post 4" 
          userImage="https://pdpcom.scdn1.secure.raxcdn.com/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/f/r/front_20-_20on_1_1.png"
          likesAmount='6'
          commentsAmount= '2'
          incrementLikes={this.incrementLikes} 
          trackingNumber={this.state.postId} 
          createComment={this.createComment} />
          <Comment />
        <Post 
          currentUser="jawad" 
          formContent="static post 5" 
          userImage="https://pdpcom.scdn1.secure.raxcdn.com/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/f/r/front_20-_20on_1_1.png"
          likesAmount='9'
          commentsAmount= '3'
          incrementLikes={this.incrementLikes} 
          trackingNumber={this.state.postId} 
          createComment={this.createComment} />
          <Comment /> */}

        {this.createPost()}
      </div>  
    )//return
  }//render
}//class

let Header = (props) => {
  let alluserData = props.userData;
  return (
    <div className='header'>
      <h2>Social News Feed</h2>
      <select 
      className='user-select-list' 
      onChange={props.updateCurrentUser}
      >
      {alluserData
      .map(user => { 
        return <option 
        value={user.userName}>{user.userName}</option> 
      })}
      </select>
    </div>
  )
}

export default App;
