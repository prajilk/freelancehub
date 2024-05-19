import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const MessageUserCard = ({ chat, active = false, onClick }) => {
  return (
    <Link
      to={`?${new URLSearchParams({
        clientId: chat.receiver_details._id,
      })}`}
      className={`${active ? "bg-primary text-white" : "bg-zinc-100"} flex cursor-pointer gap-4 rounded-xl px-3 py-5 shadow transition-transform duration-300 active:scale-95`}
      onClick={onClick}
    >
      <Avatar className="ring-2 ring-zinc-300 ring-offset-1">
        <AvatarImage
          src={chat.receiver_details.image}
          alt="Profile"
          className="object-cover"
        />
        <AvatarFallback className="text-black">
          {chat.receiver_details.firstName[0]}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h2 className="font-semibold">
          {chat.receiver_details.firstName} {chat.receiver_details.lastName}
        </h2>
        <p className="max-w-52 truncate text-xs">
          {chat.chats.at(-1)?.message}
        </p>
      </div>
    </Link>
  );
};

export default MessageUserCard;
