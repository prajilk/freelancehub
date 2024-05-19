import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import {
  updateFixed,
  updateHourly,
  updateHourlyMax,
  updateHourlyMin,
} from "../../redux/filterSlice";

const WorkMode = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="mt-7 space-y-2">
      <h5 className="font-semibold">Job Type</h5>
      <ul className="space-y-2">
        <li>
          <div className="flex items-center gap-2">
            <Checkbox
              id="hourly"
              checked={filter.hourly}
              onCheckedChange={() => dispatch(updateHourly())}
            />
            <label
              htmlFor="hourly"
              className="cursor-pointer text-sm font-medium"
            >
              Hourly
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <Checkbox
              id="fixed"
              checked={filter.fixed}
              onCheckedChange={() => dispatch(updateFixed())}
            />
            <label
              htmlFor="fixed"
              className="cursor-pointer text-sm font-medium"
            >
              Fixed Price
            </label>
          </div>
        </li>
        <li>
          <div className="mb-5 mt-2 flex gap-2">
            <Input
              placeholder="$ Min"
              value={filter.paymentMin}
              onChange={(e) => dispatch(updateHourlyMin(e.target.value))}
              type="number"
              min={0}
            />
            <Input
              placeholder="$ Max"
              value={filter.paymentMax}
              onChange={(e) => dispatch(updateHourlyMax(e.target.value))}
              type="number"
              min={0}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WorkMode;
