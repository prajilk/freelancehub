import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import LoadingButton from "../ui/loading-button";
import { useSubmitApplication } from "../../api/job/submit-application";
import { useQueryClient } from "@tanstack/react-query";

const applyJobSchema = z.object({
  coverLetter: z.string().min(30, {
    message: "Cover letter must be at least 30 characters.",
  }),
});

const ApplyJobForm = ({ jobId, closeSheet }) => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(applyJobSchema),
    defaultValues: {
      coverLetter: "",
    },
  });

  const queryClient = useQueryClient();

  function onSuccess(response) {
    toast.success(response.message);
    form.setValue("coverLetter", "");
    queryClient.invalidateQueries(["job", jobId]);
    closeSheet();
  }

  const mutation = useSubmitApplication(onSuccess);

  // 2. Define a submit handler.
  function onSubmit(values) {
    mutation.mutate({
      ...values,
      jobId,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="coverLetter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Letter</FormLabel>
              <FormControl>
                <Textarea
                  rows={10}
                  className="border-2 border-zinc-200"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton isLoading={mutation.isPending} type="submit">
          Submit
        </LoadingButton>
      </form>
    </Form>
  );
};

export default ApplyJobForm;
