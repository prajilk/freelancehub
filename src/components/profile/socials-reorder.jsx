import {
  Reorder,
  animate,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import { Grip } from "lucide-react";
import { useEffect, useState } from "react";
import { CiGlobe } from "react-icons/ci";
import {
  FaDribbble,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Input } from "../ui/input";

const socialsArray = [
  "linkeIn",
  "github",
  "dribbble",
  "stackOverflow",
  "x",
  "website",
];

const SocialsReorder = ({ setMainSocials }) => {
  const [socials, setSocials] = useState(socialsArray);

  useEffect(() => {
    setMainSocials(socials.slice(0, 4));
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
  const [socialLinks, setSocialLinks] = useState({
    linkeIn: "",
    github: "",
    dribbble: "",
    stackOverflow: "",
    x: "",
    website: "",
  });

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
        value={socialLinks[social]}
        onChange={(e) =>
          setSocialLinks((prev) => ({ ...prev, [social]: e.target.value }))
        }
        className="border border-zinc-300 bg-white focus:border-zinc-500"
      />
    </Reorder.Item>
  );
};

export function useRaisedShadow(value) {
  const inactiveShadow = "0px 0px 0px rgba(0,0,0,0.8)";
  const boxShadow = useMotionValue(inactiveShadow);

  useEffect(() => {
    let isActive = false;
    value.on("change", (latest) => {
      const wasActive = isActive;
      if (latest !== 0) {
        isActive = true;
        if (isActive !== wasActive) {
          animate(boxShadow, "5px 5px 10px rgba(0,0,0,0.3)");
        }
      } else {
        isActive = false;
        if (isActive !== wasActive) {
          animate(boxShadow, inactiveShadow);
        }
      }
    });
  }, [value, boxShadow]);

  return boxShadow;
}

function useIcon(social) {
  if (social === "linkeIn") {
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

function useSocialLabel(social) {
  if (social === "linkeIn") {
    return "LinkedIn";
  } else if (social === "github") {
    return "Github";
  } else if (social === "dribbble") {
    return "Dribbble";
  } else if (social === "x") {
    return "X";
  } else if (social === "stackOverflow") {
    return "Stack Overflow";
  } else if (social === "website") {
    return "Website";
  }
}
