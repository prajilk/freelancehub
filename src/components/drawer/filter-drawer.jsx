import { Filter as FilterIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";
import Filter from "../filter/work-filter";

const FilterDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild className="lg:hidden">
        <Button
          className="gap-2 bg-white font-semibold text-primary hover:bg-white/90"
          size="icon"
        >
          <FilterIcon size={15} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <Filter />
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;
