import { useState } from "react";
import Select from "react-tailwindcss-select";
import { skillsArray } from "../../lib/skills";
import { DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";

const SkillsForm = ({ oldSkills = null }) => {
  const [skills, setSkills] = useState(oldSkills);
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default SkillsForm;
