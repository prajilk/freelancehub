import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AboutForm from "../forms/about-section";

const AboutModal = ({ about = "" }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
          <Pencil size={18} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit About Sections</DialogTitle>
          <AboutForm about={about} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AboutModal;
