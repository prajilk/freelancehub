import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const Skeleton = ({ className }) => {
  return (
    <div
      className={cn(
        "relative h-20 w-full overflow-hidden rounded-md bg-zinc-200",
        className,
      )}
    >
      <motion.div
        initial={{
          left: "-100%",
        }}
        animate={{
          left: "100%",
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute h-full w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent"
      ></motion.div>
    </div>
  );
};

export default Skeleton;
