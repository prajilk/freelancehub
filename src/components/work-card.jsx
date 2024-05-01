import { Bookmark, MapPin, User } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

const WorkCard = ({
  title,
  image,
  skills,
  country,
  experience,
  applicants,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <div className="w-full cursor-pointer rounded-lg bg-white p-7 shadow">
      <div className="flex items-center gap-3">
        <img src={image} alt="" className="size-10 flex-shrink-0" />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <span className="text-xs text-muted-foreground">
            Time: 1 to 3 months • Budget: $4000 - $12000
          </span>
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
      <Description>
        We are looking for a talented and experienced developer to join our team
        to develop a new crowdfunding app. As a Crowdfunding App Developer, you
        will be responsible for designing, developing and implementing the app,
        ensuring it is user-friendly, functional and secure.
      </Description>

      <div className="mb-5 mt-3 flex gap-5">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin size={15} />
          <b>{country}</b>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <User size={15} />
          <span>
            Looking for: <b>{experience}</b>
          </span>
        </div>
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
        <div className="flex w-full items-center justify-between text-muted-foreground">
          <span className="flex-shrink-0 text-sm">{applicants} Applicants</span>
          <span className="flex-shrink-0">Posted 5 mins ago</span>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

const Description = ({ children }) => {
  const [isLong, setIsLong] = useState(children.length > 293 ? true : false);

  const isLongText = children.length > 293;

  return (
    <div className={`relative mt-5 ${isLongText && "pb-5"}`}>
      <motion.p
        initial={{ height: "auto" }}
        animate={isLong ? { height: "3.75rem" } : { height: "auto" }}
        transition={{ duration: 0.3 }}
        className={`${!isLong && "after:hidden"} relative overflow-hidden text-sm text-muted-foreground after:absolute after:bottom-0 after:right-0 after:h-[1.25rem] after:w-full after:bg-gradient-to-b after:from-transparent after:to-white`}
      >
        {children}
      </motion.p>
      {isLongText && (
        <span
          className="absolute bottom-0 left-0 bg-white text-sm font-semibold text-primary underline"
          onClick={() => setIsLong((prev) => !prev)}
        >
          {isLong ? "More" : "Less"}
        </span>
      )}
    </div>
  );
};
