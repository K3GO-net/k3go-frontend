"use client";

import {
  Avatar,
  Conversation,
  ConversationList,
} from "@chatscope/chat-ui-kit-react";
import { useChat } from "@chatscope/use-chat";

export const SideBarChat = () => {
  const { setActiveConversation, conversations, getUser, activeConversation } =
    useChat();

  console.log(conversations, "conversations");

  return (
    <div>
      <ConversationList>
        {conversations.map((c) => {
          // Helper for getting the data of the first participant
          const [avatar, name] = (() => {
            const participant =
              c.participants.length > 0 ? c.participants[0] : undefined;

            if (participant) {
              const user = getUser(participant.id);
              if (user) {
                return [<Avatar src={user.avatar} />, user.username];
              }
            }

            return [undefined, undefined];
          })();

          return (
            <Conversation
              key={c.id}
              name={name}
              info={
                c.draft
                  ? `Draft: ${c.draft
                      .replace(/<br>/g, "\n")
                      .replace(/&nbsp;/g, " ")}`
                  : ``
              }
              active={activeConversation?.id === c.id}
              unreadCnt={c.unreadCounter}
              onClick={() => setActiveConversation(c.id)}
            >
              {avatar}
            </Conversation>
          );
        })}
      </ConversationList>
    </div>
  );
};
