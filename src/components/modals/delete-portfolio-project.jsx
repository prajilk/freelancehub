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
import { useDeletePortfolioProject } from "../../api/job/delete-portfolio-project";
import { useDispatch } from "react-redux";
import { deletePortfolio } from "../../redux/portfolioSlice";
import { useState } from "react";

const DeletePortfolioProject = ({ projectId, closeDrawer }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  function onSuccess(response) {
    toast.success(response.message);
    dispatch(deletePortfolio(projectId));
    setOpen(false);
    closeDrawer();
  }

  const mutation = useDeletePortfolioProject(onSuccess);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          className="mt-7 gap-1 bg-destructive/20 text-destructive hover:bg-destructive/30"
        >
          <Trash2 size={18} />
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className={"space-y-4"}>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete this
            project and remove all data from our servers.
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
              onClick={() => mutation.mutate(projectId)}
            >
              Delete
            </LoadingButton>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePortfolioProject;
