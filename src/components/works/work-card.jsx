import { Bookmark, MapPin, User } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { LongText } from "../ui/long-text";
import { Link } from "react-router-dom";
import { formatTimeAgo } from "../../lib/utils";
import { useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useUpdateBookmark } from "../../api/updated-bookmark";

const WorkCard = ({ work, isDefaultBookmarked }) => {
  const queryClient = useQueryClient();
  const [isBookmarked, setIsBookmarked] = useState(isDefaultBookmarked);
  const user = useSelector((state) => state.user._id);

  function onSuccess(result) {
    toast.success(result.message);
    queryClient.invalidateQueries(["bookmarks"]);
    setIsBookmarked(result.bookmarked);
  }
  const mutation = useUpdateBookmark(onSuccess);

  function handleBookmark(id) {
    mutation.mutate({ workId: id });
  }

  return (
    <div className="w-full rounded-lg bg-white p-7 shadow">
      <div className="flex items-center gap-3">
        <div>
          <h3 className="flex items-center gap-3 font-semibold">
            {work?.title}
            {user === work?.userId && (
              <span className="whitespace-nowrap rounded-full bg-primary px-2 py-0.5 text-[.6rem] text-white">
                My work
              </span>
            )}
          </h3>
          <span className="text-xs capitalize text-muted-foreground">
            {work?.payment} • Budget: ${work?.paymentMin} - ${work?.paymentMax}
          </span>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => handleBookmark(work?._id)}
          className={`${isBookmarked && "bg-primary/30 text-primary"} ms-auto flex-shrink-0 transition-transform duration-300 hover:bg-primary/30 hover:text-primary active:scale-95`}
        >
          <Bookmark className={`${isBookmarked && "fill-primary"}`} />
        </Button>
      </div>
      <LongText>{work?.description}</LongText>

      <div className="mb-5 mt-3 flex gap-5">
        <div className="flex items-center gap-1 text-xs capitalize text-muted-foreground">
          <MapPin size={15} />
          <b>{work?.location}</b>
        </div>
        <div className="flex items-center gap-1 text-xs capitalize text-muted-foreground">
          <User size={15} />
          <span>
            Looking for: <b>{work?.experience}</b>
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-5 text-xs">
        <div className="relative w-full after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-r after:from-transparent after:to-white">
          <div className="hide-scrollbar flex gap-2 overflow-scroll">
            {work?.skills.map((skill, i) => (
              <span
                className="flex-shrink-0 rounded-full bg-zinc-200 px-2 py-1.5"
                key={i}
              >
                {skill.label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center justify-between text-muted-foreground">
          <span className="flex-shrink-0 text-sm">
            {work?.totalApplicants} Applicants
          </span>
          <div className="flex w-full items-center justify-between gap-4 md:w-fit md:justify-start">
            <span className="flex-shrink-0">
              Posted {formatTimeAgo(work?.createdAt)}
            </span>
            <Link to={`/works/${work?._id}`}>
              <Button size="sm" className="text-sm">
                View
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
