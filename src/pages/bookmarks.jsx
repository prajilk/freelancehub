import SavedJobs from "../components/bookmark/saved-jobs";
import SavedWorks from "../components/bookmark/saved-works";
import DashboardNav from "../components/nav/dashboard-nav";
import NoData from "../components/no-data";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const Bookmarks = () => {
  return (
    <>
      <DashboardNav />
      <div className="container-lg mt-7">
        <h1 className="text-2xl font-semibold">Bookmarks</h1>
        <Tabs defaultValue="saved-works" className="mt-5">
          <TabsList className="bg-transparent">
            <TabsTrigger
              value="saved-works"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Saved works
            </TabsTrigger>
            <TabsTrigger
              value="saved-jobs"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Saved jobs
            </TabsTrigger>
          </TabsList>
          <TabsContent value="saved-jobs" className="pt-5">
            <SavedJobs />
          </TabsContent>
          <TabsContent value="saved-works" className="pt-5">
            <SavedWorks />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Bookmarks;
