import { useSelector } from "react-redux";
import WorkApplicantCard from "./work-applicant-card";
import { useWorkProposals } from "../api/work/get-work-proposals";
import ApplicantCardSkeleton from "./skeletons/applicant-card";
import NoData from "./no-data";

const WorkApplicantsList = ({ workId, userId }) => {
  const user = useSelector((state) => state.user._id);
  const isAdmin = user === userId;

  if (!isAdmin) {
    return null;
  }

  const { data: proposals, isLoading } = useWorkProposals(workId);

  return (
    <div className="my-10 space-y-3">
      <h1 className="mb-4 text-2xl font-semibold">List of Applicants</h1>
      {isLoading ? (
        <ApplicantCardSkeleton />
      ) : proposals ? (
        proposals.map((proposal, i) => (
          <WorkApplicantCard proposal={proposal} key={i} />
        ))
      ) : (
        <NoData>Not received any applications yet!</NoData>
      )}
    </div>
  );
};

export default WorkApplicantsList;
