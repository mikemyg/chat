import React from "react";

const Message = props => {
  const { isMe, username, content } = props;
  return (
    <div className="Message">
      <p className={"chat-user " + (isMe ? "right-user" : "")}>
        {isMe ? username : "You"}
      </p>
      <div className={"content " + (isMe ? "right-content" : "")}>
        {content}
      </div>
    </div>
  );
};

export default Message;
