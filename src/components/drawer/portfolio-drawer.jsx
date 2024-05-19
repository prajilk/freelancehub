import { Info, Pencil, Trash2, X } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { formatDateToCustomString } from "../../lib/utils";
import { useSelector } from "react-redux";
import DeletePortfolioProject from "../modals/delete-portfolio-project";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const PortfolioDrawer = ({ portfolio }) => {
  const [open, setOpen] = useState(false);
  const viewMode = useSelector((state) => state.profileViewMode);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="h-full w-full">
        <Card>
          <CardContent className="aspect-[1/0.8] cursor-pointer overflow-hidden rounded-lg p-0">
            <img
              src={portfolio.images[0].url}
              alt={`${portfolio.title} Thumbnail`}
              className="h-full w-full object-cover"
            />
          </CardContent>
        </Card>
        <h1 className="cursor-pointer truncate font-medium text-primary hover:underline">
          {portfolio.title}
        </h1>
      </DrawerTrigger>
      <DrawerContent className="mx-auto h-[95%] max-w-6xl px-7 lg:h-[90%]">
        <div className="flex items-center justify-between">
          <DrawerTitle className="text-3xl">{portfolio.title}</DrawerTitle>
          <DrawerClose>
            <X />
          </DrawerClose>
        </div>
        <div className="hide-scrollbar lg:show-scrollbar lg:scrollbar-thin relative mt-7 grid gap-10 overflow-y-scroll py-7 pt-0 lg:grid-cols-3">
          <div className="top-0 h-fit lg:sticky">
            <DrawerDescription>{portfolio.description}</DrawerDescription>
            <div className="my-4">
              <h5 className="text-muted-foreground">Skills</h5>
              <ul className="mt-3 flex flex-wrap gap-2">
                {portfolio.skills.map((skill, i) => (
                  <li
                    className="whitespace-nowrap rounded-full bg-zinc-200 px-3 py-1 text-sm"
                    key={i}
                  >
                    {skill.label}
                  </li>
                ))}
              </ul>
            </div>
            <span className="text-xs font-medium">
              Published on {formatDateToCustomString(portfolio.createdAt)}
            </span>
            <hr className="my-4" />
            <div>
              <h5 className="mb-1 text-muted-foreground">Links</h5>
              {portfolio.links.map((link, i) => (
                <Link
                  to={link}
                  className="block truncate text-primary underline"
                  key={i}
                  target="_blank"
                >
                  {link}
                </Link>
              ))}
            </div>
            {!viewMode && (
              <div className="flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button className="mt-7 cursor-not-allowed gap-1 bg-primary/20 text-primary/50 hover:bg-primary/20">
                        <Pencil size={18} />
                        Edit
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="flex items-center gap-1 text-xs">
                        <Info size={15} className="text-primary" /> This feature
                        is not available yet!
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <DeletePortfolioProject
                  closeDrawer={() => setOpen(false)}
                  projectId={portfolio._id}
                />
              </div>
            )}
          </div>
          <div className="col-span-2 space-y-4 pb-10 lg:px-3 lg:pb-0">
            {portfolio.images.map((image, i) => (
              <img
                src={image.url}
                alt={`${portfolio.title} image ${i + 1}`}
                key={i}
              />
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default PortfolioDrawer;
