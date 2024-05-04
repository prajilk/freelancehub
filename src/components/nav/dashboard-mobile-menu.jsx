import { LogOut, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Link, useLocation } from "react-router-dom";

const DashboardMobileMenu = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="ms-2 lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-zinc-100 hover:text-black"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent className="border-none bg-white text-black">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="" className="w-8" />
              <h1 className="text-lg font-medium">WorkLoop</h1>
            </div>
            <ul className="mt-10 space-y-5 ps-3 [&>*]:cursor-pointer">
              <li
                className={`${pathname === "/dashboard" && "text-primary"} flex hover:text-primary`}
              >
                <Link to={"/dashboard"} className="w-full">
                  Find Works
                </Link>
              </li>
              <li
                className={`${pathname === "/dashboard/jobs" && "text-primary"} flex hover:text-primary`}
              >
                <Link to={"/dashboard/jobs"} className="w-full">
                  Find Jobs
                </Link>
              </li>
              <li
                className={`${pathname === "/dashboard/freelancers" && "text-primary"} flex hover:text-primary`}
              >
                <Link to={"/dashboard/freelancers"} className="w-full">
                  Find Freelancers
                </Link>
              </li>
              <li
                className={`${pathname === "/dashboard/upload-proposals" && "text-primary"} flex hover:text-primary`}
              >
                <Link to={"/dashboard/upload-proposals"} className="w-full">
                  Upload Proposals
                </Link>
              </li>
              <hr />
              <li className="flex hover:text-primary">
                <Link to={"/dashboard/profile"} className="w-full">
                  Profile
                </Link>
              </li>
              <li className="flex hover:text-primary">Bookmarks</li>
              <li className="flex hover:text-primary">Previous Works</li>
              <li className="flex hover:text-primary">Settings</li>
              <hr />
              <li className="flex items-center text-destructive">
                <LogOut className="mr-2 h-4 w-4" /> Log out
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DashboardMobileMenu;
