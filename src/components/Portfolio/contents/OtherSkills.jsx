const OtherSkills = () => {
  const skills = [
    "Agile Methodologies",
    "Documentation",
    "Unity Game Development",
    "C#",
    "Inkscape",
    "Critical Thinking",
    "Problem Solving",
    "Philosophy",
    "Teaching / Tutoring",
  ];

  return (
    <div className="p-8">
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
