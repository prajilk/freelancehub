import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import PageLoading from "./components/common/page-loading";
import ProtectedRoute from "./components/protected-route";
import queryConfig from "./config/react-query.config";
import Error404 from "./components/common/error404";
import Footer from "./components/footer";
import ProfileProvider from "./provider/profile-provider";

const LandingPage = lazy(() => import("./pages/landing-page"));
const Register = lazy(() => import("./pages/register"));
const Login = lazy(() => import("./pages/login"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/profile"));
const ClientProfile = lazy(() => import("./pages/client-profile"));
const UploadProposalRoutes = lazy(() => import("./routes/upload-proposal"));
const JobsRoute = lazy(() => import("./routes/job"));
const MyHistory = lazy(() => import("./pages/my-history"));
const WorksRoute = lazy(() => import("./routes/works"));
const Bookmarks = lazy(() => import("./pages/bookmarks"));
const Messages = lazy(() => import("./pages/messages"));

const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <ProfileProvider>
            <Routes>
              <Route path="*" element={<Error404 />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/user" element={<Navigate to="/" />} />
              <Route path="/user/:id" element={<ClientProfile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="jobs/*" element={<JobsRoute />} />
              <Route path="works/*" element={<WorksRoute />} />
              <Route path="/dashboard" element={<ProtectedRoute />}>
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="my-history" element={<MyHistory />} />
                <Route path="messages" element={<Messages />} />
                {/* <Route path="freelancers" element={<Freelancers />} /> */}
                <Route path="bookmarks" element={<Bookmarks />} />
                <Route
                  path="upload-proposals/*"
                  element={<UploadProposalRoutes />}
                />
              </Route>
            </Routes>
          </ProfileProvider>
        </QueryClientProvider>
      </div>
      <Footer />
      <Toaster position="top-right" richColors />
    </Suspense>
  );
}

export default App;
