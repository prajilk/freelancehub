import { Link, useLocation } from "react-router-dom";
import { Bell, Mail } from "lucide-react";
import { motion } from "framer-motion";
import DashboardMobileMenu from "./dashboard-mobile-menu";
import { Profile } from "./profile";

const DashboardNav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="h-fit w-full bg-white text-muted-foreground">
      <div className="container-lg flex items-center justify-center py-3 lg:py-0">
        <Link to="/" className="flex flex-1 items-center gap-2">
          <img src="/logo.png" alt="" className="w-8" />
          <h1 className="whitespace-nowrap text-lg font-semibold text-black">
            WorkLoop
          </h1>
        </Link>
        <ul className="hidden items-center gap-10 text-sm font-medium lg:flex [&>*]:cursor-pointer [&>*]:py-5">
          <li
            className={`${pathname === "/dashboard" && "border-b-primary text-primary"} flex h-full items-center border-b-2 border-transparent hover:border-primary hover:text-primary`}
          >
            <Link to={"/dashboard"}>Find Works</Link>
          </li>
          <li
            className={`${pathname === "/dashboard/jobs" && "border-b-primary text-primary"} border-b-2 border-transparent hover:border-primary hover:text-primary`}
          >
            <Link to={"/dashboard/jobs"}>Find Jobs</Link>
          </li>
          <li
            className={`${pathname === "/dashboard/freelancers" && "border-b-primary text-primary"} border-b-2 border-transparent hover:border-primary hover:text-primary`}
          >
            <Link to={"/dashboard/freelancers"}>Find Freelancers</Link>
          </li>
          <li
            className={`${pathname === "/dashboard/upload-proposals" && "border-b-primary text-primary"} border-b-2 border-transparent hover:border-primary hover:text-primary`}
          >
            <Link to={"/dashboard/upload-proposals"}>Upload Proposals</Link>
          </li>
        </ul>

        <div className="flex flex-1 items-center justify-end gap-5">
          <div className="relative">
            <Mail className="cursor-pointer text-zinc-400" />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -right-1 top-0 size-2.5 rounded-full bg-red-500"
            ></motion.span>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-zinc-400" />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -right-0.5 top-0 size-2.5 rounded-full bg-red-500"
            ></motion.span>
          </div>
          <Profile />
        </div>

        <DashboardMobileMenu />
      </div>
    </nav>
  );
};

export default DashboardNav;
