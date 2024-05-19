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
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import LoadingButton from "../ui/loading-button";
import { useLogin } from "../../api/login";
import { Button } from "../ui/button";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, "Password must be 8 or more characters long"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const search = useSearchParams();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSuccess(data) {
    localStorage.setItem("token", data.token);
    toast.success("Login successfully.");
    const callback = search[0].get("callback");
    if (callback !== "" && callback !== null) {
      navigate(callback, { replace: true });
    } else {
      navigate("/dashboard/profile", { replace: true });
    }
  }

  const mutation = useLogin(onSuccess);

  // 2. Define a submit handler.
  function onSubmit(values) {
    const result = loginSchema.safeParse(values);
    if (result.success) {
      mutation.mutate(values);
    } else {
      toast.error("Invalid data format");
    }
  }

  function loginDemoUser() {
    onSubmit({ email: "demouser@mail.com", password: "12345678" });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
        <LoadingButton
          isLoading={mutation.isPending}
          className="w-full"
          type="submit"
        >
          Log in
        </LoadingButton>
        <Button
          disabled={mutation.isPending}
          className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary"
          variant="outline"
          onClick={loginDemoUser}
          type="button"
        >
          Log in as Demo user
        </Button>
        <div>
          <span className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Register now
            </Link>
          </span>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
