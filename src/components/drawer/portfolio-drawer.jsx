import { Pencil, Trash2, X } from "lucide-react";
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

const PortfolioDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="h-full w-full">
        <Card>
          <CardContent className="aspect-[1/0.8] cursor-pointer overflow-hidden rounded-lg p-0">
            <img
              src="/linear.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </CardContent>
        </Card>
        <h1 className="cursor-pointer truncate font-medium text-primary hover:underline">
          Landing page Landing page Landing page Landing page
        </h1>
      </DrawerTrigger>
      <DrawerContent className="mx-auto h-[95%] max-w-6xl px-7 lg:h-[90%]">
        <div className="flex items-center justify-between">
          <DrawerTitle className="text-3xl">Landing page Design</DrawerTitle>
          <DrawerClose>
            <X />
          </DrawerClose>
        </div>
        <div className="hide-scrollbar lg:show-scrollbar lg:scrollbar-thin relative mt-7 grid gap-10 overflow-y-scroll lg:grid-cols-3">
          <div className="top-0 h-fit lg:sticky">
            <DrawerDescription>
              A stunning landing page design inspired by Linear! This sleek
              interface captures the essence of Linear's modern aesthetic.
            </DrawerDescription>
            <div className="my-4">
              <h5 className="text-muted-foreground">Skills</h5>
              <ul className="mt-3 flex flex-wrap gap-2">
                <li className="whitespace-nowrap rounded-full bg-zinc-200 px-3 py-1 text-sm">
                  UI/UX
                </li>
                <li className="whitespace-nowrap rounded-full bg-zinc-200 px-3 py-1 text-sm">
                  Adobe XD
                </li>
                <li className="whitespace-nowrap rounded-full bg-zinc-200 px-3 py-1 text-sm">
                  Figma
                </li>
                <li className="whitespace-nowrap rounded-full bg-zinc-200 px-3 py-1 text-sm">
                  Photoshop
                </li>
                <li className="whitespace-nowrap rounded-full bg-zinc-200 px-3 py-1 text-sm">
                  Design
                </li>
              </ul>
            </div>
            <span className="text-xs font-medium">
              Published on Apr 20, 2021
            </span>
            <hr className="my-4" />
            <div>
              <h5 className="mb-1 text-muted-foreground">Links</h5>
              <Link to="/" className="block truncate text-primary underline">
                https://linear-clone-v1.vercel.app
              </Link>
              <Link to="/" className="block truncate text-primary underline">
                https://github.com/prajilk/linear-clone-v1
              </Link>
            </div>
            <div className="flex gap-2">
              <Button className="mt-7 gap-1 bg-primary/20 text-primary hover:bg-primary/30">
                <Pencil size={18} />
                Edit
              </Button>
              <Button
                variant="destructive"
                className="mt-7 gap-1 bg-destructive/20 text-destructive hover:bg-destructive/30"
              >
                <Trash2 size={18} />
                Delete
              </Button>
            </div>
          </div>
          <div className="col-span-2 space-y-4 pb-10 lg:px-3 lg:pb-0">
            <img src="/linear.png" alt="" />
            <img src="/linear.png" alt="" />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default PortfolioDrawer;
