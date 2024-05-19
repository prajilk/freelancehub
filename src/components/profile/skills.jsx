import { useSelector } from "react-redux";
import SkillsModal from "../modals/skills";

const Skills = () => {
  const viewMode = useSelector((state) => state.profileViewMode);
  const skills =
    useSelector((state) =>
      viewMode ? state.client.profile?.skills : state.user.profile?.skills,
    ) || [];

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Skills</h1>
        {/* Edit skills */}
        {!viewMode && <SkillsModal skills={skills} />}
      </div>
      <ul className="mt-3 flex flex-wrap gap-2">
        {skills.length > 0 ? (
          skills.map((skill, i) => (
            <li
              className="whitespace-nowrap rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium"
              key={i}
            >
              {skill.label}
            </li>
          ))
        ) : (
          <h1 className="w-full text-center text-zinc-400">
            Skills not added!
          </h1>
        )}
      </ul>
    </>
  );
};

export default Skills;
