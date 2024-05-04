import { Pencil, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { ProfileForm } from "../forms/profile-form";

const ProfileDrawer = ({ profileData, setMainSocials }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="absolute right-0 top-0 m-3 flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
          <Pencil size={18} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto h-[95%] max-w-2xl px-7 lg:h-[90%]">
        <div className="flex items-center justify-between">
          <DrawerTitle className="text-3xl">Edit Profile</DrawerTitle>
          <DrawerClose>
            <X />
          </DrawerClose>
        </div>
        <div className="hide-scrollbar lg:show-scrollbar lg:scrollbar-thin mt-7 overflow-y-scroll px-3">
          <ProfileForm setMainSocials={setMainSocials} {...profileData} />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProfileDrawer;
