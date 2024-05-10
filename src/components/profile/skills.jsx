import { useSelector } from "react-redux";
import SkillsModal from "../modals/skills";

const Skills = () => {
  const skills = useSelector((state) => state.user.profile.skills) || [];
  const viewMode = useSelector((state) => state.profileViewMode);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Skills</h1>
        {/* Edit skills */}
        {!viewMode && <SkillsModal skills={skills} />}
      </div>
      <ul className="mt-3 flex flex-wrap gap-2">
        {skills &&
          skills.map((skill, i) => (
            <li
              className="whitespace-nowrap rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium"
              key={i}
            >
              {skill.label}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Skills;
