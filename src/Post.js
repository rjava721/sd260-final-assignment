import React, { Component } from 'react';
import App from './App';
import Comment from './Comment';
import moment from 'moment';// Dhruv suggested me to use this api

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='post-container'>
          <div className='post-top-container'>
            <img src={this.props.userImage} alt="prfl"/>

            <div className='post-user-info'>
              <h4>{this.props.currentUser.belongsTo}</h4>
              <h4>{moment().calendar()}</h4>
            </div>

            <div className='post-top-msg'>
              <p>{this.props.formContent}</p>
            </div>
          </div>
              
          <div className='post-interaction-box'>
            <p>{this.props.likesAmount} Likes {this.props.commentsAmount} Comments</p>
            {/* // when clicking on button
                // increment the amount of likes
                // we can have each post have an id
                // and each like button inside these posts have the same id
                //iterate through state array,
                //if index===button id
                //incrementcounter */}
            <button 
            type='button' 
            onClick={this.props.incrementLikes} 
            id={this.props.trackingNumber}>Like
            </button>

            <button 
            type='button' 
            onClick={this.props.createComment}>Comment
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;