import React, { useState, useEffect } from "react";
import {
  createPersonalConversation,
  sendMessage
  // getNewMessagesFromConversation
} from "../../api/api";
import { useAuth } from "../../context/auth";
import Message from "./message/Message";

const ChatWindow = props => {
  const [isMinimized, setIsMinimized] = useState(false);
  const { id, name } = props.chatOptions;
  const [messageText, setMessageText] = useState("");
  const [conversationData, setConversationData] = useState({
    id: "",
    lastMessageId: ""
  });
  const { user } = useAuth();
  const [messageList, setMessageList] = useState([]);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    createConveration();
    createGetMessagesInterval();
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  const createGetMessagesInterval = () => {
    let interval = setInterval(async () => {
      //Data Polling
    }, 1000);
    setTimer(interval);
  };

  const createConveration = async () => {
    let data = { users: `${id},${user.id}` };
    let response = await createPersonalConversation(data);
    setConversationData({ ...conversationData, id: response.id });
  };

  const handleEnterHit = e => {
    if (e.key === "Enter") {
      handleSendMessage(messageText);
    }
  };

  const handleSendMessage = async () => {
    let message = messageText;
    if (messageText !== "") {
      let data = { message: messageText, senderId: user.id };
      let lastMessageId = await sendMessage(conversationData.id, data);
      setConversationData({
        ...conversationData,
        lastMessageId: lastMessageId.id
      });

      setMessageText("");

      // let newMessages = await getNewMessagesFromConversation(
      //   conversationData.id,
      //   lastMessageId.id
      // );
      setMessageList([...messageList, { author: "you", content: message }]);
      let element = document.querySelector("#msg-content");
      element.scrollTo(0, document.querySelector("#msg-content").scrollHeight);
    }
  };

  const renderMessages = () => {
    return messageList.map((message, i) => {
      return (
        <Message
          key={i}
          isMe={true}
          username={message.author}
          content={message.content}
        />
      );
    });
  };

  return (
    <div className={"ChatWindow " + (isMinimized ? "minimize-window" : "")}>
      <div onClick={() => setIsMinimized(!isMinimized)} className="header">
        <p>{name}</p>
        <div
          onClick={e => {
            e.stopPropagation();
            props.handleWindow(false);
          }}
          className="x"
        >
          <span>X</span>
        </div>
      </div>
      <div
        id="msg-content"
        className={"message-container " + (isMinimized ? "minimize" : "")}
      >
        <div className="message-content">{renderMessages()}</div>
      </div>
      <div className={"input " + (isMinimized ? "minimize" : "")}>
        <input
          onChange={e => {
            setMessageText(e.target.value);
          }}
          value={messageText}
          onKeyDown={e => {
            handleEnterHit(e);
          }}
          placeholder="Type a message"
        />
        <button
          onClick={() => {
            handleSendMessage();
          }}
          className="send-btn"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
