import { useSelector } from "react-redux";
import AboutModal from "../modals/about";
import { LongText } from "../ui/long-text";

const About = () => {
  const about = useSelector((state) => state.user.profile.about);
  const viewMode = useSelector((state) => state.profileViewMode);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">About</h1>
        {!viewMode && <AboutModal about={about || ""} />}
      </div>
      <LongText line={7} maxWords={700} className="mt-3">
        {about || "---"}
      </LongText>
    </>
  );
};

export default About;
