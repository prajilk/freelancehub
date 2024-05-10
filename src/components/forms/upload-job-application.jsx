import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import MultiSelect from "react-tailwindcss-select";
import { skillsArray } from "../../lib/skills";
import { useState } from "react";
import { useCreateJob } from "../../api/job/create-job";
import { toast } from "sonner";
import LoadingButton from "../ui/loading-button";

const uploadJobAppSchema = z.object({
  title: z.string().min(10, {
    message: "Job title must be at least 10 characters.",
  }),
  description: z.string().min(100, {
    message: "Job description must be at least 100 characters.",
  }),
  company: z.string().min(5, {
    message: "Company name must be at least 5 characters.",
  }),
  jobType: z.enum(["remote", "on-site", "hybrid"]),
  location: z.string(),
});

const UploadJobApplicationForm = () => {
  const [skills, setSkills] = useState(null);

  const form = useForm({
    resolver: zodResolver(uploadJobAppSchema),
    defaultValues: {
      title: "",
      description: "",
      company: "",
      jobType: "remote",
      location: "",
    },
  });

  function onSuccess(response) {
    toast.success(response.message);
    form.setValue("title", "");
    form.setValue("description", "");
    form.setValue("location", "");
    form.setValue("company", "");
    setSkills(null);
  }

  const mutation = useCreateJob(onSuccess);

  // 2. Define a submit handler.
  function onSubmit(values) {
    if (!skills || skills.length < 2) {
      return toast.error("Must select at least 2 skills");
    }

    mutation.mutate({
      ...values,
      skills,
    });
  }

  const handleSkillsChange = (value) => {
    setSkills(value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 pt-3">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="grid lg:grid-cols-2">
              <div>
                <FormLabel className="text-lg font-semibold">
                  Job title
                </FormLabel>
                <FormDescription>
                  A job title must describe one position only
                </FormDescription>
              </div>
              <FormControl>
                <Input
                  placeholder='e.g. "Front-end Developer"'
                  {...field}
                  className="border border-zinc-300 bg-white focus:border-zinc-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="grid lg:grid-cols-2">
              <div>
                <FormLabel className="text-lg font-semibold">
                  Job description
                </FormLabel>
                <FormDescription>
                  Provide a brief description about the job.
                </FormDescription>
              </div>
              <FormControl>
                <Textarea
                  placeholder="Description"
                  {...field}
                  className="scrollbar-thin border border-zinc-300 bg-white focus:border-zinc-500"
                  rows={7}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="grid lg:grid-cols-2">
              <div>
                <FormLabel className="text-lg font-semibold">Company</FormLabel>
                <FormDescription>Enter company name</FormDescription>
              </div>
              <FormControl>
                <Input
                  placeholder="Company"
                  {...field}
                  className="border border-zinc-300 bg-white focus:border-zinc-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jobType"
          render={({ field }) => (
            <FormItem className="grid lg:grid-cols-2">
              <div>
                <FormLabel className="text-lg font-semibold">
                  Job Type
                </FormLabel>
                <FormDescription>Pick a job type</FormDescription>
              </div>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Job type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="on-site">On-site</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid space-y-2 lg:grid-cols-2">
          <div>
            <FormLabel className="text-lg font-semibold">Skills</FormLabel>
            <FormDescription>Pick required skills for the job</FormDescription>
          </div>
          <MultiSelect
            value={skills}
            onChange={handleSkillsChange}
            options={skillsArray}
            classNames={{
              list: "max-h-40 overflow-y-scroll scrollbar-thin",
            }}
            placeholder="Type to add skills"
            isClearable
            isMultiple
            isSearchable
            primaryColor="green"
          />
        </div>
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="grid lg:grid-cols-2">
              <div>
                <FormLabel className="text-lg font-semibold">
                  Location
                </FormLabel>
                <FormDescription>Enter location</FormDescription>
              </div>
              <FormControl>
                <Input
                  placeholder="Location"
                  {...field}
                  className="border border-zinc-300 bg-white focus:border-zinc-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2 pt-5">
          <LoadingButton isLoading={mutation.isPending} type="submit">
            Create
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};

export default UploadJobApplicationForm;
