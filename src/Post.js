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
        <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwirj-7h4KbnAhXHpZ4KHYeuBcgQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.onlinewebfonts.com%2Ficon%2F513928&psig=AOvVaw3PLCpl4ZwhF2_orwYfeUz7&ust=1580316737287677" alt="prfl"/>
          <div className='top'>
            <h4>Name</h4>
            <h4>Time</h4>
          </div>

          <div className='post-content'>
            <p>The post content goes here.</p>
            <p>1 Like 1 comment</p>
          </div>
          <div className='post-interaction-box'>
            <button type='button'>Like</button>
            <button type='button'>Comment</button>
          </div>
          <Comment />
        </div>
      </div>
    )
  }
}

export default Post;