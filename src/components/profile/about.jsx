import AboutModal from "../modals/about";
import { LongText } from "../ui/long-text";

const dummyAbout =
  "As a passionate UI/UX Designer with over 5 years of experience, I specialize in creating intuitive and user-friendly digital experiences. My approach combines innovative design with functional aesthetics to enhance user interaction and satisfaction. With a track record of successful projects for clients ranging from tech startups to large corporations, I am skilled in Adobe Creative Suite, Sketch, and Figma. My goal is to transform complex problems into elegant solutions that drive business success and delight users. Whether you're looking to revamp your website or develop a new app, I'm here to help bring your vision to life.";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">About</h1>
        <AboutModal about={dummyAbout} />
      </div>
      <LongText line={7} maxWords={700} className="mt-3">
        {dummyAbout}
      </LongText>
    </>
  );
};

export default About;
