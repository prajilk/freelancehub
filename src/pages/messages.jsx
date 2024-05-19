import DashboardNav from "../components/nav/dashboard-nav";
import MessageUserCard from "../components/messages/message-user-card";
import ChatArea from "../components/messages/chat-area";
import { useEffect, useState } from "react";
import NoData from "../components/no-data";
import { socket } from "../context/socket";
import { useChats } from "../api/get-chats";
import { useSearchParams } from "react-router-dom";

const Messages = () => {
  const clientId = useSearchParams()[0].get("clientId");

  const [activeUser, setActiveUser] = useState(clientId);
  const [showChatArea, setShowChatArea] = useState(true);
  const [newChats, setNewChats] = useState();

  const { data: chats } = useChats();

  useEffect(() => {
    setNewChats(chats);
  }, [chats]);

  useEffect(() => {
    socket.on("receive-message", ({ sender, message, timestamp }) => {
      const newObject = {
        sender,
        message,
        timestamp,
      };

      setNewChats((prev) =>
        prev?.map((chat) => {
          if (chat.receiver_details._id === sender) {
            return {
              ...chat,
              chats: [...chat.chats, newObject],
            };
          } else {
            return chat;
          }
        }),
      );
    });
  }, []);

  return (
    <>
      <DashboardNav />
      {newChats?.length > 0 ? (
        <div className="container-lg mt-5 grid h-[calc(100dvh_-_84px)] gap-10 md:mt-10 lg:grid-cols-3">
          <div
            className={`${showChatArea && activeUser !== null ? "hidden lg:block" : "block"}`}
          >
            <h1 className="text-2xl font-semibold md:text-3xl">Messages</h1>
            <div className="scrollbar-thin max-h-screen space-y-2 overflow-y-scroll px-1 py-5">
              {newChats?.map((chat, i) => (
                <MessageUserCard
                  active={chat.receiver_details._id === activeUser}
                  chat={chat}
                  setActiveUser={setActiveUser}
                  onClick={() => {
                    setActiveUser(chat.receiver_details._id);
                    setShowChatArea(true);
                  }}
                  key={i}
                />
              ))}
            </div>
          </div>
          <div
            className={`${showChatArea && activeUser !== null ? "flex" : "hidden lg:flex"} flex-col pb-5 lg:col-span-2`}
          >
            <ChatArea
              chats={newChats?.find(
                (chat) => chat.receiver_details._id === activeUser,
              )}
              setShowChatArea={setShowChatArea}
            />
          </div>
        </div>
      ) : (
        <div className="container-lg mt-5 md:mt-10">
          <h1 className="text-2xl font-semibold md:text-3xl">Messages</h1>
          <NoData>No Chats Found!</NoData>
        </div>
      )}
    </>
  );
};

export default Messages;
