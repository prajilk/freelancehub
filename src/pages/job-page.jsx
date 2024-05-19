import { Link, useLocation } from "react-router-dom";
import DashboardNav from "../components/nav/dashboard-nav";
import { Card, CardContent } from "../components/ui/card";
import { Bookmark, Info, Loader2, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { useJob } from "../api/job/get-job";
import Error404 from "../components/common/error404";
import WorkPageSkeleton from "../components/skeletons/work-page";
import { formatTimeAgo } from "../lib/utils";
import { FaBriefcase, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { useSelector } from "react-redux";
import ApplyJobSheet from "../components/sheets/apply-job";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useUpdateJobStatus } from "../api/job/updated-job-status";
import DeleteJob from "../components/modals/delete-job";
import JobApplicantsList from "../components/jobs/job-applicants-list";
import { useBookmarks } from "../api/bookmarks";
import { useUpdateBookmark } from "../api/updated-bookmark";

const JobPage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const queryClient = useQueryClient();
  const location = useLocation();
  const jobId = location.pathname.split("/").at(-1);
  const user = useSelector((state) => state.user._id);

  const { data: job, isLoading, error } = useJob(jobId);
  const { data: bookmarks } = useBookmarks();

  const isAdmin = user === job?.userId;

  useEffect(() => {
    setIsBookmarked(
      bookmarks?.find((bookmark) => bookmark.workId === work?._id)
        ? true
        : false,
    );
  }, [bookmarks]);

  if (error?.response?.status === 404) {
    return <Error404 />;
  }

  function onSuccess(result) {
    toast.success(result.message);
    queryClient.invalidateQueries(["bookmarks"]);
    setIsBookmarked(result.bookmarked);
  }
  const mutation = useUpdateBookmark(onSuccess);

  function handleBookmark() {
    mutation.mutate({ jobId: job?._id });
  }

  return (
    <>
      <DashboardNav />
      {isLoading ? (
        <WorkPageSkeleton />
      ) : (
        <div className="container-lg mt-7">
          <Card>
            <CardContent className="grid pt-7 lg:grid-cols-3">
              <div className="col-span-2 border-r">
                <h1 className="pe-3 text-3xl font-semibold">{job?.title}</h1>
                <h3 className="text-xl font-medium capitalize text-zinc-700">
                  {job?.company}
                </h3>
                <div className="mt-3 flex gap-5 text-sm text-zinc-600">
                  <span>Posted {formatTimeAgo(job?.createdAt)}</span>
                  <b>|</b>
                  <span className="flex items-center gap-1 capitalize">
                    <MapPin size={15} /> {job?.location}
                  </span>
                </div>
                <hr className="my-5" />
                <p className="pe-3">{job?.description}</p>
                <hr className="my-5" />
                <h4 className="font-medium">
                  Job mode:{" "}
                  <span className="capitalize text-muted-foreground">
                    {job?.jobType}
                  </span>
                </h4>
                <h4 className="mt-2 font-medium">
                  Number of applicants:{" "}
                  <span className="text-muted-foreground">
                    {job?.totalApplicants}
                  </span>
                </h4>
                <hr className="my-5" />
                <h4 className="text-xl font-semibold">Skills</h4>
                <ul className="me-3 mt-3 flex flex-wrap gap-2">
                  {job?.skills.map((skill, i) => (
                    <li
                      className="whitespace-nowrap rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium"
                      key={i}
                    >
                      {skill.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 mt-10 flex flex-col gap-2 lg:col-span-1 lg:mt-0 lg:px-5">
                {job?.closed ? (
                  <span className="flex items-center gap-2 text-sm font-medium text-destructive">
                    <Info /> This job proposal no longer accepts applications.
                  </span>
                ) : (
                  <>
                    {job?.hasApplied ? (
                      <span className="py-3 text-center font-semibold text-primary">
                        Applied!
                      </span>
                    ) : !user ? (
                      <Link
                        to={`/login?callback=/jobs/${job?._id}`}
                        className="w-full"
                      >
                        <Button className="w-full rounded-full transition-transform duration-300 active:scale-95">
                          Apply Now
                        </Button>
                      </Link>
                    ) : (
                      <ApplyJobSheet
                        jobId={job?._id}
                        title={job?.title}
                        disabled={isAdmin}
                      />
                    )}
                    <Button
                      onClick={handleBookmark}
                      className={`${isBookmarked ? "bg-primary text-white" : "bg-transparent text-primary"} gap-1 rounded-full border-2 border-primary transition-transform duration-300 hover:text-white active:scale-95`}
                    >
                      <Bookmark />
                      Bookmark
                    </Button>
                  </>
                )}
                <hr className="my-5" />
                <h1 className="text-xl font-medium">Client details</h1>
                <ul className="text-muted-foreground">
                  <li className="flex items-center gap-2 font-semibold text-primary hover:underline">
                    <FaUser className="text-primary" size={15} />
                    <Link to={`/user/${job?.userId}`} target="_blank">
                      {job?.user.firstName} {job?.user.lastName}
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLocationDot className="text-primary" size={15} />
                    <span>{job?.user.country}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaBriefcase className="text-primary" size={15} />
                    <span>{job?.user.totalJobs} jobs posted</span>
                  </li>
                </ul>
                <hr className="my-5" />
                {isAdmin && (
                  <AdminSettings jobId={job?._id} isClosed={job?.closed} />
                )}
              </div>
            </CardContent>
          </Card>
          <JobApplicantsList jobId={job?._id} userId={job?.userId} />
        </div>
      )}
    </>
  );
};

export default JobPage;

const AdminSettings = ({ jobId, isClosed }) => {
  const [isChecked, setIsChecked] = useState(isClosed);
  const queryClient = useQueryClient();

  function onSuccess(response) {
    toast.success(response.message);
    queryClient.invalidateQueries(["job", jobId]);
  }

  const mutation = useUpdateJobStatus(onSuccess);

  async function handleChanged(checked) {
    setIsChecked(checked);
    mutation.mutate({
      status: checked,
      jobId,
    });
  }

  return (
    <>
      <h1 className="mb-2 text-xl font-medium">Admin settings</h1>
      <div className="space-y-1">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="close-job">Close Job Applications</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info size={15} className="text-primary" />
                </TooltipTrigger>
                <TooltipContent className="max-w-sm">
                  <p className="text-xs text-primary">
                    Switch to stop receiving new applications for this job post.
                    Once toggled off, the job will no longer be visible to
                    candidates as an open position.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          {mutation.isPending ? (
            <Loader2 className="animate-spin text-primary" />
          ) : (
            <Switch
              id="close-job"
              checked={isChecked}
              onCheckedChange={handleChanged}
            />
          )}
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center gap-2">
            <Label>Delete Job Applications</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info size={15} className="text-primary" />
                </TooltipTrigger>
                <TooltipContent className="max-w-sm">
                  <p className="text-xs text-destructive">
                    Click to permanently delete this job posting from the
                    database. This action cannot be undone.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <DeleteJob jobId={jobId} />
        </div>
      </div>
    </>
  );
};
