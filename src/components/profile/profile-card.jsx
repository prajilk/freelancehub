import {
  CircleCheckBig,
  MapPin,
  MessageCircleMore,
  Pencil,
  Share2,
} from "lucide-react";
import {
  FaDribbble,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
import { Button } from "../ui/button";
import ProfileDrawer from "../drawer/profile-drawer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import ProfileImageModal from "../modals/profile-image";

const dummyProfile = {
  firstName: "Brooklyn",
  lastName: "Simmons",
  role: "UI/UX Designer",
  experience: "5 years",
  hourly: "25",
  location: "Chicago, IL",
};

const ProfileCard = () => {
  const [mainSocials, setMainSocials] = useState([
    "linkeIn",
    "github",
    "stackOverflow",
    "x",
  ]);

  return (
    <div className="relative flex w-full flex-wrap gap-5 rounded-2xl bg-white px-3 py-7 shadow md:gap-8 md:px-10 lg:gap-20">
      <div className="mx-auto flex flex-col items-center gap-5 md:mx-0">
        <div className="relative">
          <img
            src="https://i.pravatar.cc/500?img=32"
            alt="Profile"
            className="size-36 rounded-full md:size-44"
          />
          <span className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full rounded-br-none bg-green-200 px-3 py-2 text-xs font-semibold text-primary">
            <CircleCheckBig size={15} />
            Looking for work
          </span>
          <ProfileImageModal />
        </div>
        <span className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin size={15} />
          <b>{dummyProfile.location}</b>
        </span>
      </div>

      <div className="flex flex-col gap-7">
        <h1 className="flex items-center justify-center gap-3 text-2xl font-light md:justify-start md:text-3xl lg:text-5xl">
          {dummyProfile.firstName} {dummyProfile.lastName}{" "}
          <HiBadgeCheck size={30} className="text-primary" />
        </h1>
        <div className="flex flex-wrap items-center gap-7">
          <div className="flex w-full justify-evenly gap-3 md:w-fit">
            {mainSocials.map((social, i) => (
              <Link to={"/"} key={i}>
                {<SocialIcon social={social} />}
              </Link>
            ))}
          </div>
          <div className="flex w-full justify-evenly gap-3 md:w-fit">
            <Button className="gap-2 rounded-full">
              <MessageCircleMore size={20} />
              Message
            </Button>
            <Button className="gap-2 rounded-full">
              <Share2 size={20} />
              Share
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-10 md:justify-start">
          <div className="space-y-1">
            <span className="text-sm font-medium">Role</span>
            <h4 className="text-lg md:text-2xl">{dummyProfile.role}</h4>
          </div>
          <div className="space-y-1">
            <span className="text-sm font-medium">Experience</span>
            <h4 className="text-lg md:text-2xl">{dummyProfile.experience}</h4>
          </div>
          <div className="space-y-1">
            <span className="text-sm font-medium">Hourly</span>
            <h4 className="text-lg md:text-2xl">${dummyProfile.hourly}</h4>
          </div>
        </div>

        <span className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground md:justify-start">
          <CircleCheckBig size={15} className="text-primary" />
          <b>252</b> Works completed
        </span>
      </div>

      <ProfileDrawer
        profileData={dummyProfile}
        setMainSocials={setMainSocials}
      />
    </div>
  );
};

export default ProfileCard;

function SocialIcon({ social }) {
  if (social === "linkeIn") {
    return <FaLinkedin size={30} className="cursor-pointer text-primary" />;
  } else if (social === "github") {
    return <FaGithub size={30} className="cursor-pointer text-primary" />;
  } else if (social === "dribbble") {
    return <FaDribbble size={30} className="cursor-pointer text-primary" />;
  } else if (social === "x") {
    return (
      <FaSquareXTwitter size={30} className="cursor-pointer text-primary" />
    );
  } else if (social === "stackOverflow") {
    return (
      <FaStackOverflow size={30} className="cursor-pointer text-primary" />
    );
  } else if (social === "website") {
    return <CiGlobe size={30} className="cursor-pointer text-primary" />;
  }
}
