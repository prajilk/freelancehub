import { clsx } from "clsx"
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const socialsArray = [
  "linkedIn",
  "github",
  "dribbble",
  "stackOverflow",
  "x",
  "website",
];

export function useSocialLabel(social) {
  if (social === "linkedIn") {
    return "LinkedIn";
  } else if (social === "github") {
    return "Github";
  } else if (social === "dribbble") {
    return "Dribbble";
  } else if (social === "x") {
    return "X";
  } else if (social === "stackOverflow") {
    return "Stack Overflow";
  } else if (social === "website") {
    return "Website";
  }
}

export function useRaisedShadow(value) {
  const inactiveShadow = "0px 0px 0px rgba(0,0,0,0.8)";
  const boxShadow = useMotionValue(inactiveShadow);

  useEffect(() => {
    let isActive = false;
    value.on("change", (latest) => {
      const wasActive = isActive;
      if (latest !== 0) {
        isActive = true;
        if (isActive !== wasActive) {
          animate(boxShadow, "5px 5px 10px rgba(0,0,0,0.3)");
        }
      } else {
        isActive = false;
        if (isActive !== wasActive) {
          animate(boxShadow, inactiveShadow);
        }
      }
    });
  }, [value, boxShadow]);

  return boxShadow;
}

export function formatTimeAgo(dateString) {
  const date = new Date(dateString);
  const currentDate = new Date();
  const diffInMilliseconds = currentDate - date;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;

  if (diffInMilliseconds < minute) {
    return 'now';
  } else if (diffInMilliseconds < hour) {
    const minutes = Math.floor(diffInMilliseconds / minute);
    return `${minutes} min ago`;
  } else if (diffInMilliseconds < day) {
    const hours = Math.floor(diffInMilliseconds / hour);
    return `${hours} hour ago`;
  } else if (diffInMilliseconds < month) {
    const days = Math.floor(diffInMilliseconds / day);
    return `${days} day ago`;
  } else {
    const months = Math.floor(diffInMilliseconds / month);
    return `${months} month ago`;
  }
}