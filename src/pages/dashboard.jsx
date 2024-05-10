import { useWorks } from "../api/work/get-works";
import WorkFilter from "../components/filter/work-filter";
import DashboardNav from "../components/nav/dashboard-nav";
import Search from "../components/search";
import WorkJobCardSkeletons from "../components/skeletons/work-card";
import WorkCard from "../components/work-card";

const Dashboard = () => {
  const { data: works, isLoading } = useWorks();

  return (
    <>
      <DashboardNav />
      <div className="container-lg my-10 grid grid-cols-4 gap-3">
        <div className="hidden lg:block">
          <WorkFilter />
        </div>
        <div className="col-span-4 space-y-5 lg:col-span-3">
          <Search searchFor="work" />
          {isLoading ? (
            <>
              <WorkJobCardSkeletons />
              <WorkJobCardSkeletons />
            </>
          ) : (
            works && works.map((work, i) => <WorkCard key={i} work={work} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
