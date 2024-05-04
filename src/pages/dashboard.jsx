import WorkFilter from "../components/filter/work-filter";
import DashboardNav from "../components/nav/dashboard-nav";
import Search from "../components/search";
import WorkCard from "../components/work-card";

const Dashboard = () => {
  return (
    <>
      <DashboardNav />
      <div className="container-lg my-10 grid grid-cols-4 gap-3">
        <div className="hidden lg:block">
          <WorkFilter />
        </div>
        <div className="col-span-4 space-y-5 lg:col-span-3">
          <Search searchFor="work" />
          <WorkCard
            title="Building end-to-end crowdfunding application"
            country="India"
            experience="Expert"
            applicants={14}
            skills={["Kotlin", "IOS Developer", "Software Engineer"]}
          />
          <WorkCard
            title="UX Copywriter for company profile landing page"
            country="USA"
            experience="Intermediate"
            applicants={20}
            skills={["UX Copywriter", "UX Writer", "Copywriter"]}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
