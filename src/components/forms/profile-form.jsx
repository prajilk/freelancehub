import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { BsCurrencyDollar } from "react-icons/bs";
import { DrawerClose } from "../ui/drawer";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import SocialsReorder from "../profile/socials-reorder";

const profileSchema = z.object({
  firstName: z.string().min(3, {
    message: "First name must be at least 3 characters.",
  }),
  lastName: z.string().min(1, {
    message: "Last name must be at least 1 characters.",
  }),
  role: z
    .string()
    .min(5, {
      message: "Role must be at least 5 characters.",
    })
    .max(25, {
      message: "Role must be at most 25 characters.",
    }),
  experience: z.string(),
  hourly: z.string(),
  linkedin: z.string(),
  x: z.string(),
  location: z
    .string()
    .min(3, {
      message: "Location must be at least 3 characters.",
    })
    .max(25, {
      message: "Location must be at most 25 characters.",
    }),
});

export function ProfileForm({
  setMainSocials,
  firstName = "",
  lastName = "",
  role = "",
  experience = "",
  hourly = "",
  location = "",
}) {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName,
      lastName,
      role,
      experience,
      hourly,
      location,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">
                First Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your first name"
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
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your last name"
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
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">
                Role or Job Title
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your role"
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
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">
                Experience
              </FormLabel>
              <FormControl>
                <Input
                  startIcon={<BriefcaseBusiness size={15} />}
                  placeholder="Enter your year of experience"
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
          name="hourly"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Hourly</FormLabel>
              <FormControl>
                <Input
                  startIcon={<BsCurrencyDollar />}
                  placeholder="Enter your hourly rate"
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
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Location</FormLabel>
              <FormControl>
                <Input
                  startIcon={<MapPin size={15} />}
                  placeholder="Enter your location"
                  {...field}
                  className="border border-zinc-300 bg-white focus:border-zinc-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-3 pt-7">
          <h1 className="text-2xl font-semibold">Socials</h1>
          <SocialsReorder setMainSocials={setMainSocials} />
        </div>
        <div className="flex justify-end gap-2 py-5">
          <DrawerClose asChild>
            <Button
              type="button"
              variant="ghost"
              className="hover:bg-zinc-200 hover:text-black"
            >
              Cancel
            </Button>
          </DrawerClose>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Form>
  );
}
