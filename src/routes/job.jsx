import React from "react";
import { Route, Routes } from "react-router-dom";
import Jobs from "../pages/jobs";
import JobPage from "../pages/job-page";

const JobsRoute = () => {
  return (
    <Routes>
      <Route index element={<Jobs />} />
      <Route path=":id" element={<JobPage />} />
    </Routes>
  );
};

export default JobsRoute;
