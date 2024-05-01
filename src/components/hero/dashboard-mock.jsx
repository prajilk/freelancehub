import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DashboardMock = () => {
  const dashboardRef = useRef();
  const { scrollYProgress } = useScroll({
    target: dashboardRef,
    offset: ["0 1", "1 1"],
  });
  const rotateProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <div ref={dashboardRef}>
      <motion.div
        style={{
          scale: rotateProgress,
        }}
        className="aspect-video w-full max-w-5xl overflow-hidden rounded-2xl"
      >
        <img
          src="./dashboard.png"
          alt=""
          className="relative z-10 rounded-2xl"
        />
      </motion.div>
    </div>
  );
};

export default DashboardMock;
