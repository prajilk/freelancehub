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

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [skills, setSkills] = useState(null);
  const [companyLogo, setCompanyLogo] = useState();

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
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-0">
          <div>
            <FormLabel className="text-lg font-semibold">Logo</FormLabel>
            <FormDescription>Upload a company logo</FormDescription>
          </div>
          <div>
            <label htmlFor="company-logo">
              <img
                src={
                  companyLogo
                    ? URL.createObjectURL(companyLogo)
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpHljl0iy2Ot-23PBrBhq4Dp0PBJBRj5vmvNZXpFHQw&s"
                }
                alt="Placeholder"
                className="size-20 cursor-pointer rounded-full bg-zinc-200"
              />
              <input
                type="file"
                accept="image/x-png,image/gif,image/jpeg,image/webp"
                className="hidden"
                id="company-logo"
                onChange={(e) => setCompanyLogo(e.target.files[0])}
              />
            </label>
          </div>
        </div>
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
          <Button type="submit">Create</Button>
        </div>
      </form>
    </Form>
  );
};

export default UploadJobApplicationForm;
