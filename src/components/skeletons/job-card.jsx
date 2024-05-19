import Skeleton from "./skeleton";

const JobCardSkeleton = () => {
  return (
    <div className="w-full rounded-xl bg-white p-5 shadow">
      <div className="w-full space-y-2.5">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Skeleton className="h-5 w-14" />•<Skeleton className="h-5 w-20" />
        </div>
      </div>
      <div className="my-5 space-y-2">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Skeleton className="h-7 w-20 rounded-full" />
        <Skeleton className="h-7 w-20 rounded-full" />
        <Skeleton className="h-7 w-20 rounded-full" />
      </div>
    </div>
  );
};

export default JobCardSkeleton;
