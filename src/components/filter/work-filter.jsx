import { Button } from "../ui/button";
import Applicant from "./applicant";
import Experience from "./experience";
import JobType from "./job-type";
import Location from "./location";

const WorkFilter = () => {
  return (
    <div className="h-fit rounded-lg bg-white p-4 shadow">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Filter</h4>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-destructive transition-transform duration-300 hover:bg-destructive/10 hover:text-destructive active:scale-95"
          >
            Clear all
          </Button>
          <Button
            size="sm"
            className="text-xs transition-transform duration-300 active:scale-95"
          >
            Apply filter
          </Button>
        </div>
      </div>

      {/* Location */}
      <Location />

      {/* Job Type */}
      <JobType />

      {/* Experience Levels */}
      <Experience />

      {/* Applicant */}
      <Applicant />
    </div>
  );
};

export default WorkFilter;
