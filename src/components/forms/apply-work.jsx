import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import { FaDollarSign } from "react-icons/fa";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { toast } from "sonner";
import { useSubmitProposal } from "../../api/work/submit-proposal";
import LoadingButton from "../ui/loading-button";
import { useQueryClient } from "@tanstack/react-query";

const applyWorkSchema = z.object({
  charge: z.coerce.number().gt(0),
  coverLetter: z.string().min(30, {
    message: "Cover letter must be at least 30 characters.",
  }),
  paymentType: z.enum(["hourly", "one-time"]),
});

const ApplyWorkForm = ({ workId, closeSheet }) => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(applyWorkSchema),
    defaultValues: {
      charge: 0,
      coverLetter: "",
      paymentType: "hourly",
    },
  });

  const queryClient = useQueryClient();

  function onSuccess(response) {
    toast.success(response.message);
    form.setValue("charge", 0);
    form.setValue("coverLetter", "");
    queryClient.invalidateQueries(["work", workId]);
    closeSheet();
  }

  const mutation = useSubmitProposal(onSuccess);

  // 2. Define a submit handler.
  function onSubmit(values) {
    mutation.mutate({
      ...values,
      workId,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="paymentType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-5"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="hourly" />
                    </FormControl>
                    <FormLabel className="font-normal">Hourly</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="one-time" />
                    </FormControl>
                    <FormLabel className="font-normal">One time</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="charge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Charge</FormLabel>
              <FormControl>
                <Input
                  startIcon={<FaDollarSign className="text-zinc-400" />}
                  className="border-2 border-zinc-200"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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

export default ApplyWorkForm;
