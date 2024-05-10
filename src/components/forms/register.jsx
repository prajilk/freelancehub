import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, MapPin } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { country_list } from "../../lib/countries";
import { useRegister } from "../../api/register";
import { toast } from "sonner";
import LoadingButton from "../ui/loading-button";

const registerSchema = z.object({
  firstName: z.string().min(3, {
    message: "First must be at least 3 characters.",
  }),
  lastName: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, "Password must be 8 or more characters long"),
  country: z.string(),
});

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      country: "",
    },
  });

  function onSuccess(data) {
    localStorage.setItem("token", data.token);
    toast.success("Registered successfully.");
    navigate("/dashboard/profile", { replace: true });
  }

  const mutation = useRegister(onSuccess);

  // 2. Define a submit handler.
  function onSubmit(values) {
    const result = registerSchema.safeParse(values);
    if (result.success) {
      mutation.mutate(values);
    } else {
      toast.error("Invalid data format");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="firstName">First name</Label>
                <FormControl>
                  <Input
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
                <Label htmlFor="lastName">Last name</Label>
                <FormControl>
                  <Input
                    {...field}
                    className="border border-zinc-300 bg-white focus:border-zinc-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="email">Email</Label>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="border border-zinc-300 bg-white focus:border-zinc-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="password">Password</Label>
              <FormControl>
                <Input
                  {...field}
                  endIcon={
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="flex items-center text-muted-foreground"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  }
                  type={showPassword ? "text" : "password"}
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
              <Label htmlFor="country">Country</Label>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full border-2 border-zinc-200">
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
        <LoadingButton
          isLoading={mutation.isPending}
          className="w-full"
          type="submit"
        >
          Register
        </LoadingButton>
        <div>
          <span className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </span>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
