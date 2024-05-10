import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <footer
      className={`${pathname === "/login" || (pathname === "/register" && "hidden")} container-lg py-10 md:pt-20`}
    >
      <div className="flex flex-wrap items-center justify-between gap-5 rounded-md bg-primary p-6 text-white lg:gap-0 lg:p-10">
        <h1 className="text-2xl font-medium">
          Find your best opportunities today!
        </h1>
        <Link to="/dashboard">
          <Button className="bg-white font-semibold text-primary hover:bg-white/90">
            Get Started
          </Button>
        </Link>
      </div>

      <div className="grid gap-10 py-10 lg:grid-cols-2 lg:gap-0">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="size-8" />
            <span className="text-xl font-semibold">WorkLoop</span>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Streamline your freelance business with our job finder platform.
            Find opportunities, manage workloads, and maximize earnings.
          </p>
          <ul className="flex gap-5 pt-3 text-2xl [&>*]:cursor-pointer">
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
        </div>

        <div className="flex gap-20 lg:me-10 lg:justify-end">
          <div className="space-y-2">
            <span className="font-semibold">Links</span>
            <ul className="space-y-2 text-muted-foreground">
              <li className="cursor-pointer hover:text-black">Home</li>
              <li className="cursor-pointer hover:text-black">About</li>
              <li className="cursor-pointer hover:text-black">Jobs</li>
              <li className="cursor-pointer hover:text-black">Talents</li>
            </ul>
          </div>
          <div className="space-y-2">
            <span className="font-semibold">Resources</span>
            <ul className="space-y-2 text-muted-foreground">
              <li className="cursor-pointer hover:text-black">Blog</li>
              <li className="cursor-pointer hover:text-black">Careers</li>
              <li className="cursor-pointer hover:text-black">
                Support Center
              </li>
              <li className="cursor-pointer hover:text-black">Integrations</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-10 flex flex-wrap items-center justify-between gap-2 text-sm lg:gap-0">
        <span>Copyright {new Date().getFullYear()} WorkLoop.</span>
        <div className="space-x-3">
          <span className="text-muted-foreground">Terms and Condition</span>
          <span className="text-muted-foreground">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
