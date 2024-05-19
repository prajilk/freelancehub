import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import Applicant from "./applicant";
import JobMode from "./job-mode";
import Location from "./location";
import { clearFilter } from "../../redux/filterSlice";
import { useSearchJobs } from "../../api/job/search-jobs";

const JobFilter = ({ setAllJobs, setSearchLoading }) => {
  const filter = useSelector((state) => state.filter);
  const search = useSelector((state) => state.searchQuery);
  const dispatch = useDispatch();

  const mutation = useSearchJobs();

  if (mutation.data) setAllJobs(mutation.data);
  setSearchLoading(mutation.isPending);

  function handleApplyFilter() {
    mutation.mutate({ filter, search });
  }

  return (
    <div className="h-fit rounded-lg bg-white p-4 shadow">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Filter</h4>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-destructive transition-transform duration-300 hover:bg-destructive/10 hover:text-destructive active:scale-95"
            onClick={() => dispatch(clearFilter())}
          >
            Clear all
          </Button>
          <Button
            size="sm"
            className="text-xs transition-transform duration-300 active:scale-95"
            onClick={handleApplyFilter}
          >
            Apply filter
          </Button>
        </div>
      </div>

      {/* Location */}
      <Location />

      {/* Job mode */}
      <JobMode />

      {/* Applicant */}
      <Applicant />
    </div>
  );
};

export default JobFilter;
