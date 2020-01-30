import React, { Component } from 'react';
import Timeline from './Timeline';
import App from './App';
import Comment from './Comment';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='post-container'>
          <div className='post-top-container'>
            <img src='https://lh6.googleusercontent.com/proxy/U4Xg7pjLdOi-k39llZrQl4Rry7JDFN3Z1lwuUkXAh_SNbJXwnutlgqGb2jr9nSMttrJKYz-02nG-fQmXW8KB1rwbiA' alt="prfl"/>

            <div className='post-user-info'>
              <h4>{this.props.currentUser}</h4>
              <h4>Time</h4>
            </div>

            <div className='post-top-msg'>
              <p>{this.props.formContent}</p>
            </div>
          </div>
              
          <div className='post-interaction-box'>
            <p>1 Like 1 comment</p>
            <button type='button'>Like</button>
            <button type='button'>Comment</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;