import DashboardNav from "../components/nav/dashboard-nav";
import ProfileCard from "../components/profile/profile-card";
import About from "../components/profile/about";
import Portfolio from "../components/profile/portfolio";
import Skills from "../components/profile/skills";
import Languages from "../components/profile/languages";
import { Pencil, Plus, Trash2 } from "lucide-react";

const Profile = () => {
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
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">Education</h1>
              <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
                <Plus size={20} />
              </button>
            </div>
            <ul className="mt-3">
              <li>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    University of Chicago
                  </h3>
                  <div className="flex gap-1">
                    <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
                      <Pencil size={20} />
                    </button>
                    <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <h4 className="text-sm text-muted-foreground">
                  Bachelor's degree, User Experience
                </h4>
                <span className="text-sm text-muted-foreground">
                  2015 - 2018
                </span>
              </li>
            </ul>
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
