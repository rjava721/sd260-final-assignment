import React, { Component } from 'react';
import Post from './Post';
import App from './App';

class Timeline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // we can have an array of posts associated with each user
    // iterate through that array and for each post, return a post element
    return (
      <div className='all-posts-container'>
        <h3>Posts</h3>
        <Post />
      </div>
    )
  }
}

export default Timeline;  