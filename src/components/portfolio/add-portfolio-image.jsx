import { Image, Info, Video, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const AddPortfolioImage = ({ imageState, setImageState }) => {
  return (
    <>
      <h1 className="mb-2 text-lg font-semibold">Add Project Images</h1>
      <div className="space-y-5">
        {imageState.length > 0 &&
          imageState.map((image, i) => (
            <div key={i} className="relative">
              <img src={image} alt="Project image" className="w-full" />
              <Button
                size="icon"
                className="absolute right-0 top-0 z-10 m-3 rounded-full bg-white text-black hover:bg-white/60"
                onClick={() =>
                  setImageState((prev) =>
                    prev.filter((_, index) => index !== i),
                  )
                }
              >
                <X size={20} />
              </Button>
            </div>
          ))}
      </div>
      <div className="mt-10 flex h-40 w-full items-center justify-center gap-4 rounded-lg border border-primary/80">
        <label htmlFor="image">
          <div className="cursor-pointer rounded-full border-2 border-zinc-300 bg-white p-2 text-primary hover:border-primary hover:bg-primary hover:text-white">
            <Image size={20} />
          </div>
        </label>
        <input
          type="file"
          className="hidden"
          accept="image/x-png,image/gif,image/jpeg,image/webp"
          id="image"
          onChange={(e) => {
            const reader = new FileReader();

            reader.onload = () => {
              const binaryStr = reader.result;
              if (typeof binaryStr === "string")
                setImageState((prev) => [...prev, binaryStr]);
            };
            reader.readAsDataURL(e.target.files[0]);
          }}
        />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="cursor-default rounded-full border-2 border-zinc-300/40 bg-white p-2 text-primary/30">
                <Video size={20} />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="flex items-center gap-1 text-xs">
                <Info size={15} className="text-primary" /> This feature is not
                available yet!
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};

export default AddPortfolioImage;
