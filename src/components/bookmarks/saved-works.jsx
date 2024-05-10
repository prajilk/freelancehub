import WorkCard from "../work-card";

const SavedWorks = () => {
  return (
    <div>
      <h1 className="my-4 text-2xl font-semibold">Saved Works</h1>
      <div className="space-y-4">
        <WorkCard
          applicants={120}
          country={"India"}
          experience="Intermediate"
          skills={["React", "HTML", "CSS"]}
          title={"Develop landing page for a business"}
        />
      </div>
    </div>
  );
};

export default SavedWorks;
