import { Filter as FilterIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";
import WorkFilter from "../filter/work-filter";
import JobFilter from "../filter/job-filter";
import { useState } from "react";

const FilterDrawer = ({ setLoading, forWork }) => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className="lg:hidden">
        <Button
          className="gap-2 bg-white font-semibold text-primary hover:bg-white/90"
          size="icon"
        >
          <FilterIcon size={15} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        {forWork ? (
          <WorkFilter
            setSearchLoading={setLoading}
            closeDrawer={() => open && setOpen(false)}
          />
        ) : (
          <JobFilter
            setSearchLoading={setLoading}
            closeDrawer={() => open && setOpen(false)}
          />
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;
