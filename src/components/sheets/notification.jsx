import { motion } from "framer-motion";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Bell, Loader2, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "../../api/get-notifications";
import NoData from "../no-data";
import NotificationSkeleton from "../skeletons/notification";
import { useReadNotification } from "../../api/read-notification";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useDeleteNotification } from "../../api/delete-notification";
import { useDeleteAllNotifications } from "../../api/delete-all-notification";
import { formatTimeAgo } from "../../lib/utils";

const NotificationSheet = () => {
  const navigate = useNavigate();
  const { data: notifications, isLoading } = useNotifications();
  const queryClient = useQueryClient();

  const totalUnreadNotifications = notifications?.reduce(
    (acc, curr) => (curr.read ? acc : acc + 1),
    0,
  );

  function onSuccess(result) {
    queryClient.invalidateQueries(["notifications"]);
    navigate(result.url);
  }

  function onDeleteSuccess() {
    queryClient.invalidateQueries(["notifications"]);
    toast.success("Notification delete successfully.");
  }

  const mutation = useReadNotification(onSuccess);
  const delete_mutation = useDeleteNotification(onDeleteSuccess);
  const delete_all_mutation = useDeleteAllNotifications(onDeleteSuccess);

  function handleNotification(status, id, url) {
    if (!status) {
      mutation.mutate({ notificationId: id });
    } else {
      navigate(url);
    }
  }

  function handleDelete(id) {
    delete_mutation.mutate(id);
  }

  function handleDeleteAllNotifications() {
    delete_all_mutation.mutate();
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="relative flex size-9 items-center justify-center rounded-full p-1 text-zinc-400 hover:bg-transparent hover:text-zinc-400"
          variant="ghost"
        >
          <Bell />
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`${totalUnreadNotifications > 0 ? "block" : "hidden"} absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white`}
          >
            {totalUnreadNotifications > 9 ? "9+" : totalUnreadNotifications}
          </motion.span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-11/12 flex-col gap-0 p-0 md:w-3/4">
        <SheetHeader className={"p-5 pb-0 text-left"}>
          <SheetTitle className="flex items-center gap-3">
            <Bell />
            Notifications
          </SheetTitle>
        </SheetHeader>
        <Button
          size="sm"
          variant="ghost"
          disabled={
            notifications?.length === 0 ||
            isLoading ||
            delete_all_mutation.isPending
          }
          onClick={handleDeleteAllNotifications}
          className="ms-auto w-fit text-destructive hover:bg-transparent hover:text-destructive hover:underline"
        >
          Clear all
        </Button>
        <ul className="scrollbar-thin flex-1 overflow-y-scroll">
          {notifications?.length !== 0 ? (
            isLoading ? (
              <>
                <NotificationSkeleton />
                <NotificationSkeleton />
                <NotificationSkeleton />
              </>
            ) : (
              notifications?.map((notification, i) => (
                <li
                  className={`${notification.read ? "hover:bg-zinc-200" : "bg-primary/20 hover:bg-primary/30"} relative flex min-h-16 cursor-pointer items-center gap-3 border-b px-5 py-2 first:border-t`}
                  key={i}
                >
                  <b>#</b>
                  <div
                    onClick={() =>
                      handleNotification(
                        notification.read,
                        notification._id,
                        notification.url,
                      )
                    }
                    className="space-y-1"
                  >
                    <h3 className="flex items-center justify-between text-sm font-semibold">
                      {notification.title}
                      <span className="text-xs font-normal text-muted-foreground">
                        {formatTimeAgo(notification.createdAt)}
                      </span>
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {notification.notification}
                    </p>
                  </div>
                  {delete_mutation.isPending ? (
                    <Loader2
                      className="animate-spin text-destructive"
                      size={20}
                    />
                  ) : (
                    <button
                      disabled={delete_all_mutation.isPending}
                      onClick={() => handleDelete(notification._id)}
                      className="ms-auto flex-shrink-0 text-destructive"
                    >
                      <Trash2 size={20} />
                    </button>
                  )}
                  {mutation.isPending && (
                    <div className="absolute inset-0 flex items-center justify-center text-primary">
                      <Loader2 className="animate-spin" />
                    </div>
                  )}
                </li>
              ))
            )
          ) : (
            <NoData>You don't have any notifications</NoData>
          )}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationSheet;
