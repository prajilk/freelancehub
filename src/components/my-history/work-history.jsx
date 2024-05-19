import { useWorkHistory } from "../../api/work/get-work-history";
import NoData from "../no-data";
import WorkJobCardSkeletons from "../skeletons/work-job-card";
import WorkCard from "../works/work-card";

const WorkHistory = () => {
  const { data: workHistory, isLoading } = useWorkHistory();

  return (
    <div>
      <h1 className="my-4 text-2xl font-semibold">My Work History</h1>
      <div className="space-y-4">
        {isLoading ? (
          <>
            <WorkJobCardSkeletons />
            <WorkJobCardSkeletons />
          </>
        ) : workHistory?.length > 0 ? (
          workHistory.map((work, i) => <WorkCard work={work.work} />)
        ) : (
          <NoData>Work history is empty!</NoData>
        )}
      </div>
    </div>
  );
};

export default WorkHistory;
