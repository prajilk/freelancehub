import { useSelector } from "react-redux";
import { useUserJobs } from "../../api/job/get-user-jobs";
import JobCard from "../jobs/job-card";
import WorkJobCardSkeletons from "../skeletons/work-job-card";
import NoData from "../no-data";

const UploadedJobs = () => {
  const userId = useSelector((state) => state.user._id);
  const { data: myJobs, isLoading } = useUserJobs(userId);

  return (
    <div>
      <h1 className="my-4 text-2xl font-semibold">Uploaded Jobs History</h1>
      <div className="space-y-4">
        {isLoading ? (
          <WorkJobCardSkeletons />
        ) : myJobs?.length > 0 ? (
          myJobs.map((job, i) => <JobCard job={job} key={i} />)
        ) : (
          <NoData>No Jobs to display!</NoData>
        )}
      </div>
    </div>
  );
};

export default UploadedJobs;
