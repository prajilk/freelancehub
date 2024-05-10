import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import { Grip } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { updateSocials, updateTopSocials } from "../../redux/userSlice";
import { socialsArray, useRaisedShadow, useSocialLabel } from "../../lib/utils";
import { CiGlobe } from "react-icons/ci";
import {
  FaDribbble,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialsReorder = () => {
  const topSocials = useSelector((state) => state.user.profile.topFourSocials);

  const [socials, setSocials] = useState([
    ...new Set([...topSocials, ...socialsArray]),
  ]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTopSocials(socials));
  }, [socials]);

  return (
    <Reorder.Group axis="y" onReorder={setSocials} values={socials}>
      {socials.map((social) => (
        <SocialInput key={social} social={social} />
      ))}
    </Reorder.Group>
  );
};

export default SocialsReorder;

const SocialInput = ({ social }) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();
  const socials = useSelector((state) => state.user.socials);
  const dispatch = useDispatch();

  return (
    <Reorder.Item
      value={social}
      id={social}
      style={{ boxShadow, y }}
      dragListener={false}
      dragControls={dragControls}
      className="mb-2 flex items-center justify-between gap-2 rounded-lg bg-zinc-100 px-2 py-1.5"
    >
      <Grip
        onPointerDown={(event) => dragControls.start(event)}
        className="cursor-grab text-zinc-400 active:cursor-grabbing"
      />
      <Input
        startIcon={useIcon(social)}
        placeholder={`Enter your ${useSocialLabel(social)} URL`}
        value={socials[social]}
        onChange={(e) => dispatch(updateSocials({ [social]: e.target.value }))}
        className="border border-zinc-300 bg-white focus:border-zinc-500"
      />
    </Reorder.Item>
  );
};

export function useIcon(social) {
  if (social === "linkedIn") {
    return <FaLinkedin />;
  } else if (social === "github") {
    return <FaGithub />;
  } else if (social === "dribbble") {
    return <FaDribbble />;
  } else if (social === "x") {
    return <FaXTwitter />;
  } else if (social === "stackOverflow") {
    return <FaStackOverflow />;
  } else if (social === "website") {
    return <CiGlobe />;
  }
}
