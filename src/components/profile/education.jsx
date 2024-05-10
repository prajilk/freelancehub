import { Pencil, Plus, Trash2 } from "lucide-react";
import { useSelector } from "react-redux";

const Education = () => {
  const viewMode = useSelector((state) => state.profileViewMode);
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Education</h1>
        {!viewMode && (
          <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
            <Plus size={20} />
          </button>
        )}
      </div>
      <ul className="mt-3">
        <li>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">University of Chicago</h3>
            {!viewMode && (
              <div className="flex gap-1">
                <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
                  <Pencil size={20} />
                </button>
                <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
                  <Trash2 size={18} />
                </button>
              </div>
            )}
          </div>
          <h4 className="text-sm text-muted-foreground">
            Bachelor's degree, User Experience
          </h4>
          <span className="text-sm text-muted-foreground">2015 - 2018</span>
        </li>
      </ul>
    </>
  );
};

export default Education;
