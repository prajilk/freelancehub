import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <section className="container-lg grid gap-10 overflow-hidden pt-28 lg:grid-cols-2 lg:gap-0 lg:pb-20 lg:pt-40">
      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.3,
        }}
        className="flex items-center justify-center"
      >
        <img src="./file_search.svg" alt="" className="w-1/2" />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.3,
        }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold lg:text-4xl">
          Streamline Your Job Search with Advanced Features
        </h2>
        <p className="font-medium text-muted-foreground">
          Our advanced job search features saves you time and helps you find
          your dream job more efficiently. You can quickly search to find the
          most relevant job opportunities.
        </p>
        <ul className="space-y-4 text-muted-foreground">
          <li className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-primary" />
            Search by our advance search engine
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-primary" />
            Filter by your own personalized location
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-primary" />
            Refining jobs with popular industry
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Section1;
