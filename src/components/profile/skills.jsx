import SkillsModal from "../modals/skills";

const dummySkills = [
  {
    label: "UI/UX",
    value: "ui-ux",
  },
  { label: "Adobe XD", value: "adobe-xd" },
  { label: "Figma", value: "figma" },
  { label: "Photoshop", value: "photoshop" },
  { label: "Design", value: "design" },
];

const Skills = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Skills</h1>
        {/* Edit skills */}
        <SkillsModal skills={dummySkills} />
      </div>
      <ul className="mt-3 flex flex-wrap gap-2">
        {dummySkills.map((skill, i) => (
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
