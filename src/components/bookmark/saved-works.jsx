import { useBookmarkedWorks } from "../../api/bookmarked-works";
import { useBookmarks } from "../../api/bookmarks";
import NoData from "../no-data";
import WorkJobCardSkeletons from "../skeletons/work-job-card";
import WorkCard from "../works/work-card";

const SavedWorks = () => {
  const { data: works, isLoading } = useBookmarkedWorks();
  const { data: bookmarks } = useBookmarks();

  if (isLoading) {
    return <WorkJobCardSkeletons />;
  }

  return (
    <>
      {works?.length === 0 ? (
        <NoData>No Saved Works</NoData>
      ) : (
        works?.map((work, i) => (
          <WorkCard
            isDefaultBookmarked={
              bookmarks.find((bookmark) => bookmark.workId === work.workId)
                ? true
                : false
            }
            work={work.works}
            key={i}
          />
        ))
      )}
    </>
  );
};

export default SavedWorks;
