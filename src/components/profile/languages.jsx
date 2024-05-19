import { useSelector } from "react-redux";
import AddLanguageModal from "../modals/add-language";
import EditLanguageModal from "../modals/edit-langauge";

const Languages = () => {
  const viewMode = useSelector((state) => state.profileViewMode);
  const languages = useSelector((state) => state.user.profile.languages);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Languages</h1>
        {!viewMode && (
          <div className="flex gap-2">
            <AddLanguageModal
              defaultLanguages={
                languages?.map((language) => language.language.label) || []
              }
            />
            <EditLanguageModal languages={languages} />
          </div>
        )}
      </div>
      <ul className="mt-3 space-y-2">
        {languages?.length === 0 ? (
          <span className="text-sm text-muted-foreground">
            Language is not added!
          </span>
        ) : (
          languages?.map((language, i) => (
            <li className="font-medium" key={i}>
              {language.language.label}:{" "}
              <span className="text-muted-foreground">
                {language.proficiency.label}
              </span>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Languages;
