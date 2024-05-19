import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "../ui/checkbox";
import { updateExperience } from "../../redux/filterSlice";

const Experience = () => {
  const experience = useSelector((state) => state.filter.experience);
  const dispatch = useDispatch();

  return (
    <div className="mt-7 space-y-2">
      <h5 className="font-semibold">Experience Levels</h5>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Checkbox
            id="entry"
            checked={experience.entry}
            onCheckedChange={(checked) =>
              dispatch(updateExperience({ entry: checked }))
            }
          />
          <label htmlFor="entry" className="cursor-pointer text-sm font-medium">
            Entry Levels
          </label>
        </li>
        <li className="flex items-center gap-2">
          <Checkbox
            id="intermediate"
            checked={experience.intermediate}
            onCheckedChange={(checked) =>
              dispatch(updateExperience({ intermediate: checked }))
            }
          />
          <label
            htmlFor="intermediate"
            className="cursor-pointer text-sm font-medium"
          >
            Intermediate
          </label>
        </li>
        <li className="flex items-center gap-2">
          <Checkbox
            id="expert"
            checked={experience.expert}
            onCheckedChange={(checked) =>
              dispatch(updateExperience({ expert: checked }))
            }
          />
          <label
            htmlFor="expert"
            className="cursor-pointer text-sm font-medium"
          >
            Expert
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
