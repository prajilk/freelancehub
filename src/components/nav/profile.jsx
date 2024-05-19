import { Bookmark, BriefcaseBusiness, LogOut, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function Profile() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hidden p-1 outline-none md:block">
        <Avatar>
          <AvatarImage
            src={user.image}
            alt="Profile"
            className="object-cover"
          />
          <AvatarFallback>{user.firstName[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link to="/dashboard/profile" className="flex w-full items-center">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              to="/dashboard/bookmarks"
              className="flex w-full items-center"
            >
              <Bookmark className="mr-2 h-4 w-4" />
              <span>Bookmarks</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BriefcaseBusiness className="mr-2 h-4 w-4" />
            <Link to="/dashboard/my-history" className="w-full">
              My history
            </Link>
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="focus:bg-destructive/20 focus:text-destructive"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
