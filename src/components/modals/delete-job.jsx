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
import { useNavigate } from "react-router-dom";
import { useDeleteJob } from "../../api/job/delete-job";

const DeleteJob = ({ jobId }) => {
  const navigate = useNavigate();
  function onSuccess(response) {
    toast.success(response.message);
    navigate("/dashboard/my-history?tab=uploaded-jobs", { replace: true });
  }

  const mutation = useDeleteJob(onSuccess);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="bg-transparent p-0 text-sm text-destructive hover:bg-transparent hover:underline"
        >
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className={"space-y-4"}>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete this job
            and remove all data from our servers.
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
              onClick={() => mutation.mutate(jobId)}
            >
              Delete
            </LoadingButton>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteJob;
