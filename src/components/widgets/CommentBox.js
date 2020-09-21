import React, { Component } from 'react';

class CommentBox extends Component {
  constructor() {
    super();
    this.addComment = this.addComment.bind(this);
  }


  addComment(e) {
    // Prevent the default behaviour of form submit
    e.preventDefault();
  
    // Get the value of the comment box
    // and make sure it not some empty strings
    const comment = e.target.elements.comment.value.trim();
    const name = e.target.elements.name.value.trim();
  
    // Make sure name and comment boxes are filled
    if (name && comment) {
      const commentObject = { name, comment };
  
      this.props.handleAddComment(commentObject);
  
    
  
      // Clear input fields
      e.target.elements.comment.value = '';
      e.target.elements.name.value = '';
    }
  }
  render() {
    return (
      <div>
        <h1>Kindly leave your thoughts below</h1>
        <form onSubmit={this.addComment}>
          <div>
            <div>
              <input type="text" className="input" name="name" placeholder="Your name"/>
            </div>
          </div>
          <div>
            <div>
              <textarea className="textarea" name="comment" placeholder="Add a comment"></textarea>
            </div>
          </div>
          <div>
            <div>
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentBox;