import { Card, CardContent } from "../ui/card";
import Skeleton from "./skeleton";

const WorkPageSkeleton = () => {
  return (
    <div className="container-lg mt-7">
      <Card>
        <CardContent className="grid pt-7 lg:grid-cols-3">
          <div className="col-span-2 border-r">
            <div className="pe-3">
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="mt-3 flex gap-5 text-sm text-zinc-600">
              <Skeleton className="h-5 w-20" />
              <b>|</b>
              <Skeleton className="h-5 w-20" />
            </div>
            <hr className="my-5" />
            <div className="space-y-2 pe-3">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-1/2" />
            </div>
            <hr className="my-5" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-44" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-40" />
            </div>
            <hr className="my-5" />
            <Skeleton className="h-7 w-20" />
            <ul className="me-3 mt-3 flex flex-wrap gap-2">
              <Skeleton className="h-8 w-20 rounded-full" />
              <Skeleton className="h-8 w-24 rounded-full" />
              <Skeleton className="h-8 w-28 rounded-full" />
            </ul>
          </div>
          <div className="col-span-2 mt-10 flex flex-col gap-2 lg:col-span-1 lg:mt-0 lg:px-5">
            <Skeleton className="h-10 w-full rounded-full" />
            <Skeleton className="h-10 w-full rounded-full" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkPageSkeleton;
