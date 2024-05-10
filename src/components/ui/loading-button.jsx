import { Loader2 } from "lucide-react";
import { Button } from "./button";

const LoadingButton = ({ children, isLoading, ...props }) => {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading ? <Loader2 className="size-5 animate-spin" /> : children}
    </Button>
  );
};

export default LoadingButton;
