import { useJobs } from "../api/job/get-jobs";
import JobFilter from "../components/filter/job-filter";
import JobCard from "../components/job-card";
import DashboardNav from "../components/nav/dashboard-nav";
import Search from "../components/search";
import WorkJobCardSkeletons from "../components/skeletons/work-card";

const Jobs = () => {
  const { data: jobs, isLoading } = useJobs();

  return (
    <>
      <DashboardNav />
      <div className="container-lg my-10 grid grid-cols-4 gap-3">
        <div className="hidden lg:block">
          <JobFilter />
        </div>
        <div className="col-span-4 space-y-5 lg:col-span-3">
          <Search searchFor="job" />
          {isLoading ? (
            <>
              <WorkJobCardSkeletons />
              <WorkJobCardSkeletons />
            </>
          ) : (
            jobs && jobs.map((job, i) => <JobCard key={i} job={job} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Jobs;
