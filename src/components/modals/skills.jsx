import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import SkillsForm from "../forms/skills-form";

const SkillsModal = ({ skills = null }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
          <Pencil size={18} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Skills</DialogTitle>
        </DialogHeader>
        <SkillsForm oldSkills={skills} />
      </DialogContent>
    </Dialog>
  );
};

export default SkillsModal;
