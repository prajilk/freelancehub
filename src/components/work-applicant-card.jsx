import { FaEye } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { LongText } from "./ui/long-text";
import { Link } from "react-router-dom";
import { formatTimeAgo } from "../lib/utils";

const WorkApplicantCard = ({ proposal }) => {
  return (
    <Card>
      <CardContent className="grid gap-5 p-5 md:grid-cols-2 md:p-10">
        <div className="space-y-4 border-zinc-400 md:border-r md:pe-5">
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage
                src={proposal.user.image}
                alt="Profile"
                className="object-cover"
              />
              <AvatarFallback>{proposal.user.firstName[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h1 className="font-semibold">
                {proposal.user.firstName} {proposal.user.lastName}
              </h1>
              <span className="text-sm font-medium text-muted-foreground">
                {proposal.user.role || "---"}
              </span>
            </div>
            <div className="ms-auto flex items-center gap-3">
              <Link to={`/user/${proposal.user._id}`} target="_blank">
                <button className="flex size-9 items-center justify-center rounded-full bg-primary/30 p-1 text-primary">
                  <FaEye size={20} />
                </button>
              </Link>
              <button className="flex size-9 items-center justify-center rounded-full bg-primary/30 p-1 text-primary">
                <IoChatbubbleEllipses size={20} />
              </button>
            </div>
          </div>
          <ul>
            <li className="text-muted-foreground">
              Email:{" "}
              <span className="font-semibold text-black">
                {proposal.user.email}
              </span>
            </li>
            <li className="text-muted-foreground">
              Location:{" "}
              <span className="font-semibold capitalize text-black">
                {proposal.user.country}
              </span>
            </li>
            <li className="text-muted-foreground">
              Experience:{" "}
              <span className="font-semibold text-black">
                {proposal.user.experience || "---"}
              </span>
            </li>
            <li className="text-muted-foreground">
              Payment type:{" "}
              <span className="font-semibold capitalize text-black">
                {proposal.paymentType}
              </span>
            </li>
            <li className="text-muted-foreground">
              Proposed charge:{" "}
              <span className="font-semibold text-black">
                ${proposal.charge}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold">Cover Letter</h1>
          <LongText line={5} maxWords={200}>
            {proposal.coverLetter}
          </LongText>
          <span className="mt-3 flex w-full justify-end text-sm">
            Applied {formatTimeAgo(proposal.createdAt)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkApplicantCard;
