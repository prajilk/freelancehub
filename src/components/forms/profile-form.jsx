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
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { country_list } from "../../lib/countries";
import { toast } from "sonner";
import { updateProfile } from "../../redux/userSlice";
import LoadingButton from "../ui/loading-button";
import { useUpdateProfile } from "../../api/profile";

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
  country: z
    .string()
    .min(3, {
      message: "Location must be at least 3 characters.",
    })
    .max(25, {
      message: "Location must be at most 25 characters.",
    }),
});

export function ProfileForm() {
  const profileData = useSelector((state) => state.user);

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: profileData?.firstName || "",
      lastName: profileData?.lastName || "",
      role: profileData?.profile.role || "",
      experience: profileData?.profile.experience || "",
      hourly: profileData?.profile?.hourly?.toString() || "",
      country: profileData?.country || "",
    },
  });

  const dispatch = useDispatch();

  function onSuccess() {
    toast.success("Profile updated successfully");
    dispatch(
      updateProfile({
        firstName: form.getValues().firstName,
        lastName: form.getValues().lastName,
        role: form.getValues().role,
        experience: form.getValues().experience,
        hourly: form.getValues().hourly,
        country: form.getValues().country,
      }),
    );
  }

  const mutation = useUpdateProfile(onSuccess);

  // 2. Define a submit handler.
  function onSubmit(values) {
    mutation.mutate({
      ...values,
      topFourSocials: profileData.profile.topFourSocials,
      socials: profileData.socials,
    });
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
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Country</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="border border-zinc-300 bg-white focus:border-zinc-500">
                    <div className="flex items-center gap-1 font-medium text-muted-foreground">
                      <MapPin size={15} />
                      <SelectValue />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {country_list.map((country, i) => (
                        <SelectItem value={country} key={i}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-3 pt-7">
          <h1 className="text-2xl font-semibold">Socials</h1>
          <SocialsReorder />
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
          <LoadingButton isLoading={mutation.isPending} type="submit">
            Save
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
}
