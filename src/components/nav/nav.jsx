import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";

const Nav = () => {
  return (
    <nav className="container-lg absolute inset-0 flex h-fit w-full items-center justify-center py-3 text-white">
      <Link to="/" className="flex flex-1 items-center gap-2">
        <img src="./logo.png" alt="" className="w-8" />
        <h1 className="text-lg font-medium">WorkLoop</h1>
      </Link>
      <ul className="hidden items-center gap-10 lg:flex [&>*]:cursor-pointer">
        <li className="hover:text-primary">Home</li>
        <li className="hover:text-primary">About</li>
        <li className="hover:text-primary">Jobs</li>
        <li className="hover:text-primary">Talents</li>
      </ul>
      <div className="hidden flex-1 justify-end gap-3 lg:flex">
        <Link to="/login">
          <Button variant="ghost" className="px-8">
            Log In
          </Button>
        </Link>
        <Link to="/register">
          <Button className="px-8">Register</Button>
        </Link>
      </div>

      <MobileMenu />
    </nav>
  );
};

export default Nav;
