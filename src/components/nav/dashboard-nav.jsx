import { Link, useLocation } from "react-router-dom";
import { MessageCircleMore } from "lucide-react";
import { motion } from "framer-motion";
import DashboardMobileMenu from "./dashboard-mobile-menu";
import { Profile } from "./profile";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import NotificationSheet from "../sheets/notification";

const DashboardNav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isAuthorized = useSelector((state) => state.user._id);

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
            className={`${pathname === "/works" && "border-b-primary text-primary"} flex h-full items-center border-b-2 border-transparent hover:border-primary hover:text-primary`}
          >
            <Link to={"/works"}>Find Works</Link>
          </li>
          <li
            className={`${pathname === "/jobs" && "border-b-primary text-primary"} border-b-2 border-transparent hover:border-primary hover:text-primary`}
          >
            <Link to={"/jobs"}>Find Jobs</Link>
          </li>
          {/* <li
            className={`${pathname === "/dashboard/freelancers" && "border-b-primary text-primary"} border-b-2 border-transparent hover:border-primary hover:text-primary`}
          >
            <Link to={"/dashboard/freelancers"}>Find Freelancers</Link>
          </li> */}
          <li
            className={`${pathname === "/dashboard/upload-proposals" && "border-b-primary text-primary"} border-b-2 border-transparent hover:border-primary hover:text-primary`}
          >
            <Link to={"/dashboard/upload-proposals"}>Upload Proposals</Link>
          </li>
        </ul>

        <div className="flex flex-1 items-center justify-end gap-2">
          <NotificationSheet />
          <Link to={"/dashboard/messages"}>
            <Button
              className="relative flex size-9 items-center justify-center rounded-full p-1 text-zinc-400 hover:bg-transparent hover:text-zinc-400"
              variant="ghost"
            >
              <MessageCircleMore />
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-1 top-1 hidden size-2.5 rounded-full bg-red-500"
              ></motion.span>
            </Button>
          </Link>
          {isAuthorized ? (
            <Profile />
          ) : (
            <div className="hidden space-x-1 lg:block">
              <Link to="/register" className="text-sm font-semibold">
                <Button
                  size="sm"
                  variant="ghost"
                  className="hover:bg-zinc-200 hover:text-black"
                >
                  Register
                </Button>
              </Link>
              <Link to="/login" className="text-sm font-semibold">
                <Button size="sm">Login</Button>
              </Link>
            </div>
          )}
        </div>

        <DashboardMobileMenu />
      </div>
    </nav>
  );
};

export default DashboardNav;
