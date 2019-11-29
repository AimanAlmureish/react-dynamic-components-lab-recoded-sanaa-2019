//your code here
<<<<<<< HEAD
import React, { Component } from 'react'

export default class Comment extends Component{
    render(){
        return(<div className="comment">{this.props.commentText}</div>);
    }
    
}
=======

import React, { Component } from 'react'

class Comment extends Component{
  render(){
      return (
        this.props.commentText
      );
  }
}

export default Comment;
>>>>>>> e2e9ea82d7c89f9f3dfe0ec927dcd6283465ecc6
