import { Bookmark, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { LongText } from "./ui/long-text";
import { Link } from "react-router-dom";

const JobCard = ({ title, image, skills, country, applicants }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <div className="w-full cursor-pointer rounded-lg bg-white p-7 shadow">
      <div className="flex items-center gap-3">
        {image && <img src={image} alt="" className="size-10 flex-shrink-0" />}
        <div>
          <h3 className="font-semibold">{title}</h3>
          <span className="text-xs text-muted-foreground">Grapho • Remote</span>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setIsBookmarked((prev) => !prev)}
          className={`${isBookmarked && "bg-primary/30 text-primary"} ms-auto flex-shrink-0 transition-transform duration-300 hover:bg-primary/30 hover:text-primary active:scale-95`}
        >
          <Bookmark className={`${isBookmarked && "fill-primary"}`} />
        </Button>
      </div>
      <LongText>
        We are looking for a talented and experienced developer to join our team
        to develop a new crowdfunding app. As a Crowdfunding App Developer, you
        will be responsible for designing, developing and implementing the app,
        ensuring it is user-friendly, functional and secure.
      </LongText>

      <div className="mb-5 mt-3 flex items-center gap-1 text-xs text-muted-foreground">
        <MapPin size={15} />
        <b>{country}</b>
      </div>

      <div className="flex flex-wrap items-center gap-5 text-xs">
        <div className="relative w-full after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-r after:from-transparent after:to-white">
          <div className="hide-scrollbar flex gap-2 overflow-scroll">
            {skills?.map((skill, i) => (
              <span
                className="flex-shrink-0 rounded-full bg-zinc-200 px-2 py-1.5"
                key={i}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center justify-between text-muted-foreground">
          <span className="flex-shrink-0 text-sm">{applicants} Applicants</span>
          <div className="flex w-full items-center justify-between gap-4 md:w-fit md:justify-start">
            <span className="flex-shrink-0">Posted 5 mins ago</span>
            <Link to="/dashboard/jobs/jobid">
              <Button size="sm" className="text-sm">
                View job
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
