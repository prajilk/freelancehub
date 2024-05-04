import JobFilter from "../components/filter/job-filter";
import JobCard from "../components/job-card";
import DashboardNav from "../components/nav/dashboard-nav";
import Search from "../components/search";

const Jobs = () => {
  return (
    <>
      <DashboardNav />
      <div className="container-lg my-10 grid grid-cols-4 gap-3">
        <div className="hidden lg:block">
          <JobFilter />
        </div>
        <div className="col-span-4 space-y-5 lg:col-span-3">
          <Search searchFor="job" />
          <JobCard
            applicants={120}
            country="India"
            image={"/grapho.png"}
            skills={["HTML", "css", "React", "JavaScript"]}
            title={"React developer"}
          />
          <JobCard
            applicants={161}
            country="USA"
            image={"/dexign.png"}
            skills={["Figma", "Adobe XD", "Photoshop"]}
            title={"UI/UX Designer"}
          />
        </div>
      </div>
    </>
  );
};

export default Jobs;
