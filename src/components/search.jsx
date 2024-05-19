import { useDispatch, useSelector } from "react-redux";
import FilterDrawer from "./drawer/filter-drawer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search as SearchIcon } from "lucide-react";
import { updateSearchQuery } from "../redux/searchQuerySlice";
import { useSearchWorks } from "../api/work/search-works";
import { useSearchJobs } from "../api/job/search-jobs";

const Search = ({ searchFor, setState, setLoading }) => {
  const filter = useSelector((state) => state.filter);
  const search = useSelector((state) => state.searchQuery);
  const dispatch = useDispatch();

  const mutation = searchFor === "work" ? useSearchWorks() : useSearchJobs();

  if (mutation.data) setState(mutation.data);
  setLoading(mutation.isPending);

  function handleApplyFilter() {
    mutation.mutate({ filter, search });
  }

  return (
    <div className="w-full space-y-4 rounded-lg bg-primary p-5 text-white shadow">
      <h1 className="text-xl font-medium">
        Are you looking for a{" "}
        {searchFor === "work" ? "freelance work" : "dream job"}?
      </h1>
      <p className="max-w-xl text-sm text-zinc-200">
        FreeLance Hub is a place where you can find your{" "}
        {searchFor === "work" ? "freelance work" : "dream job"} in various
        skills, more than 1000 {searchFor === "work" ? "work" : "job"} are
        available here
      </p>
      <div className="flex gap-2">
        <Input
          className="border-none bg-white/20"
          startIcon={<SearchIcon size={18} />}
          value={search}
          onChange={(e) => dispatch(updateSearchQuery(e.target.value))}
        />
        <FilterDrawer />
        <Button
          onClick={handleApplyFilter}
          className="hidden bg-white font-semibold text-primary hover:bg-white/90 lg:block"
        >
          Search {searchFor === "work" ? "Works" : "Jobs"}
        </Button>
      </div>
      <Button className="w-full bg-white font-semibold text-primary hover:bg-white/90 lg:hidden">
        Search {searchFor === "work" ? "Works" : "Jobs"}
      </Button>
    </div>
  );
};

export default Search;
