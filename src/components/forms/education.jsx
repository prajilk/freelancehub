import { z } from "zod";
import { endYear, startYear } from "../../lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
import LoadingButton from "../ui/loading-button";
import { toast } from "sonner";
import { useCreateEducation } from "../../api/create-education";
import { useDispatch } from "react-redux";
import { editEducation, updateEducation } from "../../redux/userSlice";
import { useEditEducation } from "../../api/edit-education";

const educationSchema = z.object({
  school: z.string().min(3, {
    message: "School must be at least 3 characters.",
  }),
  degree: z.string().min(3, {
    message: "Degree must be at least 3 characters.",
  }),
  startYear: z.enum(startYear, { message: "Please select a valid year" }),
  endYear: z.enum([...startYear, ...endYear], {
    message: "Please select a valid year",
  }),
});

const EducationForm = ({ closeDialog, isEdit = false, educationData }) => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      school: isEdit ? educationData.school : "",
      degree: isEdit ? educationData.degree : "",
      startYear: isEdit ? educationData.startYear : "",
      endYear: isEdit ? educationData.endYear : "",
    },
  });

  const dispatch = useDispatch();

  function onCreateSuccess() {
    toast.success("Education added successfully.");
    dispatch(updateEducation(form.getValues()));
    closeDialog();
  }

  function onEditSuccess() {
    toast.success("Education edited successfully.");
    dispatch(editEducation({ _id: educationData._id, ...form.getValues() }));
    closeDialog();
  }

  const mutation = isEdit
    ? useEditEducation(onEditSuccess)
    : useCreateEducation(onCreateSuccess);

  function onSubmit(values) {
    mutation.mutate({ _id: educationData._id, education: values });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 p-2 pt-3"
      >
        <FormField
          control={form.control}
          name="school"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">School</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: University of Chicago"
                  {...field}
                  className="border border-zinc-300 bg-white focus:border-zinc-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-3 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="startYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Year</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="From" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-52">
                    {startYear.map((year, i) => (
                      <SelectItem value={year.toString()} key={i}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Year</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="To" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-52">
                    {[...endYear.reverse(), ...startYear.reverse()].map(
                      (year, i) => (
                        <SelectItem value={year.toString()} key={i}>
                          {year}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="degree"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Degree</FormLabel>
              <FormControl>
                <Input
                  placeholder="Degree"
                  {...field}
                  className="border border-zinc-300 bg-white focus:border-zinc-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-3 pt-3">
          <DialogClose asChild>
            <Button
              className="hover:bg-zinc-200 hover:text-black"
              variant="ghost"
            >
              Cancel
            </Button>
          </DialogClose>
          <LoadingButton isLoading={mutation.isPending}>Save</LoadingButton>
        </div>
      </form>
    </Form>
  );
};

export default EducationForm;
