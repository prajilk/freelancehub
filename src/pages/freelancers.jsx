import JobFilter from "../components/filter/job-filter";
import DashboardNav from "../components/nav/dashboard-nav";
import Search from "../components/search";

const Freelancers = () => {
  return (
    <>
      <DashboardNav />
      <div className="container-lg my-10 grid grid-cols-4 gap-3">
        <div className="hidden lg:block">
          <JobFilter />
        </div>
        <div className="col-span-4 space-y-5 lg:col-span-3">
          <Search searchFor="job" />
        </div>
      </div>
    </>
  );
};

export default Freelancers;
