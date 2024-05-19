import DashboardNav from "../components/nav/dashboard-nav";
import ProfileCard from "../components/profile/profile-card";
import About from "../components/profile/about";
import Portfolio from "../components/profile/portfolio";
import Skills from "../components/profile/skills";
import Languages from "../components/profile/languages";
import { useProfile } from "../api/get-profile";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import PageLoading from "../components/common/page-loading";
import { useLocation } from "react-router-dom";
import { disableViewMode, setToViewMode } from "../redux/profileViewModeSlice";
import Education from "../components/profile/education";
import { setClient } from "../redux/clientSlice";
import { useClientProfile } from "../api/get-client-profile";

const ClientProfile = () => {
  const userId = useLocation().pathname.split("/").at(-1);
  const basePath = useLocation().pathname.split("/")[1];

  const { data: profile, isLoading } = useClientProfile(userId);

  const dispatch = useDispatch();

  if (basePath === "user") {
    dispatch(setToViewMode());
  } else {
    dispatch(disableViewMode());
  }

  useEffect(() => {
    profile && dispatch(setClient(profile));
  }, [profile]);

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      <DashboardNav />
      <div className="container-lg py-10">
        <ProfileCard />
        <div className="my-10 grid gap-3 lg:grid-cols-3">
          {/* Left section */}
          <div className="order-2 rounded-lg bg-white p-4 shadow lg:order-1">
            <Skills />
            <hr className="my-7" />
            <Languages />
            <hr className="my-7" />
            <Education />
          </div>

          {/* Right section */}
          <div className="rounded-lg bg-white p-4 shadow lg:order-2 lg:col-span-2">
            <About />
            <hr className="my-7" />
            <Portfolio />
            <hr className="my-7" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientProfile;
