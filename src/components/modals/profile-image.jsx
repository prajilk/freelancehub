import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

const ProfileImageModal = ({ image = "" }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="absolute right-0 top-0 m-3 flex size-10 items-center justify-center rounded-full border bg-[#BDDCCF] text-primary">
          <Pencil size={18} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile Picture</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-5">
          <label htmlFor="profileImage">
            <img
              src="https://i.pravatar.cc/500?img=32"
              alt="Profile"
              className="size-36 rounded-full md:size-44"
            />
            <input
              type="file"
              className="hidden"
              id="profileImage"
              accept="image/x-png,image/gif,image/jpeg,image/webp"
            />
          </label>
          <div className="flex items-center gap-2">
            <Checkbox id="work" checked />
            <Label htmlFor="work" className="cursor-pointer">
              Looking for work
            </Label>
          </div>
          <div className="space-x-2">
            <Button
              variant="sm"
              className="bg-destructive/20 text-destructive hover:bg-destructive/30"
            >
              Cancel
            </Button>
            <Button
              variant="sm"
              className="bg-primary/20 text-primary hover:bg-primary/30"
            >
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileImageModal;
