import React, { Component } from 'react';
import App from './App';

class Status extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='status-box'>
        <h4>Create a post</h4>
        <form className='input-form'>
          <span><h4>{this.props.currentUser}</h4></span>
          <input type='text' placeholder='Write a post...' className='status-post-box'></input>
          <input type='button' value='Post' className='submit-button' onClick={this.props.onClick}></input>
          </form>
      </div>

    )
  }
}

export default Status;