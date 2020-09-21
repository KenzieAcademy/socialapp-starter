import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const style={
      height: '70px',
      width: '70px',
      float: 'left',
      padding: '4px'
    }
   
    return (
      <article>
           <img style={style} src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg" alt="dog" />
            <p>
                <strong>{this.props.comment.name}</strong>
                <br />
                {this.props.comment.comment}
            </p>
      </article>
    );
  }
}

export default Comment;