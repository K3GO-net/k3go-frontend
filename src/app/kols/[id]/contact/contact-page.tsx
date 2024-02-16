"use client";

import CustomChatFeed from "@/src/components/Chat/CustomChatFeed";
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
} from "@chatscope/use-chat";
import { ExampleChatService } from "@chatscope/use-chat/dist/examples";
import { nanoid } from "nanoid";

import { useState } from "react";

import moment from "moment";

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

  const [budget, setBudget] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<Date>();

  const deadline = moment(date).fromNow();

  const handleChangeBudget = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (isNaN(Number(value))) return;
    const valueAsNumber = Number(value);
    setBudget(valueAsNumber);
  };

  const handleSelectCurrency = (value: string) => {
    setCurrency(value);
  };

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setDescription(value);
  };

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
      id: String(Date.now() + Math.floor(Math.random() * 1000)),
      text: inputValue,
      sender: "me",
    };
    setMessages((oldValue: any) => {
      const newValue = [...oldValue]
      newValue.push(newMessage)
      return newValue;
    });
    setInputValue("");
  };

  const handleSendMessageOffer = () => {
    const newMessage: any = {
      id: String(Date.now() + Math.floor(Math.random() * 1000)),
      type: "offer",
      budget: budget,
      currency: currency,
      description: description,
      deadline: deadline,
    };
    setMessages((oldValue: any) => {
      const newValue = [...oldValue]
        newValue.push(newMessage)
        return newValue;
    });
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
              <CustomChatFeed messages={messages} />
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
        description={description}
        handleChangeDescription={handleChangeDescription}
        budget={budget}
        handleChangeBudget={handleChangeBudget}
        currency={currency}
        handleSelectCurrency={handleSelectCurrency}
        handleSendMessageOffer={handleSendMessageOffer}
        setDate={setDate}
        date={date}
      />
    </div>
  );
};
