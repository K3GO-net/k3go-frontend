// CustomChatFeed.js
import React from "react";
import { OfferMessage } from "./OfferMessage";
import { Message } from "@chatscope/chat-ui-kit-react";

const CustomChatFeed = ({ messages }: any) => {
  const customMessages = messages.map((message: any) => {
    const isMine = message.sender === "me";
    const messageClass = `message ${isMine ? "my-message" : "their-message"}`;
    if (message.type === "offer") {
      // Use your custom OfferMessage component to render the message
      return (
        <li key={message.id} className={messageClass}>
          <OfferMessage {...message} />
        </li>
      );
    } else {
      // Use the default rendering for text messages
      return (
        <Message
          key={message.id}
          model={{
            message: message.text,
            sentTime: "" + new Date(),
            sender: message.sender === "me" ? "You" : "John Doe",
            direction: message.sender === "me" ? "outgoing" : "incoming",
            position: message.sender === "me" ? "single" : "single",
          }}
        />
      );
    }
  });

  return <ul className="message-list">{customMessages}</ul>;
};

export default CustomChatFeed;
