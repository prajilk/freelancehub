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

export const proficiencies = [
  {
    value: "basic",
    label: "Basic",
  },
  {
    value: "conversational",
    label: "Conversational",
  },
  {
    value: "fluent",
    label: "Fluent",
  },
  {
    value: "native",
    label: "Native",
  },
];

export const startYear = [
  "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988",
  "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997",
  "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006",
  "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015",
  "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"
].reverse();

export const endYear = [
  "2025", "2026", "2027", "2028", "2029", "2030"
].reverse()

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

export function formatTimeFromISOString(isoString) {
  // Parse the ISO string to a Date object
  const date = new Date(isoString);

  // Get hours and minutes
  let hours = date.getUTCHours(); // Use getUTCHours() to get hours in UTC
  let minutes = date.getUTCMinutes(); // Use getUTCMinutes() to get minutes in UTC

  // Determine AM or PM
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours from 24-hour time to 12-hour time
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Pad minutes with leading zero if needed
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Construct the time string
  const timeStr = `${hours}:${minutes} ${ampm}`;

  return timeStr;
}

export function formatDateToCustomString(dateString) {
  const date = new Date(dateString);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}