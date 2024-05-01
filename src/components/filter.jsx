import { SelectLocations } from "./select-locations";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

const Filter = () => {
  return (
    <div className="hidden h-fit rounded-lg bg-white p-4 shadow lg:block">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Filter</h4>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            Clear all
          </Button>
          <Button size="sm" className="text-xs">
            Apply filter
          </Button>
        </div>
      </div>

      {/* Location */}
      <div className="mt-7 space-y-2">
        <h5 className="font-semibold">Locations</h5>
        <SelectLocations />
      </div>

      {/* Job Type */}
      <div className="mt-7 space-y-2">
        <h5 className="font-semibold">Job Type</h5>
        <ul className="space-y-2">
          <li>
            <div className="flex items-center gap-2">
              <Checkbox id="part-time" />
              <label
                htmlFor="part-time"
                className="cursor-pointer text-sm font-medium"
              >
                Hourly
              </label>
            </div>
            <div className="mb-5 mt-2 flex gap-2">
              <Input placeholder="$ Min" />
              <Input placeholder="$ Max" />
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <Checkbox id="fulltime" />
              <label
                htmlFor="fulltime"
                className="cursor-pointer text-sm font-medium"
              >
                Fixed Price
              </label>
            </div>
            <ul className="ms-5 mt-2 space-y-2">
              <li className="flex items-center gap-2">
                <Checkbox id="fulltime" />
                <label
                  htmlFor="fulltime"
                  className="cursor-pointer text-sm font-medium"
                >
                  Less than $100
                </label>
              </li>
              <li className="flex items-center gap-2">
                <Checkbox id="fulltime" />
                <label
                  htmlFor="fulltime"
                  className="cursor-pointer text-sm font-medium"
                >
                  $100 to $500
                </label>
              </li>
              <li className="flex items-center gap-2">
                <Checkbox id="fulltime" />
                <label
                  htmlFor="fulltime"
                  className="cursor-pointer text-sm font-medium"
                >
                  $500 to $1000
                </label>
              </li>
              <li className="flex items-center gap-2">
                <Checkbox id="fulltime" />
                <label
                  htmlFor="fulltime"
                  className="cursor-pointer text-sm font-medium"
                >
                  More than $1000
                </label>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Experience Levels */}
      <div className="mt-7 space-y-2">
        <h5 className="font-semibold">Experience Levels</h5>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <Checkbox id="entry" />
            <label
              htmlFor="entry"
              className="cursor-pointer text-sm font-medium"
            >
              Entry Levels &#40;390&#41;
            </label>
          </li>
          <li className="flex items-center gap-2">
            <Checkbox id="intermediate" />
            <label
              htmlFor="intermediate"
              className="cursor-pointer text-sm font-medium"
            >
              Intermediate &#40;441&#41;
            </label>
          </li>
          <li className="flex items-center gap-2">
            <Checkbox id="expert" />
            <label
              htmlFor="expert"
              className="cursor-pointer text-sm font-medium"
            >
              Expert &#40;129&#41;
            </label>
          </li>
        </ul>
      </div>

      {/* Applicant */}
      <div className="mt-7 space-y-2">
        <h5 className="font-semibold">Number of applicants</h5>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <Checkbox id="entry" />
            <label
              htmlFor="entry"
              className="cursor-pointer text-sm font-medium"
            >
              Less than 5
            </label>
          </li>
          <li className="flex items-center gap-2">
            <Checkbox id="intermediate" />
            <label
              htmlFor="intermediate"
              className="cursor-pointer text-sm font-medium"
            >
              5 to 10
            </label>
          </li>
          <li className="flex items-center gap-2">
            <Checkbox id="expert" />
            <label
              htmlFor="expert"
              className="cursor-pointer text-sm font-medium"
            >
              10 to 15
            </label>
          </li>
          <li className="flex items-center gap-2">
            <Checkbox id="expert" />
            <label
              htmlFor="expert"
              className="cursor-pointer text-sm font-medium"
            >
              15 to 20
            </label>
          </li>
          <li className="flex items-center gap-2">
            <Checkbox id="expert" />
            <label
              htmlFor="expert"
              className="cursor-pointer text-sm font-medium"
            >
              More than 20
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
