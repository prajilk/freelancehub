import {
  CircleCheckBig,
  MapPin,
  MessageCircleMore,
  Share2,
} from "lucide-react";
import {
  FaDribbble,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaUserCircle,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
import { Button } from "../ui/button";
import ProfileDrawer from "../drawer/profile-drawer";
import { Link, useNavigate } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import ProfileImageModal from "../modals/profile-image";
import { useSelector } from "react-redux";
import MoreSocials from "./more-socials";
import { toast } from "sonner";
import { socket } from "../../context/socket";

const ProfileCard = () => {
  const navigate = useNavigate();

  const viewMode = useSelector((state) => state.profileViewMode);
  const profileData = useSelector((state) =>
    viewMode ? state.client : state.user,
  );
  const userId = useSelector((state) => state.user._id);

  function handleMessage() {
    viewMode && socket.emit("ready-to-send-message", userId, profileData._id);
    navigate(`/dashboard/messages?clientId=${profileData._id}`);
  }

  return (
    <div className="relative flex w-full flex-wrap gap-5 rounded-2xl bg-white px-3 py-7 shadow md:gap-8 md:px-10 lg:gap-20">
      <div className="mx-auto flex flex-col items-center gap-5 md:mx-0">
        <div className="relative">
          {profileData.image ? (
            <img
              src={profileData.image}
              alt="Profile"
              className="size-36 rounded-full bg-zinc-200 object-cover object-top md:size-44"
            />
          ) : (
            <FaUserCircle className="size-36 text-zinc-300 md:size-44" />
          )}
          {profileData.profile?.lookingForWork && (
            <span className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full rounded-br-none bg-green-200 px-3 py-2 text-xs font-semibold text-primary">
              <CircleCheckBig size={15} />
              Looking for work
            </span>
          )}
          {!viewMode && <ProfileImageModal />}
        </div>
        <span className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin size={15} />
          <b>{profileData.country || "---"}</b>
        </span>
      </div>

      <div className="flex flex-col gap-7">
        <h1 className="flex items-center justify-center gap-3 text-2xl font-light md:justify-start md:text-3xl lg:text-5xl">
          {profileData.firstName} {profileData.lastName}{" "}
          <HiBadgeCheck size={30} className="text-primary" />
        </h1>
        <div className="flex flex-wrap items-center gap-7">
          <div className="flex w-full justify-evenly gap-3 md:w-fit">
            {profileData.profile?.topFourSocials.map(
              (social, i) =>
                profileData.socials[social] && (
                  <Link
                    to={profileData.socials[social]}
                    key={i}
                    target="_blank"
                  >
                    {<SocialIcon social={social} />}
                  </Link>
                ),
            )}
            <MoreSocials moreSocials={profileData.socials} />
          </div>
          <div className="flex w-full justify-evenly gap-3 md:w-fit">
            {viewMode && (
              <Button className="gap-2 rounded-full" onClick={handleMessage}>
                <MessageCircleMore size={20} />
                Message
              </Button>
            )}
            <Button
              className="gap-2 rounded-full"
              onClick={() => {
                navigator.clipboard.writeText(
                  `${window.location.origin}/user/${profileData._id}`,
                );
                toast.success("Copied to clipboard!");
              }}
            >
              <Share2 size={20} />
              Share
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-10 md:justify-start">
          <div className="space-y-1">
            <span className="text-sm font-medium">Role</span>
            <h4 className="text-lg md:text-2xl">
              {profileData.profile?.role || "---"}
            </h4>
          </div>
          <div className="space-y-1">
            <span className="text-sm font-medium">Experience</span>
            <h4 className="text-lg md:text-2xl">
              {profileData.profile?.experience || "---"}
            </h4>
          </div>
          {profileData.profile?.hourly && (
            <div className="space-y-1">
              <span className="text-sm font-medium">Hourly</span>
              <h4 className="text-lg md:text-2xl">
                ${profileData.profile?.hourly}
              </h4>
            </div>
          )}
        </div>

        <span className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground md:justify-start">
          <CircleCheckBig size={15} className="text-primary" />
          <b>252</b> Works completed
        </span>
      </div>

      {!viewMode && <ProfileDrawer />}
    </div>
  );
};

export default ProfileCard;

function SocialIcon({ social }) {
  if (social === "linkedIn") {
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
