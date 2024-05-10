import { useSelector } from "react-redux";
import WorkCard from "../work-card";
import { useUserWorks } from "../../api/work/get-user-works";
import WorkJobCardSkeletons from "../skeletons/work-card";
import NoData from "../no-data";

const UploadedWorks = () => {
  const userId = useSelector((state) => state.user._id);
  const { data: myWorks, isLoading } = useUserWorks(userId);

  return (
    <div>
      <h1 className="my-4 text-2xl font-semibold">Uploaded Works History</h1>
      <div className="space-y-4">
        {isLoading ? (
          <WorkJobCardSkeletons />
        ) : myWorks?.length > 0 ? (
          myWorks.map((work, i) => <WorkCard work={work} key={i} />)
        ) : (
          <NoData>No Works to display!</NoData>
        )}
      </div>
    </div>
  );
};

export default UploadedWorks;
