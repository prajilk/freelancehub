import { useEffect, useState } from "react";
import { useJobs } from "../api/job/get-jobs";
import JobFilter from "../components/filter/job-filter";
import JobCard from "../components/jobs/job-card";
import DashboardNav from "../components/nav/dashboard-nav";
import Search from "../components/search";
import WorkJobCardSkeletons from "../components/skeletons/work-job-card";
import NoData from "../components/no-data";
import { useBookmarks } from "../api/bookmarks";
import { Button } from "../components/ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../redux/jobsSlice";

const Jobs = () => {
  const [searchLoading, setSearchLoading] = useState(false);

  const allJobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  const {
    data: jobs,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
  } = useJobs();
  const { data: bookmarks } = useBookmarks();

  useEffect(() => {
    dispatch(setJobs(jobs?.pages.flat()));
  }, [jobs]);

  return (
    <>
      <DashboardNav />
      <div className="container-lg my-10 grid grid-cols-4 gap-3">
        <div className="hidden lg:block">
          <JobFilter setSearchLoading={setSearchLoading} />
        </div>
        <div className="col-span-4 space-y-5 lg:col-span-3">
          <Search searchFor="job" setLoading={setSearchLoading} />
          {isLoading || searchLoading ? (
            <>
              <WorkJobCardSkeletons />
              <WorkJobCardSkeletons />
            </>
          ) : allJobs?.length > 0 ? (
            <>
              {allJobs.map((job, i) => (
                <JobCard
                  key={i}
                  job={job}
                  isDefaultBookmarked={
                    bookmarks?.find((bookmark) => bookmark.jobId === job._id)
                      ? true
                      : false
                  }
                />
              ))}

              {jobs.pages.at(-1).length === 5 && (
                <div className="flex items-center justify-center pt-5">
                  <Button onClick={fetchNextPage} disabled={isFetchingNextPage}>
                    {isFetchingNextPage ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      "Load More"
                    )}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <NoData className="pt-16">No result found!</NoData>
          )}
        </div>
      </div>
    </>
  );
};

export default Jobs;
