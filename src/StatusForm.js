import React, { Component } from 'react';
import App from './App';

class StatusForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // we have 2 functions
    // the first one blocks the submit 
    // the second one updates the value of the state with the
    // value of the textBox
    // then stores it in array
    // then maps through and then display posts
    // which then clear the box 
    return (
      <div className='status-box'>
        <h4>Create a post</h4>
        <span><h4>{this.props.currentUser.name}</h4></span>

        <form className='input-form' onSubmit={this.props.handleFormSubmit}> 
          <textarea 
          value={this.props.formValue}  
          onChange={this.props.updateStoredText} 
          placeholder='Write a post...' 
          className='status-post-box'/>
          
          <input 
          type='submit' 
          value='Post' 
          className='submit-button'>
          </input>
        </form>
      </div>
    )
  }
}

export default StatusForm;