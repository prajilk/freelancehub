import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import WorkPage from "../pages/work-page";

const WorksRoute = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path=":id" element={<WorkPage />} />
    </Routes>
  );
};

export default WorksRoute;
