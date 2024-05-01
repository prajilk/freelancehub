import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const DashboardMobileMenu = () => {
  return (
    <div className="ms-2 lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent className="border-none bg-white text-black">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-3">
              <img src="./logo.png" alt="" className="w-8" />
              <h1 className="text-lg font-medium">WorkLoop</h1>
            </div>
            <ul className="mt-10 space-y-5 ps-3 [&>*]:cursor-pointer">
              <li className="hover:text-primary">Find Works</li>
              <li className="hover:text-primary">Find Jobs</li>
              <li className="hover:text-primary">Find Freelancers</li>
              <li className="hover:text-primary">Upload Proposals</li>
              <hr />
              <li className="hover:text-primary">Profile</li>
              <li className="hover:text-primary">Bookmarks</li>
              <li className="hover:text-primary">Settings</li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DashboardMobileMenu;
