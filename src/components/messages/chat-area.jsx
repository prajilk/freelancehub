import { ArrowLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useEffect, useRef, useState } from "react";
import { socket } from "../../context/socket";
import { PulseLoader } from "react-spinners";
import { motion } from "framer-motion";
import { formatTimeFromISOString } from "../../lib/utils";
import { useSelector } from "react-redux";
import ChatForm from "../forms/chat";

const ChatArea = ({ chats, setShowChatArea }) => {
  const messageEndRef = useRef();
  const [newChats, setNewChats] = useState(chats?.chats || []);
  const [isOnline, setIsOnline] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [messageEndRef.current, newChats, socket]);

  useEffect(() => {
    setNewChats(chats?.chats);
  }, [chats]);

  const sendMsg = (values) => {
    const msg = values.message;
    // Send message to server
    socket.emit(
      "send-message",
      { message: msg, timestamp: new Date() },
      user._id,
      chats?.receiver_details._id,
    );

    const newObject = {
      sender: user._id,
      message: msg,
      timestamp: new Date().toISOString(),
    };

    setNewChats((prev) => [...prev, newObject]);
  };

  useEffect(() => {
    if (chats?.receiver_details) {
      socket.emit("check-online", chats.receiver_details._id, (response) => {
        setIsOnline(response);
      });
    }
  }, [chats, socket]);

  const sendTyping = () => {
    socket.emit("sendTyping", user?._id, chats?.receiver_details._id);
  };

  const stopTyping = () => {
    socket.emit("stopTyping", user?._id, chats?.receiver_details._id);
  };

  useEffect(() => {
    socket.on("sendTyping", (receiver) => {
      if (receiver === chats?.receiver_details._id) {
        setIsTyping(true);
      }
    });
    socket.on("stopTyping", (receiver) => {
      if (receiver === chats?.receiver_details._id) {
        setIsTyping(false);
      }
    });
  }, [socket, chats]);

  const getUser = (chats, id) => {
    if (chats?.receiver_details?._id === id) {
      return chats.receiver_details;
    } else {
      return {
        firstName: user.firstName,
        lastName: user.lastName,
        image: user.image,
      };
    }
  };

  return (
    <>
      {chats ? (
        <>
          <div className="flex items-center gap-4">
            <ArrowLeft
              className="cursor-pointer lg:hidden"
              size={20}
              onClick={() => setShowChatArea(false)}
            />
            <div className="relative">
              <Avatar className="ring-2 ring-zinc-300 ring-offset-1">
                <AvatarImage
                  src={chats.receiver_details.image}
                  alt="Profile"
                  className="object-cover"
                />
                <AvatarFallback>
                  {chats.receiver_details.firstName[0]}
                </AvatarFallback>
              </Avatar>
              <div
                className={`${isOnline ? "bg-primary" : "bg-zinc-400"} absolute bottom-0 right-0 size-3 rounded-full border-2 border-white`}
              ></div>
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold">
                {chats.receiver_details.firstName}{" "}
                {chats.receiver_details.lastName}
              </h2>
              <p className="text-xs">{isOnline ? "Online" : "Offline"}</p>
            </div>
          </div>

          {/* Message container */}
          <div className="scrollbar-thin mb-3 mt-5 flex max-h-[calc(100dvh-256px)] flex-1 flex-col gap-5 overflow-y-scroll rounded-2xl border border-zinc-200/50 bg-gradient-to-t from-zinc-100 to-zinc-50 p-3 lg:h-[25rem] lg:flex-none">
            {newChats?.map((chat, i) => (
              <div className="items-tart flex gap-3 first:mt-auto" key={i}>
                <Avatar className="relative size-7 ring-2 ring-zinc-300 ring-offset-1">
                  <AvatarImage
                    src={getUser(chats, chat.sender).image}
                    alt="Profile"
                    className="object-cover"
                  />
                  <AvatarFallback>
                    {getUser(chats, chat.sender).firstName[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex min-w-40 max-w-[75%] flex-col">
                  <h2 className="font-semibold">
                    {getUser(chats, chat.sender).firstName}{" "}
                    {getUser(chats, chat.sender).lastName}{" "}
                    <span className="text-xs text-zinc-400">
                      {formatTimeFromISOString(chat.timestamp)}
                    </span>
                  </h2>
                  <p>{chat.message}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-start gap-3"
              >
                <Avatar className="relative size-7 ring-2 ring-zinc-300 ring-offset-1">
                  <AvatarImage
                    src={chats?.receiver_details.image}
                    alt="Profile"
                    className="object-cover"
                  />
                  <AvatarFallback>
                    {chats?.receiver_details.firstName[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex min-w-40 max-w-[75%] flex-col">
                  <h2 className="font-semibold">
                    {chats?.receiver_details.firstName}{" "}
                    {chats?.receiver_details.lastName}{" "}
                  </h2>
                  <div className="mt-2">
                    <PulseLoader size={8} color="#258D60" />
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messageEndRef} />
          </div>
          <ChatForm
            sendTyping={sendTyping}
            stopTyping={stopTyping}
            sendMsg={sendMsg}
          />
        </>
      ) : (
        <div className="flex h-[70dvh] items-center justify-center lg:col-span-2">
          <img src="/work_chat.svg" className="size-2/4" />
        </div>
      )}
    </>
  );
};

export default ChatArea;
