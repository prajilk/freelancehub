import { useState } from "react";
import ApplyWorkForm from "../forms/apply-work";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const ApplyWorkSheet = ({ title, workId, disabled = false }) => {
  const [open, setOpen] = useState(false);

  function closeSheet() {
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className="rounded-full transition-transform duration-300 active:scale-95"
          disabled={disabled}
        >
          Apply Now
        </Button>
      </SheetTrigger>
      <SheetContent className="scrollbar-thin min-w-[90%] flex-col overflow-y-scroll lg:min-w-[50%]">
        <SheetHeader className={"text-left"}>
          <SheetTitle>Complete the form to apply.</SheetTitle>
        </SheetHeader>
        <h1 className="my-6 text-xl font-semibold">For: {title}</h1>
        <ApplyWorkForm workId={workId} closeSheet={closeSheet} />
      </SheetContent>
    </Sheet>
  );
};

export default ApplyWorkSheet;
