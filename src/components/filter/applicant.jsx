import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "../ui/checkbox";
import { updateNumberOfApplicants } from "../../redux/filterSlice";

const Applicant = () => {
  const numberOfApplicants = useSelector(
    (state) => state.filter.numberOfApplicants,
  );
  const dispatch = useDispatch();

  return (
    <div className="mt-7 space-y-2">
      <h5 className="font-semibold">Number of applicants</h5>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Checkbox
            id="<5>"
            checked={numberOfApplicants["<5"]}
            onCheckedChange={(checked) =>
              dispatch(updateNumberOfApplicants({ ["<5"]: checked }))
            }
          />
          <label htmlFor="<5>" className="cursor-pointer text-sm font-medium">
            Less than 5
          </label>
        </li>
        <li className="flex items-center gap-2">
          <Checkbox
            id="5-10"
            checked={numberOfApplicants["5-10"]}
            onCheckedChange={(checked) =>
              dispatch(updateNumberOfApplicants({ ["5-10"]: checked }))
            }
          />
          <label htmlFor="5-10" className="cursor-pointer text-sm font-medium">
            5 to 10
          </label>
        </li>
        <li className="flex items-center gap-2">
          <Checkbox
            id="10-15"
            checked={numberOfApplicants["10-15"]}
            onCheckedChange={(checked) =>
              dispatch(updateNumberOfApplicants({ ["10-15"]: checked }))
            }
          />
          <label htmlFor="10-15" className="cursor-pointer text-sm font-medium">
            10 to 15
          </label>
        </li>
        <li className="flex items-center gap-2">
          <Checkbox
            id="15-20"
            checked={numberOfApplicants["15-20"]}
            onCheckedChange={(checked) =>
              dispatch(updateNumberOfApplicants({ ["15-20"]: checked }))
            }
          />
          <label htmlFor="15-20" className="cursor-pointer text-sm font-medium">
            15 to 20
          </label>
        </li>
        <li className="flex items-center gap-2">
          <Checkbox
            id=">20"
            checked={numberOfApplicants[">20"]}
            onCheckedChange={(checked) =>
              dispatch(updateNumberOfApplicants({ [">20"]: checked }))
            }
          />
          <label htmlFor=">20" className="cursor-pointer text-sm font-medium">
            More than 20
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Applicant;
