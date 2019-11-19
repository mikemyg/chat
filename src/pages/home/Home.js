import React, { useState } from "react";
import ChatWindow from "../../components/chat-window/ChatWindow";
import FriendList from "./friend-list/FriendList";

const Home = () => {
  const [chatOptions, setChatOptions] = useState({
    isOpen: false,
    id: "",
    name: ""
  });

  const startConversation = (id, name) => {
    setChatOptions({ isOpen: true, id: id, name: name });
  };

  const handleChatWindow = close => {
    setChatOptions({ ...chatOptions, isOpen: close });
  };
  return (
    <div className="Home">
      <FriendList startConversation={startConversation} />
      {chatOptions.isOpen ? (
        <ChatWindow handleWindow={handleChatWindow} chatOptions={chatOptions} />
      ) : null}
    </div>
  );
};
export default Home;
