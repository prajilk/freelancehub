import UploadWorkProposalForm from "../components/forms/upload-work-proposal";
import DashboardNav from "../components/nav/dashboard-nav";
import { Card, CardContent } from "../components/ui/card";

const UploadFreelance = () => {
  return (
    <>
      <DashboardNav />
      <div className="container-lg space-y-4 pt-10">
        <Card>
          <CardContent className="mt-7 space-y-5">
            <h1 className="text-2xl font-semibold">
              Upload a Freelance work proposal
            </h1>
            <UploadWorkProposalForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default UploadFreelance;
