import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const JOBS = [
  {
    title: "Senior UI Designer",
    description:
      "We are looking for a talented and experienced UI Designer to join our team to develop a new social crowdfunding app.",
    salaryFrom: 4000,
    salaryTo: 12000,
    jobType: "Remote work",
    skills: ["UI Designer", "Adobe XD", "UI/UX Designer"],
  },
  {
    title: "Website Developer",
    description:
      "We are seeking a talented web developer to join our team to create a engaging and effective company profile landing page.",
    salaryFrom: 4000,
    salaryTo: 12000,
    jobType: "Remote work",
    skills: ["ReactJS", "Javascript", "Web Developer"],
  },
  {
    title: "UX Copywriter",
    description:
      "We are seeking a talented UX Copywriter to join our team to create an engaging and effective food delivery product",
    salaryFrom: 4000,
    salaryTo: 12000,
    jobType: "Remote work",
    skills: ["Copywriter", "Content Writer", "UX Copy"],
  },
  {
    title: "Senior Project Manager",
    description:
      "We are looking for a experienced Project Manager to join our team to take care all of incoming inquiries from many clients.",
    salaryFrom: 4000,
    salaryTo: 12000,
    jobType: "Remote work",
    skills: ["Project Manager", "Scrum Master", "PM"],
  },
  {
    title: "Web Developer",
    description:
      "We are seeking a versatile web developer to join our team to create an engaging and effective Split Bill Application for desktop and mobile.",
    salaryFrom: 4000,
    salaryTo: 12000,
    jobType: "Remote work",
    skills: ["ReactJS", "Kotlin", "Golang", "JS"],
  },
  {
    title: "Digital Marketing",
    description:
      "We are seeking a talented Digital Marketing to boost our market and our value around social media, website and other digital platform.",
    salaryFrom: 4000,
    salaryTo: 12000,
    jobType: "Remote work",
    skills: ["UI Designer", "Adobe XD", "UI/UX Designer"],
  },
];

const Jobs = () => {
  return (
    <section className="container-lg pb-20 pt-32">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">1000+ Dream Jobs Openings</h3>
        <p className="mx-auto my-5 max-w-xl text-muted-foreground">
          Explore thousands of jobs opportunities and find your dream job with
          our comprehensive jobs search platform.
        </p>
        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          {JOBS.map((job, i) => (
            <JobCard {...job} key={i} />
          ))}
        </div>
        <div className="flex justify-center py-10">
          <Link to="/works">
            <Button>Load More Jobs</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Jobs;

const JobCard = ({
  title,
  jobType,
  salaryFrom,
  salaryTo,
  description,
  skills,
}) => {
  return (
    <div className="flex w-full cursor-pointer flex-col items-start rounded-xl bg-white p-5 text-left shadow-md">
      <h4 className="mt-4 font-semibold">{title}</h4>
      <span className="text-sm text-muted-foreground">
        {jobType} • ${salaryFrom} - ${salaryTo}
      </span>
      <p className="mt-5 text-sm text-muted-foreground">{description}</p>
      <div className="mt-5 flex gap-3 text-xs text-muted-foreground">
        {skills.slice(0, 3).map((skill, i) => (
          <span className="rounded-full bg-zinc-200 px-2 py-1" key={i}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
