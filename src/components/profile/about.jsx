import { useSelector } from "react-redux";
import AboutModal from "../modals/about";
import { LongText } from "../ui/long-text";

const About = () => {
  const viewMode = useSelector((state) => state.profileViewMode);
  const about = useSelector((state) =>
    viewMode ? state.client.profile?.about : state.user.profile?.about,
  );

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">About</h1>
        {!viewMode && <AboutModal about={about || ""} />}
      </div>
      <LongText line={7} maxWords={700} className="mt-3">
        {about || "About section is empty!"}
      </LongText>
    </>
  );
};

export default About;
