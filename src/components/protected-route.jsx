import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PageLoading from "./common/page-loading";
import { useVerify } from "../api/veirfy";
import React, { useEffect } from "react";

const ProtectedRoute = () => {
  // Logic to validate token here
  const navigate = useNavigate();
  const callback = useLocation().pathname;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate(`/login?callback=${callback}`);
    }
  }, []);

  const { isLoading, isError } = useVerify();

  if (isLoading) {
    return <PageLoading />;
  }
  if (isError) {
    localStorage.removeItem("token");
    navigate(`/login?callback=${callback}`);
  }

  return (
    <React.Suspense fallback={<PageLoading />}>
      <Outlet />
    </React.Suspense>
  );
};

export default ProtectedRoute;
