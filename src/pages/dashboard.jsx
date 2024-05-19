import { useEffect, useState } from "react";
import { useWorks } from "../api/work/get-works";
import WorkFilter from "../components/filter/work-filter";
import DashboardNav from "../components/nav/dashboard-nav";
import Search from "../components/search";
import WorkJobCardSkeletons from "../components/skeletons/work-job-card";
import WorkCard from "../components/works/work-card";
import NoData from "../components/no-data";
import { useBookmarks } from "../api/bookmarks";
import { Button } from "../components/ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setWorks } from "../redux/worksSlice";

const Dashboard = () => {
  const [searchLoading, setSearchLoading] = useState(false);

  const allWorks = useSelector((state) => state.works);
  const dispatch = useDispatch();

  const {
    data: works,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
  } = useWorks();
  const { data: bookmarks } = useBookmarks();

  useEffect(() => {
    dispatch(setWorks(works?.pages.flat()));
  }, [works]);

  return (
    <>
      <DashboardNav />
      <div className="container-lg my-10 grid grid-cols-4 gap-3">
        <div className="hidden lg:block">
          <WorkFilter setSearchLoading={setSearchLoading} />
        </div>
        <div className="col-span-4 space-y-5 lg:col-span-3">
          <Search searchFor="work" setLoading={setSearchLoading} />
          {isLoading || searchLoading ? (
            <>
              <WorkJobCardSkeletons />
              <WorkJobCardSkeletons />
            </>
          ) : allWorks?.length > 0 ? (
            <>
              {allWorks.map((work, i) => (
                <WorkCard
                  key={i}
                  work={work}
                  isDefaultBookmarked={
                    bookmarks?.find((bookmark) => bookmark.workId === work._id)
                      ? true
                      : false
                  }
                />
              ))}

              {works.pages.at(-1).length === 5 && (
                <div className="flex items-center justify-center pt-5">
                  <Button onClick={fetchNextPage} disabled={isFetchingNextPage}>
                    {isFetchingNextPage ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      "Load More"
                    )}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <NoData className="pt-16">No result found!</NoData>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
