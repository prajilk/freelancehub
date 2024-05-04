import { Route, Routes } from "react-router-dom";
import UploadProposals from "../pages/upload-proposals";
import UploadFreelance from "../pages/upload-freelance";
import UploadJob from "../pages/upload-job";

const UploadProposalRoutes = () => {
  return (
    <Routes>
      <Route index element={<UploadProposals />} />
      <Route path="freelance" element={<UploadFreelance />} />
      <Route path="job" element={<UploadJob />} />
    </Routes>
  );
};

export default UploadProposalRoutes;
