import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/forms/register";
import { useEffect, useState } from "react";
import PageLoading from "../components/common/page-loading";

const Register = () => {
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
              <h1 className="text-3xl font-bold">
                Register to find work you love
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Register to find your dream job.
              </p>
            </div>
            <RegisterForm />
          </div>
        </div>
        <div className="hidden items-center lg:flex">
          <img alt="Job Portal" src="/account.svg" />
        </div>
      </div>
    </div>
  );
};

export default Register;
