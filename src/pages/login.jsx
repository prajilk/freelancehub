import { useEffect, useState } from "react";
import LoginForm from "../components/forms/login";
import { useNavigate } from "react-router-dom";
import PageLoading from "../components/common/page-loading";

const Login = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <div className="container-lg">
      <div className="w-full py-12 lg:grid lg:min-h-[600px] lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="mx-auto w-[350px] space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Welcome to WorkLoop</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Log in to access your account and find your dream job.
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
        <div className="hidden items-center lg:flex">
          <img alt="Job Portal" src="/access_account.svg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
