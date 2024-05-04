import { Checkbox } from "../ui/checkbox";

const Experience = () => {
  return (
    <div className="mt-7 space-y-2">
      <h5 className="font-semibold">Experience Levels</h5>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Checkbox id="entry" />
          <label htmlFor="entry" className="cursor-pointer text-sm font-medium">
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
  );
};

export default Experience;
