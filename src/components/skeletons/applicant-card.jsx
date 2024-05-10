import { Card, CardContent } from "../ui/card";
import Skeleton from "./skeleton";

const ApplicantCardSkeleton = () => {
  return (
    <Card>
      <CardContent className="grid gap-5 p-5 md:grid-cols-2 md:p-10">
        <div className="space-y-4 border-zinc-400 md:border-r md:pe-5">
          <div className="flex gap-2">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex flex-col gap-1">
              <Skeleton className="h-5 w-36" />
              <Skeleton className="h-4 w-32" />
            </div>
            <div className="ms-auto flex items-center gap-3">
              <Skeleton className="size-9 rounded-full" />
              <Skeleton className="size-9 rounded-full" />
            </div>
          </div>
          <ul className="space-y-1">
            <li className="text-muted-foreground">
              <Skeleton className="h-5 w-40" />
            </li>
            <li className="text-muted-foreground">
              <Skeleton className="h-5 w-40" />
            </li>
            <li className="text-muted-foreground">
              <Skeleton className="h-5 w-40" />
            </li>
            <li className="text-muted-foreground">
              <Skeleton className="h-5 w-40" />
            </li>
          </ul>
        </div>
        <div>
          <Skeleton className="mb-2 h-7 w-40" />
          <div className="space-y-1">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
          </div>

          <div className="mt-3 flex w-full justify-end text-sm">
            <Skeleton className="h-5 w-40" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicantCardSkeleton;
