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

const Dashboard = lazy(() => import("./pages/dashboard"));
const Login = lazy(() => import("./pages/login"));

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
