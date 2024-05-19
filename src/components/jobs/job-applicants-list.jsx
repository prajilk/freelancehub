import { useSelector } from "react-redux";
import JobApplicantCard from "./job-applicant-card";
import { useJobApplications } from "../../api/job/get-job-applications";
import ApplicantCardSkeleton from "../skeletons/applicant-card";
import NoData from "../no-data";

const JobApplicantsList = ({ jobId, userId }) => {
  const user = useSelector((state) => state.user._id);
  const isAdmin = user === userId;

  if (!isAdmin) {
    return null;
  }

  const { data: applications, isLoading } = useJobApplications(jobId);

  return (
    <div className="my-10 space-y-3">
      <h1 className="mb-4 text-2xl font-semibold">List of Applicants</h1>
      {isLoading ? (
        <ApplicantCardSkeleton />
      ) : applications?.length > 0 ? (
        applications.map((application, i) => (
          <JobApplicantCard key={i} application={application} user={user} />
        ))
      ) : (
        <NoData>Not received any applications yet!</NoData>
      )}
    </div>
  );
};

export default JobApplicantsList;
