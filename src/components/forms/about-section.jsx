import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DialogClose } from "../ui/dialog";
import { useUpdateAbout } from "../../api/about";
import { toast } from "sonner";
import LoadingButton from "../ui/loading-button";
import { useDispatch } from "react-redux";
import { updateAbout } from "../../redux/userSlice";

const aboutSchema = z.object({
  about: z.string().min(100, {
    message: "About section must be at least 100 characters.",
  }),
});

const AboutForm = ({ about = "" }) => {
  const form = useForm({
    resolver: zodResolver(aboutSchema),
    defaultValues: {
      about: about,
    },
  });

  const dispatch = useDispatch();

  function onSuccess() {
    dispatch(updateAbout(form.getValues().about));
    toast.success("About section updated successfully.");
  }

  const mutation = useUpdateAbout(onSuccess);

  // 2. Define a submit handler.
  function onSubmit(values) {
    mutation.mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 pt-3">
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Profile about section"
                  {...field}
                  className="scrollbar-thin border border-zinc-300 bg-white focus:border-zinc-500"
                  rows={15}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2">
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
    </Form>
  );
};

export default AboutForm;
