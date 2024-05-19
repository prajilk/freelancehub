import React from "react";
import Skeleton from "./skeleton";

const NotificationSkeleton = () => {
  return (
    <div className="flex items-center gap-3 border-b px-5 py-2 first:border-t">
      <Skeleton className="size-7 flex-shrink-0" />
      <div className="w-full space-y-1">
        <Skeleton className="h-7 w-1/2" />
        <Skeleton className="h-5 w-3/4" />
      </div>
      <Skeleton className="ms-auto size-7 flex-shrink-0" />
    </div>
  );
};

export default NotificationSkeleton;
