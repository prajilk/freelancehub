import { Plus, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { NewPortfolioForm } from "../forms/new-portfolio";
import { useState } from "react";

const NewPortfolioDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
          <Plus size={20} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto h-[95%] max-w-6xl px-7 lg:h-[90%]">
        <div className="flex items-center justify-between">
          <DrawerTitle className="text-3xl">
            Add new Portfolio project
          </DrawerTitle>
          <DrawerClose>
            <X />
          </DrawerClose>
        </div>
        <div className="hide-scrollbar lg:show-scrollbar lg:scrollbar-thin mt-7 overflow-y-scroll px-3">
          <NewPortfolioForm closeDrawer={() => setOpen(false)} />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default NewPortfolioDrawer;
