import { Checkbox } from "../ui/checkbox";

const Applicant = () => {
  return (
    <div className="mt-7 space-y-2">
      <h5 className="font-semibold">Number of applicants</h5>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Checkbox id="entry" />
          <label htmlFor="entry" className="cursor-pointer text-sm font-medium">
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
  );
};

export default Applicant;
