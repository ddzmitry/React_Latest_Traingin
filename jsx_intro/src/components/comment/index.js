import React from "react";

const Comment = props => {
  let { author, time, comment, date, imgUrl } = props;
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt={date} src={imgUrl} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          {" "}
          <span className="date">{time}</span>
        </div>
        <div className="text"> {comment}</div>
        <div className="actions">
          {" "}
          <a href="/" className="reply">
            Reply
          </a>
        </div>
      </div>{" "}
    </div>
  );

};

export default Comment;
