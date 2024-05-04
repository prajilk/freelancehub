import UploadJobApplicationForm from "../components/forms/upload-job-application";
import DashboardNav from "../components/nav/dashboard-nav";
import { Card, CardContent } from "../components/ui/card";

const UploadJob = () => {
  return (
    <>
      <DashboardNav />
      <div className="container-lg space-y-4 pt-10">
        <Card>
          <CardContent className="mt-7 space-y-5">
            <h1 className="text-2xl font-semibold">Upload a Job Application</h1>
            <UploadJobApplicationForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default UploadJob;
