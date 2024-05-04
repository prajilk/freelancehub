import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

const JobType = () => {
  return (
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
  );
};

export default JobType;
