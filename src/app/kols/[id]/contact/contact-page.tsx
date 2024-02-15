"use client";

import { SideBarChat } from "@/src/components/Chat/SideBar";
import { DialogCreateOffer } from "@/src/components/Dialog/DialogCreateOffer";
import { DialogBuyKey } from "@/src/components/Profile-KOLs/DialogBuyKey";
import { Button } from "@/src/components/shared/ui/button";
import { useModal } from "@/src/hooks/useModal";
import {
  ChatContainer,
  ConversationHeader,
  MessageList,
  MessageInput,
  Message,
  Avatar,
  MainContainer,
  Sidebar,
  Search,
} from "@chatscope/chat-ui-kit-react";
import {
  AutoDraft,
  BasicStorage,
  ChatMessage,
  ChatProvider,
  IStorage,
  MessageContentType,
  UpdateState,
  useChat,
} from "@chatscope/use-chat";
import { ExampleChatService } from "@chatscope/use-chat/dist/examples";
import { nanoid } from "nanoid";

import { useState } from "react";

export const ContactPage = () => {
  const [messages, setMessages] = useState<any>([]);
  const [inputValue, setInputValue] = useState("");
  const {
    open: openBuyKey,
    openModal: openModalBuyKey,
    closeModal: closeModalBuyKey,
  } = useModal();
  const {
    open: openCreateOffer,
    openModal: openModalCreateOffer,
    closeModal: closeModalCreateOffer,
  } = useModal();

  // Create serviceFactory
  const serviceFactory = (storage: IStorage, updateState: UpdateState) => {
    return new ExampleChatService(storage, updateState);
  };

  const messageIdGenerator = (message: ChatMessage<MessageContentType>) =>
    nanoid();
  const groupIdGenerator = () => nanoid();

  const akaneStorage = new BasicStorage({
    groupIdGenerator,
    messageIdGenerator,
  });

  const handleSendMessage = () => {
    const newMessage: any = {
      id: messages.length + 1,
      text: inputValue,
      sender: "me",
    };
    setMessages([...messages, newMessage]);
    setInputValue("");
  };
  return (
    <div className="h-[800px] border border-solid border-[#f0f0f0] rounded-lg overflow-hidden my-10">
      <ChatProvider
        serviceFactory={serviceFactory}
        storage={akaneStorage}
        config={{
          typingThrottleTime: 250,
          typingDebounceTime: 900,
          debounceTyping: true,
          autoDraft: AutoDraft.Save | AutoDraft.Restore,
        }}
      >
        <MainContainer responsive>
          <Sidebar position="left">
            <Search placeholder="Search..." />
            <SideBarChat />
          </Sidebar>
          <ChatContainer>
            <ConversationHeader>
              <Avatar
                src="/example/avt.png"
                name="Henry"
                className="border-solid border-[#f0f0f0]"
              />
              <ConversationHeader.Content userName="Henry" info="Online" />
              <ConversationHeader.Actions>
                <div className="flex items-center gap-8">
                  <Button onClick={openModalBuyKey}>Buy Key</Button>
                  <Button onClick={openModalCreateOffer}>Create Offer</Button>
                </div>
              </ConversationHeader.Actions>
            </ConversationHeader>
            <MessageList>
              {messages.map((message: any) => (
                <Message
                  key={message.id}
                  model={{
                    message: message.text,
                    sentTime: "" + new Date(),
                    sender: message.sender === "me" ? "You" : "John Doe",
                    direction:
                      message.sender === "me" ? "outgoing" : "incoming",
                    position: message.sender === "me" ? "single" : "single",
                  }}
                />
              ))}
            </MessageList>
            <MessageInput
              value={inputValue}
              onChange={(e) => setInputValue(e)}
              onSend={handleSendMessage}
              placeholder="Type message here"
              attachButton={false}
              sendButton={true}
            />
          </ChatContainer>
        </MainContainer>
      </ChatProvider>
      <DialogBuyKey open={openBuyKey} closeModal={closeModalBuyKey} />
      <DialogCreateOffer
        open={openCreateOffer}
        closeModal={closeModalCreateOffer}
      />
    </div>
  );
};
