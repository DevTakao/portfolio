import { hexToRgb } from "@utilities/color";

const SkillCard = ({ skill }) => {
  return (
    <div
      title={skill.name}
      style={{ "--shadow": hexToRgb(skill.hex, 0.5) }}
      className="Skill_Card inline-flex items-center justify-center rounded-lg
    w-full h-full p-5 bg-light relative 
    transition-all duration-300 
    [box-shadow:0_2px_0px_0px_var(--shadow),0_-2px_0px_0px_var(--shadow),2px_0_0px_0px_var(--shadow),-2px_0_0px_0px_var(--shadow)] 
    hover:[box-shadow:0_1px_10px_5px_var(--shadow),0_-1px_10px_5px_var(--shadow),1px_0_10px_5px_var(--shadow),-1px_0_10px_5px_var(--shadow)]"
    >
      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
    </div>
  );
};

export default SkillCard;
