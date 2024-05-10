import { Pencil, Plus } from "lucide-react";
import { useSelector } from "react-redux";

const Languages = () => {
  const viewMode = useSelector((state) => state.profileViewMode);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Languages</h1>
        {!viewMode && (
          <div className="flex gap-2">
            <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
              <Plus size={20} />
            </button>
            <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
              <Pencil size={18} />
            </button>
          </div>
        )}
      </div>
      <ul className="mt-3 space-y-2">
        <li className="font-medium">
          English: <span className="text-muted-foreground">Fluent</span>
        </li>
        <li className="font-medium">
          Spanish: <span className="text-muted-foreground">Conversational</span>
        </li>
      </ul>
    </>
  );
};

export default Languages;
