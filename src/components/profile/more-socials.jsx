import { CiCircleMore } from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "react-router-dom";
import { socialsArray, useSocialLabel } from "../../lib/utils";
import { useSelector } from "react-redux";
import { useIcon } from "./socials-reorder";

const MoreSocials = ({ moreSocials }) => {
  const topSocials = useSelector((state) => state.user.profile.topFourSocials);

  const moreSocialArr = socialsArray.filter(
    (social) => !topSocials.includes(social),
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <CiCircleMore size={30} className="cursor-pointer text-primary" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {moreSocialArr.map((social, i) => (
          <DropdownMenuItem className="p-0" key={i}>
            <Link
              to={moreSocials ? moreSocials[social] : "/"}
              target="_blank"
              className="flex w-full items-center gap-2 px-2 py-1.5 font-medium text-primary"
            >
              {useIcon(social)}
              {useSocialLabel(social)}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreSocials;
