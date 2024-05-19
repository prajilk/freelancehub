import { Pencil, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Select from "react-tailwindcss-select";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { proficiencies } from "../../lib/utils";
import { Button } from "../ui/button";
import LoadingButton from "../ui/loading-button";
import { useEditLanguage } from "../../api/edit-language";
import { editLanguages } from "../../redux/userSlice";
import { toast } from "sonner";

const EditLanguageModal = ({ languages }) => {
  const [open, setOpen] = useState(false);
  const [allLanguage, setAllLanguage] = useState(languages);

  useEffect(() => {
    setAllLanguage(languages);
  }, [languages]);

  const dispatch = useDispatch();

  const handleLanguageChange = (value, i) => {
    setAllLanguage((prev) =>
      prev.map((language, index) =>
        index === i ? { ...language, proficiency: value } : language,
      ),
    );
  };

  function onSuccess() {
    toast.success("Languages edited successfully!");
    setOpen(false);
    dispatch(editLanguages(allLanguage));
  }

  const mutation = useEditLanguage(onSuccess);

  function handleEditLanguage() {
    mutation.mutate(allLanguage);
  }

  function handleDeleteLanguage(index) {
    setAllLanguage((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex size-10 items-center justify-center rounded-full border bg-primary/15 text-primary">
          <Pencil size={18} />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-sm rounded-lg md:max-w-xl">
        <DialogHeader>
          <DialogTitle>Edit Languages</DialogTitle>
          <div className="flex min-h-80 flex-col gap-3 pt-7">
            {allLanguage?.map((language, i) => (
              <div key={i} className="flex gap-3">
                <Select
                  isMultiple={false}
                  value={language.language}
                  options={[]}
                  isDisabled
                  classNames={{
                    list: "max-h-40 overflow-y-scroll scrollbar-thin",
                  }}
                  placeholder="Type to add skills"
                  isSearchable
                  primaryColor="green"
                />
                <Select
                  isMultiple={false}
                  value={language.proficiency}
                  onChange={(value) => handleLanguageChange(value, i)}
                  options={proficiencies}
                  classNames={{
                    list: "max-h-40 overflow-y-scroll scrollbar-thin",
                  }}
                  placeholder="Type to add skills"
                  isSearchable
                  primaryColor="green"
                />
                <button onClick={() => handleDeleteLanguage(i)}>
                  <Trash2 className="text-destructive" size={20} />
                </button>
              </div>
            ))}
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
              onClick={handleEditLanguage}
            >
              Save
            </LoadingButton>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditLanguageModal;
