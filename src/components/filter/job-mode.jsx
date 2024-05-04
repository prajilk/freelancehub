import { Checkbox } from "../ui/checkbox";

const JobMode = () => {
  return (
    <div className="mt-7 space-y-2">
      <h5 className="font-semibold">Job Mode</h5>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Checkbox id="remote" />
          <label
            htmlFor="remote"
            className="cursor-pointer text-sm font-medium"
          >
            Remote
          </label>
        </li>
        <li className="flex items-center gap-2">
          <Checkbox id="on-site" />
          <label
            htmlFor="on-site"
            className="cursor-pointer text-sm font-medium"
          >
            On-Site
          </label>
        </li>
        <li className="flex items-center gap-2">
          <Checkbox id="hybrid" />
          <label
            htmlFor="hybrid"
            className="cursor-pointer text-sm font-medium"
          >
            Hybrid
          </label>
        </li>
      </ul>
    </div>
  );
};

export default JobMode;
