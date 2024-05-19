import { useBookmarkedJobs } from "../../api/bookmarked-jobs";
import { useBookmarks } from "../../api/bookmarks";
import JobCard from "../jobs/job-card";
import NoData from "../no-data";
import WorkJobCardSkeletons from "../skeletons/work-job-card";

const SavedJobs = () => {
  const { data: jobs, isLoading } = useBookmarkedJobs();
  const { data: bookmarks } = useBookmarks();

  if (isLoading) {
    return <WorkJobCardSkeletons />;
  }

  return (
    <>
      {jobs?.length === 0 ? (
        <NoData>No Saved Jobs</NoData>
      ) : (
        jobs?.map((job, i) => (
          <JobCard
            isDefaultBookmarked={
              bookmarks.find((bookmark) => bookmark.jobId === job.jobId)
                ? true
                : false
            }
            job={job.jobs}
            key={i}
          />
        ))
      )}
    </>
  );
};

export default SavedJobs;
