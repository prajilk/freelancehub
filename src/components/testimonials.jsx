import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Thanks to this amazing job finder platform, I was able to find my dream job in just a few weeks! I highly recommend this platform to anyone looking for a job.",
    name: "Samantha Venomalika",
    title: "Fresh Graduate",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    quote:
      "As a recent college graduate, I was struggling to find a job in my field. A friend recommended this job finder platform, and it was a game changer platform. Really love it!",
    name: "Sarah Octa",
    title: "College Student",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    quote:
      "The platform's interface is intuitive and easy to use, and I was able to apply to jobs quickly and efficiently. I also appreciated the platform's personalized job recommendations",
    name: "John Elton Travolta",
    title: "Software Developer",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    quote:
      "I had been out fo the workforce for a few years due to personal reasons, and I was struggling to find a job that suits to me. This awesome job finder platform was a truly lifesaver!",
    name: "Jane Austen",
    title: "Visual Artist",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    quote:
      "It's extremely exciting that this platform has freelancers from all over the world — it broadens the talent pool. One of the best things about this platform is that while we're sleeping, someone's working.",
    name: "Herman Melville",
    title: "Web Developer",
    image: "https://i.pravatar.cc/150?img=7",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white">
      <section className="py-24">
        <div className="text-center">
          <h3 className="text-4xl font-semibold">
            Sounds From Our Happy Customers
          </h3>
          <p className="container-lg mx-auto my-5 max-w-xl text-muted-foreground">
            Explore thousands of jobs opportunities and find your dream job with
            our comprehensive jobs search platform.
          </p>
        </div>
        <div className="relative mt-10 flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
