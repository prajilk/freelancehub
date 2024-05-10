import { LogOut, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardMobileMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const isAuthorized = useSelector((state) => state.user._id);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

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
                className={`${pathname === "/works" && "text-primary"} flex hover:text-primary`}
              >
                <Link to={"/works"} className="w-full">
                  Find Works
                </Link>
              </li>
              <li
                className={`${pathname === "/jobs" && "text-primary"} flex hover:text-primary`}
              >
                <Link to={"/jobs"} className="w-full">
                  Find Jobs
                </Link>
              </li>
              {/* <li
                className={`${pathname === "/dashboard/freelancers" && "text-primary"} flex hover:text-primary`}
              >
                <Link to={"/dashboard/freelancers"} className="w-full">
                  Find Freelancers
                </Link>
              </li> */}
              <li
                className={`${pathname === "/dashboard/upload-proposals" && "text-primary"} flex hover:text-primary`}
              >
                <Link to={"/dashboard/upload-proposals"} className="w-full">
                  Upload Proposals
                </Link>
              </li>
              <hr />
              {isAuthorized ? (
                <li className="flex hover:text-primary">
                  <Link to={"/dashboard/profile"} className="w-full">
                    Profile
                  </Link>
                </li>
              ) : (
                <>
                  <li className="flex hover:text-primary">
                    <Link to={"/login"} className="w-full">
                      Login
                    </Link>
                  </li>
                  <li className="flex hover:text-primary">
                    <Link to={"/register"} className="w-full">
                      Register
                    </Link>
                  </li>
                </>
              )}
              {isAuthorized && (
                <>
                  <li className="flex hover:text-primary">
                    <Link to="/dashboard/bookmarks" className="w-full">
                      Bookmarks
                    </Link>
                  </li>
                  <li className="flex hover:text-primary">
                    <Link to="/dashboard/my-history" className="w-full">
                      My history
                    </Link>
                  </li>
                  <hr />
                  <li
                    className="flex items-center text-destructive"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" /> Log out
                  </li>
                </>
              )}
              {/* <li className="flex hover:text-primary">Settings</li> */}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DashboardMobileMenu;
