import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useUpdateProfileImage } from "../../api/profile-image";
import { toast } from "sonner";
import LoadingButton from "../ui/loading-button";
import { useDispatch, useSelector } from "react-redux";
import { updateImage, updateLookingForWork } from "../../redux/userSlice";

const ProfileImageModal = () => {
  const profileData = useSelector((state) => state.user);
  const [imagePic, setImagePic] = useState(profileData.image);
  const [lookingForWork, setLookingForWork] = useState(
    profileData.profile?.lookingForWork || false,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setImagePic(profileData.image);
    setLookingForWork(profileData.profile?.lookingForWork || false);
  }, [profileData.image, profileData.profile?.lookingForWork]);

  function onSuccess(result) {
    toast.success(result.message);
    dispatch(updateLookingForWork(lookingForWork));
    if (result.image) {
      dispatch(updateImage(result.image));
    }
  }

  const mutation = useUpdateProfileImage(onSuccess);

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate({
      image: imagePic,
      lookingForWork,
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="absolute right-0 top-0 m-3 flex size-10 items-center justify-center rounded-full border bg-[#BDDCCF] text-primary">
          <Pencil size={18} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile Picture</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5"
        >
          <label htmlFor="profileImage">
            {imagePic ? (
              <img
                src={imagePic}
                alt="Profile"
                className="size-36 rounded-full bg-zinc-200 object-cover object-top md:size-44"
              />
            ) : (
              <FaUserCircle className="size-36 text-zinc-300 md:size-44" />
            )}
            <input
              type="file"
              className="hidden"
              id="profileImage"
              onChange={(e) => {
                const reader = new FileReader();

                reader.onload = () => {
                  const binaryStr = reader.result;
                  if (typeof binaryStr === "string") setImagePic(binaryStr);
                };
                reader.readAsDataURL(e.target.files[0]);
              }}
              accept="image/x-png,image/gif,image/jpeg,image/webp"
            />
          </label>
          <div className="flex items-center gap-2">
            <Checkbox
              id="work"
              checked={lookingForWork}
              onCheckedChange={(checked) => setLookingForWork(checked)}
            />
            <Label htmlFor="work" className="cursor-pointer">
              Looking for work
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <DialogClose asChild>
              <Button
                variant="sm"
                disabled={mutation.isPending}
                className="bg-destructive/20 text-destructive hover:bg-destructive/30"
              >
                Cancel
              </Button>
            </DialogClose>
            <LoadingButton
              isLoading={mutation.isPending}
              variant="sm"
              className="bg-primary/20 text-primary hover:bg-primary/30"
            >
              Save
            </LoadingButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileImageModal;
