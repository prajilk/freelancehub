import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Select from "react-tailwindcss-select";
import { useState } from "react";
import { skillsArray } from "../../lib/skills";
import { DrawerClose } from "../ui/drawer";
import AddPortfolioImage from "../portfolio/add-portfolio-image";

const portfolioSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(50, {
    message: "Description must be at least 50 characters.",
  }),
  links: z.string().optional(),
});

export function NewPortfolioForm() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(portfolioSchema),
    defaultValues: {
      title: "",
      description: "",
      links: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [projectImages, setProjectImages] = useState([]);
  const [skills, setSkills] = useState(null);

  const handleSkillsChange = (value) => {
    setSkills(value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">
                Project title
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your project title"
                  {...field}
                  className="border border-zinc-300 bg-white focus:border-zinc-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">
                    Project description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Briefly describe your project goals"
                      {...field}
                      className="border border-zinc-300 bg-white focus:border-zinc-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-2">
              <FormLabel className="text-lg font-semibold">Skills</FormLabel>
              <Select
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
              name="links"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Links</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add link"
                      {...field}
                      className="border border-zinc-300 bg-white focus:border-zinc-500"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription className="text-xs font-medium">
                    Enter URLs separated by commas
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>
          <div className="lg:col-span-2">
            <AddPortfolioImage
              imageState={projectImages}
              setImageState={setProjectImages}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 pb-10">
          <DrawerClose asChild>
            <Button
              type="button"
              variant="ghost"
              className="hover:bg-zinc-200 hover:text-black"
            >
              Cancel
            </Button>
          </DrawerClose>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
