import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='comment-container'> 
        <p>Comment content</p>
        <p><a>Like</a><a>Reply</a></p>
      </div>
    )
  }
}

export default Comment