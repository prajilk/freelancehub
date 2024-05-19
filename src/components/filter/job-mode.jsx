import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "../ui/checkbox";
import { updateJobType } from "../../redux/filterSlice";

const JobMode = () => {
  const jobType = useSelector((state) => state.filter.jobType);
  const dispatch = useDispatch();

  return (
    <div className="mt-7 space-y-2">
      <h5 className="font-semibold">Job Mode</h5>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Checkbox
            id="remote"
            checked={jobType.remote}
            onCheckedChange={(checked) =>
              dispatch(updateJobType({ remote: checked }))
            }
          />
          <label
            htmlFor="remote"
            className="cursor-pointer text-sm font-medium"
          >
            Remote
          </label>
        </li>
        <li className="flex items-center gap-2">
          <Checkbox
            id="on-site"
            checked={jobType.onSite}
            onCheckedChange={(checked) =>
              dispatch(updateJobType({ onSite: checked }))
            }
          />
          <label
            htmlFor="on-site"
            className="cursor-pointer text-sm font-medium"
          >
            On-Site
          </label>
        </li>
        <li className="flex items-center gap-2">
          <Checkbox
            id="hybrid"
            checked={jobType.hybrid}
            onCheckedChange={(checked) =>
              dispatch(updateJobType({ hybrid: checked }))
            }
          />
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
