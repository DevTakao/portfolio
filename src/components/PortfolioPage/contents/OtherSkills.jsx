const OtherSkills = () => {
  const skills = [
    "C#",
    "Unity Game Development",
    "Inkscape",
    "Critical Thinking",
    "Problem Solving",
    "Philosophy",
    "Color Psychology",
    "Teaching / Tutoring",
  ];

  return (
    <div>
      <ul className="divide-y-2 divide-lightsoft">
        {skills.map((skill, i) => (
          <li key={i} className="py-4">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherSkills;
