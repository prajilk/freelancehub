import DashboardNav from "../components/nav/dashboard-nav";
import ProfileCard from "../components/profile/profile-card";
import About from "../components/profile/about";
import Portfolio from "../components/profile/portfolio";
import Skills from "../components/profile/skills";
import Languages from "../components/profile/languages";
import { useProfile } from "../api/get-profile";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../redux/userSlice";
import PageLoading from "../components/common/page-loading";
import { useLocation, useNavigate } from "react-router-dom";
import { disableViewMode, setToViewMode } from "../redux/profileViewModeSlice";
import Education from "../components/profile/education";

const Profile = () => {
  const basePath = useLocation().pathname.split("/")[1];
  const callback = useLocation().pathname;

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate(`/login?callback=${callback}`);
    }
  }, []);

  const { data: profile, isLoading } = useProfile();

  const dispatch = useDispatch();

  if (basePath === "user") {
    dispatch(setToViewMode());
  } else {
    dispatch(disableViewMode());
  }

  useEffect(() => {
    profile && dispatch(setUser(profile));
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

export default Profile;
