import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import DashboardMock from "./dashboard-mock";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const easeDownVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <div className="w-full bg-[url(/hero.png)] bg-cover bg-no-repeat pb-20">
      <div className="container-lg flex h-full flex-col items-center gap-8 pt-36 text-white">
        <motion.h1
          initial="initial"
          animate="animate"
          variants={easeDownVariants}
          transition={{
            duration: 0.5,
            type: "just",
            ease: "easeInOut",
          }}
          className="text-center text-4xl font-semibold lg:text-6xl"
        >
          Find Your Next Gig With Our <br className="hidden lg:block" />{" "}
          Freelance Job Platform
        </motion.h1>
        <motion.p
          initial="initial"
          animate="animate"
          variants={easeDownVariants}
          transition={{
            duration: 0.5,
            type: "just",
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="text-center text-muted-foreground lg:text-xl"
        >
          Streamline your freelance business with our job finder platform. Find{" "}
          <br className="hidden lg:block" /> opportunities, manage workloads,
          and maximize earnings.
        </motion.p>
        <motion.div
          initial="initial"
          animate="animate"
          variants={easeDownVariants}
          transition={{
            duration: 0.5,
            type: "just",
            ease: "easeInOut",
            delay: 0.4,
          }}
        >
          <Link to="/dashboard">
            <Button
              size="lg"
              className="flex rounded-full transition-transform duration-300 hover:-translate-y-1"
            >
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
        <DashboardMock />
      </div>
    </div>
  );
};

export default Hero;
