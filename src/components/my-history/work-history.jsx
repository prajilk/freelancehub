import WorkCard from "../work-card";

const WorkHistory = () => {
  return (
    <div>
      <h1 className="my-4 text-2xl font-semibold">My Work History</h1>
      <div className="space-y-4">
        <WorkCard
          applicants={120}
          country={"India"}
          experience="Intermediate"
          skills={["React", "HTML", "CSS"]}
          title={"Develop landing page for a business"}
        />
        <WorkCard
          applicants={212}
          country={"USA"}
          experience="Entry level"
          skills={["React", "HTML", "CSS", "Javascript"]}
          title={"Convert html css to React"}
        />
      </div>
    </div>
  );
};

export default WorkHistory;
