import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../lib/utils";

export const LongText = ({
  children,
  maxWords = 293,
  line = 3,
  className = "",
}) => {
  const [isLong, setIsLong] = useState(
    children.length > maxWords ? true : false,
  );

  const isLongText = children.length > maxWords;

  return (
    <div className={cn(`relative mt-5 ${isLongText && "pb-5"}`, className)}>
      <motion.p
        initial={{ height: "auto" }}
        animate={isLong ? { height: `${line * 1.25}rem` } : { height: "auto" }}
        transition={{ duration: 0.3 }}
        className={`${!isLong && "after:hidden"} relative overflow-hidden text-sm text-muted-foreground after:absolute after:bottom-0 after:right-0 after:h-[1.25rem] after:w-full after:bg-gradient-to-b after:from-transparent after:to-white`}
      >
        {children}
      </motion.p>
      {isLongText && (
        <span
          className="absolute bottom-0 left-0 cursor-pointer bg-white text-sm font-semibold text-primary underline"
          onClick={() => setIsLong((prev) => !prev)}
        >
          {isLong ? "More" : "Less"}
        </span>
      )}
    </div>
  );
};
