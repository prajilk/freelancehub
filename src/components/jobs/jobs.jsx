import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useJobs } from "../../api/job/get-jobs";
import JobCardSkeleton from "../skeletons/job-card";

const Jobs = () => {
  const { data: jobs, isLoading } = useJobs(6);

  return (
    <section className="container-lg pb-20 pt-32">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">1000+ Dream Jobs Openings</h3>
        <p className="mx-auto my-5 max-w-xl text-muted-foreground">
          Explore thousands of jobs opportunities and find your dream job with
          our comprehensive jobs search platform.
        </p>
        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          {isLoading ? (
            <>
              {Array.from({ length: 6 }).map((_, i) => (
                <JobCardSkeleton key={i} />
              ))}
            </>
          ) : (
            jobs?.pages.flat().map((job, i) => (
              <Link
                to={`/jobs/${job?._id}`}
                key={i}
                className="flex w-full cursor-pointer flex-col items-start rounded-xl bg-white p-5 text-left shadow-md"
              >
                <JobCard
                  title={job?.title}
                  description={job?.description}
                  jobType={job?.jobType}
                  location={job?.location}
                  skills={job?.skills}
                  key={i}
                />
              </Link>
            ))
          )}
        </div>
        <div className="flex justify-center py-10">
          <Link to="/jobs">
            <Button>Load More Jobs</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Jobs;

const JobCard = ({ title, jobType, description, skills, location }) => {
  return (
    <>
      <h4 className="mt-4 font-semibold">{title}</h4>
      <span className="text-sm capitalize text-muted-foreground">
        {jobType} • {location}
      </span>
      <p className="mt-5 text-sm text-muted-foreground">
        {description?.slice(0, 130)}...
      </p>
      <div className="mt-5 flex flex-wrap gap-3 whitespace-nowrap text-xs text-muted-foreground">
        {skills?.slice(0, 2).map((skill, i) => (
          <span className="rounded-full bg-zinc-200 px-2 py-1" key={i}>
            {skill.label}
          </span>
        ))}
        {skills?.length - 2 > 0 && (
          <span className="rounded-full bg-zinc-200 px-2 py-1">
            +{skills?.length - 2} More
          </span>
        )}
      </div>
    </>
  );
};
