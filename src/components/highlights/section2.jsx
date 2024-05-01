import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <section className="container-lg grid gap-10 pb-20 pt-40 lg:grid-cols-2 lg:gap-0">
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
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold lg:text-4xl">
          Access a Global Talent Pool
        </h2>
        <p className="font-medium text-muted-foreground">
          Connect with skilled freelancers from around the world. Unlock the
          power of a global workforce through our platform and gain access to a
          diverse array of talent across every industry imaginable. Whether you
          need a graphic designer from New York, a software developer from
          Bangalore, or a content writer from London, our platform brings the
          world&apos;s top freelance professionals right to your fingertips.
        </p>
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
        className="flex items-center justify-center"
      >
        <img src="./world.svg" alt="" className="w-2/3" />
      </motion.div>
    </section>
  );
};

export default Section2;
