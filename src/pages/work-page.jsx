import { Link, useLocation } from "react-router-dom";
import DashboardNav from "../components/nav/dashboard-nav";
import { Card, CardContent } from "../components/ui/card";
import { Bookmark, Info, Loader2, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { useWork } from "../api/work/get-work";
import WorkPageSkeleton from "../components/skeletons/work-page";
import Error404 from "../components/common/error404";
import { formatTimeAgo } from "../lib/utils";
import { useSelector } from "react-redux";
import { Label } from "../components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { Switch } from "../components/ui/switch";
import { FaBriefcase, FaCheckCircle, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ApplyWorkSheet from "../components/sheets/apply-work";
import { useEffect, useState } from "react";
import { useUpdateWorkStatus } from "../api/work/updated-work-status";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import DeleteWork from "../components/modals/delete-work";
import WorkApplicantsList from "../components/works/work-applicants-list";
import { useBookmarks } from "../api/bookmarks";
import { useUpdateBookmark } from "../api/updated-bookmark";

const WorkPage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const queryClient = useQueryClient();
  const location = useLocation();
  const workId = location.pathname.split("/").at(-1);
  const user = useSelector((state) => state.user._id);

  const { data: work, isLoading, error } = useWork(workId);
  const { data: bookmarks } = useBookmarks();

  const isAdmin = user === work?.userId;

  useEffect(() => {
    setIsBookmarked(
      bookmarks?.find((bookmark) => bookmark.workId === work?._id)
        ? true
        : false,
    );
  }, [bookmarks]);

  if (error?.response.status === 404) {
    return <Error404 />;
  }

  function onSuccess(result) {
    toast.success(result.message);
    queryClient.invalidateQueries(["bookmarks"]);
    setIsBookmarked(result.bookmarked);
  }
  const mutation = useUpdateBookmark(onSuccess);

  function handleBookmark() {
    mutation.mutate({ workId: work?._id });
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
                <h1 className="pe-3 text-3xl font-semibold">{work?.title}</h1>
                <div className="mt-3 flex gap-5 text-sm text-zinc-600">
                  <span>Posted {formatTimeAgo(work?.createdAt)}</span>
                  <b>|</b>
                  <span className="flex items-center gap-1 capitalize">
                    <MapPin size={15} /> {work?.location}
                  </span>
                </div>
                <hr className="my-5" />
                <p className="pe-3">{work?.description}</p>
                <hr className="my-5" />
                <h4 className="font-medium">
                  Payment Type:{" "}
                  <span className="capitalize text-muted-foreground">
                    {work?.payment}: ${work?.paymentMin} - ${work?.paymentMax}
                  </span>
                </h4>
                <h4 className="mt-2 font-medium">
                  Experience:{" "}
                  <span className="capitalize text-muted-foreground">
                    {work?.experience}
                  </span>
                </h4>
                <h4 className="mt-2 font-medium">
                  Number of applicants:{" "}
                  <span className="text-muted-foreground">
                    {work?.totalApplicants}
                  </span>
                </h4>
                <hr className="my-5" />
                <h4 className="text-xl font-semibold">Skills</h4>
                <ul className="me-3 mt-3 flex flex-wrap gap-2">
                  {work?.skills.map((skill, i) => (
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
                {work?.closed ? (
                  <span className="flex items-center gap-2 text-sm font-medium text-destructive">
                    <Info /> This work proposal no longer accepts applications.
                  </span>
                ) : (
                  <>
                    {work?.hasApplied ? (
                      <span className="flex items-center justify-center gap-2 py-3 font-semibold text-primary">
                        <FaCheckCircle /> Applied!
                      </span>
                    ) : !user ? (
                      <Link
                        to={`/login?callback=/works/${work?._id}`}
                        className="w-full"
                      >
                        <Button className="w-full rounded-full transition-transform duration-300 active:scale-95">
                          Apply Now
                        </Button>
                      </Link>
                    ) : (
                      <ApplyWorkSheet
                        title={work?.title}
                        workId={work?._id}
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
                    <Link to={`/user/${work?.userId}`} target="_blank">
                      {work?.user.firstName} {work?.user.lastName}
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLocationDot className="text-primary" size={15} />
                    <span>{work?.user.country}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaBriefcase className="text-primary" size={15} />
                    <span>{work?.user.totalWorks} works posted</span>
                  </li>
                </ul>
                <hr className="my-5" />
                {isAdmin && (
                  <AdminSettings workId={work?._id} isClosed={work?.closed} />
                )}
              </div>
            </CardContent>
          </Card>
          <WorkApplicantsList workId={work?._id} userId={work?.userId} />
        </div>
      )}
    </>
  );
};

export default WorkPage;

const AdminSettings = ({ workId, isClosed }) => {
  const [isChecked, setIsChecked] = useState(isClosed);
  const queryClient = useQueryClient();

  function onSuccess(response) {
    toast.success(response.message);
    queryClient.invalidateQueries(["work", workId]);
  }

  const mutation = useUpdateWorkStatus(onSuccess);

  async function handleChanged(checked) {
    setIsChecked(checked);
    mutation.mutate({
      status: checked,
      workId,
    });
  }

  return (
    <>
      <h1 className="mb-2 text-xl font-medium">Admin settings</h1>
      <div className="space-y-1">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="close-work">Close Work Proposal</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info size={15} className="text-primary" />
                </TooltipTrigger>
                <TooltipContent className="max-w-sm">
                  <p className="text-xs text-primary">
                    Switch to stop receiving new applications for this work
                    proposal. Once toggled off, the work will no longer be
                    visible to candidates as an open position.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          {mutation.isPending ? (
            <Loader2 className="animate-spin text-primary" />
          ) : (
            <Switch
              id="close-work"
              checked={isChecked}
              onCheckedChange={handleChanged}
            />
          )}
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center gap-2">
            <Label>Delete Work Proposal</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info size={15} className="text-primary" />
                </TooltipTrigger>
                <TooltipContent className="max-w-sm">
                  <p className="text-xs text-destructive">
                    Click to permanently delete this work proposal from the
                    database. This action cannot be undone.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <DeleteWork workId={workId} />
        </div>
      </div>
    </>
  );
};
