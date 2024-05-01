import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="w-full space-y-4 rounded-lg bg-primary p-5 text-white shadow">
      <h1 className="text-xl font-medium">Are you looking for a dream job?</h1>
      <p className="max-w-xl text-sm text-zinc-200">
        FreeLance Hub is a place where you can find your dream job in various
        skills, more than 1000 jobs are available here
      </p>
      <div className="flex gap-2">
        <Input
          className="border-none bg-white/20"
          startIcon={<SearchIcon size={18} />}
        />
        <Button className="bg-white font-semibold text-primary hover:bg-white/90">
          Search Jobs
        </Button>
      </div>
    </div>
  );
};

export default Search;
