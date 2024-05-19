import { Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Select from "react-tailwindcss-select";
import { languages } from "../../lib/languages";
import { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useNewLanguage } from "../../api/new-language";
import LoadingButton from "../ui/loading-button";
import { useDispatch } from "react-redux";
import { updateLanguage } from "../../redux/userSlice";
import { proficiencies } from "../../lib/utils";

const AddLanguageModal = ({ defaultLanguages }) => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("");
  const [proficiency, setProficiency] = useState("");

  const dispatch = useDispatch();

  const handleLanguageChange = (value) => {
    setLanguage(value);
  };

  const handleProficiencyChange = (value) => {
    setProficiency(value);
  };

  function onSuccess() {
    toast.success("Language added successfully!");
    setOpen(false);
    dispatch(updateLanguage({ language, proficiency }));
  }

  const mutation = useNewLanguage(onSuccess);

  function addNewLanguage() {
    if (language && proficiency) {
      mutation.mutate({ language, proficiency });
    } else toast.error("Please fill all the fields!");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
          <Plus size={20} />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-sm rounded-lg md:max-w-xl">
        <DialogHeader>
          <DialogTitle>Add New language</DialogTitle>
          <div className="flex min-h-80 flex-col gap-3 pt-7 md:flex-row">
            <Select
              isMultiple={false}
              value={language}
              onChange={handleLanguageChange}
              options={languages.filter(
                (language) => !defaultLanguages.includes(language.label),
              )}
              classNames={{
                list: "max-h-40 overflow-y-scroll scrollbar-thin",
              }}
              placeholder="Type to add language"
              isSearchable
              primaryColor="green"
            />
            <Select
              isMultiple={false}
              value={proficiency}
              onChange={handleProficiencyChange}
              options={proficiencies}
              classNames={{
                list: "max-h-40 overflow-y-scroll scrollbar-thin",
              }}
              placeholder="Type to add proficiency"
              isSearchable
              primaryColor="green"
            />
          </div>
          <div className="flex justify-end gap-3">
            <DialogClose asChild>
              <Button
                variant="ghost"
                className="hover:bg-zinc-200 hover:text-black"
              >
                Cancel
              </Button>
            </DialogClose>
            <LoadingButton
              isLoading={mutation.isPending}
              onClick={addNewLanguage}
            >
              Save
            </LoadingButton>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddLanguageModal;
