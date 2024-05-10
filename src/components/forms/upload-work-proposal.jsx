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
import { toast } from "sonner";
import { useCreateWork } from "../../api/work/create-work";
import LoadingButton from "../ui/loading-button";

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
  payment: z.enum(["hourly", "fixed"]),
  experience: z.enum(["entry-level", "intermediate", "expert"]),
});

const UploadWorkProposalForm = () => {
  const [skills, setSkills] = useState(null);
  const [paymentMinMax, setPaymentMinMax] = useState({
    min: 0,
    max: 0,
  });

  const form = useForm({
    resolver: zodResolver(uploadWorkProposalSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      payment: "hourly",
      experience: "intermediate",
    },
  });

  function onSuccess(response) {
    toast.success(response.message);
    form.setValue("title", "");
    form.setValue("description", "");
    form.setValue("location", "");
    setPaymentMinMax({
      min: 0,
      max: 0,
    });
    setSkills(null);
  }

  const mutation = useCreateWork(onSuccess);

  // 2. Define a submit handler.
  function onSubmit(values) {
    if (
      isNaN(Number(paymentMinMax.min)) ||
      isNaN(Number(paymentMinMax.max)) ||
      Number(paymentMinMax.min) < 0 ||
      Number(paymentMinMax.max) <= 0
    ) {
      return toast.error("Invalid payment min or max!");
    }
    if (Number(paymentMinMax.min) > Number(paymentMinMax.max)) {
      return toast.error(
        "The minimum payment amount cannot exceed the maximum.",
      );
    }
    if (!skills || skills.length < 2) {
      return toast.error("Must select at least 2 skills");
    }

    mutation.mutate({
      ...values,
      paymentMin: paymentMinMax.min,
      paymentMax: paymentMinMax.max,
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
          name="payment"
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
                    value={paymentMinMax.min}
                    onChange={(e) =>
                      setPaymentMinMax((prev) => ({
                        ...prev,
                        min: e.target.value,
                      }))
                    }
                    className="bg-white"
                  />
                  <Input
                    placeholder="Max"
                    startIcon={<BsCurrencyDollar />}
                    value={paymentMinMax.max}
                    onChange={(e) =>
                      setPaymentMinMax((prev) => ({
                        ...prev,
                        max: e.target.value,
                      }))
                    }
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
          name="experience"
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
          <LoadingButton isLoading={mutation.isPending} type="submit">
            Create
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};

export default UploadWorkProposalForm;
