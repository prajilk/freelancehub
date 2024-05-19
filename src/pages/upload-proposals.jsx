import { FaBriefcase, FaLaptop } from "react-icons/fa";
import DashboardNav from "../components/nav/dashboard-nav";
import { Card, CardContent } from "../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const UploadProposals = () => {
  const [proposal, setProposal] = useState("");

  return (
    <>
      <DashboardNav />
      <div className="container-lg space-y-10 pt-10">
        <h1 className="text-center text-2xl font-semibold">
          Upload a Proposal or Application
        </h1>
        <RadioGroup
          className="flex flex-wrap items-center justify-center gap-3 md:gap-5"
          defaultValue={proposal}
          onValueChange={setProposal}
        >
          <Label htmlFor="freelance" className="w-full md:w-fit">
            <ProposalCard
              icon={<FaLaptop size={30} />}
              proposal={proposal}
              value="freelance"
            >
              Upload Freelance Work Proposal
            </ProposalCard>
          </Label>
          <Label htmlFor="job" className="w-full md:w-fit">
            <ProposalCard
              icon={<FaBriefcase size={30} />}
              proposal={proposal}
              value="job"
            >
              Upload Job Application
            </ProposalCard>
          </Label>
        </RadioGroup>
        <div className="flex justify-center">
          <Link to={`/dashboard/upload-proposals/${proposal}`}>
            <Button
              className="transition-transform duration-300 active:scale-95"
              disabled={proposal === ""}
            >
              Create Upload
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UploadProposals;

const ProposalCard = ({ proposal, value, children, icon }) => {
  return (
    <Card
      className={`${proposal === value && "border-primary"} w-full cursor-pointer border-2 transition-transform duration-300 hover:border-primary active:scale-95 md:max-w-60 lg:aspect-[1/0.8]`}
    >
      <CardContent className="space-y-5 p-6 md:p-8">
        <div className="flex items-center justify-between">
          {icon}
          <RadioGroupItem value={value} id={value} />
        </div>
        <h1 className="text-xl font-semibold">{children}</h1>
      </CardContent>
    </Card>
  );
};
