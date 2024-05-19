import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import LoadingButton from "../ui/loading-button";
import { Trash2 } from "lucide-react";
import { useDeleteEducation } from "../../api/delete-education";
import { useDispatch } from "react-redux";
import { deleteEducation } from "../../redux/userSlice";

const DeleteEducation = ({ educationId }) => {
  const dispatch = useDispatch();

  function onSuccess() {
    toast.success("Education deleted successfully");
    dispatch(deleteEducation(educationId));
  }

  const mutation = useDeleteEducation(onSuccess);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
          <Trash2 size={18} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className={"space-y-4"}>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete this
            education and remove all data from our servers.
          </DialogDescription>
          <div className="flex justify-end gap-3 pt-7">
            <DialogClose asChild>
              <Button
                variant="ghost"
                className="hover:bg-zinc-200 hover:text-black"
              >
                Cancel
              </Button>
            </DialogClose>
            <LoadingButton
              isLoading={mutation.isPending}
              variant="destructive"
              onClick={() => mutation.mutate(educationId)}
            >
              Delete
            </LoadingButton>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteEducation;
