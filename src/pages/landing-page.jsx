import Hero from "../components/hero/hero";
import Section1 from "../components/highlights/section1";
import Section2 from "../components/highlights/section2";
import Jobs from "../components/jobs";
import Nav from "../components/nav/nav";
import Testimonials from "../components/testimonials";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <div className="bg-white">
        <Section1 />
        <Section2 />
      </div>
      <Jobs />
      <Testimonials />
    </div>
  );
};

export default LandingPage;
