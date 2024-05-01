import { Button } from "./ui/button";

const ProfileCard = () => {
  return (
    <div className="flex w-full flex-col items-center gap-2 rounded-lg bg-white py-7 shadow-md">
      <img
        src="https://i.pravatar.cc/150?img=32"
        alt="Profile"
        className="size-14 rounded-full"
      />
      <h2 className="font-semibold">Jane Machiavelli</h2>
      <p className="space-x-1 text-xs font-medium text-muted-foreground">
        <span>UI Designer</span>
        <i>•</i>
        <span>2 Year Experience</span>
      </p>
      <Button className="mt-3 w-32 bg-zinc-200 text-xs font-semibold text-black hover:bg-zinc-300">
        Edit Profile
      </Button>
    </div>
  );
};

export default ProfileCard;
