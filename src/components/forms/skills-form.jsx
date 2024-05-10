import { useState } from "react";
import Select from "react-tailwindcss-select";
import { skillsArray } from "../../lib/skills";
import { DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
import { useUpdatedSkills } from "../../api/skills";
import LoadingButton from "../ui/loading-button";
import { useDispatch } from "react-redux";
import { updateSkills } from "../../redux/userSlice";
import { toast } from "sonner";

const SkillsForm = ({ oldSkills = null }) => {
  const [skills, setSkills] = useState(oldSkills);
  const dispatch = useDispatch();

  function onSuccess() {
    dispatch(updateSkills(skills));
    toast.success("Skills updated successfully");
  }

  const mutation = useUpdatedSkills(onSuccess);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(skills);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Select
        value={skills}
        onChange={(value) => setSkills(value)}
        options={skillsArray}
        classNames={{
          list: "max-h-40 overflow-y-scroll scrollbar-thin",
        }}
        placeholder="Type to add skills"
        isClearable
        isMultiple
        isSearchable
        primaryColor="green"
      />
      <div className="mt-10 flex justify-end gap-2">
        <DialogClose asChild>
          <Button
            type="button"
            variant="ghost"
            className="hover:bg-zinc-200 hover:text-black"
          >
            Cancel
          </Button>
        </DialogClose>
        <LoadingButton isLoading={mutation.isPending} type="submit">
          Save
        </LoadingButton>
      </div>
    </form>
  );
};

export default SkillsForm;
