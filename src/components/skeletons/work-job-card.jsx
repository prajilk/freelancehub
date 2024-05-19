import React from "react";
import Skeleton from "./skeleton";

const WorkJobCardSkeletons = () => {
  return (
    <div className="w-full rounded-lg bg-white p-7 shadow">
      <div className="flex items-center gap-3">
        <div className="w-full space-y-2.5">
          <Skeleton className="h-6 w-3/4" />
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Skeleton className="h-5 w-14" />•<Skeleton className="h-5 w-20" />
          </div>
        </div>
        <Skeleton className="size-10" />
      </div>
      <div className="my-5 space-y-2">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Skeleton className="h-7 w-20 rounded-full" />
        <Skeleton className="h-7 w-20 rounded-full" />
        <Skeleton className="h-7 w-20 rounded-full" />
        <div className="flex w-full items-center justify-between">
          <Skeleton className="h-5 w-20" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-10 w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkJobCardSkeletons;
