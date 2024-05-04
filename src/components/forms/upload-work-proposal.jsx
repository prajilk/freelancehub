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
import { BsCurrencyDollar } from "react-icons/bs";

const uploadWorkProposalSchema = z.object({
  title: z.string().min(10, {
    message: "Title must be at least 10 characters.",
  }),
  description: z.string().min(100, {
    message: "Job description must be at least 100 characters.",
  }),
  location: z.string().min(3, {
    message: "Location must be at least 3 characters.",
  }),
  paymentType: z.enum(["hourly", "fixed"]),
  experienceType: z.enum(["entry-level", "intermediate", "expert"]),
});

const UploadWorkProposalForm = () => {
  const form = useForm({
    resolver: zodResolver(uploadWorkProposalSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      paymentType: "hourly",
      experienceType: "intermediate",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [skills, setSkills] = useState(null);

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
                  Work title
                </FormLabel>
                <FormDescription>Provide a short work title</FormDescription>
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
                  Work description
                </FormLabel>
                <FormDescription>
                  Provide a brief description about the work.
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
          name="paymentType"
          render={({ field }) => (
            <FormItem className="grid lg:grid-cols-2">
              <div>
                <FormLabel className="text-lg font-semibold">
                  Payment Type
                </FormLabel>
                <FormDescription>Pick a payment type</FormDescription>
              </div>
              <div className="space-y-4">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Payment type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="fixed">Fixed</SelectItem>
                  </SelectContent>
                </Select>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Min"
                    startIcon={<BsCurrencyDollar />}
                    className="bg-white"
                  />
                  <Input
                    placeholder="Max"
                    startIcon={<BsCurrencyDollar />}
                    className="bg-white"
                  />
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="experienceType"
          render={({ field }) => (
            <FormItem className="grid lg:grid-cols-2">
              <div>
                <FormLabel className="text-lg font-semibold">
                  Experience Type
                </FormLabel>
                <FormDescription>Pick a Experience type</FormDescription>
              </div>
              <div className="space-y-4">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Payment type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="entry-level">Entry level</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="grid lg:grid-cols-2">
              <div>
                <FormLabel className="text-lg font-semibold">
                  Location
                </FormLabel>
                <FormDescription>Enter work location</FormDescription>
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
        <div className="grid space-y-2 lg:grid-cols-2">
          <div>
            <FormLabel className="text-lg font-semibold">Skills</FormLabel>
            <FormDescription>Pick required skills for the work</FormDescription>
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

        <div className="flex justify-end gap-2 pt-5">
          <Button type="submit">Create</Button>
        </div>
      </form>
    </Form>
  );
};

export default UploadWorkProposalForm;
