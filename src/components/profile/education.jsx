import { useSelector } from "react-redux";
import EducationModal from "../modals/education";
import DeleteEducation from "../modals/delete-education";

const Education = () => {
  const viewMode = useSelector((state) => state.profileViewMode);
  const educationData = useSelector((state) => state.user.profile.education);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Education</h1>
        {!viewMode && <EducationModal />}
      </div>
      <ul className="mt-3">
        {educationData?.length > 0 ? (
          educationData?.map((education, i) => (
            <li key={i}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{education.school}</h3>
                {!viewMode && (
                  <div className="flex gap-1">
                    <EducationModal isEdit={true} educationData={education} />
                    <DeleteEducation educationId={education._id} />
                  </div>
                )}
              </div>
              <h4 className="text-sm text-muted-foreground">
                {education.degree}
              </h4>
              <span className="text-sm text-muted-foreground">
                {education.startYear} - {education.endYear}
              </span>
            </li>
          ))
        ) : (
          <span className="text-sm text-muted-foreground">
            Education is not added!
          </span>
        )}
      </ul>
    </>
  );
};

export default Education;
