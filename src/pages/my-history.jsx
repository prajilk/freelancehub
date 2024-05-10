import { useSearchParams } from "react-router-dom";
import UploadedJobs from "../components/my-history/uploaded-jobs";
import UploadedWorks from "../components/my-history/uploaded-works";
import WorkHistory from "../components/my-history/work-history";
import DashboardNav from "../components/nav/dashboard-nav";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const MyHistory = () => {
  const tab = useSearchParams()[0].get("tab") || "work-history";

  return (
    <>
      <DashboardNav />
      <div className="container-lg mt-4">
        <Tabs defaultValue={tab}>
          <TabsList className="bg-transparent">
            <TabsTrigger
              value="work-history"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Work history
            </TabsTrigger>
            <TabsTrigger
              value="uploaded-jobs"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Uploaded jobs
            </TabsTrigger>
            <TabsTrigger
              value="uploaded-works"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Uploaded works
            </TabsTrigger>
          </TabsList>
          <TabsContent value="work-history">
            <WorkHistory />
          </TabsContent>
          <TabsContent value="uploaded-jobs">
            <UploadedJobs />
          </TabsContent>
          <TabsContent value="uploaded-works">
            <UploadedWorks />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default MyHistory;
