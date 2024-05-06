import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import PageLoading from "./components/common/page-loading";
import ProtectedRoute from "./components/protected-route";
import queryConfig from "./config/react-query.config";
import Error404 from "./components/common/error404";
import LandingPage from "./pages/landing-page";
import Footer from "./components/footer";
import Freelancers from "./pages/freelancers";
import WorksRoute from "./routes/works";

const Login = lazy(() => import("./pages/login"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/profile"));
const UploadProposalRoutes = lazy(() => import("./routes/upload-proposal"));
const JobsRoute = lazy(() => import("./routes/job"));
const MyHistory = lazy(() => import("./pages/my-history"));

const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute />}>
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="my-history" element={<MyHistory />} />
              <Route path="freelancers" element={<Freelancers />} />
              <Route path="jobs/*" element={<JobsRoute />} />
              <Route path="works/*" element={<WorksRoute />} />
              <Route
                path="upload-proposals/*"
                element={<UploadProposalRoutes />}
              />
            </Route>
          </Routes>
        </QueryClientProvider>
      </div>
      <Footer />
      <Toaster position="bottom-right" />
    </Suspense>
  );
}

export default App;
