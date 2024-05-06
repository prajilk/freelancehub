import JobCard from "../job-card";

const UploadedJobs = () => {
  return (
    <div>
      <h1 className="my-4 text-2xl font-semibold">Uploaded Jobs History</h1>
      <div className="space-y-4">
        <JobCard
          image="/grapho.png"
          title="React developer"
          applicants={122}
          country={"India"}
          skills={["React", "HTML", "CSS"]}
        />
      </div>
    </div>
  );
};

export default UploadedJobs;
