import { FaEye } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { LongText } from "./ui/long-text";
import { Link } from "react-router-dom";
import { formatTimeAgo } from "../lib/utils";

const JobApplicantCard = ({ application }) => {
  return (
    <Card>
      <CardContent className="grid gap-5 p-5 md:grid-cols-2 md:p-10">
        <div className="space-y-4 border-zinc-400 md:border-r md:pe-5">
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage
                src={application.user.image}
                alt="Profile"
                className="object-cover"
              />
              <AvatarFallback>{application.user.firstName[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h1 className="font-semibold">
                {application.user.firstName} {application.user.lastName}
              </h1>
              <span className="text-sm font-medium text-muted-foreground">
                {application.user.role || "---"}
              </span>
            </div>
            <div className="ms-auto flex items-center gap-3">
              <Link to={`/user/${application.user._id}`} target="_blank">
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
                {application.user.email}
              </span>
            </li>
            <li className="text-muted-foreground">
              Location:{" "}
              <span className="font-semibold capitalize text-black">
                {application.user.country}
              </span>
            </li>
            <li className="text-muted-foreground">
              Experience:{" "}
              <span className="font-semibold text-black">
                {application.user.experience || "---"}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold">Cover Letter</h1>
          <LongText line={5} maxWords={100}>
            {application.coverLetter}
          </LongText>
          <span className="mt-3 flex w-full justify-end text-sm">
            Applied {formatTimeAgo(application.createdAt)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobApplicantCard;
