import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Bell, Mail } from "lucide-react";
import { motion } from "framer-motion";
import DashboardMobileMenu from "./dashboard-mobile-menu";
import { Profile } from "./profile";

const DashboardNav = () => {
  return (
    <nav className="h-fit w-full bg-white text-muted-foreground">
      <div className="container-lg flex items-center justify-center py-3 lg:py-0">
        <Link to="/" className="flex flex-1 items-center gap-2">
          <img src="./logo.png" alt="" className="w-8" />
          <h1 className="whitespace-nowrap text-lg font-medium text-black">
            WorkLoop
          </h1>
        </Link>
        <ul className="hidden items-center gap-10 text-sm font-medium lg:flex [&>*]:cursor-pointer [&>*]:py-5">
          <li className="border-transparen flex h-full items-center border-b-2 border-primary text-primary">
            Find Works
          </li>
          <li className="border-b-2 border-transparent hover:border-primary hover:text-primary">
            Find Jobs
          </li>
          <li className="border-b-2 border-transparent hover:border-primary hover:text-primary">
            Find Freelancers
          </li>
          <li className="border-b-2 border-transparent hover:border-primary hover:text-primary">
            Upload Proposals
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
