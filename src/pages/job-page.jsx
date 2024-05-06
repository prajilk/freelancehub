import { useLocation } from "react-router-dom";
import DashboardNav from "../components/nav/dashboard-nav";
import { Card, CardContent } from "../components/ui/card";
import { Bookmark, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import JobCard from "../components/job-card";

const JobPage = () => {
  const location = useLocation();
  const jobId = location.pathname.split("/").at(-1);

  return (
    <>
      <DashboardNav />
      <div className="container-lg mt-7">
        <Card>
          <CardContent className="grid pt-7 lg:grid-cols-3">
            <div className="col-span-2 border-r">
              <div className="flex gap-4">
                <img
                  src="/grapho.png"
                  alt=""
                  className="size-14 rounded-full"
                />
                <div>
                  <h1 className="pe-3 text-3xl font-semibold">
                    React developer
                  </h1>
                  <h3 className="text-xl font-medium text-zinc-700">Grapho</h3>
                </div>
              </div>
              <div className="mt-3 flex gap-5 text-sm text-zinc-600">
                <span>Posted 5 min ago</span>
                <b>|</b>
                <span className="flex items-center gap-1">
                  <MapPin size={15} /> India
                </span>
              </div>
              <hr className="my-5" />
              <p className="pe-3">
                We are looking for a talented and experienced developer to join
                our team to develop a new crowdfunding app. As a Crowdfunding
                App Developer, you will be responsible for designing, developing
                and implementing the app, ensuring it is user-friendly,
                functional and secure.
              </p>
              <hr className="my-5" />
              <h4 className="font-medium">
                Job mode: <span className="text-muted-foreground">Remote</span>
              </h4>
              <h4 className="mt-2 font-medium">
                Number of applicants:{" "}
                <span className="text-muted-foreground">120</span>
              </h4>
              <hr className="my-5" />
              <h4 className="text-xl font-semibold">Skills</h4>
              <ul className="me-3 mt-3 flex flex-wrap gap-2">
                <li className="whitespace-nowrap rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium">
                  HTML
                </li>
                <li className="whitespace-nowrap rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium">
                  CSS
                </li>
                <li className="whitespace-nowrap rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium">
                  React
                </li>
                <li className="whitespace-nowrap rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium">
                  Javascript
                </li>
              </ul>
            </div>
            <div className="col-span-2 mt-10 flex flex-col gap-2 lg:col-span-1 lg:mt-0 lg:px-5">
              <Button className="rounded-full transition-transform duration-300 active:scale-95">
                Apply Now
              </Button>
              <Button className="gap-1 rounded-full border-2 border-primary bg-transparent text-primary transition-transform duration-300 hover:text-white active:scale-95">
                <Bookmark />
                Bookmark
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default JobPage;
