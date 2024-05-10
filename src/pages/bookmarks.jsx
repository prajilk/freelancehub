import SavedJobs from "../components/bookmarks/saved-jobs";
import SavedWorks from "../components/bookmarks/saved-works";
import DashboardNav from "../components/nav/dashboard-nav";
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
          <TabsContent value="saved-jobs">
            <SavedJobs />
          </TabsContent>
          <TabsContent value="saved-works">
            <SavedWorks />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Bookmarks;
