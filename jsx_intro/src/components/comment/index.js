import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        let {author,time,comment,date,imgUrl} = props;
          this.state = {  
            author,
            time,
            comment,
            date,
            imgUrl
        };
    }
        
    render() { 
      let {author,time,comment,date,imgUrl} = this.state;
        return (         
      <div className="comment">
        <a className="avatar">
              <img src={imgUrl} />
        </a>
        <div className="content">
              <a className="author">{author}</a>
        <div className="metadata">
              <span className="date">{time}</span>
        </div>
              <div className="text">
                {comment}
        </div>
              <div className="actions">
        <a className="reply">Reply</a>
              </div>
            </div>
      </div>

         );
    }
}
 
export default Comment;