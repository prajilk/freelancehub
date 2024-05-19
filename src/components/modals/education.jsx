import { Pencil, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import EducationForm from "../forms/education";
import { useState } from "react";

const EducationModal = ({ isEdit = false, educationData }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {isEdit ? (
          <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
            <Pencil size={20} />
          </button>
        ) : (
          <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
            <Plus size={20} />
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl">
            {isEdit ? "Edit" : "Add"} Education
          </DialogTitle>
          <EducationForm
            isEdit={isEdit}
            educationData={educationData}
            closeDialog={() => setOpen(false)}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EducationModal;
