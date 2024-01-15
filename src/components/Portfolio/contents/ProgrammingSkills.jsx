const ProgrammingSkills = () => {
  const skills = [
    "JavaScript / ECMAScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Zustand",
    "Three.js",
    "Pixi.js",
    "Web Animations",
    "Node.js",
    "HTML",
    "CSS",
    "SCSS",
    "CSS in JS",
    "Tailwind",
    "Bootstrap",
    "Gulp.js",
    "Pug.js",
    "EJS",
    "Strapi",
    "MongoDB",
    "Vite",
    "npm, yarn",
    "git, GitHub, GitLab",
    "AWS Lambda Functions",
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

export default ProgrammingSkills;
